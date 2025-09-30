import Image from "next/image";
import React from "react";
const Kids = () => {
  return (
    <section>
      <hr className="border-2 border-gray-700/20 w-11/12 mx-auto" />
      <div className="container mx-auto text-center py-12 sm:py-16 md:py-20 px-4 grid-cols-1 md:grid-cols-2 gap-8 md:grid">
        <div className="flex flex-col justify-center items-center md:items-start order-2 md:order-1">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center md:text-start font-bold mb-4 leading-tight">
            Create profiles for kids
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-center md:text-start max-w-lg">
            Send kids on adventures with their favorite characters in a space
            made just for them—free with your membership.
          </p>
        </div>
        <div className="flex justify-center items-center order-1 md:order-2">
          <Image
            src={"/kids.png"}
            alt="Kids"
            width={600}
            height={350}
            className="w-full h-auto max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Kids;
