"use client";

import { LineShadowText } from "../line-shadow-text";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function LineShadowTextDemo() {
  const { resolvedTheme } = useTheme();
  const [shadowColor, setShadowColor] = useState("black");

  useEffect(() => {
    if (resolvedTheme) {
      setShadowColor(resolvedTheme === "dark" ? "white" : "black");
    }
  }, [resolvedTheme]);

  return (
    <h1 className="text-balance text-4xl font-semibold leading-none tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
      <LineShadowText className="italic" shadowColor={shadowColor}>
        Ürünlerimiz
      </LineShadowText>
    </h1>
  );
}
