"use client";

import { navItems } from "@/lib/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";  

export default function Navbar() {
    const pathname = usePathname(); // Get the current path

    const getHoverColor = (itemName: string, currentPage: string) => {
      if (itemName === "home") { 
        switch (currentPage) {
        case "/works":
            return "hover:bg-[#FF0004]";
        case "/thoughts":
            return "hover:bg-[#FFE500]";
        case "/about/contact":
            return "hover:bg-[#00E522]";
        default:
            return "hover:bg-gray-500";
        }
    }

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

    const getDynamicNavItems = () => {
    switch (pathname) {
      case "/works":
        return [
          { name: "home", href: "/" },           // Inherits red hover (works color)
          { name: "thoughts", href: "/thoughts" },
          { name: "about/contact", href: "/about" },
        ];
      case "/thoughts":
        return [
          { name: "works", href: "/works" },
          { name: "home", href: "/" },           // Inherits yellow hover (thoughts color)
          { name: "about/contact", href: "/about" },
        ];
      case "/about":
        return [
          { name: "works", href: "/works" },
          { name: "thoughts", href: "/thoughts" },
          { name: "home", href: "/" },           // Inherits green hover (about/contact color)
        ];
      default: // Homepage
        return navItems;
    }
  };

  const currentNavItems = getDynamicNavItems();

    return (
        <nav className="space-y-4 mb-12">
      {currentNavItems.map((item) => (
        <div key={item.name} className="grid grid-cols-4 gap-4">
          <div className={`col-start-2 col-span-2 ${
            item.name === "thoughts" ? "text-right" : "text-left"
          }`}>
            <Link 
              href={item.href}
              className={`text-xl font-sans font-normal transition-colors ${getHoverColor(item.name, pathname)} ${
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