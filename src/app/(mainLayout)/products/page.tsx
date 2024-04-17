"use client";

import React, { useEffect, useState } from "react";
import Container from "@/components/ui/Container";
import { Card, Checkbox } from "antd";
import { TProduct } from "@/types";
import Image from "next/image";
import {
  HiMinus,
  HiOutlineArrowNarrowRight,
  HiOutlineHeart,
  HiOutlineShoppingCart,
  HiStar,
} from "react-icons/hi";
import Link from "next/link";
import ProductIcons from "@/components/ui/HomePage/FlashSellProduct/ProductIcons";
import TopRatedIcons from "@/components/ui/HomePage/TopRatedProduct/TopRatedIcons";

const ProductPage = () => {
  const [products, setProducts] = useState<TProduct[]>([]);
  const [priceRange, setPriceRange] = useState<number[]>([]);
  const [brands, setBrands] = useState<string[]>([]);
  const [reviews, setreviews] = useState<number[]>([]);
  const [selectedFilters, setSelectedFilters] = useState<{
    [key: string]: string | number;
  }>({});

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          "https://techzon-server.vercel.app/api/v1/products"
        );
        const data = await res.json();
        setProducts(data.data || []);

        // Extract unique price range, brands, and reviews from products
        const uniquePriceRange: number[] = Array.from(
          new Set(data.data.map((product: TProduct) => product.price))
        );
        const uniqueBrands: string[] = Array.from(
          new Set(data.data.map((product: TProduct) => product.brand))
        );
        const uniquereviews: number[] = Array.from(
          new Set(data.data.map((product: TProduct) => product.review))
        );
        setPriceRange(uniquePriceRange);
        setBrands(uniqueBrands);
        setreviews(uniquereviews);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleCheckboxChange = (value: string | number, filterType: string) => {
    const updatedFilters = { ...selectedFilters };

    const isSameFilterClicked = updatedFilters[filterType] === value;

    if (isSameFilterClicked) {
      delete updatedFilters[filterType];
    } else {

      updatedFilters[filterType] = value;
    }

    setSelectedFilters(updatedFilters);

    let filteredProducts = [...products];
    Object.entries(updatedFilters).forEach(([type, value]) => {
      if (typeof type === "string" && type in products[0]) {
        filteredProducts = filteredProducts.filter(
          (product) => product[type as keyof TProduct] === value
        );
      }
    });


    setProducts(filteredProducts);
  };

  return (
    <Container className="pt-12">
      <div className="flex flex-wrap lg:flex-nowrap md:justify-between gap-5">
        <div className="flex flex-wrap justify-between lg:block space-y-0 lg:space-y-5 gap-3">
          <Card className="card">
            <h4 className="text-xl font-semibold">Price Range</h4>
            <div className="space-y-3 mt-3">
              {priceRange.map((price: number) => (
                <div className="flex items-center" key={price}>
                  <Checkbox
                    onChange={() => handleCheckboxChange(price, "price")}
                    checked={selectedFilters["price"] === price}
                  />
                  <p className="flex items-center ml-4">{price}</p>
                </div>
              ))}
            </div>
          </Card>
          <Card className="card">
            <h4 className="text-xl font-semibold">Brands</h4>
            <div className="space-y-3 mt-3">
              {brands.map((brand: string) => (
                <div className="flex items-center" key={brand}>
                  <Checkbox
                    onChange={() => handleCheckboxChange(brand, "brand")}
                    checked={selectedFilters["brand"] === brand}
                  />
                  <p className="flex items-center ml-4">{brand}</p>
                </div>
              ))}
            </div>
          </Card>
          <Card className="card">
            <h4 className="text-xl font-semibold">reviews</h4>
            <div className="space-y-3 mt-3">
              {reviews.map((review: number) => (
                <div className="flex items-center" key={review}>
                  <Checkbox
                    onChange={() => handleCheckboxChange(review, "review")}
                    checked={selectedFilters["review"] === review}
                  />
                  <p className="flex items-center ml-4">{review} Star</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
        <div className="">
          <div className="lg:grid-cols-3 md:grid-cols-2 grid-cols-1 grid gap-10 place-content-center place-items-center ">
            {products.map((data: TProduct) => (
              <div key={data._id} className="flashSellProductWrap productsCard">
                <div className="flashContent">
                  <Image
                    width="500"
                    height="500"
                    src={data.image}
                    alt="flash"
                  />
                  <div>
                    <p className="flashCartName">{data.name}</p>
                    <button className="flashCartBtn ">Add To Cart</button>
                    <div className="flex items-center ">
                      <HiStar size={25} className=" startIcon" />
                      <HiStar size={25} className=" startIcon" />
                      <HiStar size={25} className=" startIcon" />
                      <HiStar size={25} className=" startIcon" />
                      <HiStar size={25} className=" startIcon" />
                    </div>
                    <div className="flex items-center  my-2">
                      <del className="mr-2"> ৳484848</del> <HiMinus />
                      <b className="text-[#2251CF] ml-2">৳{data.price}</b>
                    </div>
                  </div>
                  <Link href={`products/${data._id}`}>
                    <div className="flex items-center mb-3 ">
                      <button>See Details</button>{" "}
                      <HiOutlineArrowNarrowRight size={15} />
                    </div>
                  </Link>
                </div>
                <div className="iconWraps space-y-4">
                  {/* <ProductIcons product={data as unknown as TProduct} /> */}
                  <TopRatedIcons />

                  <HiOutlineHeart
                    className=" startIcon  startIcon2"
                    size={30}
                  />
                  <HiOutlineShoppingCart
                    className=" startIcon startIcon2"
                    size={30}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductPage;
