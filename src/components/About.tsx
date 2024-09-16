"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { handbuck } from "@/utils/font";
import schoolData from "@/data";

const About: React.FC = () => {
  return (
    <section className="mt-40 lg:mt-44 mx-auto max-w-6xl w-5/6">
      <div className="flex flex-col justify-between items-center mx-auto max-w-6xl w-5/6">
        <div className="lg:w-5/6 mb-4 lg:mb-8">
          <h1
            className={`${handbuck.className} text-center text-3xl lg:text-7xl mb-6`}
          >
            {schoolData.about.header.main}{" "}
            <span>{schoolData.about.header.span}</span>
          </h1>
          <p className="text-xs lg:text-base text-center max-w-[900px] mx-auto font-light leading-2 lg:leading-[25px] mb-3 lg:mb-0">
            {schoolData.about.paragraph}
          </p>
        </div>
        <VideoPlayer src={schoolData.about.video} />
      </div>
    </section>
  );
};

export const VideoPlayer = ({ src }: { src: string }) => {
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
        src={src}
        className="rounded-lg lg:rounded-xl object-cover w-full h-full"
        ref={videoRef}
        loop={true}
      ></video>
      <div
        onClick={stopVideoHandler}
        className={`video-bg absolute top-0 rounded-lg lg:rounded-xl opacity-20 h-full w-full ${cursor}`}
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
          className="video-bg grid place-items-center relative lg:h-20 lg:w-20 rounded-full p-5 z-20"
        >
          <div className="absolute  grid place-items-center w-full h-full top-0">
            <div className="relative h-5 w-5 lg:h-10 lg:w-10 rotate-180">
              <Image src="/play.png" alt="play" fill />
            </div>
          </div>
        </button>
        <div className="video-bg absolute h-14 w-14 lg:h-28 lg:w-28 rounded-full p-5 opacity-40"></div>
      </div>
    )
  );
};

export default About;
