'use client';

import Navbar from "@/components/navbar";
import PageTransition from "@/components/PageTransition";
import Image from "next/image";
import { useState, useEffect } from "react";

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
        <div className="min-h-screen bg-white py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-8 gap-4">
            <div className="col-start-3 col-span-4 text-center">
            <div>
                <Navbar/>
            </div>


            <div className="grid grid-cols-4 gap-4 mb-3">
                <div className="col-start-2 col-span-2"> {/* CENTER 2 columns */}
                    <div className="aspect-[345/264] relative">
                        <Image
                          src="/images/bumbw.png"
                          alt="baby1"
                          fill
                          className="object-cover"
                          />
                    </div>
                </div>
            </div>
                      <div>
                <p className="font-serif text-xl font-light mb-2">hi, my name is Minh. i'm a graphic designer/creative coder from Hanoi, Vietnam, 
                  currently residing in Rutland, Vermont, working as a Graphic Design Intern at Tuttle Publishing.</p>
                <p className="font-serif text-xl font-light mb-12">this website is my attempt of revisiting my sworn enemy - coding. 
                  i enjoyed (am currently enjoying) the process of building this website from scratch, so i hope that you will have a pleasant experience while visiting my digital garden as well. <span className="font-normal italic">have a blessed day.</span></p>
            </div>
            </div>

            <div className="col-start-3 col-span-4 mb-12 border-b border-black">
            </div>

              <div className="col-start-3 col-span-4 mb-6">
                <div className="mx-auto text-left font-sans text-xl font-semibold">
                  <h2>{isExpanded ? "RESUME(i'm ready to contribute!)" : "RESUME(for employers)"}</h2>
                </div>

                <div 
                className={`overflow-hidden transition-all duration-700 ease-in-out ${
                  isExpanded ? 'max-h-screen opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'
                }`}>
                <div className="font-sans text-base font-normal space-y-4">
                  <div>
                    Jun 2023 - Sep 2024: <span className="font-bold">TWIN Software Solution</span>
                    <span className="italic"> . Frontend Developer Intern</span>
                  </div>
                  
                  <div>
                    Sep 2023 - May 2024: <span className="font-bold">Vietnamese Student Association</span>
                    <span className="italic"> . Lead Designer</span>
                  </div>
                  
                  <div>
                    Jun 2024 - Sept 2024: <span className="font-bold">Alzerina Jewelry</span>
                    <span className="italic"> . Website Designer Intern</span>
                  </div>
                  
                  <div>
                    June 2025 - Oct 2025: <span className="font-bold">Tuttle Publishing</span>
                    <span className="italic"> . Graphic Designer Intern</span>
                  </div>
                  
                  <div>
                    Aug 2021 - May 2025: Bachelor at Augustana College
                    (Double Major in Graphic Design and Computer Science)
                  </div>
                </div>
              </div>
          </div>

          <div className="col-start-3 col-span-4 mb-10">
            <div className="mx-auto text-left font-sans text-xl font-semibold mb-4">
              <h2>NOTES</h2>
            </div>
            <div className="font-sans text-base font-normal space-y-2">
                <p>And as for that 'promotional picture' we made for the 'Thank You' bag - it's just a quick snapshot of us, wearing the bags on our heads. 
                In fact, it sort of refers to the 7-inch sleeve of The Damned's 'Neat Neat Neat' (1977). </p>
                <p>In recent times, I've tended to lean toward web and UI design work as I find branding tedious. This includes graphic design, packaging, and related fields. 
                For quite a while, I couldn't put my finger on how and why my focus shifted. 
                The other day, when doing some trivial tasks in Adobe Illustrator, a part of the reason dawned on me: I love the craft, but dread the tool.</p>
            </div>
          </div>

          </div>
        </div>
    </PageTransition>
  );
}
