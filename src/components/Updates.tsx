"use client";

import React, { useEffect, useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";

import schoolData from "@/data";
import Modal from "./Modal";
import { onUpdateData, UpdatesItemProps } from "@/types";
import { UpdatesProps, Update } from "@/types";
import { handbuck } from "@/utils/font";
import truncateText from "@/utils/truncateText";
import addItemToScreen from "@/utils/addItemsToScreen";

const UPDATES = schoolData.updates;

const Updates: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [updateData, setUpdateData] = useState<{
    image: string;
    title: string;
    description: string;
  }>({
    image: "",
    title: "",
    description: "",
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
          <UpdatesSmallScreen
            onUpdateData={setUpdateData}
            onShowModal={setShowModal}
          />
        </div>
        <div className="hidden lg:block">
          <UpdatesLargeScreen
            onUpdateData={setUpdateData}
            onShowModal={setShowModal}
            updates={UPDATES}
          />
        </div>
        {/* Renders full update contents on modal */}
        {showModal && (
          <Modal onSetModal={setShowModal} type="updates">
            <div className="w-4/5 max-w-lg mx-auto">
              <div className="relative w-full h-44 lg:h-56 mb-6">
                <Image
                  src={updateData.image}
                  alt="update icon"
                  fill
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <div className="bg-white py-5 px-6 mb-10 rounded-lg">
                <h3 className={`${handbuck.className} text-lg lg:text-2xl`}>
                  {updateData.title}
                </h3>
                <p className="mt-3 text-sm">{updateData.description}</p>
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
  onUpdateData,
}: {
  onShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  onUpdateData: onUpdateData;
}) => {
  return (
    <div className="flex overflow-x-scroll gap-4 updates-small_screen">
      {UPDATES.map((update, index) => (
        <div className="shrink-0 basis-64" key={index}>
          <UpdatesItem
            onShowModal={onShowModal}
            onUpdateData={onUpdateData}
            update={update}
          />
        </div>
      ))}
    </div>
  );
};

const UpdatesLargeScreen: React.FC<UpdatesProps> = ({
  updates,
  onShowModal,
  onUpdateData,
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
            <UpdatesItem
              onShowModal={onShowModal}
              onUpdateData={onUpdateData}
              update={update}
            />
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
          <h2>Read More</h2>
        </button>
      )}
    </>
  );
};

const UpdatesItem: React.FC<UpdatesItemProps> = ({
  update,
  onShowModal,
  onUpdateData,
}) => {
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Truncates text on page load and page resize
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
      <h3 className={`${handbuck.className} lg:text-2xl mt-6`} ref={titleRef}>
        {update.title}
      </h3>
      <p className="text-xs lg:text-sm" ref={descriptionRef}>
        {update.description}
      </p>
      <p
        className="text-xs lg:text-base mt-2 font-regular text-blue-800 cursor-pointer hover:font-semibold"
        onClick={() => {
          onShowModal(true);
          onUpdateData(update);
        }}
      >
        Read
      </p>
    </div>
  );
};

export default Updates;
