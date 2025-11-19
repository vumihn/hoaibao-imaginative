import Navbar from "@/components/navbar";
//import PageTransition from "@/components/PageTransition";
import DarkToggle from "@/components/darktoggle";
import Image from "next/image";

export default function Home() {
  return (
    //<PageTransition>
        <div className="min-h-screen bg-white dark:bg-black py-12 px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-8 gap-4">
            <DarkToggle />
              <div className="col-start-3 col-span-4 text-center">
                <div>
                    <Navbar/>
                </div>

                <div>
                    <p className="font-serif text-xl font-light mb-12 text-black dark:text-white">multidisciplinary designer, coder based in Hanoi, Vietnam but
                    currently residing in Dallas, TX.</p>
                </div>
              </div>

              <div className="col-start-2 col-span-6 b-12 border-b border-black dark:border-white">
              </div>

              <div className="col-start-2 col-span-6 mt-2">
                <div className="mb-20">
                  <h2 className="font-serif text-2xl font-normal mb-4 text-black dark:text-white">Tuttle Publishing Design Assets{" "}
                    <span className="text-base font-light italic">(Print and Digital, Graphic Design)</span></h2> 
                  <div className="mx-auto grid grid-cols-5 gap-5 mt-8">
                    <div className="col-start-1 col-span-3 space-y-2.5">
                      <p className="col-start-1 col-span-3 font-sans text-base font-normal text-black dark:text-white">In the summer of 2025, I had the opportunity to work with <span className="bg-[#FF0004]">Tuttle Publishing</span>, one of the oldest publishers in the U.S. and a leading name in Asian culture publications.</p>
                      <p className="col-start-1 col-span-3 font-sans text-base font-normal text-black dark:text-white"> My daily responsibilities included <span className="bg-[#FF0004]">designing</span> Amazon A+ pages for both 
                        frontlist and backlist titles, creating bookmarks and <span className="bg-[#FF0004]">promotional materials</span> for Publisher&apos;s Weekly and Library Journal.</p>
                      <div className="mt-3 aspect-[4/3] relative">
                        <Image
                        src="/images/tuttle.jpg"
                        alt="Tuttle Images"
                        fill
                        className="object-cover"
                      />
                      </div>                     
                    </div>
                    <div className="col-span-2 grid grid-rows-2 gap-5">
                      {/* Top small image */}
                      <div className="aspect-[1/1] relative">
                        <Image
                          src="/images/fullpagead.jpg"
                          alt="Full Page Ad"
                          fill
                          className="object-cover"
                        />
                      </div>
                      
                      {/* Bottom small image */}
                      <div className="aspect-[1/1] relative">
                        <Image
                          src="/images/greenad.jpg"
                          alt="Half Page Ad"
                          fill
                          className="object-cover"
                        />
                      </div>
                  </div>
                  </div>
                </div>

                <div className="col-start-2 col-span-6 b-12 border-b border-black dark:border-white">
                </div>

                <div className="mt-5 mb-20">
                  <h2 className="font-serif text-2xl font-normal mb-4 text-black dark:text-white">Publication #1{" "}
                    <span className="text-base font-light italic">(Editorial, Graphic Design)</span></h2>
                    <div className="mx-auto grid grid-cols-4 gap-5 mt-8">
                      <p className="col-start-1 col-span-4 font-sans text-base font-normal text-black dark:text-white">Shot entirely on two <span className="bg-[#FFE500] dark:text-black">disposable cameras</span>, this zine documents my brother&apos;s wedding through candid, <span className="bg-[#FFE500] dark:text-black">run-and-gun</span> moments. 
                        The raw, unfiltered images reveal an intimate look at the beauty and traditions of a Vietnamese wedding.</p>
                    <div className="col-start-1 col-span-2 space-y-5">
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
                    <div className="col-span-2 grid grid-rows-2 gap-5">
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

                <div className="col-start-2 col-span-6 b-12 border-b border-black dark:border-white">
                </div>

                <div className="mt-5 mb-20">
                  <h2 className="font-serif text-2xl font-normal mb-4 text-black dark:text-white">&apos;aviat&apos;{" "} 
                    <span className="text-base font-light italic">(Branding, Graphic Design)</span></h2>
                    <div className="mx-auto grid grid-cols-7 gap-5 mt-8">
                      <p className="col-start-1 col-span-7 font-sans text-base font-normal text-black dark:text-white">&apos;aviat&apos;&apos;s new visual identity is anchored by a bold red ribbon—evoking both the excitement of a ribbon-cutting ceremony and the practicality of our signature tape products. 
                        This unified symbol captures our purpose: to <span className="bg-[#4069b2] text-white">seal</span>, <span className="bg-[#4069b2] text-white">support</span>, and <span className="bg-[#4069b2] text-white">strengthen</span> every customer need.</p>
                    <div className="col-start-1 col-span-3 space-y-5">
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
                    <div className="col-span-4 space-y-5">
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
                          src="/images/wildposters.png"
                          alt="Wild Posters"
                          fill
                          className="object-cover"
                        />
                      </div>
                  </div>
                  </div>
                </div>

                <div className="col-start-2 col-span-6 b-12 border-b border-black dark:border-white">
                </div>

                <div className="mt-5 mb-20">
                  <h2 className="font-serif text-2xl font-normal mb-4 text-black dark:text-white">Publication #1{" "}
                    <span className="text-base font-light italic">(Editorial, Graphic Design)</span></h2>
                </div>

              </div>

          </div>
        </div>
    //</PageTransition>
  );
}
