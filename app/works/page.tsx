'use client';
import Navbar from "@/components/navbar";
import PageTransition from "@/components/PageTransition";
import DarkToggle from "@/components/darktoggle";
import Image from "next/image";

export default function Home() {
  return (
    <PageTransition>
        <div className="min-h-screen bg-white dark:bg-black py-12 px-4">

          <div className="md:hidden sticky bottom-6 right-6 z-50">
            <DarkToggle />
          </div>

          <button 
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
            className="fixed bottom-6 right-6 bg-black dark:bg-white text-white dark:text-black p-3 rounded-full md:hidden z-[9999]"
          >
            ↑
          </button>
          
          <div className="max-w-6xl mx-auto grid grid-cols-10 md:grid-cols-8 gap-4">
            <div className="hidden md:block md:fixed md:top-12 md:right-12 md:z-50">
            <DarkToggle />
            </div>

            
              <div className="col-start-1 col-span-10 md:col-start-3 md:col-span-4 text-center">
                <div>
                    <Navbar/>
                </div>

                <div>
                    <p className="font-serif text-xl font-normal mb-2 md:mb-10 text-black dark:text-white"><span className=" font-normal text-[#ae1f23]">minh</span> is a multidisciplinary designer, coder based in Hanoi, Vietnam but
                    currently residing in Dallas, TX.</p>
                </div>
              </div>

              <div  id="chaffee" className="col-start-1 col-span-10 md:col-start-2 md:col-span-6 b-12 border-b border-black dark:border-white">
              </div>

              <div className="col-start-1 col-span-10 md:col-start-2 md:col-span-6 md:mt-1 mt-0">
                <div className="mb-10 md:mb-20">
                  <h2 className="font-serif text-xl md:text-2xl font-semibold text-black dark:text-white">Chaffee Art Museum App{" "}
                      <span className="font-serif hidden md:inline md:text-base text-[#787878] font-normal">(Product/User Experience Design)</span></h2>
                      <div className="md:hidden font-serif text-base font-normal text-[#787878]">(Product/User Experience Design)</div>
                      <div className="hidden md:block font-serif text-xl font-medium underline italic text-[#047DFE] dark:text-white md:mb-4"><a href="/casestudy">full case study here!</a></div>
                      <div className="md:hidden block font-serif text-xl font-medium underline italic mb-4 text-[#047DFE] dark:text-white"><a href="/casestudy">full case study here!</a></div> 
                    <div className="mx-auto space-y-3 md:grid md:grid-cols-5 md:gap-5 md:mt-6">
                      <div className="col-start-1 col-span-3">
                        <div className="font-serif text-base font-normal text-black dark:text-white space-y-4">
                          <p>Chaffee Art Museum is more than just a museum; it&apos;s a community pillar. To support its mission, I set out to build an app that simplifies the visitor experience—tackling everything from easy scheduling to immersive storytelling.</p>
                          <p>This was my first time "dabbling" in the world of apps. My workflow stay the same compared to doing other types of project like editorial or branding, what actually is different is the times that I have to remind myself about who I am designing for and putting myself in the users&apos; shoes, and a lot, a lot of iterations, constant iterations in order to create a mindful solution.</p>
                        </div>
                        
                        <div className="mt-3 aspect-[4/3] relative">
                          <Image
                          src="/images/screenstest.jpg"
                          alt="Screens Mockup"
                          fill
                          className="object-cover"
                        />
                        </div>
                     
                      </div>
                      <div className="col-span-2 flex flex-col gap-3 md:gap-5">
                        {/* Top image - 1:1 aspect */}
  
                        <div className="aspect-[1/1] relative">
                          <Image
                            src="/images/ob2.jpg"
                            alt="Onboarding Screen"
                            fill
                            className="object-cover"
                          />
                        </div>  
                        
                        {/* Bottom image - 1:3 aspect (taller) */}
                        <div className="aspect-[1.8/2.6] relative">
                          <Image
                            src="/images/eventdetailmock.jpg"
                            alt="Event Detail Screen"
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                  </div>
                </div>

                  <div id="tuttle" className="col-start-1 col-span-10 md:col-start-2 md:col-span-6 b-12 border-b border-black dark:border-white">
                  </div>

                  <div className="mt-4 md:mt-5 mb-10 md:mb-20">
                    <h2 className="font-serif text-xl md:text-2xl font-semibold text-black dark:text-white">Tuttle Publishing Assets{" "}
                      <span className="font-serif hidden md:inline md:text-base text-[#787878] font-normal">(Print and digital, Graphic Design)</span></h2>
                      <div className="md:hidden font-serif text-base mb-4 font-normal text-[#787878]">(Print and digital, Graphic Gesign)</div> 
                    <div className="mx-auto space-y-3 md:grid md:grid-cols-5 md:gap-5 md:mt-6">
                      <div className="col-start-1 col-span-3 space-y-4">
                        <p className="col-start-1 col-span-3 font-serif text-base md:text-base font-normal text-black dark:text-white">In the summer of 2025, i had the opportunity to work with <a href="https://www.tuttlepublishing.com/" className="underline hover:opacity-70 transition-opacity">Tuttle Publishing</a>, one of the oldest publishers in the u.s. and a leading name in asian culture publications.</p>
                        <p className="col-start-1 col-span-3 font-serif text-base md:text-base font-normal text-black dark:text-white"> My daily responsibilities included designing amazon A+ pages for both 
                          frontlist and backlist titles, creating bookmarks and promotional materials for Publisher&apos;s Weekly and Library Journal.</p>
                        <div className="mt-3 aspect-[4/3] relative">
                          <Image
                          src="/images/tuttle.JPG"
                          alt="Tuttle Images"
                          fill
                          className="object-cover"
                        />
                        </div>                     
                      </div>
                      <div className="col-span-2 grid grid-rows-2 gap-3 md:gap-5">
                        {/* Top small image */}
                        <div className="aspect-[1/1] relative">
                          <Image
                            src="/images/fullad.jpg"
                            alt="Full Page Ad"
                            fill
                            className="object-cover"
                          />
                        </div>
                        
                        {/* Bottom small image */}
                        <div className="aspect-[1/1] relative">
                          <Image
                            src="/images/green.jpg"
                            alt="Half Page Ad"
                            fill
                            className="object-cover"
                          />
                        </div>
                    </div>
                    </div>
                </div>

                <div id="publication1" className="col-start-1 col-span-10 md:col-start-2 md:col-span-6 b-12 border-b border-black dark:border-white">
                </div>


                <div className="mt-4 md:mt-5 mb-10 md:mb-20">
                  <h2 className="font-serif text-xl md:text-2xl font-semibold text-black dark:text-white">Publication #1{" "}
                    <span className="font-serif hidden md:inline md:text-base text-[#787878] font-normal">(Editorial, Graphic design)</span></h2>
                    <div className="md:hidden font-serif mb-4 text-base font-normal text-[#787878]">(Editorial, Graphic design)</div>
                    <div className="mx-auto space-y-3 md:grid md:grid-cols-4 md:gap-5 md:mt-6">
                      <p className="col-start-1 col-span-4 font-serif text-base md:text-base font-normal text-black dark:text-white">Shot entirely on two disposable cameras, this zine documents my brother&apos;s wedding through candid, run-and-gun moments. 
                        the raw, unfiltered images reveal an intimate look at the beauty and traditions of a Vietnamese wedding.</p>
                    <div className="col-start-1 col-span-2 space-y-3 md:space-y-5">
                      <div className="aspect-[4/3] relative">
                          <Image
                          src="/images/cuoi1.jpg"
                          alt="Wedding Photozine"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="aspect-[4/3] relative">
                          <Image
                          src="/images/cuoi3.jpg"
                          alt="Wedding Photozine"
                          fill
                          className="object-cover"
                        />
                      </div>                     
                    </div>
                    <div className="col-span-2 grid grid-rows-2 gap-3 md:gap-5">
                      <div className="aspect-[4/3] relative">
                        <Image
                          src="/images/cuoi2.jpg"
                          alt="Wedding Photozine"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="aspect-[4/3] relative">
                        <Image
                          src="/images/cuoi4.jpg"
                          alt="Wedding Photozine"
                          fill
                          className="object-cover"
                        />
                      </div>
                  </div>
                  </div>
                </div>

                <div id="publication2" className="col-start-1 col-span-10 md:col-start-2 md:col-span-6 b-12 border-b border-black dark:border-white">
                </div>

                <div className="mt-4 md:mt-5 mb-10 md:mb-20">
                  <h2 className="font-serif text-xl md:text-2xl font-semibold text-black dark:text-white">Publication #2 
                    <span className="font-serif hidden md:inline md:text-base text-[#787878] font-normal"> (Editorial, Graphic Design)</span></h2>
                    <div className="md:hidden font-serif mb-4 text-base font-normal text-[#787878]">(Editorial, Graphic Design)</div>
                    <div className="mx-auto space-y-3 md:grid md:grid-cols-4 md:gap-5 md:mt-6">
                      <p className="col-start-1 col-span-4 font-serif text-base md:text-base font-normal text-black dark:text-white">Provo</p>
                      <div className="aspect-[4/3] relative col-start-1 col-span-4">
                          <Image
                          src="/images/noten1.jpg"
                          alt="Noten Zine"
                          fill
                          className="object-cover"
                        />
                      </div>  
                    <div className="col-start-1 col-span-2 space-y-3 md:space-y-5">
                      <div className="aspect-[4/3] relative">
                          <Image
                          src="/images/noten2.jpg"
                          alt="Noten Zine"
                          fill
                          className="object-cover"
                        />
                      </div>                 
                    </div>
                    <div className="col-span-2">
                      <div className="aspect-[4/3] relative">
                        <Image
                          src="/images/noten3.jpg"
                          alt="Noten Zine"
                          fill
                          className="object-cover"
                        />
                      </div>
                  </div>
                  </div>
                </div>

                <div id="publication3" className="col-start-1 col-span-10 md:col-start-2 md:col-span-6 b-12 border-b border-black dark:border-white">
                </div>

                <div className="mt-4 md:mt-5 mb-10 md:mb-20">
                  <h2 className="font-serif text-xl md:text-2xl font-semibold text-black dark:text-white">Publication #3{" "}
                    <span className="font-serif hidden md:inline md:text-base text-[#787878] font-normal">(Editorial, Graphic Design)</span></h2>
                    <div className="md:hidden font-serif mb-4 text-base font-normal text-[#787878]">(Editorial, Graphic Design)</div>
                    <div className="mx-auto space-y-3 md:grid md:grid-cols-4 md:gap-5 md:mt-6">
                      <p className="col-start-1 col-span-4 font-serif text-base md:text-base font-normal text-black dark:text-white">Drawing from unfinished head sculptures left in my school&apos;s studio, 
                        I created a photozine that captures their unpolished beauty—challenging artistic finality and revealing the creative potential hidden in abandoned pieces.</p>
                      <div className="aspect-[4/3] relative col-start-1 col-span-4">
                          <Image
                          src="/images/decap1.jpg"
                          alt="Decapiate Zine"
                          fill
                          className="object-cover"
                        />
                      </div>  
                    <div className="col-start-1 col-span-2 space-y-3 md:space-y-5">
                      <div className="aspect-[4/3] relative">
                          <Image
                          src="/images/decap2.jpg"
                          alt="Decapitate Zine"
                          fill
                          className="object-cover"
                        />
                      </div>                 
                    </div>
                    <div className="col-span-2">
                      <div className="aspect-[4/3] relative">
                        <Image
                          src="/images/decap3.jpg"
                          alt="Decapitate Zine"
                          fill
                          className="object-cover"
                        />
                      </div>
                  </div>
                  </div>
                </div>


              </div>

          </div>
        </div>
    </PageTransition>
  );
}
