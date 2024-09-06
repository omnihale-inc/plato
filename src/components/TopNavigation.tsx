"use client";

import Image from "next/image";
import Navigation from "./Navigation";

const TopNavigation = ({
  hideNav,
  onMobileNav,
}: {
  hideNav: boolean;
  onMobileNav: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    !hideNav && (
      <header className="fixed top-0 w-full z-30 bg-white pb-7 border-b border-gray-200 top-nav">
        <section className="flex flex-col items-center lg:flex-row lg:justify-between lg:items-center mt-8 mx-auto max-w-6xl w-5/6">
          <div className="relative w-10 h-10">
            <Image src="/logo.png" alt="logo" fill />
          </div>
          <div className="absolute top-0 h-full w-full flex justify-end items-center pr-4">
            <div
              className="relative w-6 h-6 lg:hidden cursor-pointer"
              onClick={() => onMobileNav(true)}
            >
              <Image
                src="/icons/nav.png"
                alt="mobile nav"
                fill
                objectFit="cover"
              />
            </div>
          </div>
          <div className="hidden lg:block">
            <Navigation />
          </div>
        </section>
      </header>
    )
  );
};

export default TopNavigation;
