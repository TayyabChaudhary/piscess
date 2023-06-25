import React from "react";
import IconPlayImage from "../../../../assets/icons/icon-play.png";

export default function SectionFiver() {
  return (
    <section className="pt-20">
      <div className="flex items-center justify-center w-full p-20 bg-center bg-no-repeat bg-cover next-generation">
        <div className="flex flex-col items-center gap-10">
          <h2 className="text-3xl font-bold tracking-wider text-white">
            Next Generation of WordPress
          </h2>
          <p className="text-xs font-medium text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <img src={IconPlayImage} className="cursor-pointer" alt="" />
        </div>
      </div>
      {/* ============== We Give Goal Section ============= */}
      <div className="container max-w-screen-xl pt-20 mx-auto">
        <div className="flex flex-col w-full gap-20 2xl:flex-row xl:flex-row md:flex-row lg:flex-row">
          <div className="flex flex-col w-full">
            <h2 className="text-2xl font-bold tracking-wider">
              We give Global Solutions
            </h2>
            <p className="mt-3 text-xs tracking-wider text-gray-500">
              Nullam varius porttitor augue id rutrum. Duis vehicula magna at
              magna tempus rhoncus. Maecenas quis lobortis elit, nec faucibus
              augue.
            </p>
            <p className="mt-10 text-xs tracking-wider text-gray-500">
              Phasellus pellentesque mi ut mauris volutpat pellentesque. Donec
              id leo efficitur, bibendum enim ac, consectetur ex. Ut fringilla,
              sapien a pulvinar iaculis, odio tellus blandit dolor, ut commodo
              neque leo eget ex.
            </p>
          </div>
          <div className="flex flex-col w-full">
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-500">Speed Optimized</span>
              <span className="text-xs text-gray-500">95%</span>
            </div>
            <div className="w-full h-2 mt-5 bg-gray-100">
              <div className="w-[95%] h-full bg-black"></div>
            </div>
            <div className="flex items-center justify-between mt-6">
              <span className="text-xs text-gray-500">Creative Design</span>
              <span className="text-xs text-gray-500">90%</span>
            </div>
            <div className="w-full h-2 mt-3 bg-gray-100">
              <div className="w-[90%] h-full bg-black"></div>
            </div>
            <div className="flex items-center justify-between mt-6">
              <span className="text-xs text-gray-500">Marketing</span>
              <span className="text-xs text-gray-500">82%</span>
            </div>
            <div className="w-full h-2 mt-3 bg-gray-100">
              <div className="w-[82%] h-full bg-black"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
