import React, { useEffect, useState } from 'react'
import { BiCartAlt, BiMenuAltLeft, BiSearch, BiX } from "react-icons/bi";
export default function Header() {
  const [searchOverlay, setsearchOverlay] = useState(false);
  const [navbarScrolled, setnavbarScrolled] = useState(false);

  useEffect(() => {
    const handleNavbarScrolled = () => {
      if (window.scrollY > 0) {
        setnavbarScrolled(true);
      } else {
        setnavbarScrolled(false);
      }
    }
    window.addEventListener("scroll", handleNavbarScrolled);
    return () => {
      window.removeEventListener("scroll", handleNavbarScrolled);
    }
  }, [])

  return (
    <>
      <header className={navbarScrolled ? 'fixed top-0 left-0 right-0 w-full z-50 bg-white shadow transition-colors ease-linear duration-500' : "bg-transparent"}>
        <div class="container mx-auto px-4 py-6 flex items-center justify-between">
          <a href="/" class="font-bold text-xl">P</a>
          <nav>
            <ul class="flex items-center justify-center font-semibold">
              <li class="relative group px-7 py-2">
                <button class={`hover:text-[#6b56e2] hover:border-t-2 border-solid border-[#6b56e2] cursor-pointer ${navbarScrolled ? "text-black" : "text-white"}`}>Home</button>
                <div
                  class="absolute top-0 -left-48 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[560px] transform">
                  <div class="relative top-16 p-6 bg-white w-full">
                    <div class="relative z-10">
                      <div class="grid grid-cols-4 gap-6">
                        <div>

                          <ul class="mt-3 text-[15px]">
                            <li>
                              <a href="#"
                                class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600">
                                Course Editor
                                <p class="text-gray-500 font-normal">All-in-one editor</p>
                              </a>
                            </li>
                            <li>
                              <a href="#"
                                class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600">
                                Accept payments
                                <p class="text-gray-500 font-normal">Pre-build payments page</p>
                              </a>
                            </li>
                            <li>
                              <a href="#"
                                class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600">
                                Closed Captioning
                                <p class="text-gray-500 font-normal">Use AI to generate captions</p>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <p class="uppercase tracking-wider text-gray-500 font-medium text-[13px]">Extensions</p>
                          <ul class="mt-3 text-[15px]">
                            <li>
                              <a href="#"
                                class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600">
                                Plugins
                                <p class="text-gray-500 font-normal">Tweak existing functionality</p>
                              </a>
                            </li>
                            <li>
                              <a href="#"
                                class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600">
                                Batch uploads
                                <p class="text-gray-500 font-normal">Get your time back</p>
                              </a>
                            </li>
                            <li>
                              <a href="#"
                                class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600">
                                Social sharing
                                <p class="text-gray-500 font-normal">Generate content for socials</p>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li class="relative group px-7 py-2">
                <button class={`hover:text-[#6b56e2] hover:border-t-2 border-solid border-[#6b56e2] cursor-ponter ${navbarScrolled ? "text-black" : "text-white"}`}>Shop</button>
                <div
                  class="absolute top-0 -left-2 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[260px] transform">
                  <div class="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                    <div
                      class="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 -translate-x-4 transition-transform group-hover:translate-x-3 duration-500 ease-in-out rounded-sm">
                    </div>
                    <div class="relative z-10">
                      <p class="uppercase tracking-wider text-gray-500 font-medium text-[13px]">Use cases</p>
                      <ul class="mt-3 text-[15px]">
                        <li>
                          <a href="#"
                            class="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block">
                            Creators
                          </a>
                        </li>
                        <li>
                          <a href="#"
                            class="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block">
                            Streamers
                          </a>
                        </li>
                        <li>
                          <a href="#"
                            class="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block">
                            Influence
                          </a>
                        </li>
                        <li>
                          <a href="#"
                            class="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block">
                            Programming
                          </a>
                        </li>
                        <li>
                          <a href="#"
                            class="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block">
                            Design
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li class="relative group px-7 py-2">
                <button class={`hover:text-[#6b56e2] hover:border-t-2 border-solid border-[#6b56e2] cursor-pointer ${navbarScrolled ? "text-black" : "text-white"}`}>Pages</button>
                <div
                  class="absolute top-0 -left-48 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[560px] transform">
                  <div class="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                    <div
                      class="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12.65rem] duration-500 ease-in-out rounded-sm">
                    </div>

                    <div class="relative z-10">
                      <a href="#"
                        class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600">
                        Documentation
                        <p class="text-gray-500 font-normal">Start integrating in no time</p>
                      </a>
                      <div class="mt-6 grid grid-cols-2 gap-6">
                        <div>
                          <p class="uppercase tracking-wider text-gray-500 font-medium text-[13px]">Get started</p>
                          <ul class="mt-3 text-[15px]">
                            <li>
                              <a href="#" class="text-gray-600 hover:text-gray-800 py-1 block font-normal">
                                Libraries and SDKs
                              </a>
                            </li>
                            <li>
                              <a href="#" class="text-gray-600 hover:text-gray-800 py-1 block font-normal">
                                Plugins
                              </a>
                            </li>
                            <li>
                              <a href="#" class="text-gray-600 hover:text-gray-800 py-1 block font-normal">
                                Code samples
                              </a>
                            </li>
                            <li>
                              <a href="#" class="text-gray-600 hover:text-gray-800 py-1 block font-normal">
                                Tutorials
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <p class="uppercase tracking-wider text-gray-500 font-medium text-[13px]">Guides</p>
                          <ul class="mt-3 text-[15px]">
                            <li>
                              <a href="#" class="text-gray-600 hover:text-gray-800 py-1 block font-normal">
                                Accept online payments
                              </a>
                            </li>
                            <li>
                              <a href="#" class="text-gray-600 hover:text-gray-800 py-1 block font-normal">
                                Editing video like a pro
                              </a>
                            </li>
                            <li>
                              <a href="#" class="text-gray-600 hover:text-gray-800 py-1 block font-normal">
                                Automation techniques
                              </a>
                            </li>
                            <li>
                              <a href="#" class="text-gray-600 hover:text-gray-800 py-1 block font-normal">
                                Create stunning effects
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li class="relative group px-7 py-2">
                <button class={`hover:text-[#6b56e2] hover:border-t-2 border-solid border-[#6b56e2] cursor-pointer ${navbarScrolled ? "text-black" : "text-white"}`}>Blog</button>
                <div
                  class="absolute top-0 -left-2 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[200px] transform">
                  <div class="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                    <div
                      class="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 -translate-x-4 transition-transform group-hover:translate-x-3 duration-500 ease-in-out rounded-sm">
                    </div>
                    <div class="relative z-10">
                      <ul class="text-[15px]">
                        <li>
                          <a href="#" class="text-gray-600 hover:text-gray-800 py-1 block font-normal">
                            Get Support
                          </a>
                        </li>
                        <li>
                          <a href="#" class="text-gray-600 hover:text-gray-800 py-1 block font-normal">
                            Blog
                          </a>
                        </li>
                        <li>
                          <a href="#" class="text-gray-600 hover:text-gray-800 py-1 block font-normal">
                            Case Studies
                          </a>
                        </li>
                        <li>
                          <a href="#" class="text-gray-600 hover:text-gray-800 py-1 block font-normal">
                            Guides
                          </a>
                        </li>
                        <li>
                          <a href="#" class="text-gray-600 hover:text-gray-800 py-1 block font-normal">
                            News &amp; Events
                          </a>
                        </li>
                      </ul>


                    </div>
                  </div>
                </div>
              </li>
              <li class="relative group px-7 py-2">
                <button class={`hover:opacity-50 cursor-pinter hover:text-[#6b56e2] hover:border-t-2 border-solid border-[#6b56e2] ${navbarScrolled ? "text-black" : "text-white"}`}>Protfolio</button>
                <div
                  class="absolute top-0 -left-2 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[200px] transform">
                  <div class="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                    <div
                      class="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 -translate-x-4 transition-transform group-hover:translate-x-3 duration-500 ease-in-out rounded-sm">
                    </div>
                    <div class="relative z-10">
                      <ul class="text-[15px]">
                        <li>
                          <a href="#" class="text-gray-600 hover:text-gray-800 py-1 block font-normal">
                            Get Support
                          </a>
                        </li>
                        <li>
                          <a href="#" class="text-gray-600 hover:text-gray-800 py-1 block font-normal">
                            Blog
                          </a>
                        </li>
                        <li>
                          <a href="#" class="text-gray-600 hover:text-gray-800 py-1 block font-normal">
                            Case Studies
                          </a>
                        </li>
                        <li>
                          <a href="#" class="text-gray-600 hover:text-gray-800 py-1 block font-normal">
                            Guides
                          </a>
                        </li>
                        <li>
                          <a href="#" class="text-gray-600 hover:text-gray-800 py-1 block font-normal">
                            News &amp; Events
                          </a>
                        </li>
                      </ul>


                    </div>
                  </div>
                </div>
              </li>
              <li class="relative group px-7 py-2">
                <button class="hover:text-[#6b56e2] hover:border-t-2 border-solid border-[#6b56e2] cursor-pointer text-white">Elements</button>
                <div
                  class="absolute top-0 -left-2 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[200px] transform">
                  <div class="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                    <div
                      class="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 -translate-x-4 transition-transform group-hover:translate-x-3 duration-500 ease-in-out rounded-sm">
                    </div>
                    <div class="relative z-10">
                      <ul class="text-[15px]">
                        <li>
                          <a href="#" class="text-gray-600 hover:text-gray-800 py-1 block font-normal">
                            Get Support
                          </a>
                        </li>
                        <li>
                          <a href="#" class="text-gray-600 hover:text-gray-800 py-1 block font-normal">
                            Blog
                          </a>
                        </li>
                        <li>
                          <a href="#" class="text-gray-600 hover:text-gray-800 py-1 block font-normal">
                            Case Studies
                          </a>
                        </li>
                        <li>
                          <a href="#" class="text-gray-600 hover:text-gray-800 py-1 block font-normal">
                            Guides
                          </a>
                        </li>
                        <li>
                          <a href="#" class="text-gray-600 hover:text-gray-800 py-1 block font-normal">
                            News &amp; Events
                          </a>
                        </li>
                      </ul>


                    </div>
                  </div>
                </div>
              </li>

            </ul>
          </nav>
          <nav>
            <ul className='flex space-x-3'>
              <li>
                <BiCartAlt className={`text-xl cursor-pointer hover:text-[#6b56e2] ${navbarScrolled ? "text-black" : "text-white"}`} />
              </li>
              <li>
                <BiMenuAltLeft className={`text-xl cursor-pointer hover:text-[#6b56e2] ${navbarScrolled ? "text-black" : "text-white"}`} />
              </li>
              <li onClick={() => setsearchOverlay(true)}>
                <BiSearch className={`text-xl cursor-pointer hover:text-[#6b56e2] ${navbarScrolled ? "text-black" : "text-white"}`} />
              </li>
            </ul>
          </nav>
        </div>
      </header>
      {searchOverlay ?
        <div className='search__overlay fixed top-0 left-0 right-0 bottom-0 transition-opacity ease-linear duration-150 bg-white bg-opacity-90 inset-0 z-50 flex justify-center items-center'>
          <div className='container mx-auto max-w-screen-lg relative'>
            <button className='absolute right-0 -top-60' onClick={() => setsearchOverlay(false)}>
              <BiX className='text-6xl cursor-pointer hover:rotate-90' />
            </button>
            <div className='flex flex-col w-full flex-shrink-0'>
              <span className='text-xs text-gray-500 text-center'>Start typing and press Enter to search</span>
              <div className='flex justify-center items-center w-full flex-shrink-0 relative'>
                <input type="text" className='w-2/3 bg-transparent border-b-2 outline-none text-center border-solid mt-10 border-black py-4 text-2xl font-normal' placeholder='Search entire Store...' />
                <BiSearch className='text-2xl absolute right-44 bottom-4' />
              </div>
            </div>
          </div>
        </div> : null}
    </>
  )
}
