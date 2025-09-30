import Image from "next/image";
import React from "react";
const Offline = () => {
  return (
    <section>
      <hr className="border-2 border-gray-700/20 w-11/12 mx-auto" />
      <div className="container mx-auto text-center mt-4 py-12 sm:py-16 md:py-20 px-4 grid-cols-1 md:grid-cols-2 gap-8 md:grid">
        <div className="flex justify-center items-center order-1 md:order-1">
          <Image
            src={"/offline.png"}
            alt="Offline Download"
            width={700}
            height={350}
            className="w-full h-auto max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl"
          />
        </div>
        <div className="flex flex-col justify-center items-center md:items-start order-2 md:order-2">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center md:text-start font-bold mb-4 leading-tight">
            Download your shows to watch offline
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-center md:text-start max-w-lg">
            Save your favorites easily and always have something to watch.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Offline;
