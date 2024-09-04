"use client";

import { useState } from "react";

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
      {/* Renders mobile nav */}
      {mobileNav && (
        <Modal onSetModal={setMobileNav} type="mobile-nav">
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
      )}
      {children}
      <div className="mt-32 lg:mt-0"></div>
      <BottomNavigation />
      <div className="hidden lg:block">
        <Footer />
      </div>
    </main>
  );
}

export default MasterPage;
