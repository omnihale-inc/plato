"use client";

import Image from "next/image";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

const ContinuousSlider = ({ images }: { images: string[] }) => {
  const [scrollImages, setScrollImages] = useState<Array<string>>();
  const [isPaused, setIsPaused] = useState(false);
  const animationFrameRef = useRef<number | null>(null); // Store requestAnimationFrame ID
  const sliderRef = useRef<HTMLDivElement>(null);
  const showBackgroundRef = useRef<HTMLDivElement>(null);
  const scrollStep = 1; // Adjust this value for speed

  useLayoutEffect(() => {
    // Duplicates the images a 1000 times
    let imagesToScroll: string[] = [];
    for (let index = 0; index < 1000; index++) {
      imagesToScroll = [...imagesToScroll, ...images];
    }
    setScrollImages(imagesToScroll);
  }, []);

  const scrollSlider = () => {
    const slider = sliderRef.current;

    if (!slider) return;

    if (!isPaused) {
      slider.scrollLeft += scrollStep;

      // When scroll reaches the end, reset to the beginning to create a seamless loop
      if (slider.scrollLeft >= slider.scrollWidth / 2) {
        slider.scrollLeft = 0;
      }
    }

    // Store the requestAnimationFrame ID so we can cancel it if needed
    animationFrameRef.current = requestAnimationFrame(scrollSlider);
  };

  useEffect(() => {
    // Start the scrolling animation
    animationFrameRef.current = requestAnimationFrame(scrollSlider);

    // Cleanup: Cancel the animation when the component unmounts
    return () => cancelAnimationFrame(animationFrameRef.current as number);
  }, [isPaused]); // Re-run if `isPaused` state changes

  const togglePause = () => {
    setIsPaused((prev) => !prev);

    if (isPaused) {
      // Resume scrolling by starting the animation again
      animationFrameRef.current = requestAnimationFrame(scrollSlider);
    } else {
      // Pause scrolling by canceling the current animation frame
      cancelAnimationFrame(animationFrameRef.current as number);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="w-full overflow-hidden whitespace-nowrap" ref={sliderRef}>
        <div className="inline-flex">
          {scrollImages &&
            scrollImages.map((src, index) => (
              <div
                className="relative w-52 h-28 lg:w-72 lg:h-40 mx-1 border border-gray-300"
                key={index}
              >
                <Image
                  src={src}
                  alt={`Slide ${index}`}
                  fill
                  objectFit="cover"
                />
                <div
                  ref={showBackgroundRef}
                  className="absolute w-full h-full video-bg opacity-20"
                ></div>
              </div>
            ))}
        </div>
      </div>
      <button onClick={togglePause} className="mt-4 px-6 py-2">
        {isPaused ? (
          <SliderButton buttonImage="/icons/play.png" />
        ) : (
          <SliderButton buttonImage="/icons/pause.png" />
        )}
      </button>
    </div>
  );
};

const SliderButton = ({ buttonImage }: { buttonImage: string }) => {
  return (
    <div className="relative w-6 h-6 lg:w-8 lg:h-8">
      <Image src={buttonImage} fill objectFit="cover" alt="toggle-slider" />
    </div>
  );
};

export default ContinuousSlider;
