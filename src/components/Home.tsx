import Image from "next/image";

import { handbuck } from "@/utils/font";
import schoolData from "@/data";

const Home: React.FC = () => {
  return (
    <section className="mt-40 lg:mt-44 mx-auto max-w-6xl w-5/6">
      <div className="w-4/5 max-w-2xl mx-auto ">
        <h1
          className={`${handbuck.className} text-3xl text-center lg:text-7xl`}
        >
          {schoolData.home.header.main} <br />
          <span className={`text-[${schoolData.themeSecondaryColor}]`}>
            {schoolData.home.header.span}
          </span>
        </h1>
        <p className="text-xs text-center lg:text-base mt-3 lg:mt-0 font-light">
          {schoolData.home.paragraph}
        </p>
      </div>
      <div className="relative h-36 sm:h-48 lg:h-[400px] w-5/6 lg:w-5/6 mx-auto mt-4 lg:mt-10">
        <Image
          src={schoolData.home.image}
          fill
          objectFit="cover"
          alt="home"
          className="rounded-lg lg:rounded-2xl"
        />
      </div>
    </section>
  );
};

export default Home;
