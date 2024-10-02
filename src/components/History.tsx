"use client";

import React, { useState } from "react";
import Image from "next/image";
import schoolData from "@/data";
import Modal from "./Modal";
import { handbuck } from "@/utils/font";

const History = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <section id="history">
      <div className="flex flex-col justify-between items-center mx-auto max-w-6xl w-5/6 py-6 lg:py-8 h-fit">
        <p className="lg:text-lg text-center text-sm">
          Step into the past! Tap the button to uncover our school&apos;s
          incredible journey through time. 🏫✨
        </p>
        <button
          className={`block ${handbuck.className} text-lg lg:text-3xl mt-4`}
          onClick={() => setShowModal(true)}
        >
          <h2>See History</h2>
        </button>
        {showModal && (
          <Modal onSetModal={setShowModal} type="history">
            <div className="flex justify-between gap-4 lg:gap-7 mb-5 lg:mb-10 lg:pb-8 overflow-y-auto modal-content-scroll ">
              {schoolData.history.images.map((image, index) => (
                <div
                  className="relative h-32 md:h-48 basis-48 lg:basis-56 shrink-0"
                  key={index}
                >
                  <Image
                    src={image}
                    alt=""
                    fill
                    objectFit="cover"
                    className="rounded-md"
                  />
                </div>
              ))}
            </div>
            <div className="h-[50vh] lg:h-[40vh] mb-10 lg:mb-16 text-center text-sm lg:text-base overflow-y-auto modal-content-scroll">
              {schoolData.history.texts.paragraphs.map((paragraph, index) => (
                <p key={index} className="mb-2 lg:mb-4">
                  {paragraph}
                </p>
              ))}
              {schoolData.history.texts.events.map((event, index) => (
                <ul className="my-5 lg:my-10 list-disc" key={index}>
                  <h2
                    className={`${handbuck.className} uppercase font-black mb-3`}
                  >
                    {event.title}
                  </h2>
                  {event.details.map((detail, index) => (
                    <li key={index} className="mb-1 lg:mb-2 text-left">
                      * {detail}
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </Modal>
        )}
      </div>
    </section>
  );
};

export default History;
