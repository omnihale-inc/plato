"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

import schoolData from "@/data";
import Modal from "./Modal";
import { ShowModal, UpdatesItemProps } from "@/types";
import { UpdatesProps, Update } from "@/types";
import { handbuck } from "@/utils/font";
import truncateText from "@/utils/truncateText";
import addItemToScreen from "@/utils/addItemsToScreen";

const UPDATES = schoolData.updates;

const Updates: React.FC = () => {
  const [showModal, setShowModal] = useState<ShowModal>({
    show: false,
    data: { image: "", title: "", description: "" },
  });

  return (
    <section
      className="mx-auto max-w-6xl w-5/6 mb-2 mt-10 lg:mt-16 lg:mb-8"
      id="updates"
    >
      <h2
        className={`${handbuck.className} pt-14 lg:pt-20 text-center text-3xl lg:text-6xl`}
      >
        Updates
      </h2>
      <div>
        <div className="lg:hidden">
          <UpdatesSmallScreen onShowModal={setShowModal} />
        </div>
        <div className="hidden lg:block">
          <UpdatesLargeScreen onShowModal={setShowModal} updates={UPDATES} />
        </div>

        {showModal.show && (
          <Modal onSetModal={setShowModal}>
            <div className="w-4/5 max-w-lg mx-auto mt-16">
              <div className="relative w-full h-44 lg:h-56 mb-6">
                <Image
                  src={showModal.data.image}
                  alt="update icon"
                  fill
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <div className="bg-white py-7 px-10 mb-10 rounded-lg">
                <h2 className={`${handbuck.className} lg:text-2xl`}>
                  {showModal.data.title}
                </h2>
                <p className="mt-3">{showModal.data.description}</p>
              </div>
            </div>
          </Modal>
        )}
      </div>
    </section>
  );
};

const UpdatesSmallScreen = ({
  onShowModal,
}: {
  onShowModal: React.Dispatch<React.SetStateAction<ShowModal>>;
}) => {
  return (
    <div className="flex overflow-x-scroll gap-4 updates-small_screen">
      {UPDATES.map((update, index) => (
        <div className="shrink-0 basis-64" key={index}>
          <UpdatesItem onShowModal={onShowModal} update={update} />
        </div>
      ))}
    </div>
  );
};

const UpdatesLargeScreen: React.FC<UpdatesProps> = ({
  updates,
  onShowModal,
}) => {
  const [renderedUpdates, setRenderedUpdates] = useState<Update[]>([]);
  const [cursor, setCursor] = useState(0);

  useEffect(() => {
    addItemToScreen(
      renderedUpdates,
      cursor,
      updates,
      setRenderedUpdates,
      setCursor
    );
  }, []);
  return (
    <>
      <div className="grid grid-cols-3 gap-7">
        {renderedUpdates.map((update, index) => (
          <React.Fragment key={index}>
            <UpdatesItem onShowModal={onShowModal} update={update} />
          </React.Fragment>
        ))}
      </div>
      {cursor < updates.length && (
        <button
          className={`${handbuck.className} mt-14 text-center w-full lg:text-2xl text-[#ee7834]`}
          onClick={() =>
            addItemToScreen(
              renderedUpdates,
              cursor,
              updates,
              setRenderedUpdates,
              setCursor
            )
          }
        >
          Read More
        </button>
      )}
    </>
  );
};

const UpdatesItem: React.FC<UpdatesItemProps> = ({ update, onShowModal }) => {
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    setTruncateText();
    window.addEventListener("resize", () => {
      setTruncateText();
    });
    return () =>
      window.removeEventListener("resize", () => {
        setTruncateText();
      });
  }, []);

  const setTruncateText = () => {
    // Truncate description
    truncateText(descriptionRef, 3);

    // Truncate title
    truncateText(titleRef, 1);
  };

  return (
    <div className="mt-6 lg:mt-10">
      <div className="relative h-36 lg:h-40 w-full">
        <Image
          src={update.image}
          alt=""
          fill
          objectFit="cover"
          className="rounded-md"
        />
      </div>
      <h2 className={`${handbuck.className} lg:text-2xl mt-6`} ref={titleRef}>
        {update.title}
      </h2>
      <p className="text-xs lg:text-sm" ref={descriptionRef}>
        {update.description}
      </p>
      {update.amount && (
        <p className="mt-3 lg:mt-5 font-semibold text-sm lg:text-base">
          {update.amount}
        </p>
      )}
      <p
        className="mt-2 font-regular text-blue-800 cursor-pointer"
        onClick={() => onShowModal({ show: true, data: update })}
      >
        Read
      </p>
    </div>
  );
};

export default Updates;
