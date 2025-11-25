'use client';
import Navbar from "@/components/navbar";
import PageTransition from "@/components/PageTransition";
import Image from "next/image";
export default function Home() {

  return (
    <PageTransition>
        <div className="min-h-screen bg-white dark:bg-black py-12 px-4">
            <div className="max-w-6xl mx-auto grid grid-cols-10 md:grid-cols-8 gap-4">
                <div className="col-start-1 col-span-10 md:col-start-3 md:col-span-4 text-center">                   
                    <div>
                    <Navbar/>
                    </div>

                    <div>
                      <p className="font-serif text-xl font-light mb-2 md:mb-10 text-black dark:text-white">Chaffee is a self-initiated UX project focused on modernizing the Chaffee Art Museum&apos;s digital engagement, 
                        demonstrating the application of design thinking for social good, bridging community connection, and directly support the non-profit&apos;s operational and revenue goals.</p>
                    </div>
                </div>
                <div  id="tuttle" className="col-start-1 col-span-10 md:col-start-2 md:col-span-6 b-12 border-b border-black dark:border-white">
              </div>

              <div className="col-start-1 col-span-10 md:col-start-2 md:col-span-6 md:mt-1 mt-0">
                <div className="mb-10 md:mb-20">
                  <h2 className="font-serif text-xl md:text-2xl font-normal md:mb-4 text-black dark:text-white">Tuttle Publishing Assets{" "}
                    <span className="hidden md:inline md:text-base font-light italic">(Product/User Experience Design)</span></h2>
                    <div className="md:hidden font-serif text-base font-light italic mb-3">(Product/User Experience Design)</div>
                    <div className="mx-auto space-y-3 md:grid md:grid-cols-10 md:gap-5 md:mt-6">

                      <div className="col-start-3 col-span-6">
                          <p className="font-sans text-base font-normal text-white bg-[#047DFE] px-6 py-4 mt-1 rounded-tl-3xl rounded-bl-3xl rounded-br-3xl">I needs a straightforward, dedicated app that clearly lists upcoming exhibitions and events, 
                            allows for easy ticket purchase, and quickly provides essential accessibility information because I want to support of the Chaffee Art Museum without navigating confusing online platforms.</p>
                        </div>

                      <div className="col-span-2">
                        <div className="mt-3 aspect-[7/6] relative">
                          <Image
                          src="/images/elaine.png"
                          alt="User Persona Icon"
                          fill
                          className="object-cover"
                        />
                        </div>
                      </div>

                      <div className="col-start-1 col-span-5">
                        <div className="aspect-[1/1] relative">
                          <Image
                          src="/images/onboardingscreen.jpg"
                          alt="On Boarding Mockup"
                          fill
                          className="object-cover"
                        />
                        </div>
                      </div>

                      <div className="col-span-5 grid grid-rows-3 gap-3">
                        <p className="font-sans text-base font-normal text-black dark:text-white">
                          The problem lies in the friction in planning and the difficulties of transaction which negatively affect the revenue and overall experience of this historic museum.
                          </p>  
                      </div>

                      <div className="col-start-1 col-span-6">
                        <p className="font-sans text-base font-normal text-black dark:text-white">
                          Chaffee Art Museum
                          </p>  
                      </div>

                      <div className="col-start-7 col-span-4 row-start-3 row-span-2">
                          <div className="aspect-[5/6] relative">
                          <Image
                          src="/images/papermock.jpeg"
                          alt="Paper Mockup"
                          fill
                          className="object-cover"
                        />
                        </div>
                      </div>

                      <div className="col-start-2 col-span-8 mt-5">
                        <div className="aspect-[832/231] relative">
                          <Image
                          src="/images/userflow.svg"
                          alt="User Flow Diagram"
                          fill
                          className="object-cover"
                        />
                        </div>
                        <div className="justify-center text-center mt-3 font-sans text-base font-normal text-black dark:text-white">
                          <p>Simple and straightforward user flow for scheduling visits</p>
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