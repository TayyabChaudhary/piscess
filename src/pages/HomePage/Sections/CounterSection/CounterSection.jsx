import React from "react";

export default function CounterSection() {
  return (
    <>
      <section className="pt-32">
        <div className="border-t border-solid border-gray-200"></div>
        <div className="container mx-auto grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-4 mt-16 mb-16">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl text-gray-500">2524</h1>
            <small className="text-sm text-gray-500">Cup of Coffee</small>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-3xl text-gray-500">165</h1>
            <small className="text-sm text-gray-500">Portfolio Layouts</small>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-3xl text-gray-500">176</h1>
            <small className="text-sm text-gray-500">Amazing Elements</small>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-3xl text-gray-500">254</h1>
            <small className="text-sm text-gray-500">Working Hours</small>
          </div>
        </div>
        <div className="border-t border-solid border-gray-200"></div>
      </section>
    </>
  );
}
