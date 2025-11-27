'use client';
import Navbar from "@/components/navbar";
import PageTransition from "@/components/PageTransition";
import Image from "next/image";
import DarkToggle from "@/components/darktoggle";
import ThemeImage from "@/components/ThemeImage";
export default function Home() {

  return (
    <PageTransition>
        <div className="min-h-screen bg-white dark:bg-black py-12 px-4">
          <div className="md:hidden sticky bottom-6 right-6 z-50">
            <DarkToggle />
          </div>

            <div className="max-w-6xl mx-auto grid grid-cols-10 md:grid-cols-8 gap-4">
              <div className="hidden md:block md:fixed md:top-12 md:right-12 md:z-50">
                <DarkToggle />
              </div>
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
                  <h3 className="md:hidden font-serif text-base font-normal text-[#ae1f23] text-center" >desktop mode for full experience</h3>
                  <h2 className="font-serif text-xl md:text-2xl font-normal md:mb-4 text-black dark:text-white">Chaffee Art Museum App{" "}
                    <span className="hidden md:inline md:text-base font-light italic">(Product/User Experience Design)</span></h2>
                    <div className="md:hidden font-serif text-base font-light italic mb-3">(Product/User Experience Design)</div>
                    <div className="mx-auto space-y-5 md:space-y-2 md:grid md:grid-cols-10 md:gap-5 md:mt-6">

                      <div className="hidden md:grid md:col-start-3 md:col-span-6">
                          <p className="font-sans text-base font-normal text-white bg-[#047DFE] px-6 py-4 mt-1 rounded-tl-3xl rounded-bl-3xl rounded-br-3xl">I need a straightforward, dedicated app that clearly lists upcoming exhibitions and events, 
                            allows for easy ticket purchase because I want to support of the Chaffee Art Museum without navigating confusing online platforms.</p>
                        </div>

                      <div className="block md:hidden">
                          <p className="font-sans text-base font-normal text-white bg-[#047DFE] px-6 py-4 mt-1 rounded-tl-3xl rounded-bl-3xl rounded-br-3xl">I need a straightforward, dedicated app that 
                            allows for easy ticket purchase because I want to support of the Chaffee Art Museum without navigating confusing online platforms.</p>
                        </div>

                      <div className="hidden md:block md:col-span-2">
                        <div className="mt-3 aspect-[7/6] relative">
                          <ThemeImage
                          lightSrc="/images/elaine.png"
                          darkSrc="/images/elainewht.png"
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

                      <div className="hidden md:block md:col-span-5">
                        <p className="font-sans text-base font-normal text-black dark:text-white">
                          Quantitative Data Audit of the current Chaffee&apos;s website reveals significant drop-off in the transactional flow, 
                          confirming the need for a simple, straightforward scheduling experience.
                          <br></br>
                          <br></br>
                          <br></br>
                          <span className="text-3xl">61%</span> Bounce Rate for first time visitors and <span className="text-3xl">1.8%</span> Conversion Rate from Visit to Ticket Purchasing, the goal is to double this by
                          simplifying the purchasing flow, using methods like Modals and Direct Navigation.
                          </p>  
                      </div>

                      <div className="md:hidden">
                        <p className="font-sans text-base font-normal text-black dark:text-white">
                          <span className="text-3xl">61%</span> Bounce Rate for first time visitors and <span className="text-3xl">1.8%</span> Conversion Rate from Visit to Ticket Purchasing, the goal is to double this by
                          simplifying the purchasing flow, using methods like Modals and Direct Navigation.
                        </p>
                        </div>

                      <div className="hidden md:block md:col-start-1 md:col-span-6">
                        <p className="font-sans text-base font-normal text-black dark:text-white">
                          I had the chance to Interview with a group of seven recent first-time and returning visitors, 
                          resulting in two critical areas of friction: Simplicity and Information Overload.
                          <br></br>
                          <br></br>
                          <br></br>
                          <br></br>
                          <span className="font-serif font-light italic">&quot;I spent two minutes trying to find the calendar to pick a date. It should just be right there.&quot;</span>
                          <br></br>
                          <br></br>
                          <br></br>
                          <br></br>
                          <br></br>
                          Primary information must be immediately accessible via the Tab Bar. The &quot;Person&quot; Tab is crucial, acting like a digital wallet for scannable tickets and membership, 
                          emphasizing on simplicity and transparency when it comes to Purchasing.
                          </p>
                      </div>

                      <div className="md:hidden">
                        <p className="font-sans text-base font-normal text-black dark:text-white">
                          <span className="font-serif font-light italic">&quot;I spent two minutes trying to find the calendar to pick a date. It should just be right there.&quot;</span>                    
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

                        <div className="md:hidden">
                          <p className="font-sans text-base font-normal text-black dark:text-white">
                            Primary information must be immediately accessible via the Tab Bar. The “Person” Tab is crucial, acting like a digital wallet for scannable tickets and membership, 
                          emphasizing on simplicity and transparency when it comes to Purchasing.
                          </p>
                        </div>

                      <div className="col-start-1 col-span-10">
                        <div className="aspect-[2268/1602] relative">
                          <Image
                          src="/images/screens.jpg"
                          alt="Screens Mockup"
                          fill
                          className="object-cover"
                        />
                        </div>
                        
                      </div>

                      <div className="col-start-2 col-span-8 ">
                        <div className="aspect-[832/231] relative">
                          <Image
                          src="/images/userflow.svg"
                          alt="User Flow Diagram"
                          fill
                          className="object-cover"
                        />
                        </div>
                        <div className="justify-center text-center mt-3 font-serif text-base font-light text-black dark:text-white">
                          <p>Simple and straightforward user flow for scheduling visits</p>
                        </div>
                      </div>

                      <div className="col-start-1 col-span-4">
                        <div className="aspect-[1164/1800] relative">
                          <Image
                          src="/images/eventdetail.jpg"
                          alt="Event Detail Mockup"
                          fill
                          className="object-cover"
                        />
                        </div>
                      </div>

                      <div className="hidden md:block md:col-start-5 md:col-span-6">
                        <p className="font-sans text-base font-normal text-black dark:text-white">
                          <br></br>
                          Since Chaffee is a small orginization with limited resources, the app is designed to seamlessly integrate with their existing CMS (Content Management System) to allow staff to easily update information 
                          without requiring extensive technical knowledge.
                          <br></br>
                          <br></br>
                          <br></br>
                          <br></br>
                          If I had more time, I would love to conduct usability testing to refine the product, and also expand the app 
                          to include features like virtual tours, audio and personalized Home Screen for members.
                        </p>
                      </div>

                      <div className="md:hidden">
                        <p className="font-sans text-base font-normal text-black dark:text-white">
                          If I had more time, I would love to conduct usability testing to refine the product, and also expand the app 
                          to include features like virtual tours, audio and personalized Home Screen for members.
                        </p>
                        </div>
                    </div>
                </div>
              </div>
            </div>
        </div>
    </PageTransition>
  );
}