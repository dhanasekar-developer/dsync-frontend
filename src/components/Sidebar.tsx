import { useNavigate } from 'react-router-dom';
import Menus from './Menus';
import { useCurrentUserQuery, useLogoutMutation } from '../store/services/authApi';
import apiSlice from '../store/api/apiSlice';
import socketService from '../websocket/socketService';
import { useAppDispatch } from '../store/api/hooks';
import { errorToastHandler } from '../utils/toastHandler';
import { Avatar } from '../utils/getAvatar';
import { successToast } from '../utils/toast';
import logo from '../assets/logo.png';

export default function Sidebar() {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const [ logout, { isLoading: isLogout } ] = useLogoutMutation()

    const { data: userData } = useCurrentUserQuery()
    
    const handleLogout = async () => {
        try{
            await logout().unwrap()
            socketService.disconnect()
            dispatch(apiSlice.util.resetApiState());
            dispatch({type: 'app/logout'})
            navigate('/login')
            successToast('Logged out successfully.')
        }catch(err){
            errorToastHandler(err)
        }
    }

    return (
        <aside className="w-auto bg-white border-r border-slate-200 flex flex-col h-dvh sticky top-0">
            <div className="flex items-center gap-2 px-4 h-20! border-b border-slate-200">
                <div className="bg-blue-600/90 p-1 rounded-full size-15">
                    <img src={logo} className='w-full h-full rounded-full' />
                </div>
                <h1 className="text-lg font-semibold tracking-tight text-gray-600">Real Time Chat & Sync</h1>
            </div>

            <Menus />
            
            <div className="flex items-center gap-3 mt-auto p-4 border-t border-slate-200/70">
                <div className='bg-slate-200 h-10 w-10 uppercase rounded-full overflow-hidden flex justify-center items-center text-2xl'>
                    <Avatar name={userData?.name!} image={userData?.image} className='size-10' />
                </div>
                
                <div>
                    <p className="font-semibold text-sm capitalize">{userData?.name}</p>
                    <button onClick={(e) => { handleLogout(); e.stopPropagation() }} className="text-xs text-slate-400 hover:text-red-500 transition-colors cursor-pointer">Logout{isLogout && <span className='animate-pulse'>...</span>}</button>
                </div>
            </div>
        </aside>
    )
};