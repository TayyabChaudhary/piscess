import React from "react";
import LogoImage from "./../../../../assets/images/logo/lp-1.png";
import Logo2Image from "./../../../../assets/images/logo/lp-2.png";
import Logo3Image from "./../../../../assets/images/logo/lp-3.png";
import Logo4Image from "./../../../../assets/images/logo/lp-4.png";
import Logo5Image from "./../../../../assets/images/logo/lp-5.png";
import Logo6Image from "./../../../../assets/images/logo/lp-6.png";

export default function LogoSections() {
  return (
    <section className="pt-20 pb-20">
      <div className="flex items-center justify-center w-full h-64 bg-center bg-no-repeat bg-cover logo-bg">
        <div className="flex flex-col items-center gap-6">
          <p className="text-lg font-medium text-center text-white">
            Sed vitae eros a quam malesuada porttitor nec nec orci. Ut <br />{" "}
            lacus augue at tristique at, ornare eget quam.
          </p>
          <b className="text-white">Robert Elliott</b>
          <small className="text-xs text-gray-500">CEO Apple</small>
        </div>
      </div>
      <div className="container max-w-screen-xl mx-auto">
        <div className="grid grid-cols-2 gap-6 mt-14 sm:gap-20 sm:grid-cols-6">
          <div>
            <img src={LogoImage} alt={LogoImage.name} />
          </div>
          <div>
            <img src={Logo2Image} alt={Logo2Image.name} />
          </div>
          <div>
            <img src={Logo3Image} alt={Logo3Image.name} />
          </div>
          <div>
            <img src={Logo4Image} alt={Logo4Image.name} />
          </div>
          <div>
            <img src={Logo5Image} alt={Logo5Image.name} />
          </div>
          <div>
            <img src={Logo6Image} alt={Logo6Image.name} />
          </div>
        </div>
      </div>
    </section>
  );
}
