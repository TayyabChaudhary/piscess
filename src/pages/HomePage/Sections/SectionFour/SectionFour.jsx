import React from "react";
import UserGroupImage from "../../../../assets/images/others/m-1-b-1.png";
import UserGroup2Image from "../../../../assets/images/others/m-1-b-2.png";
import UserGroup3Image from "../../../../assets/images/others/m-1-b-3.png";


export default function SectionFour() {
  return (
    <section>
      <div className="container mx-auto grid grid-cols-2 gap-8 sm:gap-28 sm:grid-cols-3 mt-16 mb-16">
        <div className="w-full group">
          <div className="flex flex-col items-center">
            <img src={UserGroupImage} className="grayscale opacity-30 group-hover:opacity-100 group-hover:grayscale-0 transition-colors ease-linear duration-500" alt="" />
            <h1 className="text-2xl font-bold mt-10 mb-4">We are Pisces</h1>
            <p className="text-xs text-center text-gray-500 leading-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              lacinia lacus a neque malesuada, sed finibus augu
            </p>
            <button className="border border-solid border-gray-300 rounded-full
            flex justify-center items-center px-10 text-sm uppercase font-medium mt-4
            py-4 transition-colors ease-linear duration-300 hover:bg-[#6b56e2] hover:text-white
            hover:border-[#6b56e2] group-hover:bg-[#6b56e2] group-hover:text-white">
                Discover more
            </button>
          </div>
        </div>
        <div className="w-full group">
          <div className="flex flex-col items-center">
            <img src={UserGroup2Image} className="grayscale opacity-30 group-hover:opacity-100 group-hover:grayscale-0 transition-colors ease-linear duration-500" alt="" />
            <h1 className="text-2xl font-bold mt-10 mb-4">Our Values</h1>
            <p className="text-xs text-center text-gray-500 leading-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              lacinia lacus a neque malesuada, sed finibus augu
            </p>
            <button className="border border-solid border-gray-300 rounded-full
            flex justify-center items-center px-10 text-sm uppercase font-medium mt-4
            py-4 transition-colors ease-linear duration-300 hover:bg-[#6b56e2] hover:text-white
            hover:border-[#6b56e2] group-hover:bg-[#6b56e2] group-hover:text-white">
                Discover more
            </button>
          </div>
        </div>
        <div className="w-full group">
          <div className="flex flex-col items-center">
            <img src={UserGroup3Image} className="grayscale opacity-30 group-hover:opacity-100 group-hover:grayscale-0 transition-colors ease-linear duration-500" alt="" />
            <h1 className="text-2xl font-bold mt-10 mb-4">Our Philosophy</h1>
            <p className="text-xs text-center text-gray-500 leading-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              lacinia lacus a neque malesuada, sed finibus augu
            </p>
            <button className="border border-solid border-gray-300 rounded-full
            flex justify-center items-center px-10 text-sm uppercase font-medium mt-4
            py-4 transition-colors ease-linear duration-300 hover:bg-[#6b56e2] hover:text-white
            hover:border-[#6b56e2] group-hover:bg-[#6b56e2] group-hover:text-white">
                Discover more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
