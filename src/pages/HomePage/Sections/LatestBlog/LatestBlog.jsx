import React from "react";
import PiscesImages from "../../../../assets/images/others/m-1-n-1-425x280.jpg";
import Pisces2Images from "../../../../assets/images/others/m-1-n-2-425x280.jpg";
import Pisces3Images from "../../../../assets/images/others/m-1-n-3-425x280.jpg";
import Pisces4Images from "../../../../assets/images/others/m-1-n-4-425x280.jpg";
import { BiRightArrowAlt } from "react-icons/bi";
export default function LatestBlog() {
  return (
    <section className="pt-20">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold tracking-wider text-center">
          Latest Blog
        </h1>
        <p className="mt-2 text-sm font-medium text-center text-gray-500">
          Show our story
        </p>
        <div className="grid grid-cols-2 gap-8 mt-14 sm:gap-0 sm:grid-cols-4">
          <div className="relative w-full">
            <div className="relative flex flex-col w-full">
              <div className="relative">
                <img
                  src={PiscesImages}
                  alt={PiscesImages.name}
                  className="w-11/12 transition-all duration-500 ease-linear cursor-pointer group"
                />
                <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-11/12 overflow-hidden cursor-pointer bg-[#6b56e2] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 flex justify-center items-center">
                  <div className="flex items-center justify-center w-10 h-10 text-lg text-white transition-colors duration-200 ease-linear border border-white border-solid rounded-full hover:bg-white hover:text-black">
                    <BiRightArrowAlt />
                  </div>
                </div>
              </div>
              <div className="mt-2">
                <small className="text-xs font-normal text-gray-500 cursor-pointer">
                  Marketings
                </small>
                <h4 className="text-lg font-bold">We are Pisces</h4>
                <small className="text-xs font-normal text-gray-500 cursor-pointer">
                  by Leah Graves - 21 Aug 2017
                </small>
              </div>
            </div>
          </div>
          <div className="relative w-full">
            <div className="relative flex flex-col w-full">
              <div className="relative">
                <img
                  src={Pisces2Images}
                  alt={Pisces2Images.name}
                  className="w-11/12 cursor-pointer"
                />
                <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-11/12 overflow-hidden cursor-pointer bg-[#6b56e2] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 flex justify-center items-center">
                  <div className="flex items-center justify-center w-10 h-10 text-lg text-white transition-colors duration-200 ease-linear border border-white border-solid rounded-full hover:bg-white hover:text-black">
                    <BiRightArrowAlt />
                  </div>
                </div>
              </div>
              <div className="mt-2">
                <small className="text-xs font-normal text-gray-500 cursor-pointer">
                  Business
                </small>
                <h4 className="text-lg font-bold">Growth your business</h4>
                <small className="text-xs font-normal text-gray-500 cursor-pointer">
                  by Leah Graves - 21 Aug 2017
                </small>
              </div>
            </div>
          </div>
          <div className="relative w-full">
            <div className="relative flex flex-col w-full">
              <div className="relative">
                <img
                  src={Pisces3Images}
                  alt={Pisces3Images.name}
                  className="w-11/12 cursor-pointer"
                />
                <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-11/12 overflow-hidden cursor-pointer bg-[#6b56e2] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 flex justify-center items-center">
                  <div className="flex items-center justify-center w-10 h-10 text-lg text-white transition-colors duration-200 ease-linear border border-white border-solid rounded-full hover:bg-white hover:text-black">
                    <BiRightArrowAlt />
                  </div>
                </div>
              </div>
              <div className="mt-2">
                <small className="text-xs font-normal text-gray-500 cursor-pointer">
                  Design
                </small>
                <h4 className="text-lg font-bold">Impress UX/UI design</h4>
                <small className="text-xs font-normal text-gray-500 cursor-pointer">
                  by Leah Graves - 21 Aug 2017
                </small>
              </div>
            </div>
          </div>
          <div className="relative w-full">
            <div className="relative flex flex-col w-full">
              <div className="relative">
                <img
                  src={Pisces4Images}
                  alt={Pisces4Images.name}
                  className="w-11/12 cursor-pointer"
                />
                <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-11/12 overflow-hidden cursor-pointer bg-[#6b56e2] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 flex justify-center items-center">
                  <div className="flex items-center justify-center w-10 h-10 text-lg text-white transition-colors duration-200 ease-linear border border-white border-solid rounded-full hover:bg-white hover:text-black">
                    <BiRightArrowAlt />
                  </div>
                </div>
              </div>
              <div className="mt-2">
                <small className="text-xs font-normal text-gray-500 cursor-pointer">
                  Corpurate
                </small>
                <h4 className="text-lg font-bold">Handmade craft</h4>
                <small className="text-xs font-normal text-gray-500 cursor-pointer">
                  by Leah Graves - 21 Aug 2017
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
