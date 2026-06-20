import React from 'react'
import SearchBox from './SearchBox'

export default function Header() {
  return (
    <div className='h-20 border-b border-slate-200 w-full flex items-center justify-center sticky top-0 bg-white z-30'>
        <SearchBox />
    </div>
  )
}
