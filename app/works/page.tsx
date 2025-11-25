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
                    <p className="font-serif text-xl font-light mb-2 md:mb-10 text-black dark:text-white"><span className="italic font-normal text-[#ae1f23]">minh</span> is a multidisciplinary designer, coder based in Hanoi, Vietnam but
                    currently residing in Dallas, TX.</p>
                </div>
              </div>

              <div  id="tuttle" className="col-start-1 col-span-10 md:col-start-2 md:col-span-6 b-12 border-b border-black dark:border-white">
              </div>

              {/* <a href="/casestudy">Full Case Study</a> */}

              <div className="col-start-1 col-span-10 md:col-start-2 md:col-span-6 md:mt-1 mt-0">
                <div className="mb-10 md:mb-20">
                  <h2 className="font-serif text-xl md:text-2xl font-normal md:mb-4 text-black dark:text-white">Tuttle Publishing Assets{" "}
                    <span className="hidden md:inline md:text-base font-light italic">(Print and Digital, Graphic Design)</span></h2>
                    <div className="md:hidden font-serif text-base font-light italic mb-3">(Print and Digital, Graphic Design)</div> 
                  <div className="mx-auto space-y-3 md:grid md:grid-cols-5 md:gap-5 md:mt-6">
                    <div className="col-start-1 col-span-3 space-y-2.5">
                      <p className="col-start-1 col-span-3 font-sans text-base md:text-base font-normal text-black dark:text-white">In the summer of 2025, I had the opportunity to work with <span className="bg-[#FF0004] px-0.5 py-0.5 md:px-1 md:py-0.5">Tuttle Publishing</span>, one of the oldest publishers in the U.S. and a leading name in Asian culture publications.</p>
                      <p className="col-start-1 col-span-3 font-sans text-base md:text-base font-normal text-black dark:text-white"> My daily responsibilities included <span className="bg-[#FF0004] px-0.5 py-0.5 md:px-1 md:py-0.5">designing</span> Amazon A+ pages for both 
                        frontlist and backlist titles, creating bookmarks and <span className="bg-[#FF0004] px-0.5 py-0.5 md:px-1 md:py-0.5">promotional materials</span> for Publisher&apos;s Weekly and Library Journal.</p>
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
                  <h2 className="font-serif text-xl md:text-2xl font-normal md:mb-4 text-black dark:text-white">Publication #1{" "}
                    <span className="hidden md:inline md:text-base font-light italic">(Editorial, Graphic Design)</span></h2>
                    <div className="md:hidden font-serif text-base font-light italic mb-3">(Editorial, Graphic Design)</div>
                    <div className="mx-auto space-y-3 md:grid md:grid-cols-4 md:gap-5 md:mt-6">
                      <p className="col-start-1 col-span-4 font-sans text-base md:text-base font-normal text-black dark:text-white">Shot entirely on two <span className="bg-[#FFE500] px-0.5 py-0.5 md:px-1 md:py-0.5 dark:text-black">disposable cameras</span>, this zine documents my brother&apos;s wedding through candid, <span className="bg-[#FFE500] px-0.5 py-0.5 md:px-1 md:py-0.5 dark:text-black">run-and-gun</span> moments. 
                        The raw, unfiltered images reveal an intimate look at the beauty and traditions of a Vietnamese wedding.</p>
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
                    <span className="hidden md:inline md:text-base font-light italic">(Branding, Graphic Design)</span></h2>
                    <div className="md:hidden font-serif text-base font-light italic mb-3">(Branding, Graphic Design)</div>
                    <div className="mx-auto space-y-3 md:grid md:grid-cols-7 md:gap-5 md:mt-6">
                      <p className="col-start-1 col-span-7 font-sans text-base md:text-base font-normal text-black dark:text-white">&apos;aviat&apos;&apos;s new visual identity is anchored by a bold red ribbon—evoking both the excitement of a ribbon-cutting ceremony and the practicality of our signature tape products. 
                        This unified symbol captures our purpose: to <span className="bg-[#4069b2] px-0.5 py-0.5 md:px-1 md:py-0.5 text-white">seal</span>, <span className="bg-[#4069b2] px-0.5 py-0.5 md:px-1 md:py-0.5 text-white">support</span>, and <span className="bg-[#4069b2] px-0.5 py-0.5 md:px-1 md:py-0.5 text-white">strengthen</span> every customer need.</p>
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
                  <h2 className="font-serif text-xl md:text-2xl font-normal md:mb-4 text-black dark:text-white">Publication #2{" "}
                    <span className="hidden md:inline md:text-base font-light italic">(Editorial, Graphic Design)</span></h2>
                    <div className="md:hidden font-serif text-base font-light italic mb-3">(Editorial, Graphic Design)</div>
                    <div className="mx-auto space-y-3 md:grid md:grid-cols-4 md:gap-5 md:mt-6">
                      <p className="col-start-1 col-span-4 font-sans text-base md:text-base font-normal text-black dark:text-white">Drawing from <span className="bg-[#FF0004] px-0.5 py-0.5 md:px-1 md:py-0.5">unfinished</span> head sculptures left in my school&apos;s studio, 
                        I created a photozine that captures their unpolished beauty—challenging artistic finality and revealing the <span className="bg-[#FF0004] px-0.5 py-0.5 md:px-1 md:py-0.5">creative</span> potential hidden in abandoned pieces.</p>
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

                <div id="posters" className="col-start-1 col-span-10 md:col-start-2 md:col-span-6 b-12 border-b border-black dark:border-white">
                </div>

                <div className="mt-4 md:mt-5 mb-15 md:mb-20">
                  <h2 className="font-serif text-xl md:text-2xl font-normal md:mb-4 text-black dark:text-white">Posters{" "}
                    <span className="hidden md:inline md:text-base font-light italic">(Typography, Graphic Design)</span></h2>
                    <div className="md:hidden font-serif text-base font-light italic mb-3">(Typography, Graphic Design)</div>
                  <div className="mx-auto space-y-3 md:grid md:grid-cols-5 md:gap-5 md:mt-8">
                    <div className="col-start-1 col-span-3">
                      <div className="aspect-[3/4] relative">
                        <Image
                          src="/images/vietnamswissmockup.jpg"
                          alt="Vietnamese Swiss Poster"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="col-span-2 space-y-3 md:space-y-5">
                      <div className="aspect-[3/4] relative">
                        <Image
                          src="/images/wordspeakloudermockup.jpg"
                          alt="Swiss Poster"
                          fill
                          className="object-cover"
                        />
                        </div>
                        <div className="aspect-[3/4] relative">
                        <Image
                          src="/images/swissmathmockup.jpg"
                          alt="Vietnamese Swiss Poster"
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
