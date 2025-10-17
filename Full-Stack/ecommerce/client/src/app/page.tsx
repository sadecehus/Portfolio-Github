import Products  from "@/components/products";
import Image from "next/image";

export default function Home() {
  return (
   <div className="container mx-auto p-8">
    <Products/>
   </div>
  );
}
