import { ollifiaPoettry } from "@/utils/font";
import schoolData from "@/data";

const Footer = () => {
  return (
    <footer className="bg-black mt-16 py-8 lg:py-6">
      <div className="w-5/6 lg:w-11/12 max-w-7xl mx-auto flex flex-col justify-center items-center">
        <div className="text-white lg:text-2xl">
          <span className={ollifiaPoettry.className}>Copyright</span> of{" "}
          <span>{schoolData.copyright}</span>, made by Omnihale{" "}
          <span className={`${ollifiaPoettry.className} text-[#ee7834]`}>
            <a href="https://www.omnihale.com" target="_blank">
              Brand
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
