import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AboutProps } from "@/types";
import { handbuck } from "@/utils/font";
import playImage from "@/assets/images/icons/play.png";
import getElementPosition from "@/utils/getElementPosition";
import schoolData from "@/data";

const About: React.FC<AboutProps> = ({ onSetPositions }) => {
  useEffect(() => {
    getElementPosition(onSetPositions, "about");
  }, [onSetPositions]);

  return (
    <section className="mt-5 lg:mt-10" id="about">
      <div className="flex flex-col justify-between items-center mx-auto max-w-6xl w-5/6 py-11 lg:py-16 h-fit">
        <div className="lg:flex lg:flex-col h-full lg:h-[356px] lg:w-5/6 mb-4 lg:mb-8">
          <h2
            className={`${handbuck.className} text-center text-2xl lg:text-6xl mt-10 mb-6`}
          >
            {schoolData.about.header.main}{" "}
            <span className={`text-[${schoolData.themeSecondaryColor}]`}>
              {schoolData.about.header.span}
            </span>
          </h2>
          <p className="text-xs lg:text-xl text-center max-w-[900px] mx-auto font-light leading-2 lg:leading-[25px]">
            {schoolData.about.paragraph}
          </p>
          <div className="lg:flex lg:justify-end lg:items-end">
            <p
              className={`${handbuck.className} text-xs lg:text-base text-center lg:text-left mt-6 lg:mt-10`}
            >
              About
            </p>
          </div>
        </div>
        <VideoPlayer />
      </div>
    </section>
  );
};

const VideoPlayer = () => {
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [cursor, setCursor] = useState("");
  const videoRef = useRef<HTMLVideoElement>(null);

  const playVideoHandler = () => {
    videoRef.current?.play();
    setVideoPlaying(true);
    setCursor("cursor-pointer");
  };

  const stopVideoHandler = () => {
    videoRef.current?.pause();
    setVideoPlaying(false);
    setCursor("");
  };
  return (
    <div className="relative h-36 md:h-[395px] w-full mx-auto">
      <video
        src={schoolData.about.video}
        className="rounded-lg object-cover w-full h-full"
        ref={videoRef}
        loop={true}
      ></video>
      <div
        onClick={stopVideoHandler}
        className={`absolute top-0 rounded-lg bg-[#ee7834] opacity-20 h-full w-full ${cursor}`}
      ></div>
      <PlayButton
        videoPlaying={videoPlaying}
        playVideoHandler={playVideoHandler}
      />
    </div>
  );
};

const PlayButton = ({
  videoPlaying,
  playVideoHandler,
}: {
  videoPlaying: boolean;
  playVideoHandler: () => void;
}) => {
  return (
    !videoPlaying && (
      <div className="absolute top-0 grid place-items-center h-full w-full">
        <button
          onClick={playVideoHandler}
          className="bg-[#ee7834] relative lg:h-20 lg:w-20 rounded-full p-5 z-20"
        >
          <div className="absolute h-5 w-5 lg:h-10 lg:w-10 top-[10px] left-3 lg:top-5 lg:left-6 ">
            <Image src={playImage} alt="play" fill />
          </div>
        </button>
        <div className="bg-[#ee7834] absolute h-14 w-14 lg:h-28 lg:w-28 rounded-full p-5 opacity-40"></div>
      </div>
    )
  );
};

export default About;
