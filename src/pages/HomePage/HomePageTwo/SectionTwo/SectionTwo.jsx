import React from "react";
export default function SectionTwo() {
  return (
    <section className="pt-32">
      <div className="relative flex justify-center w-full h-[600px] gradient-color">
        <div className="flex flex-col items-center pt-32">
          <h6 className="text-sm font-normal text-white uppercase">
            WEBSITE CREATION NEVER WAS SO EASY
          </h6>
          <h1 className="text-6xl font-bold leading-[80px] text-center text-white">Powerful Functionalities <br /> & Practical Options</h1>
        </div>
        <div className="absolute bottom-0 w-full h-40 bg-center bg-no-repeat bg-cover user__social__image">
          {" "}
        </div>
      </div>
    </section>
  );
}
