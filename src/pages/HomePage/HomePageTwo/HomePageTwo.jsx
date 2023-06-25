import React from "react";
import SectionOne from "./SectionOne/SectionOne";
import SectionTwo from "./SectionTwo/SectionTwo";
import ChooseUs from "./ChooseUs/ChooseUs";
import WhatWeWork from "./WhatWeWork/WhatWeWork";
import FeatureWorks from "./FeatureWorks/FeatureWorks";
import OurPartners from "./OurPartners/OurPartners";
import DesignerSection from "./DesignerSection/DesignerSection";
import MeetOurTeam from "./MeetOurTeam/MeetOurTeam";
import JustChange from "./JustChange/JustChange";
import LatestBlog from "./LatestBlog/LatestBlog";
import Header from "../../../components/Header/Header";

export default function HomePageTwo() {
  return (
    <>
      <main className="home-page-two-banner-image bg-center bg-cover bg-no-repeat min-h-[80vh]">
        <Header />
        <div className="flex justify-center items-center min-h-[80vh]">
          <div className="flex flex-col items-center flex-shrink-0 w-full">
            <div className="relative flex items-center w-1/4 py-5">
              <div className="flex-grow border-t border-white"></div>
              <span className="flex-shrink mx-4 text-white uppercase">
                Next Generation Of WordPress
              </span>
              <div className="flex-grow border-t border-white"></div>
            </div>
            <h1 className="font-bold text-white text-8xl">
              Build Anything Visually
            </h1>
            <button className="px-12 py-4 mt-16 text-xs font-bold uppercase bg-white rounded-full hover:bg-[#2b2b2b] hover:text-white">
              Discover Me
            </button>
          </div>
        </div>
      </main>
      <SectionOne />
      <SectionTwo />
      <ChooseUs />
      <WhatWeWork />
      <FeatureWorks />
      <OurPartners />
      <DesignerSection />
      <MeetOurTeam />
      <JustChange />
      <LatestBlog />
    </>
  );
}
