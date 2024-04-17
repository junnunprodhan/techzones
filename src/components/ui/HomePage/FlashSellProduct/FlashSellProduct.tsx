import "./FlashSellProduct.css";
import Image from "next/image";
import Container from "../../Container";
import {
  HiMinus,
  HiOutlineArrowNarrowRight,
  HiOutlineEye,
  HiOutlineHeart,
  HiOutlineStar,
  HiStar,
} from "react-icons/hi";
import Link from "next/link";
import { TFlashSale } from "@/types";
import FlashSaleTime from "./FlashSaleTime";
import TopRatedIcons from "../TopRatedProduct/TopRatedIcons";

const FlashSellProduct = async () => {
  const res = await fetch("https://techzon-server.vercel.app/api/v1/flash-sale", {
    next: {
      revalidate: 30,
    },
  });
  const flashData = await res.json();


  if (!flashData || !flashData.data) {
    return <p>No flash sale products available</p>;
  }

  const { flashSaleProductsTrue } = flashData.data;

  return (
    <Container className="sectionMargin">
      <div className="flex items-center mb-10 flex-wrap ">
        <FlashSaleTime />
        <Link href="/flash-sale">
          <div className="flex items-center ml-0  lg:ml-8 bg-[#E8E8E8]  px-3 py-2 rounded-sm mt-3 ">
            <button>See All</button> <HiOutlineArrowNarrowRight size={20} />
          </div>
        </Link>
      </div>

      {flashSaleProductsTrue && flashSaleProductsTrue.length > 0 ? (
        <div className="lg:grid-cols-3 md:grid-cols-2 grid-cols-1 grid xl:grid-cols-4 gap-10 place-content-center place-items-center">
          {flashSaleProductsTrue.slice(0, 4).map((data: TFlashSale) => (
            <div key={data._id} className="flashSellProductWrap">
              <div className="flashContent">
                <span className="bg-[#F14705] text-white rounded-full p-1 text-sm mt-3">
                  {data.discount}
                </span>
                <Image width="500" height="500" src={data.image} alt="flash" />
                <div>
                  <p className="flashCartName">{data.name}</p>
                  <Link href='/flash-sale'> <button className="flashCartBtn ">Add To Cart</button></Link>
                  <div className="flex items-center">
                    <HiStar size={25} className="startIcon" />
                    <HiStar size={25} className="startIcon" />
                    <HiStar size={25} className="startIcon" />
                    <HiStar size={25} className="startIcon" />
                    <HiStar size={25} className="startIcon" />
                  </div>
                  <div className="flex items-center my-2">
                    <del className="mr-2">৳484848</del> <HiMinus />
                    <b className="text-[#2251CF] ml-2">৳58999</b>
                  </div>
                </div>
                <div className="iconWraps space-y-4">
                <TopRatedIcons/>
                  <HiOutlineHeart className="startIcon startIcon2" size={30} />
                  <HiOutlineEye className="startIcon startIcon2" size={30} />
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No flash sale products available</p>
      )}
    </Container>
  );
};

export default FlashSellProduct;
