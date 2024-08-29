import React, { useEffect } from "react";
import getElementPosition from "@/utils/getElementPosition";
import { CalenderProps } from "@/types";
import schoolData from "@/data";
import { handbuck } from "@/utils/font";

const Calender: React.FC<CalenderProps> = ({ onSetPositions }) => {
  useEffect(() => {
    getElementPosition(onSetPositions, "calender");
  }, [onSetPositions]);
  return (
    <section id="calender">
      <div className="flex flex-col justify-between items-center mx-auto max-w-6xl w-5/6 py-6 lg:py-10 h-fit">
        <p className="lg:text-lg text-center">
          Never Miss a Date! 📅 Check out our school calendar by clicking the
          button below and stay updated on all upcoming events and holidays!
        </p>
        <a href={schoolData.calender} target="_blank">
          <button
            className={`block text-[${schoolData.themeSecondaryColor}] ${handbuck.className} text-lg lg:text-3xl mt-4`}
          >
            See Calender
          </button>
        </a>
      </div>
    </section>
  );
};

export default Calender;
