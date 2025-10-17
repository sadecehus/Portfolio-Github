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

interface ProductCardProps {
  product: IProduct;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle>{product.name}</CardTitle>
        <CardDescription>{product.description}</CardDescription>
      </CardHeader>
      <CardContent>
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
