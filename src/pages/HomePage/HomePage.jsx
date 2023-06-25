import React from "react";
import PurpleLogo from "../../assets/images/logo/m1-s-2-1.png";
import SectionOne from "./Sections/SectionOne/SectionOne";
import SectionTwo from "./Sections/SectionTwo/SectionTwo";
import CounterSection from "./Sections/CounterSection/CounterSection";
import SectionFour from "./Sections/SectionFour/SectionFour";
import SectionFiver from "./Sections/SectionFiver/SectionFiver";
import OurTelentTeam from "./Sections/OurTelentTeam/OurTelentTeam";
import LatestBlog from "./Sections/LatestBlog/LatestBlog";
import LogoSections from "./Sections/LogoSections/LogoSections";
import Header from "../../components/Header/Header";

export default function HomePage() {
  return (
    <>
      <main className="min-h-[80vh] bg-center bg-cover bg-no-repeat banner-image">
        <Header />
        <div className="flex justify-center items-center w-full min-h-[80vh]">
        <div className="relative flex flex-col items-center gap-28">
          <h1 className="font-bold text-white text-8xl">Creative</h1>
          <img src={PurpleLogo} className="absolute" alt="" />
          <button className="px-8 py-4 bg-white hover:bg-[#2b2b2b] hover:text-white transition-colors ease-linear duration-300 rounded-full uppercase font-bold text-xs tracking-wider">
            Discover more
          </button>
        </div>
        </div>
      </main>
      <SectionOne />
      <SectionTwo />
      <CounterSection />
      <SectionFour />
      <SectionFiver />
      <OurTelentTeam />
      <LatestBlog />
      <LogoSections />
    </>
  );
}
