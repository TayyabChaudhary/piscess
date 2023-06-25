import React from "react";

export default function WhatWeWork() {
  return (
    <>
      <section className="pt-32">
        <div className="flex items-center w-full bg-center bg-no-repeat bg-cover h-[600px] what-we-work">
          <div className="container max-w-screen-lg mx-auto">
            <div className="grid items-center grid-cols-2 gap-8 sm:gap-64 sm:grid-cols-2">
              <div className="w-full">
                <h1 className="text-4xl font-bold text-white">
                  What we work ?
                </h1>
                <p className="mt-4 text-sm text-gray-300">
                  Nullam varius porttitor augue id rutrum. Duis vehicula magna
                  at magna tempus rhoncus. Maecenas quis lobortis elit, nec
                  faucibus augue. Phasellus pellentesque mi ut mauris volutpat
                </p>
              </div>
              <div className="w-full">
                <p className="text-xs text-white">Creative Design</p>
                <div className="w-full h-2 mt-2 mb-8 bg-gray-200"></div>
                <p className="text-xs text-white">UX/UI Design</p>
                <div className="w-full h-2 mt-2 mb-8 bg-gray-200"></div>
                <p className="text-xs text-white">WordPress Development</p>
                <div className="w-full h-2 mt-2 mb-8 bg-gray-200"></div>
                <p className="text-xs text-white">Marketing Online</p>
                <div className="w-full h-2 mt-2 mb-8 bg-gray-200"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
