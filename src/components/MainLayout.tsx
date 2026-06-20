import { useAppSelector } from '../store/api/hooks'
import { useCurrentUserQuery } from '../store/services/authApi'
import { getInitialized } from '../store/services/authSlice'
import { SocketListener } from '../websocket/SocketListener'
import Header from './Header'
import Loader from './Loader'
import Sidebar from './Sidebar'
import { Navigate, Outlet } from 'react-router-dom'

export default function MainLayout() {
    const initialized = useAppSelector(getInitialized)
    const { data: userData, isLoading } = useCurrentUserQuery(undefined, {skip: !initialized})

    if (isLoading || !initialized) return <Loader />

    if (!userData && !isLoading) {
        return <Navigate to='/login' />
    }

    return (
        <>
            <SocketListener />
            <div className='flex font-sn-pro'>
                <Sidebar />
                <div className='flex-1'>
                    <Header />
                    <main className='overflow-y-auto max-h-[calc(100dvh-80px)]'>
                        <Outlet />
                    </main>
                </div>
            </div>
        </>
    )
}
