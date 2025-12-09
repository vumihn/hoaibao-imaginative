'use client';

import Navbar from "@/components/navbar";
import PageTransition from "@/components/PageTransition";
import Image from "next/image";
import { useState, useEffect } from "react";
import DarkToggle from "@/components/darktoggle";

export default function Home() {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const triggerPoint = 200;

      if (scrollY > triggerPoint && !isExpanded){
        setIsExpanded(true);
      }else if (scrollY <= triggerPoint && isExpanded){
        setIsExpanded(false);
      }
    };

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isExpanded]);

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


            <div className="hidden md:grid grid-cols-4 gap-4 mb-3">
                <div className="col-start-2 col-span-2"> {/* CENTER 2 columns */}
                    <div className="aspect-[345/264] relative group overflow-hidden">
                        <Image
                          src="/images/bumbwnew.jpg"
                          alt="baby1"
                          fill
                          className="object-cover transition-all duration-300 group-hover:brightness-35"
                          />
                          <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-40 
                              transition-all duration-300 flex items-start justify-end md:p-1">
                            <span className="text-white font-serif text-xs md:text-sm italic font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                @lana
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="md:hidden grid grid-cols-10 gap-4 mb-3">
                <div className="col-start-3 col-span-6">
                    <div className="aspect-[345/264] relative">
                        <Image
                          src="/images/bumbwnew.jpg"
                          alt="baby1"
                          fill
                          className="object-cover"
                          />
                    </div>
                </div>
            </div>


                      <div>
                <p className="font-serif text-xl font-light mb-2 text-black dark:text-white">my name is <span className="italic font-normal text-[#ae1f23]">minh</span>. i&apos;m a designer, coder from hanoi, vietnam, 
                  currently residing in dallas, tx.</p>
                <p className="font-serif text-xl font-light mb-2 md:mb-10 text-black dark:text-white">welcome to my digital garden/portfolio. connect with me through <a href="mailto:vuminhnguyenpham1010@gmail.com" className="font-normal italic hover:opacity-70 transition-opacity">email</a> or <a href="https://www.linkedin.com/in/minh-nguyen-40a99322a/" target="_blank" rel="noopener noreferrer" className="font-normal italic hover:opacity-70 transition-opacity">linkedin.</a></p>
            </div>
            </div>

            <div className="col-start-1 col-span-10 md:col-start-3 md:col-span-4 mb-2 md:mb-10 border-b border-black dark:border-white">
            </div>

              <div className="col-start-1 col-span-10 md:col-start-3 md:col-span-4 mb-5 text-black dark:text-white">
                <div className="mx-auto text-left font-sans text-xl font-semibold">
                  <h2>{isExpanded ? "résumé (ready for hire!)" : "résumé (for employers)"}</h2>
                </div>

                <div 
                className={`overflow-hidden transition-all duration-700 ease-in-out ${
                  isExpanded ? 'max-h-screen opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'
                }`}>
                <div className="font-sans text-base font-normal space-y-4">
                  
                  <div>
                    - dec 2025 - present: <span className="font-bold">office of international students and scholars</span>
                    <span className="italic"> . digital design volunteer</span>
                  </div>

                  <div>
                    - june 2025 - oct 2025: <span className="font-bold">tuttle publishing</span>
                    <span className="italic"> . graphic designer intern</span>
                  </div>

                  <div>
                    - jun 2024 - sept 2024: <span className="font-bold">alzerina jewelry</span>
                    <span className="italic"> . website designer intern</span>
                  </div>

                  <div>
                    - jun 2023 - sep 2024: <span className="font-bold">twin software solution</span>
                    <span className="italic"> . frontend developer intern</span>
                  </div>
                
                  <div>
                    aug 2021 - may 2025: bachelor at augustana college
                    (double major in graphic design and computer science)
                  </div>
                  
                </div>
              </div>
          </div>

          <div className="col-start-1 col-span-10 md:col-start-3 md:col-span-4 mb-10 text-black dark:text-white">
            <div className="mx-auto text-left font-sans text-xl font-semibold mb-4">
              <h2>colophon</h2>
            </div>
            <div className="font-sans text-base font-normal space-y-2">
                <div className="font-sans text-base font-normal space-y-4">
                  <div>
                    - i was inspired to create this website/personal blog/portfolio/digital garden or whatever you want to call
                     it by <a href="https://anh.ng/" className="italic">@cybertrinket</a>(chị Ánh), 
                     i reached out to her directly, and she was very kind to give me some directions on this as well. thank you!
                  </div>
                  <div>
                    - sketches and drafts for this website were done on tuttle notebook and figma. i often caught myself wandering, thinking about creating something personal from scratch, even when i was in office working. so here we are!
                  </div>
                  <div>
                    - i built this website using next.js, tailwind css, a lot of claude, and vercel for deployment on a crappy asus laptop (i still love it, planning to buy a new laptop soon though).
                  </div>
                  <div>
                    - TWK Lausanne (my first licensed font) and Noto Serif (google font) are my typefaces of choice for this website.
                  </div>
                </div>
            </div>
          </div>

          </div>
        </div>
    </PageTransition>
  );
}
