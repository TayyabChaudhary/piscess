import React from "react";
import SecondImage from "../../../../assets/images/others/m-1-pf-2-425x380.jpg";
import FourthImage from "../../../../assets/images/others/m-1-pf-4-425x380.jpg";
import FiveImage from "../../../../assets/images/others/m-1-pf-5-425x380.jpg";
import SixthImage from "../../../../assets/images/others/m-1-pf-6-425x380.jpg";
import SevenImage from "../../../../assets/images/others/m-1-pf-7-425x380.jpg";
import EightImage from "../../../../assets/images/others/m-1-pf-8-425x380.jpg";

export default function FeatureWorks() {
  return (
    <section className="pt-20">
      <div className="container px-4 mx-auto">
        <h6 className="text-center text-gray-500">WHAT WE HAVE DONE</h6>
        <h1 className="mt-2 text-4xl font-bold text-center">Features Works</h1>
      </div>
      <div className="grid grid-cols-2 gap-0 mt-10 sm:gap-0 sm:grid-cols-3">
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
        <div className="relative w-full cursor-pointer">
          <img src={SevenImage} alt="" className="w-full" />
        </div>
        <div className="relative w-full cursor-pointer">
          <img src={EightImage} alt="" className="w-full" />
        </div>
      </div>
    </section>
  );
}
