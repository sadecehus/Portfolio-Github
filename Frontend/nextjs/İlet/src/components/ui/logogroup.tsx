"use client";

import React from "react";
import { Avatar } from "@/components/ui/avatar";

interface LogoGroupProps {
  logos: string[];
  extraCount?: number;
}

const LogoGroup: React.FC<LogoGroupProps> = ({ logos, extraCount = 0 }) => {
  return (
    <div className="flex space-x-[-10px] mb-4 items-center justify-center">
      {logos.slice(0, 3).map((logo, index) => (
        <Avatar key={index} className="w-10 h-10 border-2 dark:border-zinc-900 overflow-hidden">
          <img src={logo} alt={`Logo ${index}`} className="w-full h-full object-cover bg-white" />
        </Avatar>
      ))}
      {extraCount > 0 && (
        <div className="w-10 h-10 flex items-center justify-center text-lg font-semibold dark:bg-zinc-800 dark:text-white rounded-full border-2 ">
          +{extraCount}
        </div>
      )}
    </div>
  );
};

export default LogoGroup;
