"use client";

import "keen-slider/keen-slider.min.css";
import Image from "next/image";

import React, { MutableRefObject } from "react";
import "./SinglePageSlider.css";
import {
  useKeenSlider,
  KeenSliderPlugin,
  KeenSliderInstance,
} from "keen-slider/react";



interface SinglePageSliderProps {
  product: {
    data: {
      image: string;

    };

  };
}


function ThumbnailPlugin(
  mainRef: MutableRefObject<KeenSliderInstance | null>
): KeenSliderPlugin {
  return (slider) => {
    function removeActive() {
      slider.slides.forEach((slide) => {
        slide.classList.remove("active");
      });
    }
    function addActive(idx: number) {
      slider.slides[idx].classList.add("active");
    }

    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener("click", () => {
          if (mainRef.current) mainRef.current.moveToIdx(idx);
        });
      });
    }

    slider.on("created", () => {
      if (!mainRef.current) return;
      addActive(slider.track.details.rel);
      addClickEvents();
      mainRef.current.on("animationStarted", (main) => {
        removeActive();
        const next = main.animator.targetIdx || 0;
        addActive(main.track.absToRel(next));
        slider.moveToIdx(Math.min(slider.track.details.maxIdx, next));
      });
    });
  };
}

export default function SinglePageSlider({ product }:SinglePageSliderProps) {
  if (!product || !product.data) {
    return null; // or handle the case when product or product.data is undefined
  }
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
  });
  const [thumbnailRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      slides: {
        perView: 4,
        spacing: 10,
      },
    },
    [ThumbnailPlugin(instanceRef)]
  );

  return (
    <>
      <div ref={sliderRef} className="keen-slider">

        <div className="keen-slider__slide number-slide1">
          <Image
            src={product.data.image}
            alt="slider"
            width="500"
            height="500"
          />
        </div>
        <div className="keen-slider__slide number-slide2">
          <Image
            src={product.data.image}
            alt="slider"
            width="500"
            height="500"
          />
        </div>
        <div className="keen-slider__slide number-slide3">
          <Image
            src={product.data.image}
            alt="slider"
            width="500"
            height="500"
          />
        </div>
        <div className="keen-slider__slide number-slide4">
          <Image
            src={product.data.image}
            alt="slider4"
            width="500"
            height="500"
          />
        </div>
        <div className="keen-slider__slide number-slide5">
          <Image
            src={product.data.image}
            alt="slider"
            width="500"
            height="500"
          />
        </div>
      </div>

      <div ref={thumbnailRef} className="keen-slider thumbnail">
        <div className="keen-slider__slide number-slide1">
          <Image
            src={product.data.image}
            alt="slider"
            width="500"
            height="500"
          />
        </div>
        <div className="keen-slider__slide number-slide2">
          <Image
            src={product.data.image}
            alt="slider"
            width="500"
            height="500"
          />
        </div>
        <div className="keen-slider__slide number-slide3">
          <Image
            src={product.data.image}
            alt="slider"
            width="500"
            height="500"
          />
        </div>
        <div className="keen-slider__slide number-slide4">
          <Image
            src={product.data.image}
            alt="slider4"
            width="500"
            height="500"
          />
        </div>
        <div className="keen-slider__slide number-slide5">
          <Image
            src={product.data.image}
            alt="slider4"
            width="500"
            height="500"
          />
        </div>
      </div>
    </>
  );
}
