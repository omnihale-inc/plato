"use client";

import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

import BottomNavigation from "@/components/BottomNavigation";
import Footer from "@/components/Footer";
import TopNavigation from "@/components/TopNavigation";
import Modal from "@/components/Modal";
import Link from "next/link";
import { ollifiaPoettry } from "@/utils/font";
import Image from "next/image";

function MasterPage({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [mobileNav, setMobileNav] = useState(false);
  const setWindowPosition = useState(0)[1];
  const [hideNav, setHideNav] = useState(false);

  useEffect(() => {
    const handlerWindowScroll = () => {
      const scrollPosition = window.scrollY;
      const topNavigationHeight = window.innerWidth < 800 ? 70 : 60;
      // Given that the windowScrollHandler will execute outside
      // of the current MasterPage context, the only way to access
      // the currentWindowPosition is through the prevState variable
      // of the function parameter of the setWindowPosition
      setWindowPosition((prevState) => {
        if (
          scrollPosition > prevState &&
          scrollPosition > topNavigationHeight
        ) {
          setHideNav(true);
          return scrollPosition;
        } else {
          setHideNav(false);
          return scrollPosition;
        }
      });
    };

    window.addEventListener("scroll", handlerWindowScroll);
    return () => window.removeEventListener("scroll", handlerWindowScroll);
  }, []);

  return (
    <main>
      <TopNavigation onMobileNav={setMobileNav} hideNav={hideNav} />
      <MobileNav mobileNav={mobileNav} onMobileNav={setMobileNav} />
      <MasterPageContent>{children}</MasterPageContent>
      <BottomNavigation />
    </main>
  );
}

function MobileNav({
  mobileNav,
  onMobileNav,
}: {
  mobileNav: boolean;
  onMobileNav: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    mobileNav && (
      <Modal onSetModal={onMobileNav} type="mobile-nav">
        <div>
          <Link
            className="flex items-center text-sm font-medium bizscribes"
            href="https://omnihale.com/bizscribes"
            target="_blank"
          >
            <div className="relative w-4 h-4">
              <Image
                src="/icons/article.png"
                alt="bizscribe icon"
                fill
                objectFit="cover"
              />
            </div>
            BizScribes
          </Link>
          <p className="text-xs text-center mt-8">
            <span className={`${ollifiaPoettry.className} text-base`}>
              property{" "}
            </span>
            of omnihale
          </p>
        </div>
      </Modal>
    )
  );
}

function MasterPageContent({ children }: { children: React.ReactNode }) {
  return (
    <div className="masterpage-content">
      <div>
        {children}
        {/* add spacing between BottomNavigation */}
        <div className="spacing-bottom-nav"></div>
      </div>
      <div className="hidden lg:block">
        <Footer />
      </div>
    </div>
  );
}

export default MasterPage;
