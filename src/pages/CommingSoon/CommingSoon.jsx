import React from 'react'
import "./commingsoon.css";
export default function CommingSoon() {
  return (
    <>
        <div className="bg-center bg-cover bg-no-repeat min-h-screen flex justify-center items-center comming-soon">
            <div className="flex flex-col">
                <h1 className='text-7xl text-white font-bold underline'>
                Coming Soon
                </h1>
                <div className='grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-4 pt-24'>
                    <div className='flex flex-col items-center'>
                        <h2 className='text-5xl text-white font-bold'>
                            00
                        </h2>
                        <small className='text-white'>Days</small>
                    </div>
                    <div className='flex flex-col items-center'>
                        <h2 className='text-5xl text-white font-bold'>
                            00
                        </h2>
                        <small className='text-white'>Hrs</small>
                    </div>
                    <div className='flex flex-col items-center'>
                        <h2 className='text-5xl text-white font-bold'>
                            00
                        </h2>
                        <small className='text-white'>Mins</small>
                    </div>
                    <div className='flex flex-col items-center'>
                        <h2 className='text-5xl text-white font-bold'>
                            00
                        </h2>
                        <small className='text-white'>Secs</small>
                    </div>
                </div>
                <div className='flex justify-center pt-16'>
                    <button className='bg-white px-12 py-3.5 text-black uppercase font-medium rounded-full transition-colors ease-linear duration-300 hover:bg-purple-700 hover:text-white'>Contact us</button>
                </div>
            </div>
        </div>
    </>
  )
}
