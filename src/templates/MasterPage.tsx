"use client";

import { Dispatch, SetStateAction, useEffect, useState } from "react";

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
  const [showPopUp, setShowPopUp] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  const [hideNav, setHideNav] = useState(false);
  const setWindowPosition = useState(0)[1];

  useEffect(() => {
    const handlerWindowScroll = () => {
      const scrollPosition = window.scrollY;
      const topNavigationHeight = 67;
      const mediumScreen = 800;
      // Given that the windowScrollHandler will execute outside
      // of the current MasterPage context, the only way to access
      // the currentWindowPosition is through the prevState variable
      // of the function parameter of the setWindowPosition
      setWindowPosition((prevState) => {
        if (
          scrollPosition > prevState &&
          scrollPosition > topNavigationHeight &&
          innerWidth < mediumScreen
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

  useEffect(() => {
    // Handles showing pop when user visits the website for the first
    // using that device
    const timeSinceLastPopUp = localStorage.getItem("last-popup");
    if (timeSinceLastPopUp) {
      const timeSinceLastPopUpInDate = new Date(timeSinceLastPopUp);
      const twoWeeksLater = new Date(
        timeSinceLastPopUpInDate.getTime() + 14 * 24 * 60 * 60 * 1000
      );
      const currentDate = new Date();
      if (currentDate >= twoWeeksLater) {
        setShowPopUp(true);
        localStorage.setItem("last-popup", JSON.stringify(new Date()));
      }
    } else {
      localStorage.setItem("last-popup", JSON.stringify(new Date()));
      setShowPopUp(true);
    }
  }, []);

  return (
    <main>
      <TopNavigation onMobileNav={setMobileNav} hideNav={hideNav} />
      <MobileNav mobileNav={mobileNav} onMobileNav={setMobileNav} />
      <BizScribesPop showPopUp={showPopUp} onShowPopUp={setShowPopUp} />
      <MasterPageContent>{children}</MasterPageContent>
      <BottomNavigation />
    </main>
  );
}

const BizScribesPop = ({
  showPopUp,
  onShowPopUp,
}: {
  showPopUp: boolean;
  onShowPopUp: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    showPopUp && (
      <Modal onSetModal={onShowPopUp} type="popup">
        <div className="flex flex-col justify-between lg:flex-row bg-black h-fit w-full rounded-lg">
          <div className="text-white p-5">
            <p className="text-2xl lg:text-6xl">
              Take your business to the{" "}
              <span className="font-bold">NEXT LEVEL</span> for free
            </p>
            <p className="lg:text-2xl mt-3">
              Visit{" "}
              <a
                href="https://omnihale.com/bizscribes"
                target="_blank"
                className="text-blue-800 hover:underline"
              >
                Omnihale Bizscribes
              </a>
            </p>
            <p className="lg:text-2xl mt-3">
              *Follow @omni.hale on Instagram to stay updated on Bizscribes
            </p>
          </div>
          <div className="relative elon-image">
            <Image
              src="/musk.webp"
              alt="elon musk"
              fill
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </Modal>
    )
  );
};

const MobileNav = ({
  mobileNav,
  onMobileNav,
}: {
  mobileNav: boolean;
  onMobileNav: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    mobileNav && (
      <Modal onSetModal={onMobileNav} type="mobile-nav">
        <div>
          <Link
            className="flex items-center text-sm font-medium bizscribes"
            href="https://omnihale.com/bizscribes"
            target="_blank"
          >
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
};

const MasterPageContent = ({ children }: { children: React.ReactNode }) => {
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
};

export default MasterPage;
