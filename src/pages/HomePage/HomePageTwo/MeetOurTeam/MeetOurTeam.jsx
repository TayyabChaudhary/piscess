import React from "react";
import TeamMemberImage from "../../../../assets/images/others/member-3-370x320.jpg";
import TeamMember2Image from "../../../../assets/images/others/member-2-370x320.jpg";
import TeamMember3Image from "../../../../assets/images/others/member-1-370x320.jpg";
export default function MeetOurTeam() {
  return (
    <section className="pt-20">
      <div className="container max-w-screen-xl mx-auto mt-10">
        <h1 className="text-2xl font-bold text-center">Meet Our Team</h1>
        <div className="grid grid-cols-2 gap-8 mt-12 sm:gap-6 sm:grid-cols-3">
          <div className="w-full group">
            <img
              src={TeamMemberImage}
              alt={TeamMemberImage.name}
              className="grayscale group-hover:grayscale-0"
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
              className="grayscale group-hover:grayscale-0"
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
              className="grayscale group-hover:grayscale-0"
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
    </section>
  );
}
