"use client";

import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

const Modal = React.memo(function Modal({
  children,
  onSetModal,
  type,
}: {
  children: React.ReactNode;
  onSetModal: React.Dispatch<React.SetStateAction<boolean>>;
  type: "updates" | "mobile-nav";
}) {
  // Modal children for Updates
  const modalChildrenForUpdates = (
    <div className="fixed top-0 backdrop-blur-md bg-white/10 h-screen w-screen z-50">
      <div className="w-full">
        <div className="flex sticky justify-center mb-5 z-50">
          <button
            className={`block sticky px-7 rounded-full w-16 h-16 z-40 mt-4`}
            onClick={(e) => closeModal(e)}
          >
            <Image
              src="/icons/close.png"
              alt="close icon"
              fill
              objectFit="cover"
            />
          </button>
        </div>
        <div className="h-screen overflow-y-auto pb-28 modal-content-scroll">
          {children}
        </div>
      </div>
    </div>
  );

  // Modal children for mobile navigation
  const modalChildrenForMobileNav = (
    <div className="fixed top-0 backdrop-blur-md bg-white/10 h-screen w-screen z-50">
      <div className="flex flex-col items-end w-full pt-10 pr-10">
        <button
          className="block relative w-10 h-10 cursor-pointer"
          onClick={(e) => closeModal(e)}
        >
          <Image
            src="/icons/close.png"
            alt="close icons"
            fill
            objectFit="cover"
          />
        </button>
        <div className="flex justify-end w-full mt-5">
          <div className=" bg-white w-3/5 p-5 rounded-md border border-gray-300">
            {children}
          </div>
        </div>
      </div>
    </div>
  );

  const closeModal = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const body = document.querySelector("body");
    body?.setAttribute("style", "overflow:scroll-y");

    const modal = document.getElementById("modal");

    // Remove all modal nodes on close
    if (modal?.lastChild)
      while (modal?.hasChildNodes()) modal?.removeChild(modal.lastChild);

    onSetModal(false);
    e.stopPropagation();
  };

  const modalContainer = document.createElement("div");

  useEffect(() => {
    const modal = document.getElementById("modal");

    // Append the modal container to the modal element
    modalContainer && modal?.appendChild(modalContainer);

    // Disable scrolling
    const body = document.querySelector("body");
    body?.setAttribute("style", "overflow:hidden");
    () => {
      // Remove the modal container from the modal element
      if (modal?.lastChild) modal?.removeChild(modal.lastChild);
    };
  }, []);
  if (modalContainer)
    if (type === "updates")
      // Render the children into the modal container
      return createPortal(modalChildrenForUpdates, modalContainer);
    else return createPortal(modalChildrenForMobileNav, modalContainer);
});

export default Modal;
