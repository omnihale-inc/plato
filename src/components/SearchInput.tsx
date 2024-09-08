import React, { Dispatch, SetStateAction } from "react";
import Image from "next/image";

const SearchInput = ({
  onSearchQuery,
}: {
  onSearchQuery: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <section className="flex items-center justify-center mt-40 lg:mt-44 mx-auto max-w-6xl w-5/6">
      <div className="relative flex items-center w-full max-w-md h-11">
        <div className="absolute h-7 w-7 ml-2.5">
          <Image
            src="/icons/search.png"
            alt="search icon"
            fill
            objectFit="cover"
          />
        </div>
        <input
          type="url"
          className="block w-full h-full border border-gray-300 rounded-full pl-11 outline-none focus:border-black focus:border-2"
          placeholder="Search for documents"
          onChange={(e) => onSearchQuery(e.target.value)}
        />
      </div>
    </section>
  );
};

export default SearchInput;
