import Image from "next/image";

import { handbuck } from "@/utils/font";
import { HomeProps } from "@/types";

const Home: React.FC<HomeProps> = ({ media }) => {
  return (
    <section className="mt-40 lg:mt-44 mx-auto max-w-6xl w-5/6" id="home">
      <div className="w-4/5 max-w-2xl mx-auto ">
        <h2
          className={`${handbuck.className} text-3xl text-center lg:text-7xl`}
        >
          Lorem ipsum dolor sit amet
        </h2>
        <p className="text-xs text-center lg:text-base mt-3 lg:mt-0 font-light">
          Lorem ipsum dolor sit amet consectetur. Neque viverra vitae volutpat
          nulla habitant consequat. Lorem ipsum dolor sit amet consectetur.
          Neque viverra vitae volutpat nulla habi
        </p>
      </div>
      <div className="relative h-36 sm:h-48 lg:h-[400px] w-5/6 lg:w-5/6 mx-auto mt-4 lg:mt-10">
        {media === "image" ? (
          <Image
            src="/home.jpg"
            fill
            objectFit="cover"
            alt="home"
            className="rounded-lg lg:rounded-2xl"
          />
        ) : (
          <video></video>
        )}
      </div>
    </section>
  );
};

export default Home;
