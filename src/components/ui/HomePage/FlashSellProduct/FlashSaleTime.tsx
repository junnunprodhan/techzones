 'use client'

import React, { useState, useEffect } from 'react';
import Link from "next/link";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const FlashSaleTime = () => {
  const calculateEndTime = () => {
    const now = new Date();
    const endTime = new Date(now.getFullYear(), now.getMonth() + 1, now.getDate());
    return endTime;
  };

  const [endTime, setEndTime] = useState(calculateEndTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setEndTime(calculateEndTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (endTime: Date) => {
    const diff = endTime.getTime() - new Date().getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    return { days, hours, minutes, seconds };
  };
  

  return (
    <div className="flex-wrap flex items-center ">
      <h3 className="text-2xl font-semibold">Flash Sale</h3>
      {endTime && (
        <span className="ml-0 lg:ml-10 mt-3  lg:mt-0 flex items-center flex-wrap ">
        <b>  Ends Offer:</b>
          <div>
          <span className="ml-0 sm:ml-2 lg:ml-3 text-sm md:text-2xl bg-[#F14705] text-white px-3 py-1 rounded-sm  ">
            {formatTime(endTime).days}d   
          </span>
          <span className="ml-2 lg:ml-3 text-sm md:text-2xl bg-[#F14705] text-white px-3 py-1 rounded-sm ">
          {formatTime(endTime).hours}h
          </span>
          <span className="ml-2 lg:ml-3 text-sm md:text-2xl bg-[#F14705] text-white px-3 py-1 rounded-sm ">
          {formatTime(endTime).minutes}m
          </span>
          <span className="ml-2 lg:ml-3 text-sm md:text-2xl bg-[#F14705] text-white px-3 py-1 rounded-sm ">
          {formatTime(endTime).seconds}s
          </span>
          </div>

        </span>
      )}
     
    </div>
  );
};

export default FlashSaleTime;
