import React from 'react'
import LogoImage from "./../../../../assets/images/logo/lp-1.png";
import Logo2Image from "./../../../../assets/images/logo/lp-2.png";
import Logo3Image from "./../../../../assets/images/logo/lp-3.png";
import Logo4Image from "./../../../../assets/images/logo/lp-4.png";
import Logo5Image from "./../../../../assets/images/logo/lp-5.png";
import Logo6Image from "./../../../../assets/images/logo/lp-6.png";

export default function OurPartners() {
  return (
    <section className='pt-36'>
        <div className='container max-w-screen-lg mx-auto'>
            <h1 className='text-4xl font-bold text-center'>
                Our Partners
            </h1>
            <p className='mt-8 text-base text-center text-gray-500'>
            Proin luctus odio ut dolor consectetur cursus. Quisque eget elementum eros, vitae elementum elit. Etiam id <br /> hendrerit orci, ac hendrerit metus. Integer quis elementum nibh
            </p>
        </div>
        <div className="container max-w-screen-lg mx-auto">
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
        <div className='flex justify-center pt-10'>
            <button className='px-10 py-5 text-sm font-bold bg-white rounded-full shadow-lg hover:bg-[#6b56e2] hover:text-white transition-colors ease-linear duration-300'>BECOME PARTNERS</button>
        </div>
      </div>
    </section>
  )
}
