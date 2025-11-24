import React from "react";
import type { IProduct } from "@/model/IProduct";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import { Heart, HeartIcon, InfoIcon} from "lucide-react";
import Link from "next/link";

interface ProductCardProps {
  product: IProduct;
}

export default function ProductCard({ product }: ProductCardProps) {
  // API'den gelen relative path'i tam URL'e çevir
  
  return (
    <Card className="hover:scale-105 rounded-4xl transition-shadow shadow-md hover:shadow-lg flex flex-col h-full">
      <CardHeader>
        <div className="relative w-full h-48">
          <Image
            src={
              product.imageUrl == null ? "/200x300.png" : product.imageUrl
            }
            alt={product.name}
            fill
            className="object-contain rounded-t-2xl rounded-b-sm"
          />
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardTitle className="font-bold text-2xl">{product.name}</CardTitle>
        <CardDescription>{product.description}</CardDescription>
        <p className="text-2xl font-bold text-green-600">
          {product.price.toFixed(2)} ₺
        </p>
      </CardContent>
      <CardFooter className="mt-auto">
        <div className="grid grid-cols-2 gap-4 w-full">
          <Link href={`/products/${product.id}`}>
            <Button variant="outline" className="w-full" >
              <InfoIcon />
              Details
            </Button>
          </Link>
            <Button variant="outline"  className="w-full">
              <HeartIcon />
              Add to Cart
            </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
