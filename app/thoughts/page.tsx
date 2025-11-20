import Navbar from "@/components/navbar";
import PageTransition from "@/components/PageTransition";
import DarkToggle from "@/components/darktoggle";

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
                <p className="font-serif text-xl font-light mb-2 md:mb-10 text-black dark:text-white"><span className="italic font-normal text-[#ae1f23]">minh</span> is a multidisciplinary designer, coder based in Hanoi, Vietnam but currently residing in Dallas, TX.</p>
            </div>
            </div>

            <div className="col-start-1 col-span-10 md:col-start-3 md:col-span-4 mb-2 md:mb-10 border-b border-black dark:border-white">
              </div>
            
            {/* <div className="col-start-3 col-span-4">
                <div className="mx-auto grid grid-cols-8 gap-5">
                <div className="col-start-1 col-span-5">
                    <div className="relative aspect-[368/238] bg-gray-300 mb-4">
                        <Image
                        src="/images/scene1.JPG"
                        alt="memoirs"
                        fill
                        className="object-cover"
                        />
                    </div>
                </div>

                <div className="col-start-6 col-span-3 ">
                    <h3 className="font-sans text-xl font-semibold">Memoirs of Rutland</h3>
                    <p className="font-sans text-[16px] italic font-extralight mb-2">September 7, 2025</p>
                    <p className="text-[16px] font-serif font-normal">Assisted in catalog design for merchandise and seasonal publications, 
                        ensuring visual consistency and accurate layout under the guidance of the senior designer.</p>
                </div>

                <div className="col-start-1 col-span-3">
                    <h3 className="font-sans text-xl font-semibold leading-5">Tuttle Publishing: Working at a Publisher for a Summer </h3>
                    <p className="font-sans text-[16px] italic font-extralight mb-2">September 7, 2025</p>
                    <p className="text-[16px] font-serif font-normal">Assisted in catalog design for merchandise and seasonal... 
                    </p>
                </div>

                <div className="col-start-4 col-span-5 ">
                    <div className="relative aspect-[368/238] bg-gray-300 mb-4">
                        <Image
                        src="/images/scene2.JPG"
                        alt="memoirs"
                        fill
                        className="object-cover"
                        />
                    </div>
                </div>
            </div>
            </div> */}

            <div className="col-start-1 col-span-10 md:col-start-3 md:col-span-4">
                <h1 className="font-sans text-xl font-normal text-black dark:text-white">Work in progress...</h1>
                </div>
            
            

        </div>
        </div>
    </PageTransition>
  );
}
