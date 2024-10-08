"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";

import truncateText from "@/utils/truncateText";
import schoolData from "@/data";
import Modal from "./Modal";

const Documents = ({ searchQuery }: { searchQuery: string }) => {
  const [documents, setDocuments] = useState<
    Array<{ title: string; url: string; locked: boolean }>
  >([]);
  const [isLocked, setIsLocked] = useState(true);
  useEffect(() => {
    if (searchQuery.trimStart().trimEnd() === "")
      setDocuments(schoolData.documents);
    else
      setDocuments(
        schoolData.documents.filter((document) =>
          document.title.toLocaleLowerCase().includes(searchQuery)
        )
      );
  }, [searchQuery]);
  return (
    <section className="flex flex-col items-center w-4/5 mx-auto mt-12 lg:24">
      {documents.map((document, index) => (
        <Document key={index} document={document} />
      ))}
    </section>
  );
};

const Document = ({
  document,
}: {
  document: { title: string; url: string; locked: boolean };
}) => {
  const documentTitleRef = useRef<HTMLParagraphElement>(null);
  const [showModal, setShowModal] = useState(false);
  const [downloading, setDownloading] = useState(false);

  useEffect(() => {
    truncateText(documentTitleRef, 3);
  }, [document]);
  return (
    <>
      <div className="flex items-center gap-2">
        <div className="flex items-center rounded-xl py-3 px-5 border border-gray-300 mb-2">
          <div className="relative w-7 h-7">
            <Image
              src="/icons/document.png"
              alt="pdf icon"
              fill
              objectFit="cover"
            />
          </div>
          <p
            className="text-[11px] lg:text-base mx-2 w-44 lg:w-72 pt-0.5"
            ref={documentTitleRef}
          >
            {document.title}
          </p>
          <div className="flex items-center gap-3">
            <button
              className="hidden lg:block"
              onClick={() => setShowModal(true)}
            >
              <DocumentIcon iconSrc="/icons/view.png" />
            </button>
            <a
              href={document.url}
              download={true}
              onClick={() => {
                setDownloading(true);
                setTimeout(() => setDownloading(false), 2000);
              }}
            >
              <DocumentIcon iconSrc="/icons/download.png" />
            </a>
          </div>
        </div>
        {downloading && (
          // downloading icon
          <div>
            <video
              src="/downloading.webM"
              autoPlay
              muted
              loop
              className="w-8 h-8"
            ></video>
            <p className="text-[8px]">downloading</p>
          </div>
        )}
      </div>
      {showModal && (
        <Modal onSetModal={setShowModal} type="pdf">
          <embed
            src={document.url}
            type=""
            className="w-full h-[75vh] lg:h-[70vh]"
          />
        </Modal>
      )}
    </>
  );
};

const DocumentIcon = ({ iconSrc }: { iconSrc: string | StaticImageData }) => {
  return (
    <div className="relative w-5 h-5  cursor-pointer">
      <Image
        src={iconSrc}
        alt="view pdf icon"
        fill
        objectFit="contain"
        fetchPriority="high"
      />
    </div>
  );
};

export default Documents;
