"use client";

import schoolData from "@/data";
import Image from "next/image";
import React, { useEffect } from "react";
import { createPortal } from "react-dom";

const Modal = React.memo(function Modal({
  children,
  onSetModal,
}: {
  children: React.ReactNode;
  onSetModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  // Create a modal container
  const modalContainer = document.createElement("div");

  // Modal children
  const modalChildren = (
    <div className="grid place-items-center fixed top-0 backdrop-blur-md bg-white/10 h-screen w-screen z-50">
      <div className="w-full">
        <div className="flex justify-center mb-5">
          <button
            className={`relative py-2 px-7 rounded-full bg-[${schoolData.themeSecondaryColor}] text-white`}
            onClick={(e) => {
              const body = document.querySelector("body");
              body?.setAttribute("style", "overflow:scroll-y");
              onSetModal(false);
              e.stopPropagation();
            }}
          >
            close
          </button>
        </div>
        {children}
      </div>
    </div>
  );

  useEffect(() => {
    const modal = document.getElementById("modal");
    // Append the modal container to the modal element
    modal?.appendChild(modalContainer);
    // Disable scrolling
    const body = document.querySelector("body");
    body?.setAttribute("style", "overflow:hidden");
    () => {
      // Remove the modal container from the modal element
      if (modal?.lastChild) modal?.removeChild(modal.lastChild);
    };
  });
  // Render the children into the modal container
  return createPortal(modalChildren, modalContainer);
});

export default Modal;
