import PageHeader from '@/components/card/PageHeader'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import React from 'react'

const Writers = () => {
    return (
        <div className="page-wrapper">
            <PageHeader title='Writers' description='540+' >
                <div className="flex gap-2">
                    <input type="text" className="input input-sm input-success form-control bg-transparent text-sm ps-11" placeholder="Search" />
                    <a href="/keen/demo2/apps/file-manager/folders.html" className="btn btn-info bg-teal-500 btn-sm fw-bolder">Add New User</a>
                </div>
            </PageHeader>
            <div className="page-body">
                <div className="relative">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        <div className="flex flex-col items-center justify-center p-6 border border-gray-300 rounded-md shadow-sm">
                            <Avatar>
                                <AvatarImage src="https://randomuser.me/api/portraits/women/2.jpg" />
                            </Avatar>
                            <h4 className='text-base font-bold text-gray-800 mt-4'>Karina Clerk</h4>
                            <p className='font-bold text-xs'>Art Director at Novica Co.</p>
                            <div className="flex gap-2 items-center justify-center mt-4">
                                <div className="first border border-dotted border-gray-300 rounded-md p-1 px-4">
                                    <h6 className='text-sm font-bold text-gray-800'>$14,560</h6>
                                    <p className="text-sm">Earnings</p>
                                </div>
                                <div className="first border border-dotted border-gray-300 rounded-md p-1 px-4">
                                    <h6 className='text-sm font-bold text-gray-800'>$14,560</h6>
                                    <p className="text-sm">Earnings</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center p-6 border border-gray-300 rounded-md shadow-sm">
                            <Avatar>
                                <AvatarImage src="https://randomuser.me/api/portraits/women/3.jpg" />
                            </Avatar>
                            <h4 className='text-base font-bold text-gray-800 mt-4'>Karina Clerk</h4>
                            <p className='font-bold text-xs'>Art Director at Novica Co.</p>
                            <div className="flex gap-2 items-center justify-center mt-4">
                                <div className="first border border-dotted border-gray-300 rounded-md p-1 px-4">
                                    <h6 className='text-sm font-bold text-gray-800'>$14,560</h6>
                                    <p className="text-sm">Earnings</p>
                                </div>
                                <div className="first border border-dotted border-gray-300 rounded-md p-1 px-4">
                                    <h6 className='text-sm font-bold text-gray-800'>$14,560</h6>
                                    <p className="text-sm">Earnings</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center p-6 border border-gray-300 rounded-md shadow-sm">
                            <Avatar>
                                <AvatarImage src="https://randomuser.me/api/portraits/men/4.jpg" />
                            </Avatar>
                            <h4 className='text-base font-bold text-gray-800 mt-4'>Karina Clerk</h4>
                            <p className='font-bold text-xs'>Art Director at Novica Co.</p>
                            <div className="flex gap-2 items-center justify-center mt-4">
                                <div className="first border border-dotted border-gray-300 rounded-md p-1 px-4">
                                    <h6 className='text-sm font-bold text-gray-800'>$14,560</h6>
                                    <p className="text-sm">Earnings</p>
                                </div>
                                <div className="first border border-dotted border-gray-300 rounded-md p-1 px-4">
                                    <h6 className='text-sm font-bold text-gray-800'>$14,560</h6>
                                    <p className="text-sm">Earnings</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center p-6 border border-gray-300 rounded-md shadow-sm">
                            <Avatar>
                                <AvatarImage src="https://randomuser.me/api/portraits/women/5.jpg" />
                            </Avatar>
                            <h4 className='text-base font-bold text-gray-800 mt-4'>Karina Clerk</h4>
                            <p className='font-bold text-xs'>Art Director at Novica Co.</p>
                            <div className="flex gap-2 items-center justify-center mt-4">
                                <div className="first border border-dotted border-gray-300 rounded-md p-1 px-4">
                                    <h6 className='text-sm font-bold text-gray-800'>$14,560</h6>
                                    <p className="text-sm">Earnings</p>
                                </div>
                                <div className="first border border-dotted border-gray-300 rounded-md p-1 px-4">
                                    <h6 className='text-sm font-bold text-gray-800'>$14,560</h6>
                                    <p className="text-sm">Earnings</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center p-6 border border-gray-300 rounded-md shadow-sm">
                            <Avatar>
                                <AvatarImage src="https://randomuser.me/api/portraits/men/6.jpg" />
                            </Avatar>
                            <h4 className='text-base font-bold text-gray-800 mt-4'>Karina Clerk</h4>
                            <p className='font-bold text-xs'>Art Director at Novica Co.</p>
                            <div className="flex gap-2 items-center justify-center mt-4">
                                <div className="first border border-dotted border-gray-300 rounded-md p-1 px-4">
                                    <h6 className='text-sm font-bold text-gray-800'>$14,560</h6>
                                    <p className="text-sm">Earnings</p>
                                </div>
                                <div className="first border border-dotted border-gray-300 rounded-md p-1 px-4">
                                    <h6 className='text-sm font-bold text-gray-800'>$14,560</h6>
                                    <p className="text-sm">Earnings</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center p-6 border border-gray-300 rounded-md shadow-sm">
                            <Avatar>
                                <AvatarImage src="https://randomuser.me/api/portraits/men/7.jpg" />
                            </Avatar>
                            <h4 className='text-base font-bold text-gray-800 mt-4'>Karina Clerk</h4>
                            <p className='font-bold text-xs'>Art Director at Novica Co.</p>
                            <div className="flex gap-2 items-center justify-center mt-4">
                                <div className="first border border-dotted border-gray-300 rounded-md p-1 px-4">
                                    <h6 className='text-sm font-bold text-gray-800'>$14,560</h6>
                                    <p className="text-sm">Earnings</p>
                                </div>
                                <div className="first border border-dotted border-gray-300 rounded-md p-1 px-4">
                                    <h6 className='text-sm font-bold text-gray-800'>$14,560</h6>
                                    <p className="text-sm">Earnings</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center p-6 border border-gray-300 rounded-md shadow-sm">
                            <Avatar>
                                <AvatarImage src="https://randomuser.me/api/portraits/women/8.jpg" />
                            </Avatar>
                            <h4 className='text-base font-bold text-gray-800 mt-4'>Karina Clerk</h4>
                            <p className='font-bold text-xs'>Art Director at Novica Co.</p>
                            <div className="flex gap-2 items-center justify-center mt-4">
                                <div className="first border border-dotted border-gray-300 rounded-md p-1 px-4">
                                    <h6 className='text-sm font-bold text-gray-800'>$14,560</h6>
                                    <p className="text-sm">Earnings</p>
                                </div>
                                <div className="first border border-dotted border-gray-300 rounded-md p-1 px-4">
                                    <h6 className='text-sm font-bold text-gray-800'>$14,560</h6>
                                    <p className="text-sm">Earnings</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center p-6 border border-gray-300 rounded-md shadow-sm">
                            <Avatar>
                                <AvatarImage src="https://randomuser.me/api/portraits/women/9.jpg" />
                            </Avatar>
                            <h4 className='text-base font-bold text-gray-800 mt-4'>Karina Clerk</h4>
                            <p className='font-bold text-xs'>Art Director at Novica Co.</p>
                            <div className="flex gap-2 items-center justify-center mt-4">
                                <div className="first border border-dotted border-gray-300 rounded-md p-1 px-4">
                                    <h6 className='text-sm font-bold text-gray-800'>$14,560</h6>
                                    <p className="text-sm">Earnings</p>
                                </div>
                                <div className="first border border-dotted border-gray-300 rounded-md p-1 px-4">
                                    <h6 className='text-sm font-bold text-gray-800'>$14,560</h6>
                                    <p className="text-sm">Earnings</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center p-6 border border-gray-300 rounded-md shadow-sm">
                            <Avatar>
                                <AvatarImage src="https://randomuser.me/api/portraits/men/12.jpg" />
                            </Avatar>
                            <h4 className='text-base font-bold text-gray-800 mt-4'>Karina Clerk</h4>
                            <p className='font-bold text-xs'>Art Director at Novica Co.</p>
                            <div className="flex gap-2 items-center justify-center mt-4">
                                <div className="first border border-dotted border-gray-300 rounded-md p-1 px-4">
                                    <h6 className='text-sm font-bold text-gray-800'>$14,560</h6>
                                    <p className="text-sm">Earnings</p>
                                </div>
                                <div className="first border border-dotted border-gray-300 rounded-md p-1 px-4">
                                    <h6 className='text-sm font-bold text-gray-800'>$14,560</h6>
                                    <p className="text-sm">Earnings</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Writers