import React, { useEffect } from "react";
import Image from "next/image";
import { handbuck } from "@/utils/font";
import schoolData from "@/data";

const Leaders: React.FC = () => {
  return (
    <section>
      <h2
        className={`${handbuck.className} mt-16 lg:mt-24 text-center text-black text-3xl lg:text-6xl`}
      >
        Leaders
      </h2>
      <div className="flex md:justify-evenly lg:justify-center overflow-x-scroll md:overflow-auto md:flex-wrap leaders-scroll text-black mt-7 lg:mt-14 lg:pb-20 mx-5">
        {schoolData.leaders.map((leader, index) => (
          <div key={index} className={`mr-7 basis-56 shrink-0 md:mb-16`}>
            <div className="relative h-[100px] w-[100px] mb-5 mx-auto ">
              <Image
                src={leader.img}
                alt={`${index}`}
                fill
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <p className={`${handbuck.className} lg:text-2xl mt-6 text-center`}>
              {leader.role}
            </p>
            <p className="text-sm lg:text-md text-center font-light">
              {leader.details}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Leaders;
