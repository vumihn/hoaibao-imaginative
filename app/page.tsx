import Navbar from "@/components/navbar";
import PageTransition from "@/components/PageTransition";
import Image from "next/image";
import DarkToggle from "@/components/darktoggle";
import ThemeImage from "@/components/ThemeImage";
import Link from "next/link";
import { scale } from "framer-motion";

export default function Home() {
  const projects = [
    {
      id: 1,
      image: "/images/tuttle.JPG",
      alt: "Project 1",
      href: "#",
      title: "Tuttle Publishing",
      width: 4,
      height: 3,
      type: "image",
      scale: 0.8
    },
    {
      id: 2,
      video: "/images/swisspostersvid.mp4",
      alt: "Project 3",
      href: "#",
      title: "Posters",
      width: 2,
      height: 3,
      type: "video",
      scale: 0.8
    },
    {
      id: 3,
      video: "/images/cuoipromotional.mp4",
      alt: "Project 2",
      href: "#",
      title: "Publication #1",
      width: 1,
      height: 1,
      type: "video",
      scale: 1
    },
    {
      id: 4,
      video: "/images/aviatlogovertical.mp4",
      alt: "Project 4",
      href: "#",
      title: "Aviat: Branding",
      width: 3,
      height: 1,
      type: "video",
      scale: 1
    },
    {
      id: 5,
      video: "/images/chatdauvideo.mp4",
      alt: "Project 5",
      href: "#",
      title: "Publication #2",
      width: 1,
      height: 1,
      type: "video",
      scale: 1
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen py-12 px-4 bg-white dark:bg-black">
        
        <div className="max-w-6xl mx-auto grid grid-cols-8 gap-4">       
          <DarkToggle />
          <div className="col-start-3 col-span-4 text-center">
            
            <div className="grid grid-cols-4 gap-4">
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
            <div className="grid grid-cols-4 gap-4 mb-3">
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

            <div>
              <p className="font-serif text-xl font-light text-black dark:text-white mb-12">
                multidisciplinary designer, coder based in Hanoi, Vietnam but
                currently residing in Dallas, TX.
              </p>
            </div>

            <div>
              <Navbar/>
            </div>
            
          </div>
          <div className="col-start-2 col-span-6 mt-10">
            <div className="columns-2 gap-4">
              {projects.map((project) => {
                const aspectRatio = project.width / project.height;
                const scale = project.scale || 1;

                let baseWidth = aspectRatio > 1.5 ? '100%' : aspectRatio > 1 ? 'calc(66.66% - 0.67rem)' : 'calc(50% - 0.5rem)';

                // Apply scale to width
                let scaledWidth;
                if (baseWidth === '100%') {
                  scaledWidth = `${100 * scale}%`;
                } else if (baseWidth.includes('66.66%')) {
                  scaledWidth = `calc(${66.66 * scale}% - ${0.67 * scale}rem)`;
                } else {
                  scaledWidth = `calc(${50 * scale}% - ${0.5 * scale}rem)`;
                }
                
                return (
                  <Link
                    key={project.id}
                    href={project.href}
                    className="relative overflow-hidden group cursor-pointer transition-transform duration-300 hover:scale-[1.02] inline-block mb-4 w-full"
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
                      <h3 className="text-white font-serif text-3xl font-light mb-2 text-center">
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
    </PageTransition>
  );
}