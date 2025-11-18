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
        <div className="max-w-6xl mx-auto grid grid-cols-8 gap-4">
          <DarkToggle />
            <div className="col-start-3 col-span-4 text-center">
            <div>
                <Navbar/>
            </div>


            <div className="grid grid-cols-4 gap-4 mb-3">
                <div className="col-start-2 col-span-2"> {/* CENTER 2 columns */}
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
                <p className="font-serif text-xl font-light mb-2 text-black dark:text-white">hi, my name is Minh. i&apos;m a designer, coder from Hanoi, Vietnam, 
                  currently residing in Dallas, TX.</p>
                <p className="font-serif text-xl font-light mb-12 text-black dark:text-white">this website is my attempt of revisiting my sworn enemy - coding. 
                  i enjoyed (am currently enjoying) the process of building this website from scratch, so i hope that you will have a pleasant experience while visiting my digital garden as well. <span className="font-normal italic">have a blessed day.</span></p>
            </div>
            </div>

            <div className="col-start-3 col-span-4 mb-12 border-b border-black dark:border-white">
            </div>

              <div className="col-start-3 col-span-4 mb-6 text-black dark:text-white">
                <div className="mx-auto text-left font-sans text-xl font-semibold">
                  <h2>{isExpanded ? "RESUME(i'm ready to contribute!)" : "RESUME(for employers)"}</h2>
                </div>

                <div 
                className={`overflow-hidden transition-all duration-700 ease-in-out ${
                  isExpanded ? 'max-h-screen opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'
                }`}>
                <div className="font-sans text-base font-normal space-y-4">
                  <div>
                    - Jun 2023 - Sep 2024: <span className="font-bold">TWIN Software Solution</span>
                    <span className="italic"> . Frontend Developer Intern</span>
                  </div>
                  
                  <div>
                    - Sep 2023 - May 2024: <span className="font-bold">Vietnamese Student Association</span>
                    <span className="italic"> . Lead Designer</span>
                  </div>
                  
                  <div>
                    - Jun 2024 - Sept 2024: <span className="font-bold">Alzerina Jewelry</span>
                    <span className="italic"> . Website Designer Intern</span>
                  </div>
                  
                  <div>
                    - June 2025 - Oct 2025: <span className="font-bold">Tuttle Publishing</span>
                    <span className="italic"> . Graphic Designer Intern</span>
                  </div>
                  
                  <div>
                    Aug 2021 - May 2025: Bachelor at Augustana College
                    (Double Major in Graphic Design and Computer Science)
                  </div>
                </div>
              </div>
          </div>

          <div className="col-start-3 col-span-4 mb-10 text-black dark:text-white">
            <div className="mx-auto text-left font-sans text-xl font-semibold mb-4">
              <h2>COLOPHON/USES</h2>
            </div>
            <div className="font-sans text-base font-normal space-y-2">
                <div className="font-sans text-base font-normal space-y-4">
                  <div>
                    - I was inspired to create this website/personal blog/portfolio/digital garden or whatever you want to call
                     it by <a href="https://anh.ng/" className="italic">@cybertrinket</a>(chị Ánh), 
                     I reached out to her directly, and she was very kind to give me some directions on this as well. Thank you!
                  </div>
                  <div>
                    - I drafted the design for this website on Notebook that I got from working at Tuttle Publishing, and also on Figma.
                  </div>
                  <div>
                    - I built this website using Next.js, Tailwind CSS, and Vercel for deployment on a crappy ASUS laptop (I still loves it, planning to buy a new laptop soon though).
                  </div>
                </div>
            </div>
          </div>

          </div>
        </div>
    </PageTransition>
  );
}
