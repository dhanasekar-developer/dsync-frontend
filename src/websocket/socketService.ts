
class SocketService {

    private socket: WebSocket | null = null;
    private token: string | null = null;

    private reconnectAttempts: number = 0
    private maxReconnectAttempts: number = 20;
    private reconnectTimeout: number | null = null;

    private manualClose: boolean = false;

    private listeners = new Set<(data: any) => void>();

    private refreshing: boolean = false;

    private refreshTokenFun: (() => Promise<string | null>) | null = null

    setRefreshTokenFun(fn: () => Promise<string | null>) {
        this.refreshTokenFun = fn
    }

    async refreshAndReconnect() {
        if (this.refreshing) return;

        this.refreshing = true

        try {
            const token = await this.refreshTokenFun?.()

            if (token) this.connect(token)
        }
        finally{
            this.refreshing = false
        }
    }

    subscribe(callback: (data: any) => void) {
        this.listeners.add(callback)

        return () => { this.listeners.delete(callback) }
    }

    private notify(data: any) {
        this.listeners.forEach(listener => listener(data))
    }

    connect(token: string | null) {

        if (!token) return

        this.token = token;

        this.manualClose = false;

        if (this.socket && (this.socket.readyState == WebSocket.CONNECTING || this.socket.readyState == WebSocket.OPEN)) return;

        this.createConnection()

    }

    private createConnection() {

        this.socket = new WebSocket(
            `ws://localhost:8000/ws/?token=${this.token}`
        )

        this.socket.onopen = () => {
            // console.log('web socket connected')
            this.reconnectAttempts = 0;
        }

        this.socket.onmessage = (event) => {
            const data = JSON.parse(event.data)
            // console.log('socket messsage:', data)
            this.notify(data)
        }

        // this.socket.onerror = (err) => {
            // console.log('web socket error:', err)
        // }

        this.socket.onclose = (event) => {

            this.socket = null

            // console.log('web socket closed:', event.code)

            if (this.manualClose) return;

            if (event.code == 4001) {
                this.refreshAndReconnect()
                return;
            }

            this.reconnect()
        }
    }

    private reconnect() {
        if (!this.token) return;

        if (this.reconnectAttempts > this.maxReconnectAttempts) {
            // console.log('Max web socket reconnect attempt exide')
            return;
        }

        const delay = Math.min(1000 * Math.pow(2, this.reconnectAttempts), 30000)

        this.reconnectAttempts++

        this.reconnectTimeout = window.setTimeout(() => {
            this.createConnection();
        }, delay)
    }

    send(data: any) {
        if (this.socket && this.socket.readyState == WebSocket.OPEN) {
            this.socket.send(
                JSON.stringify(data)
            )
        }
    }

    disconnect() {
        this.manualClose = true;

        if (this.reconnectTimeout) {
            clearTimeout(this.reconnectTimeout)
        }

        this.socket?.close();
        this.socket = null;
        this.token = null;
    }

}

export default new SocketService();