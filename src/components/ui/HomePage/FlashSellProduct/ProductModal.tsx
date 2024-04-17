/* eslint-disable react/prop-types */

import SinglePageSlider from "@/components/SinglePageSlider/SinglePageSlider";
import { HiChevronRight, HiStar } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";
import Container from "../../Container";
import TZSelect from "../../TZSelect/TZSelect";
import AddProductBtn from "../../AddproductBtn/AddProductBtn";
import './FlashSellProduct.css'
import Link from "next/link";


interface Product {
  data: {
    name: string;
    image: string;
  };
}

interface ProductModalProps {
  onClose: () => void;
  product: Product;
}

const ProductModal: React.FC<ProductModalProps> = ({ onClose, product }) =>  {
  console.log(product)


  return (
    <div className="fixed top-0 left-0 z-[999999999] w-screen h-screen bg-black/60 backdrop-blur-sm modalContainer overflow-hidden">
      <div className="relative left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  w-[1400px] max-auto  lg:max-w-[100%]  h-auto ">
        <div className="bg-white shadow-md dark:bg-[#12141D] rounded-xl  overflow-hidden p-10">
          <div className="flex justify-end ">
            <IoCloseSharp
              size={25}
              onClick={onClose}
              width={24}
              height={24}
              className="text-white rounded-full cursor-pointer top-10 right-10 bg-[#A0A0A0] p-1"
            />
          </div>
          <Container className="">
      <div className="gap-3 flex-wrap flex items-center space-x-3">
        <span>Home</span>
        <HiChevronRight />
        <button className="bg-[#E8E8E8] px-3 py-2  rounded-sm ">
          Accessories
        </button>
        <HiChevronRight />
        <button className="bg-[#E8E8E8] px-3 py-2  rounded-sm ">
          Accessories
        </button>
        <HiChevronRight />
        <small>Ultra Wireless S50 Headphones S50 with Bluetooth</small>
      </div>
      <div className="flex-wrap xl:flex-nowrap flex items-center gap-14">
        <div className="xl:w-[50%] overflow-hidden w-full ">
          <SinglePageSlider product={product} />
        </div>
        <div className="border-b border-[#ddd]">
          <small>Headphones</small>
          <h3 className="text-2xl font-semibold my-3">
            Headphones Ultra Wireless S50 Headphones S50 with Bluetooth
          </h3>
          <div className="flex items-center text-sm ">
            <div className="flex items-center ">
              <HiStar size={20} className=" startIcon" />
              <HiStar size={20} className=" startIcon" />
              <HiStar size={20} className=" startIcon" />
              <HiStar size={20} className=" startIcon" />
              <HiStar size={20} className=" startIcon" />
            </div>
            <small> (3 customer reviews)</small>
          </div>
          <div className="mt-3 text-sm featureItem  text-[#7c7c7c]">
            <ul className="space-y-2">
              <li>4.5 inch HD Touch Screen (1280 x 720) </li>
              <li>Android 4.4 KitKat OS</li>
              <li>1.4 GHz Quad Core™ Processor</li>
              <li>20 MP Electro and 28 megapixel CMOS rear camera</li>
            </ul>
          </div>
          <p className=" text-[#7c7c7c] my-5">
            "Experience wireless freedom with Ultra Wireless S50 Headphones.
            Enjoy seamless Bluetooth connectivity and immersive sound. Elevate
            your audio experience today!"
          </p>
          <span className="my-5 block">SKU: FW511948218</span>
          <div className="flex items-">
            <span className="text-5xl">$1,999.00</span>{" "}
            <del className="text-xl">$2,299.00</del>
          </div>
          <hr className="my-5" />
          <div className="flex items-center">
            <span className="mr-3">Color</span>

            <TZSelect />
          </div>
          <hr className="my-5" />
          <div>
            <span>Quantity </span>
            <div className="flex items-center mt-2 mb-5">
              <AddProductBtn />

              <Link href='/products'> <button className="flashCartBtn ">Add To Cart</button></Link>
            </div>
          </div>
        </div>
      </div>
    </Container>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
