import { User, Mail } from 'lucide-react';
import { useProfileImageUpdateMutation, useProfileUpdateMutation } from '../store/services/userApi';
import { authApi, useCurrentUserQuery } from '../store/services/authApi';
import type { ProfileUpdateInterface } from '../components/interfaces';
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from 'zod'
import { FaArrowsSpin } from 'react-icons/fa6';
import ErrorContainer from '../components/ErrorContainer';
import { useAppDispatch } from '../store/api/hooks';
import { errorToastHandler } from '../utils/toastHandler';
import { successToast } from '../utils/toast';
import { Avatar } from '../utils/getAvatar';

const profileSchema = z.object({
    name: z.string().min(1, { message: 'Name is required!' }),
    email: z.email({ message: 'Please enter valid email address' }),
})

export default function Account() {
    const dispatch = useAppDispatch()
    const [profileUpdate] = useProfileUpdateMutation()
    const [profileImageUpdate] = useProfileImageUpdateMutation()
    const { data: userData } = useCurrentUserQuery()

    const handleProfileImage = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        if (!file) return;

        const formData = new FormData()
        formData.append('image', file)

        try {
            const result = await profileImageUpdate(formData).unwrap()

            successToast('Profile image updated successfully.')

            dispatch(
                authApi.util.updateQueryData(
                    'currentUser',
                    undefined,
                    (draft: any) => {
                        if (draft) {
                            draft.image = result.image
                        }
                    }
                )
            )
        }
        catch (err) {
            errorToastHandler(err)
        }
    }

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: zodResolver(profileSchema),
        mode: 'onTouched',
        reValidateMode: 'onSubmit'
    })

    const handleProfileUpdate = async (data: ProfileUpdateInterface) => {
        try {
            await profileUpdate(data).unwrap()

            successToast('Profile data updated successfully.')

            dispatch(
                authApi.util.updateQueryData(
                    'currentUser',
                    undefined,
                    (draft: any) => {
                        if (draft) {
                            draft.email = data.email
                            draft.name = data.name
                        }
                    }
                )
            )
        }
        catch (err) {
            errorToastHandler(err)
        }
    }

    
    return (
        <div className="m-8">
            <section className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                <header className="mb-10">
                    <h2 className="text-3xl font-bold text-slate-900">Profile <span className='text-blue-700'>Settings</span></h2>
                    <p className="text-slate-500 mt-2 text-sm">Update your photo and personal details here.</p>
                </header>
                <div className="flex flex-col md:flex-row md:items-center gap-8">
                    <div className="relative group">
                        <Avatar name={userData?.name!} image={userData?.image} className='size-24 border-4 border-white shadow-md text-4xl! font-medium!' />
                    </div>
                    <div className="flex-1">
                        <h3 className="text-lg font-semibold text-slate-800">Your Photo</h3>
                        <p className="text-slate-500 text-sm mb-4">This will be displayed on your profile.</p>
                        <div className="flex gap-3">
                            <input onChange={handleProfileImage} id="profile_image" name='image' type="file" className='hidden' />
                            <button onClick={() => { document.getElementById('profile_image')?.click() }} className="px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-300/60 rounded-lg hover:bg-slate-100/80 duration-300">Change Profile Image</button>
                            {/* <button className="px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 hover:text-red-700 border border-red-200 rounded-lg duration-300">Remove</button> */}
                        </div>
                    </div>
                </div>
                <hr className='border-slate-200 my-5' />
                <h3 className="text-lg font-semibold text-slate-800">Personal Info</h3>

                <form onSubmit={handleSubmit(handleProfileUpdate)} className="p-8 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                            <div className="relative">
                                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                <input
                                    {...register('name')}
                                    type="text"
                                    defaultValue={userData?.name}
                                    className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl focus:border-slate-300/80 focus:shadow-5 outline-none transition-all"
                                />
                            </div>
                            <ErrorContainer message={errors?.name?.message} />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                <input
                                    {...register('email')}
                                    type="email"
                                    defaultValue={userData?.email}
                                    className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl focus:border-slate-300/80 focus:shadow-5 outline-none transition-all"
                                />
                            </div>
                            <ErrorContainer message={errors?.email?.message} />
                        </div>
                    </div>
                    <div className="flex justify-end pt-4">
                        <button className={`px-6 py-2.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 duration-300 font-semibold rounded-2xl transition-colors shadow-sm cursor-pointer flex justify-center items-center gap-2`}>
                            {isSubmitting ? (
                                <>
                                    <FaArrowsSpin className="text-lg animate-spin" />
                                    <span>Loading...</span>
                                </>
                            ) : (
                                <>Update Profile</>
                            )}
                        </button>
                    </div>
                </form>
            </section>
        </div>
    )
}
