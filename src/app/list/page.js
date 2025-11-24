"use client";
import React from "react";
import services from "../../data/services.json";
import Image from "next/image";
import { MdLocationOn } from "react-icons/md";
import { FaSearch, FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { IoIosArrowBack, IoIosArrowDown } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";

const List = () => {
  const Ratings = ({ r, review }) => {
    const rating = Math.floor(r);
    // console.log(rating)
    return (
      <div className="flex gap-1 text-yellow-400 items-center">
        {[...Array(rating)].map((_, i) => (
          <FaStar key={i} />
        ))}
        <FaRegStarHalfStroke />
        <p className="text-gray-600 font-medium">
          {" "}
          {r}{" "}
          <span className="text-gray-400 font-normal">
            {" "}
            ({review} reviews){" "}
          </span>{" "}
        </p>
      </div>
    );
  };
  //card
  const ListCard = ({ s }) => {
    const { name, slug, location, rating, reviewCount, description, images } =
      s;
    //   console.log("Service data:", s);
    return (
      <Link href={`/list/${slug}`}>
        <div className=" bg-white p-2 text-sm border border-gray-200 rounded flex gap-4 items-center">
          <Image
            className="h-30 rounded"
            src={images[0]}
            alt={name}
            width={120}
            height={200}
          />
          {/* content */}
          <div className="">
            <h3 className="text-lg font-semibold">{name}</h3>
            <Ratings r={rating} review={reviewCount} />
            <p className="flex gap-1  items-center">
              {" "}
              <MdLocationOn className="text-red-700" /> {location}{" "}
            </p>
            <p className=" text-gray-400">{description}</p>
          </div>
        </div>
      </Link>
    );
  };
  //people also viewed section
  const MostViewSectionCard = ({ service }) => {
    const { name, slug, location, rating, reviewCount, description, images } =
      service;

    return (
      <Link href={`/list/${slug}`}>
        <div className="bg-white rounded-lg pb-2">
          <Image
            src={images[0]}
            alt={name}
            width={300}
            height={100}
            className="rounded-t h-54 object-cover bg-center"
          />
          {/* content */}
          <div className="my-4 px-4 space-y-1 ">
            <h3 className="text-lg font-semibold text-secondary">{name}</h3>
            <Ratings r={rating} review={reviewCount} />
            <p className="flex gap-1  items-center">
              {" "}
              <MdLocationOn className="text-red-700" /> {location}{" "}
            </p>
          </div>
        </div>
      </Link>
    );
  };
  return (
    <div className=" relative ">
      {/* hero section */}
      <div className="relative w-screen left-1/2 right-1/2 -mx-[51vw] h-[480px] bg-[url('https://i.ibb.co.com/G43XSmyy/piron-guillaume-y5h-QCIn1c6o-unsplash-1.jpg')] bg-cover bg-center ">
        <div className="absolute inset-0 bg-linear-to-r from-black/50 via-black/40 to-transparent"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-primary text-4xl md:text-5xl font-bold mb-4">
            Find Quality Healthcare Services
          </h1>
          <p className="text-white/90 text-lg mb-8">
            Discover the best medical facilities near you
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 ">
        {/* search bar  */}
        <div className="w-full bg-white py-1 rounded-lg border border-gray-200 mb-6 grid grid-cols-3 gap-3 px-3">
          <div className="flex gap-4 items-center py-1">
            <FaSearch className="text-gray-400" />
            <input
              placeholder="What are you looking for?"
              className="placeholder:text-sm "
            />
          </div>
          <div className="border-l-2 py-1 border-gray-200 flex-1 bg-white flex items-center px-4 ">
            <MdLocationOn className="text-gray-400 mr-3" size={20} />
            <input
              type="text"
              placeholder="City, State, Country"
              className="flex-1 outline-none text-gray-700 placeholder:text-sm"
            />
            <button className="text-gray-400">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
          <div className="items-end justify-end flex py-1">
            <button className="bg-secondary text-white px-8 py-2 rounded-xl hover:bg-[#4a2f2f] font-medium shadow-lg text-sm">
              SEARCH
            </button>{" "}
          </div>
        </div>

        {/* filter */}
        <div className="mb-10">
          <h4 className="font-medium ">Filter By:</h4>
          <div className="grid grid-cols-4 gap-4 text-sm mt-2">

            <div className="bg-gray-200 py-2 px-4 rounded-lg border border-primary/50 flex justify-between items-center">
              <input placeholder="Procedure Type" />
              <IoIosArrowDown />
            </div>
            
            <div className="bg-gray-200 py-2 px-4 rounded-lg border border-primary/50 flex justify-between items-center">
              <input placeholder="Price" />
              <IoIosArrowDown />
            </div>
            
            <div className="bg-gray-200 py-2 px-4 rounded-lg border border-primary/50 flex justify-between items-center">
              <input placeholder="Distance" />
              <IoIosArrowDown />
            </div>
            
            <div className="bg-gray-200 py-2 px-4 rounded-lg border border-primary/50 flex justify-between items-center">
              <input placeholder="Rating" />
              <IoIosArrowDown />
            </div>
          </div>

        </div>

        <div className="flex gap-5">
          <div className="grid gap-4">
            {services.map((s, i) => (
              <ListCard key={i} s={s} />
            ))}
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d29202.090624798813!2d90.36759039141587!3d23.80930459142366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1shospital!5e0!3m2!1sen!2sbd!4v1763910934986!5m2!1sen!2sbd"
            width="600"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        {/* pagination */}
        <div className="flex gap-4 items-center mt-6">
          <button className="bg-white btn">
            <IoIosArrowBack />
          </button>
          <button className="btn bg-white border border-primary"> 1 </button>
          <button className="btn bg-white"> 2 </button>
          <button className="btn bg-white "> 3 </button>
          <button className="btn bg-white">
            <IoIosArrowForward />
          </button>
        </div>
        {/* //people also viewed section */}

        <div className="mt-10">
          <h3 className="font-semibold text-xl py-6"> People Also Viewed </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
            {services.slice(0, 4).map((s, i) => (
              <MostViewSectionCard key={i} service={s} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
