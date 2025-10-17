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

interface ProductCardProps {
  product: IProduct;
}

export default function ProductCard({ product }: ProductCardProps) {
  // API'den gelen relative path'i tam URL'e çevir
  
  return (
    <Card className="hover:scale-105 rounded-4xl transition-shadow shadow-md hover:shadow-lg">
      <CardHeader>
        <Image
          src={
            product.imageUrl == null ? "/200x300.png" : product.imageUrl
        }
          alt={product.name}
          width={300}
          height={200}
          className="object-contain rounded-t-2xl rounded-b-sm"
        />
      </CardHeader>
      <CardContent>
        <CardTitle className="font-bold text-2xl">{product.name}</CardTitle>
        <CardDescription>{product.description}</CardDescription>
        <p className="text-2xl font-bold text-green-600">
          {product.price.toFixed(2)} ₺
        </p>
      </CardContent>
      <CardFooter>
        <p className="text-sm text-muted-foreground">
          {product.isActive ? "In Stock" : "Out of Stock"}
        </p>
      </CardFooter>
    </Card>
  );
}
