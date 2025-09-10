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
          { name: "home", href: "/", alignment: "left" },           // Inherits red hover (works color)
          { name: "thoughts", href: "/thoughts", alignment: "right" },
          { name: "about/contact", href: "/about/contact", alignment: "left" },
        ];
      case "/thoughts":
        return [
          { name: "works", href: "/works", alignment: "left" },
          { name: "home", href: "/", alignment: "right" },           // Inherits yellow hover (thoughts color)
          { name: "about/contact", href: "/about/contact", alignment: "left" },
        ];
      case "/about/contact":
        return [
          { name: "works", href: "/works", alignment: "left" },
          { name: "thoughts", href: "/thoughts", alignment: "right" },
          { name: "home", href: "/", alignment: "left" },           // Inherits green hover (about/contact color)
        ];
      default: // Homepage
        return navItems.map(item => ({ ...item, 
          alignment: item.name === "thoughts" ? "right" : "left" }));
    }
  };

  const currentNavItems = getDynamicNavItems();

    return (
        <nav className="space-y-4 mb-12">
      {currentNavItems.map((item) => (
        <div key={item.name} className="grid grid-cols-4 gap-4">
          <div className={`col-start-2 col-span-2 ${
            item.alignment === "right" ? "text-right" : "text-left"
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