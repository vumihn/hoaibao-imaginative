import Navbar from "@/components/navbar";
import PageTransition from "@/components/PageTransition";
import Image from "next/image";
import DarkToggle from "@/components/darktoggle";
import ThemeImage from "@/components/ThemeImage";
import Link from "next/link";

export default function Home() {
  const projects = [
    {
      id: 1,
      image: "/images/tuttle.JPG",
      alt: "Project 1",
      href: "#",
      title: "Tuttle Publishing Assets Design",
      width: 4,
      height: 3,
      type: "image"
    },
    {
      id: 2,
      video: "/images/cuoipromotional.mp4",
      alt: "Project 2",
      href: "#",
      title: "CUOI(Wedding) Photozine",
      width: 1,
      height: 1,
      type: "video"
    },
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
                currently residing in Rutland, Vermont, USA.
              </p>
            </div>

            <div>
              <Navbar/>
            </div>
            
          </div>
          <div className="col-start-2 col-span-6">
            <div className="flex flex-wrap gap-4 items-start">
              {projects.map((project) => {
                const aspectRatio = project.width / project.height;
                
                return (
                  <Link
                    key={project.id}
                    href={project.href}
                    className="relative overflow-hidden group cursor-pointer transition-transform duration-300 hover:scale-[1.02] flex-shrink-0"
                    style={{
                      width: aspectRatio > 1.5 ? '100%' : aspectRatio > 1 ? 'calc(66.66% - 0.67rem)' : 'calc(50% - 0.5rem)',
                      aspectRatio: `${project.width} / ${project.height}`
                    }}
                  >
                    {/* Render image or video based on type */}
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