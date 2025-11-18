import Navbar from "@/components/navbar";
import PageTransition from "@/components/PageTransition";
import DarkToggle from "@/components/darktoggle";

export default function Home() {
  return (
    <PageTransition>
        <div className="min-h-screen bg-white dark:bg-black py-12 px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-8 gap-4">
            <DarkToggle />
              <div className="col-start-3 col-span-4 text-center">
              <div>
                  <Navbar/>
              </div>

              <div>
                  <p className="font-serif text-xl font-light mb-12 text-black dark:text-white">multidisciplinary designer, coder based in Hanoi, Vietnam but
                  currently residing in Dallas, TX, USA.</p>
              </div>
              </div>

              <div className="col-start-2 col-span-6 b-12 border-b border-black dark:border-white">
              </div>

          </div>
        </div>
    </PageTransition>
  );
}
