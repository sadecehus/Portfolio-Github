import { Navbar } from "@/components/navbar";
import Products  from "@/components/products";
import { ModeToggle } from "@/components/theme-toggle";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <Products />
      </div>
    </>
  );
}
