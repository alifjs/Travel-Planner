"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Compass, Map, Calendar, Home } from "lucide-react";

const Navbar = () => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  const navItems = [
    {
      name: "Home",
      path: "/",
      icon: <Home className="w-5 h-5" />,
    },
    {
      name: "Destinations",
      path: "/destinations",
      icon: <Compass className="w-5 h-5" />,
    },
    {
      name: "Itinerary",
      path: "/itinerary",
      icon: <Calendar className="w-5 h-5" />,
    },
    {
      name: "Recommendations",
      path: "/recommendations",
      icon: <Map className="w-5 h-5" />,
    },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 md:top-0 md:bottom-auto md:border-t-0 md:border-b">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between md:justify-start md:space-x-10">
          <div className="hidden md:flex items-center">
            <Link href="/" className="flex items-center py-4">
              <span className="text-xl font-bold text-indigo-600 dark:text-indigo-400">TravelAI</span>
            </Link>
          </div>
          <div className="flex justify-around w-full md:justify-end md:w-auto">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`flex flex-col items-center justify-center py-2 px-3 md:px-4 md:py-4 md:flex-row md:space-x-2 transition-colors ${
                  isActive(item.path)
                    ? "text-indigo-600 dark:text-indigo-400"
                    : "text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400"
                }`}
              >
                {item.icon}
                <span className="text-xs md:text-sm mt-1 md:mt-0">{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 