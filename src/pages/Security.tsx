import { zodResolver } from '@hookform/resolvers/zod';
import { Lock } from 'lucide-react';
import { useForm } from 'react-hook-form';
import z from 'zod';
import { usePasswordChangeMutation } from '../store/services/userApi';
import type { PasswordChange } from '../components/interfaces';
import { FaArrowsSpin } from 'react-icons/fa6';
import ErrorContainer from '../components/ErrorContainer';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useRef, useState } from 'react';
import { errorToastHandler } from '../utils/toastHandler';
import { successToast } from '../utils/toast';

const schema = z.object({
    current_password: z.string().min(1, { message: 'Current password is required!' }),
    new_password: z.string().min(8, { message: 'New password must be atleast 8 characters!' }).max(20, { message: 'New password must be under 20 characters!' }),
})
    .refine(data => data.current_password !== data.new_password, {
        path: ['new_password'],
        message: 'Current password and new password must be different!'
    })


export default function Security() {
    const [passwordChange] = usePasswordChangeMutation()
    const [passwordVisible, setPasswordVisible] = useState<{ current_password: boolean, new_password: boolean }>({ current_password: false, new_password: false })
    const inputRef = useRef<Record<string, HTMLInputElement | null>>({})

    const {
        register,
        formState: { errors, isSubmitting },
        handleSubmit,
        trigger,
        getValues,
        clearErrors,
        reset
    } = useForm({
        mode: 'onTouched',
        reValidateMode: 'onSubmit',
        resolver: zodResolver(schema)
    })

    const handlePasswordChange = async (data: PasswordChange) => {
        try {
            await passwordChange(data).unwrap()
            successToast('Password reset sucessfully.')
            reset()
        }
        catch (err) {
            errorToastHandler(err)
        }
    }

    const validateField = async (field: 'current_password' | 'new_password') => {
        const value = getValues(field).trim()
        if (value) {
            await trigger(field)
        }
    }

    const { ref: currentPassRegisterRef, ...currentPassRegister } = register('current_password')
    const { ref: newPassRegisterRef, ...newPassRegister } = register('new_password')

    const togglePassword = (field: 'current_password' | 'new_password') => {
        const input = inputRef.current[field]

        if (!input) return;

        setPasswordVisible(prev => ({
            ...prev,
            [field]: !prev[field]
        }))

        const start = input.selectionStart ?? 0
        const end = input?.selectionEnd ?? 0

        requestAnimationFrame(() => {
            input.focus();
            input.setSelectionRange(start, end)
        })
    }

    return (
        <div className='flex justify-center p-8'>
            <section className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden w-200">
                <div className="p-8 border-b border-slate-100">
                    <h2 className="text-2xl font-bold text-slate-900">Security &  <span className='text-blue-700'>Password</span></h2>
                </div>
                <form onSubmit={handleSubmit(handlePasswordChange)} className="py-10 px-15 space-y-6">
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">Current Password</label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                <input
                                    {...currentPassRegister}
                                    type={passwordVisible['current_password'] ? 'text' : 'password'}
                                    placeholder="••••••••"
                                    onInput={() => clearErrors('current_password')}
                                    onBlur={() => validateField('current_password')}
                                    className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl focus:border-slate-300/80 focus:shadow-5 outline-none transition-all"
                                    ref={(e) => {
                                        currentPassRegisterRef(e);
                                        (inputRef.current['current_password'] = e);
                                    }}
                                />
                                <button
                                    onPointerDown={(e) => e.preventDefault()}
                                    onClick={() => togglePassword('current_password')}
                                    className='absolute right-4 top-1/2 -translate-y-1/2 text-slate-400'
                                    type='button'
                                >
                                    {passwordVisible.current_password ?
                                        <AiOutlineEyeInvisible size={22} />
                                        :
                                        <AiOutlineEye size={22} />
                                    }
                                </button>
                            </div>
                            <ErrorContainer message={errors.current_password?.message} />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">New Password</label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                <input
                                    {...newPassRegister}
                                    ref={(e) => {
                                        newPassRegisterRef(e);
                                        inputRef.current['new_password'] = (e);
                                    }}
                                    type={passwordVisible['new_password'] ? 'text' : 'password'}
                                    placeholder="••••••••"
                                    maxLength={20}
                                    onInput={() => clearErrors('new_password')}
                                    onBlur={() => validateField('new_password')}
                                    className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl focus:border-slate-300/80 focus:shadow-5 outline-none transition-all"
                                />
                                <button
                                    onPointerDown={e => e.preventDefault()}
                                    onClick={() => togglePassword('new_password')}
                                    className='absolute right-4 top-1/2 -translate-y-1/2 text-slate-400'
                                    type='button'
                                >
                                    {passwordVisible.new_password ?
                                        <AiOutlineEyeInvisible size={22} />
                                        :
                                        <AiOutlineEye size={22} />
                                    }
                                </button>
                            </div>
                            <ErrorContainer message={errors.new_password?.message} />
                        </div>
                    </div>
                    <div className="flex justify-end pt-4">
                        <button className="px-6 py-2.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold rounded-xl  duration-300 transition-colors shadow-sm cursor-pointer flex justify-center items-center gap-2">
                            {isSubmitting ? (
                                <>
                                    <FaArrowsSpin className="text-lg animate-spin" />
                                    <span>Loading...</span>
                                </>
                            ) : (
                                <>Update Password</>
                            )}
                        </button>
                    </div>
                </form>
            </section>
        </div>

    )
}
