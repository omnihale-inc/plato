"use client";

import React, { useState } from "react";
import Image from "next/image";
import Modal from "./Modal";
import schoolData from "@/data";
import { handbuck } from "@/utils/font";

const Gallery: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <section className="mt-7" id="gallery">
      <div className="flex flex-col justify-between items-center mx-auto max-w-6xl w-5/6 py-6 lg:py-8 h-fit">
        <p className="lg:text-lg text-center text-sm">
          Discover Our School in Pictures! 🎓✨ Click the button to explore our
          vibrant gallery and see the magic of learning in action.
        </p>
        <button
          className={`block ${handbuck.className} text-lg lg:text-3xl mt-4`}
          onClick={() => setShowModal(true)}
        >
          <h2>See Gallery</h2>
        </button>
        {showModal && (
          <Modal onSetModal={setShowModal} type="gallery">
            <div className="flex justify-between gap-4 lg:gap-10 pb-4 lg:pb-8">
              {schoolData.gallery.map((file, index) =>
                file.type === "image" ? (
                  <div
                    key={index}
                    className="basis-9/12 lg:basis-7/12 shrink-0"
                  >
                    <div className="relative h-48 md:h-[395px] w-full">
                      <Image
                        src={file.src}
                        alt=""
                        fill
                        objectFit="cover"
                        className="rounded-md"
                      />
                    </div>
                    {file.caption && <p className="mt-4">{file.caption}</p>}
                  </div>
                ) : (
                  <div
                    key={index}
                    className="basis-9/12 lg:basis-7/12 shrink-0"
                  >
                    <video
                      src={file.src as string}
                      controls
                      className="h-48 md:h-[395px] w-full object-cover rounded-md"
                    ></video>
                    {file.caption && <p className="mt-4">{file.caption}</p>}
                  </div>
                )
              )}
            </div>
          </Modal>
        )}
      </div>
    </section>
  );
};

export default Gallery;
