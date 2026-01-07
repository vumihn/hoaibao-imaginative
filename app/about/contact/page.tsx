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
                <p className="font-serif text-xl font-normal mb-2 md:mb-10 text-black dark:text-white">My name is <span className="font-normal text-[#ae1f23]">minh</span>. I&apos;m a designer, coder from Hanoi, Vietnam, 
                  currently residing in Dallas, TX. I design for the community. Welcome to my digital garden/portfolio. connect with me through <a href="mailto:vuminhnguyenpham1010@gmail.com" className="font-normal underline hover:opacity-70 transition-opacity">email</a> or <a href="https://www.linkedin.com/in/minh-nguyen-40a99322a/" target="_blank" rel="noopener noreferrer" className="font-normal underline hover:opacity-70 transition-opacity">LinkedIn.</a></p>
            </div>
            </div>

            <div className="col-start-1 col-span-10 md:col-start-3 md:col-span-4 border-b border-black dark:border-white">
            </div>

              <div className="col-start-1 col-span-10 md:col-start-3 md:col-span-4 mb-5 text-black dark:text-white">
                <div className="mx-auto text-left font-serif text-xl font-semibold mb-4">
                  <h2>Resume</h2>
                </div>

               
                <div className="font-serif text-base font-normal">
                  <ul className="space-y-2 list-inside">
                    <li className="list-disc">
                      <span className="font-semibold">Website Design & UX Researcher </span>
                      . Alzerina Jewelry <span className="text-[#787878]">(Dec 2025 - Present)</span>
                    </li>

                    <li className="list-disc">
                      <span className="font-semibold">Graphic Design Intern </span>
                      . Tuttle Publishing <span className="text-[#787878]">(June 2025 - Nov 2025)</span>
                    </li>

                    <li className="list-disc">
                      <span className="font-semibold">Website Design Intern </span>
                      . Alzerina Jewelry <span className="text-[#787878]">(June 2024 - Sep 2024)</span>
                    </li>

                    <li className="list-disc">
                      <span className="font-semibold">Frontend Developer Intern </span>
                      . TWIN Software <span className="text-[#787878]">(June 2023 - Sep 2023)</span>
                    </li>
                  
                    <li className="list-disc">
                      <span className="font-semibold">B.A.</span> in Graphic Design & Computer Science . Augustana College <span className="text-[#787878]">(Aug 2021 - May 2025)</span>
                    </li>
                  </ul>
                  
                </div>
              </div>

          <div className="col-start-1 col-span-10 md:col-start-3 md:col-span-4 mb-10 text-black dark:text-white">
            <div className="mx-auto text-left font-serif text-xl font-semibold mb-4">
              <h2>Colophon</h2>
            </div>
            <div>
                <div className="font-serif text-base font-normal">
                  <ul className="space-y-2 list-inside">
                    <li className="list-disc">
                      I was inspired to create this website/personal blog/portfolio/digital garden or whatever you want to call
                      it by <a href="https://anh.ng/" className="underline hover:opacity-70 transition-opacity">@cybertrinket </a>(chị Ánh), 
                      I reached out to her directly, and she was very kind to give me some directions on this as well. Thank you!
                    </li>
                    <li className="list-disc">
                      Sketches and drafts for this website were done on the Tuttle notebook and Figma. I often caught myself wandering, thinking about creating something personal from scratch, even when I was in office working. So here we are!
                    </li>
                    <li className="list-disc">
                      I built this website using Next.js, TailwindCSS, a lot of Claude, and Vercel for deployment on a crappy ASUS laptop (i still love it, planning to buy a new laptop soon though).
                    </li>
                    <li className="list-disc">
                      <a href="https://tinyurl.com/36pac2k4" className="underline hover:opacity-70 transition-opacity">TWK Lausanne</a> (my first licensed font) and <a href="https://fonts.google.com/noto/specimen/Noto+Serif" className="underline hover:opacity-70 transition-opacity">Noto Serif</a> (Google font) are my typefaces of choice for this website.
                    </li>
                  </ul>
                </div>
            </div>
          </div>

          </div>
        </div>
    </PageTransition>
  );
}
