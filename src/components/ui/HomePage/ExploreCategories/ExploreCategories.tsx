import React from "react";
import Image from "next/image";
import Container from "../../Container";
import "./ExploreCategories.css";
import { TProduct } from "@/types";
import Link from "next/link";
const ExploreCategories = async () => {
  const res = await fetch("https://techzon-server.vercel.app/api/v1/products", {
    next: {
      revalidate: 30,
    },
  });
  const products = await res.json();

  return (
    <Container className="sectionMargin">
      <h3 className="text-2xl font-semibold ">Popular Categories </h3>

      <div className="lg:grid-cols-4 grid xl:grid-cols-6 gap-5 mt-10 text-center grid-cols-1 md:grid-cols-3 place-items-center  ">
        {products?.data?.slice(0, 6).map((data: TProduct) => (
         <Link href={`/products?categories=${encodeURIComponent(
          data.categories
        )}`}>
           <div key={data._id} className="categoryContainer">
            <Image src={data.image} width="500" height="500" alt="categories" />
            <h3 className="text-xl font-semibold mt-3"> {data.categories} </h3>
           
          </div>
         </Link>
        ))}
      </div>
    </Container>
  );
};

export default ExploreCategories;
