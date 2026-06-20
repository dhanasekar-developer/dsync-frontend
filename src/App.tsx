import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import MainLayout from './components/MainLayout'
import Messages from './pages/Messages'
import AuthPage from './pages/AuthPage'
import Account from './pages/Account'
import Security from './pages/Security'
import RefreshAccessToken from './components/RefreshAccessToken'
import { useEffect } from 'react'
import { getAccessToken } from './store/services/authSlice'
import socketService from './websocket/socketService'
import { useAppSelector } from './store/api/hooks'
import { ToastContainer } from 'react-toastify';
import { IoClose } from 'react-icons/io5'

function App() {

    const access_token = useAppSelector(getAccessToken)

    useEffect(() => {

        if (!access_token) return;

        socketService.connect(access_token)

        return () => {
            socketService.disconnect()
        }
    }, [access_token])


    return (
        <>
            <RefreshAccessToken />
            <ToastContainer
                closeButton={({ closeToast }) => (
                    <button
                        onClick={closeToast}
                        className="text-slate-500 hover:text-slate-700 absolute top-1/2 -translate-y-1/2 right-3"
                    >
                        <IoClose size={15} />
                    </button>
                )}
            />
            <Routes>
                <Route>
                    <Route path='/' element={<Navigate to="/login" />} />

                    <Route path='/login' element={<AuthPage />} />
                    <Route path='/signup' element={<AuthPage />} />
                </Route>

                <Route element={<MainLayout />}>
                    <Route path='/messages' element={<Messages />} />
                    <Route path='/account' element={<Account />} />
                    <Route path='/security' element={<Security />} />
                </Route>
            </Routes>
        </>

    )
}

export default App
