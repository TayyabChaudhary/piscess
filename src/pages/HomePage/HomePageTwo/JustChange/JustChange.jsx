import React from "react";
import ApplePCImage from "../../../../assets/images/others/m2-mockup-1.png";
export default function JustChange() {
  return (
    <section className="pt-32">
      <div className="w-full h-auto p-28 gradient-color">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <img src={ApplePCImage} alt="" />
            </div>
            <div className="flex flex-col items-center">
              <h6 className="text-xl text-gray-300">MAKE DREAM COME TRUE</h6>
              <h1 className="text-6xl font-bold leading-tight text-center text-white">
              Are you ready just  <br /> the future ?
              </h1>
              <p className="mt-4 text-xs text-white">
              Proin luctus odio ut dolor consectetur cursus. Quisque eget elementum eros, vitae elementum elit. Etiam id hendrerit orci,
              </p>
              <p className="mt-4 text-xs text-white">
              ac hendrerit metus. Integer quis elementum nibh
              </p>
              <button className="px-12 py-4 mt-10 hover:bg-[#6b56e2] hover:text-white text-xs font-bold uppercase transition-colors duration-300 ease-linear bg-white rounded-full">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
