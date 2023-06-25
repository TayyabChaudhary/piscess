import React from 'react'
import Header from '../../../components/Header/Header'
import SectionOne from './SectionOne/SectionOne'
import SectionTwo from './SectionTwo/SectionTwo'
import SectionThree from './SectionThree/SectionThree'

export default function DemoThree() {
    return (
        <>
            <main className='w-full min-h-[70vh] bg-cover bg-no-repeat bg-center demo-03-bg-image'>
                <Header />
                <div className='flex items-center min-h-[70vh]'>
                    <div className='container max-w-screen-md mx-auto'>
                        <div className='flex flex-col'>
                            <h1 className='text-5xl font-bold text-white'>
                                Reliable Partner
                            </h1>
                            <p className='mt-3 text-xs text-white w-96 leading-[23px]'>
                                Proin luctus odio ut dolor consectetur cursus. Quisque eget elementum eros, vitae elementum elit. Etiam id hendrerit orci,
                            </p>
                            <button className='px-5 py-3 mt-4 text-xs font-bold tracking-wider text-white uppercase bg-blue-600 w-fit'>
                                Discover Home
                            </button>
                        </div>
                    </div>
                </div>
            </main>
            <SectionOne />
            <SectionTwo />
            <SectionThree />
        </>
    )
}
