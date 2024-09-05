import { ollifiaPoettry } from "@/utils/font";

const Footer = () => {
  return (
    <footer className="w-full bg-black mt-16 py-8 lg:py-6">
      <div className="w-5/6 lg:w-11/12 max-w-7xl mx-auto flex flex-col justify-center items-center">
        <div className="text-white lg:text-2xl">
          <span className={ollifiaPoettry.className}>Property</span> of{" "}
          <a href="https://omnihale.com" target="_blank">
            Omnihale
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
