import { useEffect, useState, type ReactElement } from 'react';
import ReactDOM from 'react-dom'
import { IoClose } from 'react-icons/io5';

interface PopupPropInterface {
    children: ReactElement,
    isOpen: boolean,
    closeFn: () => void,
    onPopupClose?: (callback: () => void) => void,
    className?: string,
}

export default function Popup({ children, isOpen, closeFn, onPopupClose, className }: PopupPropInterface) {
    const [show, setShow] = useState(isOpen)

    useEffect(() => {
        if (isOpen) {
            setTimeout(() => setShow(true), 10);
        } else {
            setShow(false);
        }
    }, [isOpen]);

    const closePopup = () => {
        setShow(false)
        setTimeout(closeFn, 300)
    }

    useEffect(() => {
        if (onPopupClose) {
            onPopupClose(closePopup)
        }
    }, [onPopupClose])

    if (!isOpen && !show) return null;

    const popupRoot = document.getElementById('popup_root')

    if(!popupRoot) return null

    return ReactDOM.createPortal(
        <div className={`fixed inset-0 bg-black/50 p-7 bg-opacity-50 z-50 font-inter! duration-300 transition-opacity flex flex-col justify-center items-center ${show ? 'opacity-100 visible' : 'opacity-0 invisible'}`} onClick={closePopup}>
            <div 
                className={`relative bg-white max-h-[calc(100dvh-100px)] overflow-y-auto rounded-xl duration-300 border border-gray-200 ${className} ${show ? 'scale-100' : 'scale-50'}`} 
                onClick={e => e.stopPropagation()}
            >
                <div onClick={closePopup} className="size-10.5 bg-slate-50 border border-gray-200 rounded-full absolute -top-5 -right-5 cursor-pointer flex items-center justify-center">
                    <IoClose className="text-[20px] text-gray-500" />
                </div>
                {children}
            </div>
        </div>,
        popupRoot
    )
}