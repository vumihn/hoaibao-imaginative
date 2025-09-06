import Navbar from "@/public/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-8 gap-4">
        <div className="col-start-3 col-span-4 text-center">
          <div className="grid grid-cols-4 gap-4 ">
            <div className="col-start-2 col-span-2">
              <div className="aspect-[349/117] mx-auto mb-2 relative">
                <Image
                  src="/images/hoaibaoimaginative.png"
                  alt="hoaibao imaginative"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4 mb-6 ">
            <div className="col-start-2 col-span-2"> {/* CENTER 2 columns */}
              <div className="aspect-[345/264] relative">
                <Image
                  src="/images/baby1.png"
                  alt="baby1"
                  fill
                  className="object-cover rounded-sm"
                />
              </div>
            </div>
          </div>

          <div>
            <Navbar/>
          </div>
        </div>
      </div>
    </div>
  );
}
