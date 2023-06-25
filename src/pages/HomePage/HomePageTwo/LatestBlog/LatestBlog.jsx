import React from 'react'
import { BiShareAlt, BiLike, BiComment } from "react-icons/bi";
export default function LatestBlog() {
  return (
    <section className='pt-20'>
      <div className='container max-w-screen-xl mx-auto'>
        <h1 className='text-4xl font-bold tracking-wide text-center'>
          Latest Blog
        </h1>
        <div className='grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 mt-10'>
          <div className='w-full p-10 border border-gray-200 border-solid h-60 hover:shadow-lg'>
            <p className='text-xs text-gray-500'>
              Marketing
            </p>
            <h3 className='text-lg font-bold'>
              We are Pisces
            </h3>
            <div className="flex items-center">
              <p className='text-xs font-normal text-gray-500'>
                by Leah Graves
              </p>
              <p className='text-xs font-normal text-gray-500'>
                - 21 Aug 2017
              </p>
            </div>
            <p className='text-xs text-gray-500 mt-6'>
              Nunc ut vehicula ante. Donec cursus felis diam, at vulputate ligula sollicitudin at. Vivamus massa…
            </p>
            <div className='flex items-center gap-x-4 mt-5'>
              <BiShareAlt className='text-gray-500 text-xs' />
              <div className='flex items-center gap-x-1'>
                <BiLike className='text-xs text-gray-500' />
                <small>12</small>
              </div>
              <div className='flex items-center gap-x-1'>
                <BiComment className='text-xs text-gray-500' />
                <small>0</small>
              </div>
            </div>
          </div>
          <div className='w-full p-10 border border-gray-200 border-solid h-60 hover:shadow-lg'>
            <p className='text-xs text-gray-500'>
              Business
            </p>
            <h3 className='text-lg font-bold'>
              Growth your business
            </h3>
            <div className="flex items-center">
              <p className='text-xs font-normal text-gray-500'>
                by Leah Graves
              </p>
              <p className='text-xs font-normal text-gray-500'>
                - 21 Aug 2017
              </p>
            </div>
            <p className='text-xs text-gray-500 mt-6'>
              Nunc ut vehicula ante. Donec cursus felis diam, at vulputate ligula sollicitudin at. Vivamus massa…
            </p>
            <div className='flex items-center gap-x-4 mt-5'>
              <BiShareAlt className='text-gray-500 text-xs' />
              <div className='flex items-center gap-x-1'>
                <BiLike className='text-xs text-gray-500' />
                <small>12</small>
              </div>
              <div className='flex items-center gap-x-1'>
                <BiComment className='text-xs text-gray-500' />
                <small>0</small>
              </div>
            </div>
          </div>
          <div className='w-full p-10 border border-gray-200 border-solid h-60 hover:shadow-lg'>
            <p className='text-xs text-gray-500'>
              Design
            </p>
            <h3 className='text-lg font-bold'>
              Impress UX/UI design
            </h3>
            <div className="flex items-center">
              <p className='text-xs font-normal text-gray-500'>
                by Leah Graves
              </p>
              <p className='text-xs font-normal text-gray-500'>
                - 21 Aug 2017
              </p>
            </div>
            <p className='text-xs text-gray-500 mt-6'>
              Nunc ut vehicula ante. Donec cursus felis diam, at vulputate ligula sollicitudin at. Vivamus massa…
            </p>
            <div className='flex items-center gap-x-4 mt-5'>
              <BiShareAlt className='text-gray-500 text-xs' />
              <div className='flex items-center gap-x-1'>
                <BiLike className='text-xs text-gray-500' />
                <small>12</small>
              </div>
              <div className='flex items-center gap-x-1'>
                <BiComment className='text-xs text-gray-500' />
                <small>0</small>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Bacground */}
      <div className='pt-20'>
        <section className='bg-cover bg-center bg-no-repeat w-full h-80 man__image flex justify-center items-center'>
          <div className='flex flex-col items-center'>
            <h1 className='text-4xl font-bold text-white'>
              Ready To Start Today ?
            </h1>
            <p className='text-xs text-white text-center leading-[30px] mt-4'>
            Proin luctus odio ut dolor consectetur cursus. Quisque eget elementum eros, vitae elementum elit. Etiam id hendrerit orci, ac <br /> hendrerit metus. Integer quis elementum nibh
            </p>
            <button className='px-5 py-3 gradient-color rounded-full text-xs text-white uppercase font-medium mt-4'>Get a Qoute</button>
          </div>
        </section>
      </div>

    </section>
  )
}
