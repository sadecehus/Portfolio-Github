export interface IProduct {
  id: number;
  name: string;
  price: number;
  description: string;
  isActive: boolean;
  imageUrl?: string;
  stock?: number;
}