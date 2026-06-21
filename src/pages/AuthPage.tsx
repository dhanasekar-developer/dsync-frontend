import { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, User } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { z } from 'zod'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod";
import type { LoginInterface, SignUpInterface } from '../components/interfaces';
import ErrorContainer from '../components/ErrorContainer';
import { useLoginMutation, useSignupMutation } from '../store/services/authApi';
import { FaArrowsSpin } from 'react-icons/fa6';
import { setCredentials, setInitialized } from '../store/services/authSlice';
import { useAppDispatch } from '../store/api/hooks';
import { errorToastHandler } from '../utils/toastHandler';
import { successToast } from '../utils/toast';
import logo from '../assets/logo.png';

const loginSchema = {
    email: z.email({ message: 'Please enter valid email address!' }),
    password: z.string().min(1, { message: 'Password is required!' })
}

const signupSchema = {
    name: z.string().min(1, { message: 'Name is required!' }),
    email: z.email({ message: 'Please enter valid email address!' }),
    password: z.string().min(8, { message: 'Password must be atleast 8 characters!' })
}

const inputClass = 'w-full pl-12 pr-12 py-2.5 bg-slate-50 border border-slate-200 focus:border-slate-300 focus:shadow-sm rounded-2xl focus:outline-none transition-all text-slate-600'

const AuthPage = () => {
    const { pathname } = useLocation()
    const dispatch = useAppDispatch()
    const isLogin = pathname == '/login' 
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate()
    const [ signup, { isLoading: isSigning } ] = useSignupMutation()
    const [ login, { isLoading: isLoging } ] = useLoginMutation()

    type FormData = LoginInterface | SignUpInterface

    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitting},
        trigger,
        getValues,
        clearErrors,
        reset
    } = useForm<FormData>({
        resolver: zodResolver(z.object(isLogin ? loginSchema : signupSchema)),
        mode: 'onTouched',
        reValidateMode: 'onSubmit'
    })

    const handleLogin = async (data: LoginInterface) => {
        const formData = new FormData()
        formData.append('username', data.email)
        formData.append('password', data.password)

        try{
            const response = await login(formData).unwrap()
            dispatch(setCredentials(response?.access_token))
            dispatch(setInitialized())
            navigate('/messages')
            successToast('Successfully logged in.')
        }catch(error){
            errorToastHandler(error)
        }
    }

    const handleSignUp = async (data: SignUpInterface) => {
        try{
            await signup(data).unwrap()
            navigate('/login')
            reset()
            successToast('Account created successfully.')
        }
        catch(err){
            errorToastHandler(err)
        }
    }

    const onSubmit: SubmitHandler<FormData> = async (data) => {
        if('name' in data && !isLogin){
            handleSignUp(data)
        }else{
            handleLogin(data)
        }
    }

    const validateField = async (field : 'name' | 'email' | 'password') => {
        const value = getValues(field).trim()
        if(value){
            await trigger(field)
        }
    }

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 font-sn-pro">
            <div className="max-w-md w-full bg-white rounded-4xl shadow-xl overflow-hidden p-8 md:p-12">

                {/* Logo Section */}
                <div className="flex items-center gap-2 px-4 h-20!">
                <div className="bg-blue-600/90 p-1 rounded-full size-15">
                    <img src={logo} className='w-full h-full rounded-full' />
                </div>
                <h1 className="text-lg font-semibold tracking-tight text-gray-600">Real Time Chat & Sync</h1>
            </div>

                {/* Header */}
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-bold text-slate-900 mb-2">
                        {isLogin ? 'Welcome Back' : 'Create Account'}
                    </h1>
                    <p className="text-slate-500">
                        Please enter your details to {isLogin ? 'log in.' : 'sign up.'}
                    </p>
                </div>

                <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
                    {!isLogin && (
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1.5 ml-1">Full Name</label>
                            <div className="relative">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                                <input
                                    {...register('name')}
                                    type="text"
                                    placeholder="User Name"
                                    className={inputClass}
                                    onInput={() => clearErrors('name')}
                                    onBlur={() => validateField('name')}
                                    autoComplete='name'
                                />
                            </div>
                            <ErrorContainer message={'name' in errors ? errors.name?.message : undefined} />
                        </div>
                    )}

                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1.5 ml-1">Email Address</label>
                        <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                            <input
                                {...register('email')}
                                type="email"
                                placeholder="user@gmail.com"
                                className={inputClass}
                                onInput={() => clearErrors('email')}
                                onBlur={() => validateField('email')}
                                autoComplete='email'
                            />
                        </div>
                        <ErrorContainer message={errors?.email?.message} />
                    </div>

                    <div>
                        <div className="flex justify-between mb-1.5 ml-1">
                            <label className="text-sm font-semibold text-slate-700">Password</label>
                        </div>
                        <div className="relative">
                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                            <input
                                {...register('password')}
                                type={showPassword ? "text" : "password"}
                                placeholder="••••••••"
                                className={inputClass}
                                onInput={() => clearErrors('password')}
                                onBlur={() => validateField('password')}
                                autoComplete='password'
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                            >
                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        </div>
                        <ErrorContainer message={errors?.password?.message} />
                    </div>

                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-2xl duration-300 transition-all active:scale-[0.98] flex items-center gap-2 justify-center">
                        {(isSigning || isLoging) ? (
                            <>
                                <FaArrowsSpin className="text-lg animate-spin" />
                                <span>Loading...</span>
                            </>
                        ) : (
                            <>{isLogin ? 'Log In' : 'Create Account'}</>
                        )}
                    </button>
                </form>

                <p className="text-center mt-8 text-slate-600">
                    {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
                    <button
                        onClick={() => navigate(isLogin ? '/signup' : '/login')}
                        className="text-blue-600 font-bold hover:underline"
                    >
                        {isLogin ? 'Sign Up' : 'Log In'}{isSubmitting && '...'}
                    </button>
                </p>
            </div>
        </div>
    );
};

export default AuthPage;