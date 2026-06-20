import { useEffect } from 'react'
import { useRefreshMutation } from '../store/services/authApi'
import { setCredentials, setInitialized } from '../store/services/authSlice'
import { useAppDispatch } from '../store/api/hooks'
import socketService from '../websocket/socketService'

export default function RefreshAccessToken() {
    const dispatch = useAppDispatch()
    const [refresh] = useRefreshMutation()


    useEffect(() => {
        const refreshTokenFun = async () => {
            try {
                const result = await refresh().unwrap()
                dispatch(setCredentials(result.access_token))
                return result.access_token;
            }
            catch (err) {
                console.warn(err)
                return null;
            }
            finally {
                dispatch(setInitialized())
            }
        }

        refreshTokenFun()
        
        socketService.setRefreshTokenFun(() => refreshTokenFun())
        
    }, [])

    return null
}
