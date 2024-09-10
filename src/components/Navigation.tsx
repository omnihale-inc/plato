"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type IconType = "home" | "about" | "documents";

const NAVIGATION_LINKS = ["Home", "About", "Documents"];

const Navigation: React.FC = () => {
  const icons = {
    home: {
      active: "/icons/home-active.png",
      inactive: "/icons/home.png",
    },
    about: {
      active: "/icons/about-active.png",
      inactive: "/icons/about.png",
    },
    documents: {
      active: "/icons/documents-active.png",
      inactive: "/icons/documents.png",
    },
  };

  const currentUrlPath = usePathname();
  const isActive = (href: string) => currentUrlPath === href;

  const setStyleForActiveLink = (link: string) => {
    const href = setHref(link);
    return `${
      isActive(href) ? "font-semibold" : ""
    } relative flex flex-col lg:flex-row items-center justify-center lg:pb-3 text-xs lg:text-base `;
  };

  const setHref = (link: string) =>
    link === "Home" ? "/" : `/${link.toLowerCase()}`;

  return (
    <nav className="flex justify-evenly lg:justify-between mt-4 lg:mt-3 z-50 lg:gap-4">
      {NAVIGATION_LINKS.map((link, index) => (
        <Link
          href={setHref(link)}
          key={index}
          className={setStyleForActiveLink(link)}
        >
          <div className="relative h-5 w-5 lg:h-4 lg:mr-1 lg:w-4 mb-1 lg:mb-0">
            <Image
              src={
                isActive(setHref(link))
                  ? icons[link.toLocaleLowerCase() as IconType].active
                  : icons[link.toLocaleLowerCase() as IconType].inactive
              }
              alt="nav-icon"
              fill
              objectFit="contain"
            />
          </div>
          {link}
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;
