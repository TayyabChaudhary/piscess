import React from "react";
import MOneFlagsPng from "../../../../assets/images/logo/m-1-ic-1.png";
import MTwoBulbPng from "../../../../assets/images/logo/m-1-ic-2.png";
import MThreeUsersPng from "../../../../assets/images/logo/m-1-ic-3.png";
import MFourPng from "../../../../assets/images/logo/m-1-ic-4.png";

export default function SectionOne() {
  return (
    <section className="container mx-auto max-w-screen-xl pt-52">
      <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2">
        <div className="w-full flex items-center gap-16">
          <img src={MOneFlagsPng} alt="" />
          <div className="flex flex-col gap-6">
            <h4 className="text-base font-bold">
              Next Generation of WordPress
            </h4>
            <div className="w-10 h-0.5 bg-black"></div>
            <small className="text-xs text-gray-500 font-normal">
              Aliquam scelerisque felis non felis convallis lacinia. <br />{" "}
              Maecenas sed nulla at odio semper
            </small>
          </div>
        </div>
        <div className="w-full flex items-center gap-16">
          <img src={MTwoBulbPng} alt="" />
          <div className="flex flex-col gap-6">
            <h4 className="text-base font-bold">Mordern Design</h4>
            <div className="w-10 h-0.5 bg-black"></div>
            <small className="text-xs text-gray-500 font-normal">
              Maecenas eu massa quis dui commodo egestas. In hac <br />{" "}
              habitasse platea dictumst.
            </small>
          </div>
        </div>
        <div className="w-full flex items-center gap-16 mt-10">
          <img src={MThreeUsersPng} alt="" />
          <div className="flex flex-col gap-6">
            <h4 className="text-base font-bold">Team Work & Brainstorming</h4>
            <div className="w-10 h-0.5 bg-black"></div>
            <small className="text-xs text-gray-500 font-normal">
              Maecenas eu massa quis dui commodo egestas. In hac <br />{" "}
              habitasse platea dictumst.
            </small>
          </div>
        </div>
        <div className="w-full flex items-center gap-16 mt-10">
          <img src={MFourPng} alt="" />
          <div className="flex flex-col gap-6">
            <h4 className="text-base font-bold">Expert Support 24/7</h4>
            <div className="w-10 h-0.5 bg-black"></div>
            <small className="text-xs text-gray-500 font-normal leading-4">
              Quisque vitae arcu sed tortor pretium aliquet ut a turpis. <br />{" "}
              Integer vitae nibh et odio
            </small>
          </div>
        </div>
      </div>
    </section>
  );
}
