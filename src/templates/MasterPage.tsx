"use client";

import { Dispatch, SetStateAction, useState } from "react";

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

  return (
    <main>
      <TopNavigation onMobileNav={setMobileNav} />
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
        <div className="h-32 lg:hidden"></div>
      </div>
      <div className="hidden lg:block">
        <Footer />
      </div>
    </div>
  );
}

export default MasterPage;
