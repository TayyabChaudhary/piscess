import React from 'react'
import SecondImage from "../../../../assets/images/others/m-1-pf-2-425x380.jpg";
import FourthImage from "../../../../assets/images/others/m-1-pf-4-425x380.jpg";
import FiveImage from "../../../../assets/images/others/m-1-pf-5-425x380.jpg";
import SixthImage from "../../../../assets/images/others/m-1-pf-6-425x380.jpg";
export default function SectionThree() {
    return (
        <section>
            <div className="grid grid-cols-2 gap-0 mt-0 sm:gap-0 sm:grid-cols-4">
                <div className="relative w-full cursor-pointer">
                    <img src={SecondImage} alt="" className="w-full" />
                </div>
                <div className="relative w-full cursor-pointer">
                    <img src={FourthImage} alt="" className="w-full" />
                </div>
                <div className="relative w-full cursor-pointer">
                    <img src={FiveImage} alt="" className="w-full" />
                </div>
                <div className="relative w-full cursor-pointer">
                    <img src={SixthImage} alt="" className="w-full" />
                </div>
            </div>
            <div className='p-5 bg-gray-100'>
                <div className='container max-w-screen-xl mx-auto'>
                    <div className='flex items-center justify-between'>
                        <h3 className='text-lg font-bold tracking-wider'>
                        Start your project with Pisces Studio
                        </h3>
                        <button className='px-8 py-4 text-xs font-bold tracking-wide text-white uppercase bg-blue-500 border-none rounded-md outline-none'>
                            Purshase Now
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
