import React from "react";
import "./Categories.css";
import "../FlashSellProduct/FlashSellProduct.css";
import Container from "../../Container";
import categories from "../../../../assets/images/categories8.png";
import categories3 from "../../../../assets/images/categories6.png";
import categories4 from "../../../../assets/images/categories7.png";
import categories2 from "../../../../assets/images/categories.webp";
import categories5 from "../../../../assets/images/categories3.png";
import {
  HiMinus,
  HiOutlineEye,
  HiOutlineHeart,
  HiOutlineShoppingCart,
  HiStar,
} from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";
import TopRatedIcons from "../TopRatedProduct/TopRatedIcons";
const Categories = () => {
  return (
    <Container className="sectionMargin">
      <h3 className="text-3xl font-semibold mb-5">Our Popular Products </h3>
      <div className="grid grid-cols-1 xl:grid-cols-12 lg:grid-cols-3  md:grid-cols-2 place-items-center gap-5 ">
        <div className="xl:col-span-2 col-span-1">
          <div className=" flashSellProductWrap categoriesCard  ">
            <div className="flashContent">
              <Image width="500" height="500" src={categories3} alt="flash" />
              <div>
                <p className="flashCartName">Categories </p>
                <Link href="/products">
                  {" "}
                  <button className="flashCartBtn ">Add To Cart</button>
                </Link>
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
          <div className=" flashSellProductWrap categoriesCard  ">
            <div className="flashContent">
              <Image
                className="categories2Img"
                width="500"
                height="500"
                src={categories4}
                alt="flash"
              />
              <div>
                <p className="flashCartName">Categories </p>
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
        </div>
        <div className=" flashSellProductWrap categoriesCard categoriesCard2  xl:col-span-8 middleCategories">
          <div className="flashContent">
            <Image width="500" height="500" src={categories2} alt="flash" />
            <div>
              <p className="flashCartName">Categories </p>
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
        <div className="xl:col-span-2 col-span-1 ">
          <div className=" flashSellProductWrap categoriesCard col-span-2 ">
            <div className="flashContent">
              <Image width="500" height="500" src={categories} alt="flash" />
              <div>
                <p className="flashCartName">Categories </p>
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
                <TopRatedIcons />
                <HiOutlineHeart className=" startIcon  startIcon2" size={30} />
                <HiOutlineEye className=" startIcon startIcon2" size={30} />
              </div>
            </div>
          </div>

          <div className=" flashSellProductWrap categoriesCard col-span-2 ">
            <div className="flashContent">
              <Image width="500" height="500" src={categories5} alt="flash" />
              <div>
                <p className="flashCartName">Categories </p>
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
        </div>
      </div>
    </Container>
  );
};

export default Categories;
