import React, { useEffect } from "react";
import Image from "next/image";
import { handbuck } from "@/utils/font";
import schoolData from "@/data";

const Testimonies: React.FC = () => {
  return (
    <section className="mt-12 lg:mt-32">
      <h2
        className={`${handbuck.className} mt-16 text-center text-black text-3xl lg:text-6xl`}
      >
        Testimonies
      </h2>
      <div className="flex md:justify-evenly lg:justify-center overflow-x-scroll md:overflow-auto md:flex-wrap text-black mt-7 lg:mt-14 mx-5 leaders-scroll">
        {schoolData.testimonies.map((testimony, index) => (
          <div key={index} className={`mr-7 basis-56 shrink-0 md:mb-16`}>
            <div className="relative h-[100px] w-[100px] mb-5 mx-auto ">
              <Image
                src={testimony.img}
                alt={`${index}`}
                fill
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <p className="text-sm lg:text-md text-center font-light">
              {testimony.details}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonies;
