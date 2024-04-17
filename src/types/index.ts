import { ReactNode } from "react";

export type TContainer = {
  children: ReactNode;
  className: string;
};
// types.ts

export type TProduct = {
  brand: any;
  _id:string | number ,
  id: number | string;
  name: string;
  image: string;
  price: number;
  discount: number;
  review: number;
  categories: string;
  rating: string;
};


export type TFlashSale = {
  _id: string;
  name: string;
  image: string;
  review: number;
  price: number;
  category: string;
  discount: string;
  flashSale: boolean;
};

export type TProductId = {
  params: {
    productId: string;
    product: any;
  };
};
