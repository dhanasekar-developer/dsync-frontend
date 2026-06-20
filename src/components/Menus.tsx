import { MessageCircleMore, ShieldCheck, User } from 'lucide-react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function Menus() {
    const navigate = useNavigate()
    const { pathname } = useLocation()

    const menus = [
        {id: 1, name: 'messages', icon: <MessageCircleMore size={20} />, path: '/messages' },
        {id: 2, name: 'account', icon: <User size={20} />, path: '/account' },
        {id: 3, name: 'security', icon: <ShieldCheck size={20} />, path: '/security' },
    ]

  return (
    <div className="w-75 bg-white hidden md:flex flex-col">
        <div className="p-4 space-y-2">
            {menus.map((e) => {
                const isActive = e.path == pathname
                return (
                    <button onClick={() => navigate(e.path)} key={e.id} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${isActive ? 'bg-blue-50 text-blue-600' : 'text-slate-600 hover:bg-slate-50'}`}>
                        {e.icon} <span className="font-medium capitalize">{e.name}</span>
                    </button>
                )
            })}
        </div>
    </div>
  )
}
