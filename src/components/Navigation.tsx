"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { fetchAndStoreFiles, getFileByName } from "@/lib/indexedDB";

const NAVIGATION_LINKS = ["Home", "About", "Documents"];
const ICONS = [
  {
    name: "home",
    active: "/icons/home-active.png",
    inactive: "/icons/home.png",
  },
  {
    name: "about",
    active: "/icons/about-active.png",
    inactive: "/icons/about.png",
  },
  {
    name: "documents",
    active: "/icons/documents-active.png",
    inactive: "/icons/documents.png",
  },
];

const Navigation: React.FC = () => {
  const [icons, setIcons] = useState<Array<{ name: string; src: string }>>([]);
  const [imageCache, setImageCache] = useState<Map<any, any>>(new Map());

  // Stores image files in indexDB to improve performance
  useEffect(() => {
    handleFetchAndStoreNavIcons();
    Object.entries(imageCache).length < 6 &&
      handleNavigationIconRetrieval(setIcons, setImageCache);
  }, []);

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
                  ? checkImageCache(imageCache, link, icons, "active")
                  : checkImageCache(imageCache, link, icons, "inactive")
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

const handleFetchAndStoreNavIcons = async () => {
  const fileUrls: { name: string; url: string }[] = []; // Add all the file URLs you want to store
  ICONS.forEach((icon) => {
    fileUrls.push({ name: `${icon.name}-active`, url: icon.active });
    fileUrls.push({ name: icon.name, url: icon.inactive });
  });
  try {
    await fetchAndStoreFiles(fileUrls);
    console.log(fileUrls);
  } catch (error) {
    console.log("error trying to fetch and store files");
  }
};

const handleNavigationIconRetrieval = async (
  setIcons: Dispatch<
    SetStateAction<
      {
        name: string;
        src: string;
      }[]
    >
  >,
  setImageCache: Dispatch<SetStateAction<Map<any, any>>>
) => {
  const imageSrcs = [];
  const imageCache: Map<any, any> = new Map();

  // Extracts the active and inactive icons
  // Note: the only active icons are suffixed with "-active"
  // as part of there string names
  for (let icon of ICONS) {
    const fileDataActive = await getFileByName(`${icon.name}-active`);
    const fileDataInactive = await getFileByName(icon.name);

    if (fileDataActive && fileDataInactive) {
      const imgSrcActive = URL.createObjectURL(fileDataActive.fileBlob);
      const imgSrcInactive = URL.createObjectURL(fileDataInactive.fileBlob);
      imageSrcs.push({ name: `${icon.name}-active`, src: imgSrcActive });
      imageSrcs.push({
        name: `${icon.name}`,
        src: imgSrcInactive,
      });
      imageCache.set([`${icon.name}-active`], imgSrcActive);
      imageCache.set([`${icon.name}`], imgSrcInactive);
    }
  }

  setIcons(imageSrcs);
  setImageCache(imageCache);
};

const getImageSrc = (
  icons: {
    name: string;
    src: string;
  }[],
  link: string,
  state?: string
) => {
  if (icons.length > 0) {
    const requestIcon =
      state === "active"
        ? icons.filter(
            (icon) => icon.name === `${link.toLocaleLowerCase()}-active`
          )[0]
        : icons.filter(
            (icon) => icon.name === `${link.toLocaleLowerCase()}`
          )[0]; // active or inactive navigation icon

    if (requestIcon && requestIcon.src) {
      return requestIcon.src;
    }
  }
  return state === "active"
    ? `/icons/${link.toLocaleLowerCase()}-active.png`
    : `/icons/${link.toLocaleLowerCase()}.png`;
};

export default Navigation;

function checkImageCache(
  imageCache: Map<any, any>,
  link: string,
  icons: { name: string; src: string }[],
  state: "active" | "inactive"
) {
  if (state === "active") {
    if (imageCache.has(`${link.toLocaleLowerCase()}-active`)) {
      return imageCache.get(`${link.toLocaleLowerCase()}-active`);
    }
    return getImageSrc(icons, link, state);
  } else {
    if (imageCache.has(`${link.toLocaleLowerCase()}`)) {
      return imageCache.get(`${link.toLocaleLowerCase()}`);
    }
    return getImageSrc(icons, link);
  }
}
