import { Search } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react'
import ChatPreview from './ChatPreview';
import type { ChatInterface } from './interfaces';


export default function ChatList({ chatList }: { chatList?: ChatInterface[] }) {
    const [ search, setSearch ] = useState<string>('')
    
    const searchbarRef = useRef<HTMLDivElement | null>(null)
    const inputRef = useRef<HTMLInputElement | null>(null)
    const [isSearch, setIsSearch] = useState<boolean>(false)

    useEffect(() => {
        if(!searchbarRef?.current) return;
        
        const closeSearch = (e: MouseEvent) => {
            if(searchbarRef?.current && !searchbarRef.current.contains(e.target as Node) && !search) setIsSearch(false)
        }

        document.addEventListener('click', closeSearch)
        return () => document.removeEventListener('click', closeSearch)
    }, [search])

    const filterChatList = chatList?.filter((e) => e.name.match(search)) 
    
    return (
        <section className="w-80 bg-white border-r border-slate-200 flex flex-col">
            <div className="p-6 flex justify-between items-center">
                <h2 className={`text-2xl font-bold text-blue-700 overflow-hidden duration-500 transition-all ${isSearch ? 'w-0' : 'w-30'}`}>Messages</h2>
                <div
                    ref={searchbarRef}
                    onClick={() => setIsSearch(true)}
                    className={`${isSearch ? 'bg-blue-100 w-full' : 'w-9'} h-9 duration-500 transition-all rounded-lg relative`}
                >
                    <input onChange={(e) => setSearch(e.target.value)} ref={inputRef} type="text" className={`border-0 bg-transparent h-full focus:outline-0 px-3 caret-blue-500 text-slate-600 ${isSearch ? 'w-full' : 'w-0'}`} />
                    <Search onClick={() => inputRef?.current?.focus()} size={20} className="cursor-pointer text-slate-400 hover:text-slate-600 absolute top-1/2 -translate-y-1/2 right-2" />
                </div>
            </div>

            <div className="flex-1 overflow-y-auto px-4 max-h-[calc(100dvh-180px)] min-h-[calc(100dvh-164px)] scrollbar-hide">
                {filterChatList?.map((e) => 
                    <React.Fragment key={e.chat_id} >
                        <ChatPreview data = {e} />
                    </React.Fragment>
                )}
            </div>
        </section>
    )
};