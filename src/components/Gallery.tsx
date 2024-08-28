import React, { useEffect, useState } from "react";
import Image from "next/image";
import Modal from "./Modal";
import getElementPosition from "@/utils/getElementPosition";
import { GalleryProps } from "@/types";
import schoolData from "@/data";
import { handbuck } from "@/utils/font";

const Gallery: React.FC<GalleryProps> = ({ onSetPositions }) => {
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    getElementPosition(onSetPositions, "gallery");
  }, [onSetPositions]);
  return (
    <section id="gallery">
      <div className="flex flex-col justify-between items-center mx-auto max-w-6xl w-5/6 py-6 lg:py-10 h-fit mt-7">
        <p className="lg:text-lg text-center">
          Discover Our School in Pictures! 🎓✨ Click the button to explore our
          vibrant gallery and see the magic of learning in action.
        </p>
        <button
          className={`block text-[${schoolData.themeSecondaryColor}] ${handbuck.className} text-lg lg:text-3xl mt-4`}
          onClick={() => setShowModal(true)}
        >
          See Gallery
        </button>
        {showModal && (
          <Modal onSetModal={setShowModal}>
            <div className="overflow-scroll py-5 gallery-scroll">
              <div className="flex justify-between w-11/12 mx-auto">
                {schoolData.gallery.map((file, index) =>
                  file.type === "image" ? (
                    <div
                      key={index}
                      className="basis-9/12 lg:basis-7/12 shrink-0 mr-4 lg:mr-10"
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
                      className="basis-9/12 lg:basis-7/12 shrink-0 mr-4 lg:mr-10"
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
            </div>
          </Modal>
        )}
      </div>
    </section>
  );
};

export default Gallery;
