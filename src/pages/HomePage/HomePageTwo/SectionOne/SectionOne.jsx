import React from "react";
import OfficeImage from "../../../../assets/images/others/m2-i-1.jpg";
export default function SectionOne() {
  return (
    <section className="pt-48">
      <div className="container max-w-screen-xl mx-auto">
        <div className="flex">
          <div className="relative w-full">
            <div className="relative w-full h-80 gradient-color"> </div>
            <div className="absolute top-5 left-5 -right-2">
              <img src={OfficeImage} alt="" />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-5xl font-bold tracking-wide">
              We give Global Solutions
            </h1>
            <div className="flex justify-center pt-2">
              <div className="w-32 h-2 gradient-color"></div>
            </div>
            <p className="w-3/4 mt-10 text-xs text-gray-500">
              Nullam varius porttitor augue id rutrum. Duis vehicula magna at
              magna tempus rhoncus. Maecenas quis lobortis elit, nec faucibus
              augue. Phasellus pellentesque mi ut mauris volutpat pellentesque.
              Donec id leo efficitur, bibendum enim ac, consectetur ex. Ut
              fringilla, sapien a pulvinar iaculis, odio tellus blandit dolor,
              ut commodo neque leo eget ex.
            </p>
            <div className="flex justify-start w-full ml-48">
              <button className="px-10 py-4 mt-6 text-xs font-bold tracking-wide text-white uppercase rounded-full gradient-color">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
