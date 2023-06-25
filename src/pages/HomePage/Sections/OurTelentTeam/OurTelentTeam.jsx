import React from "react";
import TeamMemberImage from "../../../../assets/images/others/member-3-370x320.jpg";
import TeamMember2Image from "../../../../assets/images/others/member-2-370x320.jpg";
import TeamMember3Image from "../../../../assets/images/others/member-1-370x320.jpg";
import { Link } from "react-router-dom";
export default function OurTelentTeam() {
  return (
    <section className="pt-28">
      <div className="w-full p-20 bg-gray-100">
        <h1 className="text-3xl font-bold tracking-wider text-center">
          Our Talent Team
        </h1>
        <p className="mt-6 text-xs text-center text-gray-500">
          We are digital creative agency
        </p>
        <div className="container max-w-screen-xl mx-auto mt-10">
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div className="w-full group">
              <img
                src={TeamMemberImage}
                alt={TeamMemberImage.name}
                className="rounded-[50px] rounded-br-none grayscale group-hover:grayscale-0"
              />
              <h6 className="text-sm font-bold text-center uppercase cursor-pointer hover:text-[#a394df] mt-2">
                Stanley Rice
              </h6>
              <p className="mt-2 text-xs font-medium text-center text-gray-500">
                CEO/Founder
              </p>
            </div>
            <div className="w-full group">
              <img
                src={TeamMember2Image}
                alt={TeamMember2Image.name}
                className="rounded-[50px] rounded-br-none grayscale group-hover:grayscale-0"
              />
              <h6 className="text-sm font-bold text-center uppercase cursor-pointer hover:text-[#a394df] mt-2">
                Vera Tate
              </h6>
              <p className="mt-2 text-xs font-medium text-center text-gray-500">
                Project Manager
              </p>
            </div>
            <div className="w-full group">
              <img
                src={TeamMember3Image}
                alt={TeamMember3Image.name}
                className="rounded-[50px] rounded-br-none grayscale group-hover:grayscale-0"
              />
              <h6 className="text-sm font-bold text-center uppercase cursor-pointer hover:text-[#a394df] mt-2">
                Linnie Patterson
              </h6>
              <p className="mt-2 text-xs font-medium text-center text-gray-500">
                Project Manager
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-x-2 pt-14">
          <p className="text-sm text-gray-500">
            Do you want join in great team ?
          </p>
          <Link to={``} className="uppercase text-[#a394df]">
            Join Now
          </Link>
        </div>
      </div>
    </section>
  );
}
