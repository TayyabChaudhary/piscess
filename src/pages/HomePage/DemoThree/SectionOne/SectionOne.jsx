import React from 'react'
import { BiSolidBank, BiCalculator, BiCake, BiFridge, BiPen, BiTargetLock } from "react-icons/bi";
export default function SectionOne() {
    return (
        <section className='pt-20'>
            <div className='container max-w-screen-xl mx-auto'>
                <p className='text-sm text-center text-blue-600'>
                    Website creation never was so easy
                </p>
                <div className='flex justify-center pt-5'>
                    <h4 className='text-xl text-center'>
                        Suspendisse pulvinar volutpat libero, in dictum ex dapibus non. <br /> Maecenas et turpis posuere, imperdiet.
                    </h4>
                </div>
                <div className='grid grid-cols-2 gap-8 mt-24 sm:gap-6 sm:grid-cols-3'>
                    <div className='w-full group'>
                        <div className='relative w-full h-auto border border-gray-200 border-solid group-hover:shadow-lg p-14'>
                            <div className='absolute flex items-center justify-center transition-colors duration-200 ease-linear bg-white border border-gray-300 border-solid rounded-full group-hover:bg-blue-500 group-hover:text-white group-hover:border-none left-44 -top-7 w-14 h-14'>
                                <BiCake className='text-gray-500 group-hover:text-white'/>
                            </div>
                            <h3 className='text-lg font-bold text-center'>
                                Business Investment
                            </h3>
                            <p className='mt-3 text-xs text-center text-gray-500'>
                                Suspendisse pulvinar volutpat libero, in dictum ex dapibus non. Maecenas et turpis posuere, lobortis ligula a, imperdiet lorem.
                            </p>
                            <div className="flex justify-center pt-6">
                                <button className='pt-2 text-xs font-medium text-gray-500 border-t border-gray-400 border-solid outline-none'>
                                    Read More
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='w-full group'>
                        <div className='relative w-full h-auto border border-gray-200 border-solid p-14 group-hover:shadow-lg'>
                            <div className='absolute flex items-center justify-center transition-colors duration-200 ease-linear bg-white border border-gray-300 border-solid rounded-full group-hover:bg-blue-500 group-hover:text-white group-hover:border-none left-44 -top-7 w-14 h-14'>
                                <BiSolidBank className='text-gray-500 group-hover:text-white'/>
                            </div>
                            <h3 className='text-lg font-bold text-center'>
                                Lawyer Consultation
                            </h3>
                            <p className='mt-3 text-xs text-center text-gray-500'>
                                Nulla eu semper sapien. Cras varius nisl eu velit tempus, quis consectetur justo tincidunt. Vivamus sed sollicitudin lacus, at mattis
                            </p>
                            <div className="flex justify-center pt-6">
                                <button className='pt-2 text-xs font-medium text-gray-500 border-t border-gray-400 border-solid outline-none'>
                                    Read More
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='w-full group'>
                        <div className='relative w-full h-auto border border-gray-200 border-solid p-14 group-hover:shadow-lg'>
                            <div className='absolute flex items-center justify-center transition-colors duration-200 ease-linear bg-white border border-gray-300 border-solid rounded-full group-hover:bg-blue-500 group-hover:text-white group-hover:border-none left-44 -top-7 w-14 h-14'>
                                <BiCalculator className="text-gray-500 group-hover:text-white" />
                            </div>
                            <h3 className='text-lg font-bold text-center'>
                                Accounting Services
                            </h3>
                            <p className='mt-3 text-xs text-center text-gray-500'>
                                Suspendisse pulvinar volutpat libero, in dictum ex dapibus non. Maecenas et turpis posuere, lobortis ligula a, imperdiet lorem.
                            </p>
                            <div className="flex justify-center pt-6">
                                <button className='pt-2 text-xs font-medium text-gray-500 border-t border-gray-400 border-solid outline-none'>
                                    Read More
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='w-full mt-12 group'>
                        <div className='relative w-full h-auto border border-gray-200 border-solid p-14 group-hover:shadow-lg'>
                            <div className='absolute flex items-center justify-center transition-colors duration-200 ease-linear bg-white border border-gray-300 border-solid rounded-full group-hover:bg-blue-500 group-hover:text-white group-hover:border-none left-44 -top-7 w-14 h-14'>
                                <BiFridge className="text-gray-500 group-hover:text-white" />
                            </div>
                            <h3 className='text-lg font-bold text-center'>
                               Web Agency
                            </h3>
                            <p className='mt-3 text-xs text-center text-gray-500'>
                                Suspendisse pulvinar volutpat libero, in dictum ex dapibus non. Maecenas et turpis posuere, lobortis ligula a, imperdiet lorem.
                            </p>
                            <div className="flex justify-center pt-6">
                                <button className='pt-2 text-xs font-medium text-gray-500 border-t border-gray-400 border-solid outline-none'>
                                    Read More
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='w-full mt-12 group'>
                        <div className='relative w-full h-auto border border-gray-200 border-solid p-14 group-hover:shadow-lg'>
                            <div className='absolute flex items-center justify-center transition-colors duration-200 ease-linear bg-white border border-gray-300 border-solid rounded-full group-hover:bg-blue-500 group-hover:text-white group-hover:border-none left-44 -top-7 w-14 h-14'>
                                <BiPen className="text-gray-500 group-hover:text-white" />
                            </div>
                            <h3 className='text-lg font-bold text-center'>
                               Creative Design
                            </h3>
                            <p className='mt-3 text-xs text-center text-gray-500'>
                                Suspendisse pulvinar volutpat libero, in dictum ex dapibus non. Maecenas et turpis posuere, lobortis ligula a, imperdiet lorem.
                            </p>
                            <div className="flex justify-center pt-6">
                                <button className='pt-2 text-xs font-medium text-gray-500 border-t border-gray-400 border-solid outline-none'>
                                    Read More
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='w-full mt-12 group'>
                        <div className='relative w-full h-auto border border-gray-200 border-solid p-14 group-hover:shadow-lg'>
                            <div className='absolute flex items-center justify-center transition-colors duration-200 ease-linear bg-white border border-gray-300 border-solid rounded-full group-hover:bg-blue-500 group-hover:text-white group-hover:border-none left-44 -top-7 w-14 h-14'>
                                <BiTargetLock className="text-gray-500 group-hover:text-white" />
                            </div>
                            <h3 className='text-lg font-bold text-center'>
                               Marketing Online
                            </h3>
                            <p className='mt-3 text-xs text-center text-gray-500'>
                                Suspendisse pulvinar volutpat libero, in dictum ex dapibus non. Maecenas et turpis posuere, lobortis ligula a, imperdiet lorem.
                            </p>
                            <div className="flex justify-center pt-6">
                                <button className='pt-2 text-xs font-medium text-gray-500 border-t border-gray-400 border-solid outline-none'>
                                    Read More
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
