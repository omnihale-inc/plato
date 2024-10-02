import { handbuck } from "@/utils/font";
import ContinuousSlider from "./ContinousSlider";
import schoolData from "@/data";

const Certificates = () => {
  return (
    <section className="mt-6">
      <h2
        className={`${handbuck.className} mt-16 mb-6 lg:mt-16 lg:mb-8 text-center text-3xl lg:text-6xl`}
      >
        Certificates
      </h2>
      <ContinuousSlider images={schoolData.certificates} />
    </section>
  );
};

export default Certificates;
