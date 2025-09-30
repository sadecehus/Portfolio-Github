import React from "react";
import Navbar from "@/components/navbar";
import Image from "next/image";
import { Button } from "./ui/button";
const Hero = () => {
  return (
    <div className="hero">
      <Image
        src="/herobg.png"
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        className="-z-10"
      />
      <div className="absolute inset-0 bg-black opacity-80 -z-5"></div>
      <div className="container mx-auto text-center text-white relative z-10">
        <Navbar />
        <div className="flex flex-col justify-center items-center h-[70vh] sm:h-[80vh] px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Unlimited movies, TV shows, and more
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl font-light mt-4 px-4">
              Watch anywhere. Cancel anytime.
            </p>
            <p className="text-lg sm:text-xl md:text-2xl font-light mt-4 px-4">
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row mt-6 w-full max-w-2xl px-4 gap-4 sm:gap-2">
            <input
              type="email"
              placeholder="Email address"
              className="flex-1 p-3 px-4 rounded-sm border h-12 sm:h-16 text-white min-w-0"
            />
            <Button className="bg-red-600 hover:bg-red-700 transition-colors py-3 px-6 rounded-md text-base sm:text-lg h-12 sm:h-16 whitespace-nowrap">
              Get Started &gt;
            </Button>
          </div>
        </div>

        <div className="flex justify-center items-center mx-auto bg-gradient-to-r from-[#0E1B4F]/70 via-[#E50914]/30 to-[#0E1B4F]/70 p-4 sm:p-6 md:p-8 w-11/12 sm:w-10/12 rounded-sm">
          <div className="flex flex-col sm:flex-row  justify-center items-center text-center sm:text-left gap-4 sm:gap-6 md:gap-8">
            <div className="flex-shrink-0">
              <Image
                src="/popcorn.png"
                alt="Popcorn"
                width={96}
                height={96}
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto sm:mx-0"
              />
            </div>
            <div>
              <p className="text-lg sm:text-xl md:text-xl font-bold">
                This Nextflix you love for just $6.99
              </p>
              <p className="text-sm sm:text-md md:text-md text-gray-400">
                Get the Standard with ads plan
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
