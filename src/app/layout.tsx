import type { Metadata } from "next";
import "./globals.css";
import schoolData from "@/data";

import { satoshi } from "@/utils/font";
import BottomNavigation from "@/components/BottomNavigation";

export const metadata: Metadata = {
  title: schoolData.title,
  description: `${schoolData.title} school website`,
  keywords: [
    `${schoolData.title} website`,
    `${schoolData.title} information center`,
    `${schoolData.title} main indentity`,
    `${schoolData.title} school`,
  ],
  icons: schoolData.logo,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={satoshi.className}>
        <div id="modal"></div>
        {children}
        <BottomNavigation />
      </body>
    </html>
  );
}
