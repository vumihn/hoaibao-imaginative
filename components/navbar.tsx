import { navItems } from "@/lib/constants";
import Link from "next/link";

export default function Navbar() {
    const getHoverColor = (itemName: string) => {
    switch (itemName) {
      case "works":
        return "hover:bg-[#FF0004]";
      case "thoughts":
        return "hover:bg-[#FFE500]";
      case "about/contact":
        return "hover:bg-[#00E522]";
      default:
        return "hover:bg-gray-500";
    }
  };

    return (
        <nav className="space-y-4 mb-10">
      {navItems.map((item) => (
        <div key={item.name} className="grid grid-cols-4 gap-4">
          <div className={`col-start-2 col-span-2 ${
            item.name === "thoughts" ? "text-right" : "text-left"
          }`}>
            <Link 
              href={item.href}
              className={`text-xl font-sans font-normal transition-colors ${getHoverColor(item.name)} ${
                item.name === "about/contact" ? "" : ""
              }`}
            >
              {item.name}
            </Link>
          </div>
        </div>
      ))}
    </nav>
    );
}