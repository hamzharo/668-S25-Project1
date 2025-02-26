import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { RightSidebarProps } from '@/types'

const RightSidebar = ({ user, go }: RightSidebarProps) => {
    const [profileImage, setProfileImage] = useState<string | null>(null)

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files ? e.target.files[0] : null
        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setProfileImage(reader.result as string)
            }
            reader.readAsDataURL(file)
        }
    }

    return (
        <aside className='right-sidebar'>
            <section className='flex flex-col pb-8'>
                <div className='profile-banner' />
                <div className='profile'>
                    <div className='profile-img'>
                        {/* Display uploaded image if exists, otherwise show initial */}
                        {profileImage ? (
                            <img
                                src={profileImage}
                                alt="Profile"
                                className='w-16 h-16 rounded-full object-cover'
                            />
                        ) : (
                            <span className='text-5xl font-bold text-green-500'>
                                {user?.firstName[0]}
                            </span>
                        )}
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="absolute opacity-0 w-full h-full top-0 left-0 cursor-pointer"
                        />
                    </div>
                    <div className='profile-details'>
                        <h1 className='profile-name'>
                            {user?.firstName} {user?.lastName}
                        </h1>
                        <p className='profile-email'>
                            {user?.emailId}
                        </p>
                    </div>
                </div>
            </section>
            <section className='banks space-y-4'>
                <div className='flex w-full justify-between'>
                    <h2 className='header-2'>Edit Profile </h2>
                    <Link href={'/'} className='flex gap-2'>
                        <Image
                            src={'/icons/edit-profile.png'}
                            width={20}
                            height={20}
                            alt='plus'
                        />
                    </Link>
                </div> 
                <div className='flex w-full justify-between'>
                    <h2 className='header-2'>Complete account</h2>
                    <Link href={'/'} className='flex gap-2'>
                        <Image
                            src={'/icons/complete-account.png'}
                            width={20}
                            height={20}
                            alt='plus'
                        />
                    </Link>
                </div>
                <div className='flex w-full justify-between'>
                    <h2 className='header-2'>Upload documents</h2>
                    <Link href={'/'} className='flex gap-2'>
                        <Image
                            src={'/icons/upload.png'}
                            width={20}
                            height={20}
                            alt='plus'
                        />
                    </Link>
                </div> 
                <div className='flex w-full justify-between'>
                    <h2 className='header-2'>Setting & Support</h2>
                    <Link href={'/'} className='flex gap-2'>
                        <Image
                            src={'/icons/setting-support.png'}
                            width={20}
                            height={20}
                            alt='plus'
                        />
                    </Link>
                </div>
                {go?.length > 0 && (
                    <div className='relative flex flex-1 flex-col items-center justify-center gap-5'>
                        {go[1] && (
                            <div className='absolute right-0 top-8 z-0 w-[90%]'>
                                {/* Content for banks */}
                            </div>
                        )}
                    </div>
                )}
            </section>
        </aside>
    )
}

export default RightSidebar
