import "../../../components/ui/HomePage/FlashSellProduct/FlashSellProduct.css";
import flash from "../../../../src/assets/images/flash.png";
import flash2 from "../../../../src/assets/images/flash2.png";
import flash3 from "../../../../src/assets/images/flash3.png";
import flash4 from "../../../../src/assets/images/flash4.png";
import flash5 from "../../../../src/assets/images/flash5.png";
import flash6 from "../../../../src/assets/images/flash6.png";
import flash7 from "../../../../src/assets/images/flash8.png";
import flash8 from "../../../../src/assets/images/flash7.png";
import Image from "next/image";
import {
  HiMinus,
  HiOutlineArrowNarrowRight,
  HiOutlineEye,
  HiOutlineHeart,
  HiOutlineStar,
  HiStar,
} from "react-icons/hi";
import Container from "@/components/ui/Container";
import { TFlashSale } from "@/types";
import FlashSaleTime from "@/components/ui/HomePage/FlashSellProduct/FlashSaleTime";
const FlashSellProduct = async () => {
  const res = await fetch("https://techzon-server.vercel.app/api/v1/flash-sale", {
    next: {
      revalidate: 30,
    },
  });
  const flashData = await res.json();

  return (
    <Container className="mt-10">
      <div className="mb-10">
        <div className="mb-10">
          <FlashSaleTime />
        </div>
        {flashData.data.flashSaleProductsTrue &&
        flashData.data.flashSaleProductsTrue.length > 0 ? (
          <>
            <p>
              Showing 1-{flashData.data.flashSaleProductsTrue.length} of{" "}
              {flashData.data.flashSaleProductsTrue.length +
                flashData.data.flashSaleProductsFalse.length}{" "}
              item(s) with flash sale
            </p>
            <div className="lg:grid-cols-3 md:grid-cols-2 grid-cols-1 grid xl:grid-cols-4 gap-10 place-content-center place-items-center">
              {flashData.data.flashSaleProductsTrue.map((data: TFlashSale) => (
                <div key={data._id} className="flashSellProductWrap">
                  <div className="flashContent">
                    <span className="bg-[#F14705] text-white rounded-full p-1 text-sm mt-3">
                      {data.discount}
                    </span>
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
                        <b className="text-[#2251CF] ml-2">৳58999</b>
                      </div>
                    </div>
                    <div className="iconWraps space-y-4">
                      <HiOutlineEye
                        className=" startIcon startIcon2"
                        size={30}
                      />
                      <HiOutlineHeart
                        className=" startIcon  startIcon2"
                        size={30}
                      />
                      <HiOutlineEye
                        className=" startIcon startIcon2"
                        size={30}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <p>No flash sale products available</p>
        )}
      </div>
    </Container>
  );
};

export default FlashSellProduct;
