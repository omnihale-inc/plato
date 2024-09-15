import Image from "next/image";
import { handbuck } from "@/utils/font";
import Link from "next/link";
import schoolData from "@/data";

const Contact: React.FC = () => {
  return (
    <section className="flex justify-between items-center bg-black/5 w-11/12 lg:w-11/12 h-36 lg:h-[355px] max-w-7xl mx-auto mt-28 px-4 py-7 rounded-md">
      <div className="w-8/12 lg:w-8/12 mx-auto lg:ml-10">
        <h2 className={`${handbuck.className} text-base lg:text-3xl`}>
          You can reach us on
        </h2>
        <div className="grid grid-cols-4 lg:grid-cols-6 gap-2 lg:gap-3 mt-2 lg:mt-3">
          {schoolData.contacts.map((contact, index) => (
            <Link
              href={contact.url}
              key={index}
              className="relative h-6 w-6 lg:h-10 lg:w-10"
            >
              <Image
                src={contact.iconImage}
                alt="contact icon"
                fill
                objectFit="cover"
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="relative -top-6 lg:-top-14 h-60 lg:h-[530px] mx-auto mt-10 lg:mt-0 w-full max-w-[620px]">
        <Image src="/contact.png" fill objectFit="contain" alt="home" />
      </div>
    </section>
  );
};

export default Contact;
