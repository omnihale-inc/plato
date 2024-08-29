import React, { useEffect, useState } from "react";
import getElementPosition from "@/utils/getElementPosition";
import { NewsLetterProps } from "@/types";
import schoolData from "@/data";
import { handbuck } from "@/utils/font";

const NewsLetter: React.FC<NewsLetterProps> = ({ onSetPositions }) => {
  useEffect(() => {
    getElementPosition(onSetPositions, "newsletter");
  }, [onSetPositions]);
  return (
    <section id="newsletter">
      <div className="flex flex-col justify-between items-center mx-auto max-w-6xl w-5/6 py-6 lg:py-10 h-fit">
        <p className="lg:text-lg text-center">
          Stay in the Know! 📰✨ Click the button to dive into our latest school
          newsletter and catch up on all the exciting information.
        </p>
        <a href={schoolData.newsletter} target="_blank">
          <button
            className={`block text-[${schoolData.themeSecondaryColor}] ${handbuck.className} text-lg lg:text-3xl mt-4`}
          >
            See NewsLetter
          </button>
        </a>
      </div>
    </section>
  );
};

export default NewsLetter;
