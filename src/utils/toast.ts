import { toast } from "react-toastify";


export const infoToast = (msg: string, duration: number = 3000) => toast.info(msg, { autoClose: duration })
export const successToast = (msg: string, duration: number = 3000) => toast.success(msg, { autoClose: duration })
export const warnToast = (msg: string, duration: number = 3000) => toast.warn(msg, { autoClose: duration })
export const errorToast = (msg: string, duration: number = 3000) => toast.error(msg, { autoClose: duration })