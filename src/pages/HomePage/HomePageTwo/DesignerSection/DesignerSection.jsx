import React from "react";
import UserImage from "../../../../assets/images/others/m2-bg-3.jpg";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
export default function DesignerSection() {
  return (
    <section className="pt-32">
      <div className="flex w-full">
        <div className="w-full">
          <img src={UserImage} alt="" />
        </div>
        <div className="flex items-center justify-center w-full h-auto p-28 leading-[60px] bg-gray-100">
          <div className="flex flex-col items-center gap-10">
            <BiSolidQuoteAltLeft className="text-4xl" />
            <h1 className="font-serif text-6xl italic text-center">
              Sed vitae eros a quam malesuada porttitor nec nec orci. Ut lacus
              augue at tristique at, ornare eget quam.
            </h1>
            <button className="px-6 py-3 text-xs font-bold text-white gradient-color">
              GILBERT NORTON . DESIGNER
            </button>
          </div>
        </div>
      </div>

      
    </section>
  );
}
