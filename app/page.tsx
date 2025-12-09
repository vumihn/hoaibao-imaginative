'use client';
import Navbar from "@/components/navbar";
import PageTransition from "@/components/PageTransition";
import Image from "next/image";
import DarkToggle from "@/components/darktoggle";
import ThemeImage from "@/components/ThemeImage";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {

  const [isExpanded, setIsExpanded] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        const scrollY = window.scrollY;
        const triggerPoint = 250;
  
        if (scrollY > triggerPoint && !isExpanded){
          setIsExpanded(true);
        }else if (scrollY <= triggerPoint && isExpanded){
          setIsExpanded(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll);
    }, [isExpanded]);

  const projects = [
    {
      id: 1,
      image: "/images/tuttle.JPG",
      alt: "Project 1",
      href: "/works#tuttle",
      title: "tuttle publishing",
      width: 4,
      height: 3,
      type: "image",
    },
    {
      id: 2,
      image: "/images/f4.png",
      alt: "Project 3",
      href: "works#chaffee",
      title: "chaffee art museum app",
      width: 1,
      height: 1,
      type: "image",
    },
    {
      id: 3,
      video: "/images/cuoipromotional.mp4",
      alt: "Project 2",
      href: "works#publication1",
      title: "publication #1",
      width: 1,
      height: 1,
      type: "video",
    },
    {
      id: 4,
      video: "/images/aviatvertical.mp4",
      alt: "Project 4",
      href: "works#aviat",
      title: "aviat: branding",
      width: 3,
      height: 1,
      type: "video",
    },
    {
      id: 5,
      image: "/images/decap4.jpg",
      alt: "Project 5",
      href: "works#publication2",
      title: "publication #2",
      width: 4,
      height: 3,
      type: "image",
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen py-12 px-4 bg-white dark:bg-black">

        <div className="md:hidden fixed bottom-6 right-6 z-50">
          <DarkToggle />
        </div>
        
        <div className="max-w-6xl mx-auto grid grid-cols-10 md:grid-cols-8 gap-4">   
          <div className="hidden md:block md:fixed md:top-12 md:right-12 md:z-50">
            <DarkToggle />
            </div>    
        
          <div className="col-start-1 col-span-10 md:col-start-3 md:col-span-4 text-center">
            
            <div className="hidden md:grid grid-cols-4 gap-4">
              <div className="col-start-2 col-span-2">
                <div className="aspect-[349/117] mx-auto mb-1 relative">
                  <ThemeImage
                    lightSrc="/images/hoaibaoimaginative.png"
                    darkSrc="/images/hoaibao-dark.png"
                    alt="hoaibao imaginative"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="md:hidden grid grid-cols-10 gap-4">
              <div className="col-start-3 col-span-6">
                <div className="aspect-[349/117] mx-auto mb-1 relative">
                  <ThemeImage
                    lightSrc="/images/hoaibaoimaginative.png"
                    darkSrc="/images/hoaibao-dark.png"
                    alt="hoaibao imaginative"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="hidden md:grid grid-cols-4 gap-4 mb-3">
              <div className="col-start-2 col-span-2">
                <div className="aspect-[345/264] relative">
                  <Image
                    src="/images/baby1.png"
                    alt="baby1"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="md:hidden grid grid-cols-10 gap-4 mb-3">
              <div className="col-start-3 col-span-6">
                <div className="aspect-[345/264] relative">
                  <Image
                    src="/images/baby1.png"
                    alt="baby1"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div>
              <p className="font-serif text-xl font-light text-black dark:text-white mb-12">
                <span className="italic font-normal text-[#ae1f23]">minh</span> is a multidisciplinary designer, coder based in hanoi, vietnam but
                currently residing in dallas, tx.
              </p>
            </div>

            <div>
              <Navbar/>
            </div>
            
          </div>

          
          <div className="col-start-2 col-span-6 hidden md:block">
            <div 
              className={`transition-all duration-1000 ease-out ${
                isExpanded 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{
                visibility: isExpanded ? 'visible' : 'hidden'
              }}
            >
                <div className="columns-2 gap-3.5 ">
                  {projects.map((project) => {
                    const aspectRatio = project.width / project.height;

                    return (
                      <Link
                        key={project.id}
                        href={project.href}
                        className="relative overflow-hidden group cursor-pointer transition-transform duration-300 hover:scale-[1.02] inline-block mb-2 w-full"
                        style={{
                          aspectRatio: `${project.width} / ${project.height}`
                        }}
                      >
                        {/* Rest of your code stays the same */}
                        {project.type === 'video' ? (
                          <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="absolute inset-0 w-full h-full object-cover transition-all duration-300 group-hover:brightness-30"
                          >
                            <source src={project.video} type="video/mp4" />
                          </video>
                        ) : project.image ? (
                          <Image
                            src={project.image}
                            alt={project.alt}
                            fill
                            className="object-cover transition-all duration-300 group-hover:brightness-30"
                          />
                        ) : null}
                        
                        {/* Overlay with text - hidden by default, visible on hover */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 px-4">
                          <h3 className="text-white font-serif text-2xl font-light mb-2 text-center">
                            {project.title}
                          </h3>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}