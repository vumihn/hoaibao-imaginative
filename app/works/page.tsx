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
                    <p className="font-serif text-xl font-light mb-2 md:mb-10 text-black dark:text-white"><span className="italic font-normal text-[#ae1f23]">minh</span> is a multidisciplinary designer, coder based in hanoi, vietnam but
                    currently residing in dallas, tx.</p>
                </div>
              </div>

              <div  id="chaffee" className="col-start-1 col-span-10 md:col-start-2 md:col-span-6 b-12 border-b border-black dark:border-white">
              </div>

              <div className="col-start-1 col-span-10 md:col-start-2 md:col-span-6 md:mt-1 mt-0">
                <div className="mb-10 md:mb-20">
                  <h2 className="font-serif text-xl md:text-2xl font-normal text-black dark:text-white">chaffee art museum app{" "}
                      <span className="hidden md:inline md:text-base font-light italic">(product/user experience design)</span></h2>
                      <div className="md:hidden font-serif text-base font-light italic text-black dark:text-white">(product/user experience design)</div>
                      <div className="hidden md:block font-serif text-xl font-medium underline italic text-[#047DFE] dark:text-white md:mb-4"><a href="/casestudy">full case study available here!</a></div>
                      <div className="md:hidden block font-serif text-xl font-medium underline italic mb-3 text-[#047DFE] dark:text-white"><a href="/casestudy">full case study available here!</a></div> 
                    <div className="mx-auto space-y-3 md:grid md:grid-cols-5 md:gap-5 md:mt-6">
                      <div className="col-start-1 col-span-3">
                        <p className="col-start-1 col-span-3 font-sans text-base md:text-base font-normal text-black dark:text-white">chaffee is a self-initiated ux project focused on modernizing the chaffee art museum&apos;s digital engagement, 
                        demonstrating the application of design thinking for social good, bridging community connection, and directly support the non-profit&apos;s operational and revenue goals.</p>
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

                  <div id="publication1" className="col-start-1 col-span-10 md:col-start-2 md:col-span-6 b-12 border-b border-black dark:border-white">
                  </div>

                  <div className="mt-4 md:mt-5 mb-10 md:mb-20">
                    <h2 className="font-serif text-xl md:text-2xl font-normal md:mb-4 text-black dark:text-white">tuttle publishing assets{" "}
                      <span className="hidden md:inline md:text-base font-light italic">(print and digital, graphic design)</span></h2>
                      <div className="md:hidden font-serif text-base font-light italic mb-3 text-black dark:text-white">(print and digital, graphic design)</div> 
                    <div className="mx-auto space-y-3 md:grid md:grid-cols-5 md:gap-5 md:mt-6">
                      <div className="col-start-1 col-span-3 space-y-2.5">
                        <p className="col-start-1 col-span-3 font-sans text-base md:text-base font-normal text-black dark:text-white">in the summer of 2025, i had the opportunity to work with tuttle publishing, one of the oldest publishers in the u.s. and a leading name in asian culture publications.</p>
                        <p className="col-start-1 col-span-3 font-sans text-base md:text-base font-normal text-black dark:text-white"> my daily responsibilities included designing amazon a+ pages for both 
                          frontlist and backlist titles, creating bookmarks and promotional materials for publisher&apos;s weekly and library journal.</p>
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
                  <h2 className="font-serif text-xl md:text-2xl font-normal md:mb-4 text-black dark:text-white">publication #1{" "}
                    <span className="hidden md:inline md:text-base font-light italic">(editorial, graphic design)</span></h2>
                    <div className="md:hidden font-serif text-base font-light italic mb-3 text-black dark:text-white">(editorial, graphic design)</div>
                    <div className="mx-auto space-y-3 md:grid md:grid-cols-4 md:gap-5 md:mt-6">
                      <p className="col-start-1 col-span-4 font-sans text-base md:text-base font-normal text-black dark:text-white">shot entirely on two disposable cameras, this zine documents my brother&apos;s wedding through candid, run-and-gun moments. 
                        the raw, unfiltered images reveal an intimate look at the beauty and traditions of a vietnamese wedding.</p>
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

                <div id="aviat" className="col-start-1 col-span-10 md:col-start-2 md:col-span-6 b-12 border-b border-black dark:border-white">
                </div>

                <div className="mt-4 md:mt-5 mb-10 md:mb-20">
                  <h2 className="font-serif text-xl md:text-2xl font-normal md:mb-4 text-black dark:text-white">&apos;aviat&apos;{" "} 
                    <span className="hidden md:inline md:text-base font-light italic">(branding, graphic design)</span></h2>
                    <div className="md:hidden font-serif text-base font-light italic mb-3 text-black dark:text-white">(branding, graphic design)</div>
                    <div className="mx-auto space-y-3 md:grid md:grid-cols-7 md:gap-5 md:mt-6">
                      <p className="col-start-1 col-span-7 font-sans text-base md:text-base font-normal text-black dark:text-white">&apos;aviat&apos;&apos;s new visual identity is anchored by a bold red ribbon—evoking both the excitement of a ribbon-cutting ceremony and the practicality of our signature tape products. 
                        this unified symbol captures our purpose: to seal, support, and strengthen every customer need.</p>
                    <div className="col-start-1 col-span-3 space-y-3 md:space-y-5">
                      <div className="aspect-[3/1] relative">
                          <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="absolute inset-0 w-full h-full object-cover"
                          >
                            <source src="/images/aviatvertical.mp4" type="video/mp4" />
                          </video>
                      </div>
                      <div className="aspect-[3/3] relative">
                          <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="absolute inset-0 w-full h-full object-cover"
                          >
                            <source src="/images/aviatuniform.mp4" type="video/mp4" />
                          </video>
                      </div>
                      <div className="aspect-[4/3] relative">
                        <Image
                          src="/images/box.jpg"
                          alt="Box Aviat"
                          fill
                          className="object-cover"
                        />
                      </div>                      
                    </div>
                    <div className="col-span-4 space-y-3 md:space-y-5">
                      <div className="aspect-[4/3] relative">
                        <Image
                          src="/images/truckmockup.jpg"
                          alt="Truck Aviat"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="aspect-[4/3] relative">
                        <Image
                          src="/images/wildposters.jpg"
                          alt="Wild Posters"
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
                  <h2 className="font-serif text-xl md:text-2xl font-normal md:mb-4 text-black dark:text-white">publication #2{" "}
                    <span className="hidden md:inline md:text-base font-light italic">(editorial, graphic design)</span></h2>
                    <div className="md:hidden font-serif text-base font-light italic mb-3 text-black dark:text-white">(editorial, graphic design)</div>
                    <div className="mx-auto space-y-3 md:grid md:grid-cols-4 md:gap-5 md:mt-6">
                      <p className="col-start-1 col-span-4 font-sans text-base md:text-base font-normal text-black dark:text-white">drawing from unfinished head sculptures left in my school&apos;s studio, 
                        i created a photozine that captures their unpolished beauty—challenging artistic finality and revealing the creative potential hidden in abandoned pieces.</p>
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
