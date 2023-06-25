import React from "react";
import FirstImage from "../../../../assets/images/others/m-1-pf-1-425x380.jpg";
import SecondImage from "../../../../assets/images/others/m-1-pf-2-425x380.jpg";
import ThirdImage from "../../../../assets/images/others/m-1-pf-3-425x380.jpg";
import FourthImage from "../../../../assets/images/others/m-1-pf-4-425x380.jpg";
import FiveImage from "../../../../assets/images/others/m-1-pf-5-425x380.jpg";
import SixthImage from "../../../../assets/images/others/m-1-pf-6-425x380.jpg";
import SevenImage from "../../../../assets/images/others/m-1-pf-7-425x380.jpg";
import EightImage from "../../../../assets/images/others/m-1-pf-8-425x380.jpg";

export default function SectionTwo() {
  return (
    <>
      <section className="container mx-auto pt-36">
        <div className="flex justify-center">
          <div className="flex flex-col items-center gap-3">
            <h1 className="text-4xl font-bold tracking-wider">
              Featured Works
            </h1>
            <span className="text-sm text-gray-500">We work with passion</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 mt-10 sm:gap-6 sm:grid-cols-4">
          <div className="relative w-full cursor-pointer">
            <img src={FirstImage} alt="" />
          </div>
          <div className="relative w-full cursor-pointer">
            <img src={SecondImage} alt="" />
          </div>
          <div className="relative w-full cursor-pointer">
            <img src={ThirdImage} alt="" />
          </div>
          <div className="relative w-full cursor-pointer">
            <img src={FourthImage} alt="" />
          </div>
          <div className="relative w-full cursor-pointer">
            <img src={FiveImage} alt="" />
          </div>
          <div className="relative w-full cursor-pointer">
            <img src={SixthImage} alt="" />
          </div>
          <div className="relative w-full cursor-pointer">
            <img src={SevenImage} alt="" />
          </div>
          <div className="relative w-full cursor-pointer">
            <img src={EightImage} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
