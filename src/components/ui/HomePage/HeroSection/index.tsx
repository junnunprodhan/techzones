"use client";
import "./HeroSection.css";
import React, { useEffect, useState } from "react";
import slider from "../../../../assets/images/slider2.webp";
import slider2 from "../../../../assets/images/categories.webp";
import slider3 from "../../../../assets/images/flash8.png";
import slider4 from "../../../../assets/images/explore.png";

import slider6 from "../../../../assets/images/slider3.webp";
import slider7 from "../../../../assets/images/slider4.webp";
import slider8 from "../../../../assets/images/slider5.jpg";
import slider9 from "../../../../assets/images/slider6.webp";
import slider10 from "../../../../assets/images/headphone.png";
import { KeenSliderInstance, useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import Container from "../../Container";
import {
  FaBicycle,
  FaHeadset,
  FaPercent,
  FaShopify,
  FaTshirt,
  FaUtensils,
} from "react-icons/fa";
import { HiDeviceTablet, HiOutlineWifi } from "react-icons/hi";
import { LuWatch, LuYoutube } from "react-icons/lu";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { Button } from "antd";

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      const keenSlider = slider as KeenSliderInstance<any, any, any>;
      if (keenSlider.details) {
        setCurrentSlide(keenSlider.details().relativeSlide as number);
      }
      // setCurrentSlide(slider.details().relativeSlide as number);
    },
    created() {
      setLoaded(true);
    },
    loop: true, // Enable looping
  });

  useEffect(() => {
    const interval = setInterval(() => {
      if (instanceRef.current) {
        instanceRef.current.next();
      }
    }, 5000); // Change the interval duration as needed (2000 ms = 2 seconds)

    return () => clearInterval(interval);
  }, [instanceRef]);
  return (
    <Container className="heroSectionContainer">
      <div className="heroSectionWraps ">
        <div className="categoryHead space-y-4">
          <div className="flex items-center">
            <FaPercent className="mr-2" size={25} />
            <span className="uppercase">Fee Delivery </span>
          </div>
          <div className="flex items-center ">
            <FaHeadset size={25} className="mr-2" />
            <span>Headphone & Earphone </span>
          </div>
          <div className="flex items-center">
            <HiDeviceTablet className="mr-2" size={25} />
            <span>Mobile Accessories </span>
          </div>
          <div className="flex items-center">
            <HiOutlineComputerDesktop className="mr-2" size={25} />
            <span>Computer Office </span>
          </div>
          <div className="flex items-center">
            <HiOutlineComputerDesktop className="mr-2" size={25} />
            <span>Consumer Electronic </span>
          </div>
          <div className="flex items-center">
            <FaUtensils className="mr-2" size={25} />
            <span> Home Applicanes </span>
          </div>
          <div className="flex items-center">
            <FaTshirt className="mr-2" size={25} />
            <span> Health , Fashion & Grooming </span>
          </div>
          <div className="flex items-center">
            <FaHeadset className="mr-2" size={25} />
            <span>Deals of the Day </span>
          </div>
          <div className="flex items-center">
            <FaShopify className="mr-2" size={25} />
            <span> Best Sellers </span>
          </div>
          <div className="flex items-center">
            <FaBicycle className="mr-2" size={25} />
            <span> Bicycle & Accessories </span>
          </div>
          <div className="flex items-center">
            <LuYoutube className="mr-2" size={25} />
            <span> Youtube Studio Gears & Accessories </span>
          </div>
          <div className="flex items-center">
            <HiOutlineWifi className="mr-2" size={25} />
            <span> Smart Home Improvement </span>
          </div>
          <div className="flex items-center">
            <LuWatch className="mr-2" size={25} />
            <span> Watch Collection </span>
          </div>
        </div>
        <div className="sliderWrap">
          <div className="navigation-wrapper">
            <div ref={sliderRef} className="keen-slider">
              <div className="keen-slider__slide number-slide1">
                <div className="flex items-center sliderContentWrap">
                  <div className="sliderContent">
                    <h3 className="text-5xl font-semibold uppercase">
                      The New standard
                    </h3>
                    <p className="my-3">"NeoTech Edge: Unveiling Simplicity"</p>
                    <small>FROM</small>
                    <div className=" flex items-center ">
                      <sup className="text-2xl font-semibold">$</sup>
                      <span className="text-5xl font-bold">799</span>
                      <sup className="text-xl font-semibold">99</sup>
                    </div>
                    <Button>Start Buying</Button>
                  </div>
                  <Image src={slider} alt="slider" width="500" height="500" />
                </div>
              </div>
              <div className="keen-slider__slide number-slide1">
                <div className="flex items-center sliderContentWrap">
                  <div className="sliderContent">
                    <h3 className="text-5xl font-semibold uppercase">
                      The New standard
                    </h3>
                    <p className="my-3">"NeoTech Edge: Unveiling Simplicity"</p>
                    <small>FROM</small>
                    <div className=" flex items-center ">
                      <sup className="text-2xl font-semibold">$</sup>
                      <span className="text-5xl font-bold">799</span>
                      <sup className="text-xl font-semibold">99</sup>
                    </div>
                    <button className="px-5 py-2 text-white bg-[#2251CF] border rounded-sm text-xl">
                      {" "}
                      Start Buying
                    </button>
                  </div>
                  <Image src={slider2} alt="slider" width="500" height="500" />
                </div>
              </div>
              <div className="keen-slider__slide number-slide1">
                <div className="flex items-center sliderContentWrap">
                  <div className="sliderContent">
                    <h3 className="text-5xl font-semibold uppercase">
                      The New standard
                    </h3>
                    <p className="my-3">"NeoTech Edge: Unveiling Simplicity"</p>
                    <small>FROM</small>
                    <div className=" flex items-center ">
                      <sup className="text-2xl font-semibold">$</sup>
                      <span className="text-5xl font-bold">799</span>
                      <sup className="text-xl font-semibold">99</sup>
                    </div>
                    <button className="px-5 py-2 text-white bg-[#2251CF] border rounded-sm text-xl">
                      {" "}
                      Start Buying
                    </button>
                  </div>
                  <Image src={slider3} alt="slider" width="500" height="500" />
                </div>
              </div>
              <div className="keen-slider__slide number-slide1">
                <div className="flex items-center sliderContentWrap">
                  <div className="sliderContent">
                    <h3 className="text-5xl font-semibold uppercase">
                      The New standard
                    </h3>
                    <p className="my-3">"NeoTech Edge: Unveiling Simplicity"</p>
                    <small>FROM</small>
                    <div className=" flex items-center ">
                      <sup className="text-2xl font-semibold">$</sup>
                      <span className="text-5xl font-bold">799</span>
                      <sup className="text-xl font-semibold">99</sup>
                    </div>
                    <button className="px-5 py-2 text-white bg-[#2251CF] border rounded-sm text-xl">
                      {" "}
                      Start Buying
                    </button>
                  </div>
                  <Image src={slider4} alt="slider" width="500" height="500" />
                </div>
              </div>
              <div className="keen-slider__slide number-slide1">
                <div className="flex items-center sliderContentWrap">
                  <div className="sliderContent">
                    <h3 className="text-5xl font-semibold uppercase">
                      The New standard
                    </h3>
                    <p className="my-3">"NeoTech Edge: Unveiling Simplicity"</p>
                    <small>FROM</small>
                    <div className=" flex items-center ">
                      <sup className="text-2xl font-semibold">$</sup>
                      <span className="text-5xl font-bold">799</span>
                      <sup className="text-xl font-semibold">99</sup>
                    </div>
                    <button className="px-5 py-2 text-white bg-[#2251CF] border rounded-sm text-xl">
                      {" "}
                      Start Buying
                    </button>
                  </div>
                  <Image src={slider6} alt="slider" width="500" height="500" />
                </div>
              </div>
              <div className="keen-slider__slide number-slide1">
                <div className="flex items-center sliderContentWrap">
                  <div className="sliderContent">
                    <h3 className="text-5xl font-semibold uppercase">
                      The New standard
                    </h3>
                    <p className="my-3">"NeoTech Edge: Unveiling Simplicity"</p>
                    <small>FROM</small>
                    <div className=" flex items-center ">
                      <sup className="text-2xl font-semibold">$</sup>
                      <span className="text-5xl font-bold">799</span>
                      <sup className="text-xl font-semibold">99</sup>
                    </div>
                    <button className="px-5 py-2 text-white bg-[#2251CF] border rounded-sm text-xl">
                      {" "}
                      Start Buying
                    </button>
                  </div>
                  <Image src={slider7} alt="slider" width="500" height="500" />
                </div>
              </div>
              <div className="keen-slider__slide number-slide1">
                <div className="flex items-center sliderContentWrap">
                  <div className="sliderContent">
                    <h3 className="text-5xl font-semibold uppercase">
                      The New standard
                    </h3>
                    <p className="my-3">"NeoTech Edge: Unveiling Simplicity"</p>
                    <small>FROM</small>
                    <div className=" flex items-center ">
                      <sup className="text-2xl font-semibold">$</sup>
                      <span className="text-5xl font-bold">799</span>
                      <sup className="text-xl font-semibold">99</sup>
                    </div>
                    <button className="px-5 py-2 text-white bg-[#2251CF] border rounded-sm text-xl">
                      {" "}
                      Start Buying
                    </button>
                  </div>
                  <Image src={slider8} alt="slider" width="500" height="500" />
                </div>
              </div>
              <div className="keen-slider__slide number-slide1">
                <div className="flex items-center sliderContentWrap">
                  <div className="sliderContent">
                    <h3 className="text-5xl font-semibold uppercase">
                      The New standard
                    </h3>
                    <p className="my-3">"NeoTech Edge: Unveiling Simplicity"</p>
                    <small>FROM</small>
                    <div className=" flex items-center ">
                      <sup className="text-2xl font-semibold">$</sup>
                      <span className="text-5xl font-bold">799</span>
                      <sup className="text-xl font-semibold">99</sup>
                    </div>
                    <button className="px-5 py-2 text-white bg-[#2251CF] border rounded-sm text-xl">
                      {" "}
                      Start Buying
                    </button>
                  </div>
                  <Image src={slider9} alt="slider" width="500" height="500" />
                </div>
              </div>
              <div className="keen-slider__slide number-slide1">
                <div className="flex items-center sliderContentWrap">
                  <div className="sliderContent">
                    <h3 className="text-5xl font-semibold uppercase">
                      The New standard
                    </h3>
                    <p className="my-3">"NeoTech Edge: Unveiling Simplicity"</p>
                    <small>FROM</small>
                    <div className=" flex items-center ">
                      <sup className="text-2xl font-semibold">$</sup>
                      <span className="text-5xl font-bold">799</span>
                      <sup className="text-xl font-semibold">99</sup>
                    </div>
                    <button className="px-5 py-2 text-white bg-[#2251CF] border rounded-sm text-xl">
                      {" "}
                      Start Buying
                    </button>
                  </div>
                  <Image src={slider10} alt="slider" width="500" height="500" />
                </div>
              </div>
            </div>
            {loaded && instanceRef.current && (
              <>
                <Arrow
                  left
                  onClick={(e: any) =>
                    e.stopPropagation() || instanceRef.current?.prev()
                  }
                  disabled={currentSlide === 0}
                />

                <Arrow
                  onClick={(e: any) =>
                    e.stopPropagation() || instanceRef.current?.next()
                  }
                  disabled={
                    currentSlide ===
                    instanceRef.current.track.details.slides.length - 1
                  }
                />
              </>
            )}
          </div>
          {loaded && instanceRef.current && (
            <div className="dots">
              {[
                ...Array(
                  instanceRef.current.track.details.slides.length
                ).keys(),
              ].map((idx) => {
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      instanceRef.current?.moveToIdx(idx);
                    }}
                    className={"dot" + (currentSlide === idx ? " active" : "")}
                  ></button>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </Container>
  );
}

function Arrow(props: {
  disabled: boolean;
  left?: boolean;
  onClick: (e: any) => void;
}) {
  const disabled = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabled}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}
