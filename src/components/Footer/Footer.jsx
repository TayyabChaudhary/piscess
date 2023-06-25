import React from "react";
import { Link } from "react-router-dom";
import {
  BiLogoFacebook,
  BiLogoTwitter,
  BiLogoPinterestAlt,
  BiLogoLinkedin,
  BiLogoVimeo,
} from "react-icons/bi";
export default function Footer() {
  return (
    <>
      <footer className="bg-[#262626] mt-0 pt-10">
        <div className="container max-w-screen-xl p-4 py-6 mx-auto lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <h4 className="text-sm font-bold text-white">
                WE ARE CREATIVE AGENCY
              </h4>
              <p className="mt-4 text-xs text-gray-500">
                Nunc ut vehicula ante. Donec cursus felis <br /> diam, at
                vulputate ligula sollicitudin at. <br /> Vivamus massa lorem
              </p>
              <div className="flex items-center mt-8 gap-x-8">
                <BiLogoFacebook className="text-xs text-white" />
                <BiLogoTwitter className="text-xs text-white" />
                <BiLogoPinterestAlt className="text-xs text-white" />
                <BiLogoLinkedin className="text-xs text-white" />
                <BiLogoVimeo className="text-xs text-white" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-52 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-white uppercase">
                  comapny
                </h2>
                <ul className="text-[#656565] flex flex-col font-normal text-xs">
                  <li className="mb-3">
                    <a href="!#" className="hover:text-white">
                      About Us
                    </a>
                  </li>
                  <li className="mb-3">
                    <a href="!#" className="hover:text-white">
                      Contact Us
                    </a>
                  </li>
                  <li className="mb-3">
                    <a href="!#" className="hover:text-white">
                      FAQs
                    </a>
                  </li>
                  <li className="mb-3">
                    <a href="!#" className="hover:text-white">
                      Support
                    </a>
                  </li>
                  <li className="mb-3">
                    <a href="!#" className="hover:text-white">
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-white uppercase">
                  rent post
                </h2>
                <ul className="text-[#656565] font-normal text-xs">
                  <li className="mb-4">
                    <a href="!#" className="hover:text-white">
                      Summer Beach
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="!#" className="hover:text-white">
                      Beautiful Workspace
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="!#" className="hover:text-white">
                      Pink Bird
                    </a>
                  </li>
                  <li>
                    <a href="!#" className="hover:text-white">
                      Winter is comming
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  useful link
                </h2>
                <ul className="text-[#656565] text-xs font-normal">
                  <li className="mb-3">
                    <a href="!#" className="hover:text-white">
                      Privacy Policy
                    </a>
                  </li>
                  <li className="mb-3">
                    <a href="!#" className="hover:text-white">
                      Cookoies
                    </a>
                  </li>
                  <li className="mb-3">
                    <a href="!#" className="hover:text-white">
                      Ads Services
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <footer className="bg-[#232324]">
        <div className="w-full max-w-screen-xl p-4 mx-auto md:flex md:items-center md:justify-center">
          <p className="text-xs text-[#565656] sm:text-center">
            © Pisces Theme by LaStudio. All Right Reserved 2017.
          </p>
        </div>
      </footer>
    </>
  );
}
