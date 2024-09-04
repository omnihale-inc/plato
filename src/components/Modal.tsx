"use client";

import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

import { ShowModal } from "@/types";

const Modal = React.memo(function Modal({
  children,
  onSetModal,
}: {
  children: React.ReactNode;
  onSetModal: React.Dispatch<React.SetStateAction<ShowModal>>;
}) {
  // Modal children
  const modalChildren = (
    <div className="fixed top-0 backdrop-blur-md bg-white/10 h-screen w-screen z-50">
      <div className="w-full">
        <div className="flex sticky justify-center mb-5 z-50">
          <button
            className={`block sticky px-7 rounded-full w-16 h-16 z-40 mt-4`}
            onClick={(e) => {
              const body = document.querySelector("body");
              body?.setAttribute("style", "overflow:scroll-y");

              const modal = document.getElementById("modal");

              // Remove all modal nodes on close
              if (modal?.lastChild)
                while (modal?.hasChildNodes())
                  modal?.removeChild(modal.lastChild);

              onSetModal((prevState) => ({ ...prevState, show: false }));
              e.stopPropagation();
            }}
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
    // Render the children into the modal container
    return createPortal(modalChildren, modalContainer);
});

export default Modal;
