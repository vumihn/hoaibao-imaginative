import Navbar from "@/components/navbar";
import PageTransition from "@/components/PageTransition";
import Image from "next/image";

export default function Home() {
  return (
    <PageTransition>
        <div className="min-h-screen bg-white py-12 px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-8 gap-4">
              <div className="col-start-3 col-span-4 text-center">
              <div>
                  <Navbar/>
              </div>

              <div>
                  <p className="font-serif text-xl font-light mb-12">multidisciplinary designer based in Hanoi, Vietnam but<br/>
                  currently residing in Rutland, Vermont, USA.</p>
              </div>
              </div>

              <div className="col-start-3 col-span-4 b-12 border-b border-black">
              </div>

          </div>
        </div>
    </PageTransition>
  );
}
