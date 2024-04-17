import Link from "next/link";
import Image from "next/image";
import Container from "../../Container";
import {
  HiMinus,
  HiOutlineArrowNarrowRight,
  HiOutlineEye,
  HiOutlineHeart,
  HiOutlineShoppingCart,
  HiOutlineStar,
  HiStar,
} from "react-icons/hi";
import ProductIcons from "../FlashSellProduct/ProductIcons";
import { TProduct } from "@/types";
import TopRatedIcons from "./TopRatedIcons";

const TopRatedProduct = async () => {
  const res = await fetch("https://techzon-server.vercel.app/api/v1/products", {
    next: {
      revalidate: 30,
    },
  });
  const products = await res.json();

  const sortedProducts = products?.data?.sort(
    (a: TProduct, b: TProduct) => b.review - a.review
  );

  return (
    <Container className="sectionMargin">
      <div className="flex items-center flex-wrap ">
        <h3 className="text-3xl font-semibold mb-5 ">Top Trending Products </h3>
        <Link href="/products">
          <button className="bg-[#2251CF] text-white px-3 py-2  rounded-sm ml-3 flex items-center ">
            <span> See All Products</span> <HiOutlineArrowNarrowRight />
          </button>
        </Link>
      </div>
      <div className="lg:grid-cols-3 md:grid-cols-2 grid-cols-1 grid xl:grid-cols-4 gap-10 place-content-center place-items-center mt-10">
        {sortedProducts?.slice(0, 8).map((data: TProduct) => (
          <div key={data._id} className="flashSellProductWrap">
            <div className="flashContent">
              <Image width="500" height="500" src={data.image} alt="flash" />
              <div>
                <p className="flashCartName">{data.name}</p>
                <Link href="/products">
                  {" "}
                  <button className="flashCartBtn ">Add To Cart</button>
                </Link>
                <div className="flex items-center">
                  <div className="flex items-center mr-2">
                    <HiStar size={25} className=" startIcon" />
                    <HiStar size={25} className=" startIcon" />
                    <HiStar size={25} className=" startIcon" />
                    <HiStar size={25} className=" startIcon" />
                    <HiStar size={25} className=" startIcon" />
                  </div>
                  <span>{data.review}</span>
                </div>
                <div className="flex items-center  my-2">
                  <del className="mr-2"> ৳484848</del> <HiMinus />
                  <b className="text-[#2251CF] ml-2">৳58999</b>
                </div>
              </div>
            </div>
            <div className="iconWraps space-y-4">
              <TopRatedIcons />
              <HiOutlineHeart className=" startIcon  startIcon2" size={30} />
              <HiOutlineShoppingCart
                className=" startIcon startIcon2"
                size={30}
              />
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default TopRatedProduct;
