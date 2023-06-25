import React from "react";

export default function ChooseUs() {
  return (
    <section className="pt-32">
      <div className="container max-w-screen-xl mx-auto">
        <div className="flex justify-center">
          <h1 className="text-4xl font-bold">Why should choose us ?</h1>
        </div>
        <div className="grid grid-cols-2 gap-8 mt-24 sm:gap-6 sm:grid-cols-3">
          <div className="w-full group">
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center justify-center w-20 h-20 transition-colors duration-300 ease-linear border border-gray-300 border-solid rounded-full group-hover:bg-black"></div>
              <h4 className="text-lg font-bold">No Code Required</h4>
              <p className="text-sm text-center text-gray-500">
                Aliquam scelerisque felis non felis convallis lacinia. <br />{" "}
                Maecenas sed nulla at odio
              </p>
            </div>
          </div>
          <div className="w-full group">
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center justify-center w-20 h-20 transition-colors duration-300 ease-linear border border-gray-300 border-solid rounded-full group-hover:bg-black"></div>
              <h4 className="text-lg font-bold">Smart UX/UI</h4>
              <p className="text-sm text-center text-gray-500">
                Aliquam scelerisque felis non felis convallis lacinia. <br />{" "}
                Maecenas sed nulla at odio
              </p>
            </div>
          </div>
          <div className="w-full group">
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center justify-center w-20 h-20 transition-colors duration-300 ease-linear border border-gray-300 border-solid rounded-full group-hover:bg-black"></div>
              <h4 className="text-lg font-bold">Expert Support</h4>
              <p className="text-sm text-center text-gray-500">
                Aliquam scelerisque felis non felis convallis lacinia. <br />{" "}
                Maecenas sed nulla at odio
              </p>
            </div>
          </div>
          <div className="w-full mt-12 group">
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center justify-center w-20 h-20 transition-colors duration-300 ease-linear border border-gray-300 border-solid rounded-full group-hover:bg-black"></div>
              <h4 className="text-lg font-bold">Visual Page Builder</h4>
              <p className="text-sm text-center text-gray-500">
                Aliquam scelerisque felis non felis convallis lacinia. <br />{" "}
                Maecenas sed nulla at odio
              </p>
            </div>
          </div>
          <div className="w-full mt-12 group">
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center justify-center w-20 h-20 transition-colors duration-300 ease-linear border border-gray-300 border-solid rounded-full group-hover:bg-black"></div>
              <h4 className="text-lg font-bold">Optimized Speed</h4>
              <p className="text-sm text-center text-gray-500">
                Aliquam scelerisque felis non felis convallis lacinia. <br />{" "}
                Maecenas sed nulla at odio
              </p>
            </div>
          </div>
          <div className="w-full mt-12 group">
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center justify-center w-20 h-20 transition-colors duration-300 ease-linear border border-gray-300 border-solid rounded-full group-hover:bg-black"></div>
              <h4 className="text-lg font-bold">Real - Time Design</h4>
              <p className="text-sm text-center text-gray-500">
                Aliquam scelerisque felis non felis convallis lacinia. <br />{" "}
                Maecenas sed nulla at odio
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
