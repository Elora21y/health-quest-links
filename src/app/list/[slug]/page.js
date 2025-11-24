"use client";
import { useParams } from "next/navigation";
import React from "react";
import services from "../../../data/services.json";
import offers from "../../../data/offers.json";
import awards from "../../../data/awards.json";
import reviews from "../../../data/reviews.json";
import Image from "next/image";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import {
  FaHeart,
  FaRegHeart,
  FaStar,
  FaWheelchair,
  FaTransgenderAlt,
  FaRegStar,
} from "react-icons/fa";
import { IoIosWifi } from "react-icons/io";
import { TiTick } from "react-icons/ti";
import {
  MdDirections,
  MdEmail,
  MdLanguage,
  MdLocationOn,
  MdPhone,
} from "react-icons/md";

const amenities = [
  {
    icon: <TiTick />,
    text: "Accepts credit cards",
  },
  {
    icon: <IoIosWifi />,
    text: "Free Wi-Fi",
  },
  {
    icon: <FaWheelchair />,
    text: "Wheelchair accessible",
  },
  {
    icon: <FaTransgenderAlt />,
    text: "Gender-neutral restrooms",
  },
];

const ListDetails = () => {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);
  console.log(service);
  const {
    name,
    location,
    rating,
    reviewCount,
    speciality,
    address,
    description,
    images,
    thumbnail,
    responseTime,
    responseRate,
    contact,
    packages,
    doctors,
  } = service;

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

  //sponsors section
  const SponsorSectionCard = ({ service }) => {
    const { name, slug, location, rating, reviewCount, description, images } =
      service;

    return (
      <div className="bg-white ">
        {images?.[0] && (
        <Image
          src={images[0]}
          alt={name || "Service image"}
          width={300}
          height={100}
          className="rounded-t h-54 w-full object-cover"
        />
        )}
        {/* content */}
        <div className="my-4 px-4 space-y-1">
          <h3 className="text-lg font-semibold">{name}</h3>
          <Ratings r={rating} review={reviewCount} />
          <p className="flex gap-1  items-center">
            {" "}
            <MdLocationOn className="text-red-700" /> {location}{" "}
          </p>
        </div>
      </div>
    );
  };

  //people also viewed section
  const SimilarListingSectionCard = ({ service }) => {
    const { name, location, rating, reviewCount, images } = service;

    return (
      <div className="bg-white ">
        {images?.[0] && (
        <Image
          src={images[0]}
          alt={name || "Service image"}
          width={300}
          height={100}
          className="rounded-t h-54"
        />
        )}
        {/* content */}
        <div className="my-4 px-4 space-y-1">
          <h3 className="text-lg font-semibold">{name}</h3>
          <Ratings r={rating} review={reviewCount} />
          <p className="flex gap-1  items-center">
            {" "}
            <MdLocationOn className="text-red-700" /> {location}{" "}
          </p>
          {/* <p className=" text-gray-400">{description}</p> */}
        </div>
      </div>
    );
  };
  return (
    <div className="mx-auto max-w-7xl px-4 py-16">
      <div className="grid gap-16 grid-cols-1 lg:grid-cols-3">
        {/* left side  */}
        <div className="col-span-2">
          {/* logo */}
          <div className="flex items-center gap-6 mb-10">
            <Image
              src={thumbnail}
              alt={name}
              width={180}
              height={180}
              className="rounded-full border border-primary"
            />
            {/* content */}
            <div className="space-y-0.5">
              <h3 className="text-secondary font-bold text-3xl">{name}</h3>
              <Ratings key={slug} r={rating} review={reviewCount}/>
              <p className="font-medium">Speciality : {speciality} </p>
              <p className="text-gray-400 font-medium text-sm"> Location: {address} </p>
              <p className="flex items-start gap-3 text-gray-400 text-sm font-medium">
                {" "}
                <FaRegHeart className="text-red-600/50" size={18} /> Add to
                Favourite
              </p>
            </div>
          </div>
          <div className="">
            <Image src={images[0]} alt={name} width={750} height={200} className="rounded-xl"/>
            <p> </p>
          </div>
          {/* about */}
          <div className="mt-10">
            <h3 className="text-2xl font-semibold mb-3">About</h3>
            <p className="text-gray-500 text-sm">
              {" "}
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which do not look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there is not anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend to repeat predefined chunks as necessary, making
              this the first true generator on the Internet. It uses a
              dictionary of over 200 Latin words, combined with a handful of
              model sentence structures, to generate Lorem Ipsum which looks
              reasonable. The generated Lorem Ipsum is therefore always free
              from repetition, injected humour, or non-characteristic words etc.
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which do not look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there is not anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend to repeat predefined chunks as necessary, making
              this the first true generator on the Internet. It uses a
              dictionary of over 200 Latin words, combined with a handful of
              model sentence structures, to generate Lorem Ipsum which looks
              reasonable. The generated Lorem Ipsum is therefore always free
              from repetition, injected humour, or non-characteristic words etc.
            </p>
          </div>

          {/* popular offer */}
          <div className="mt-10">
            <h3 className="text-2xl font-semibold mb-5">Popular Offer</h3>
            {/* image */}
            <div className="flex gap-4 items-start justify-between">
              {offers.map((f, i) => (
                <div key={i} className="grid gap-3">
                  <Image
                    src={f.image}
                    alt={f.title}
                    width={450}
                    height={250}
                    className="object-cover rounded-lg h-64"
                  />
                  <p className="text-gray-500 font-medium"> {f.title} </p>
                </div>
              ))}
            </div>
          </div>

          {/* packages */}
          <div className="overflow-x-auto mt-10">
            <h3 className="text-2xl font-semibold mb-5">Packages</h3>
            <table className="table table-zebra border-primary">
              {/* head */}
              <thead className="bg-primary text-secondary">
                <tr>
                  <th className="p-3 ">Package Name</th>
                  <th className="p-3 ">Description</th>
                  <th className="p-3 ">Price</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {packages.map((p, i) => (
                  <tr key={i}>
                    <td className="p-3">{p.name}</td>
                    <td className="p-3">{p.description}</td>
                    <td className="p-3">{p.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* doctors */}
          {doctors && doctors.length > 0 && (
            <div className="mt-10">
              <h3 className="text-2xl font-semibold mb-16">Doctors</h3>
              {/* image */}
              <div className="flex gap-4 items-start justify-between">
                {doctors.map((d, i) => (
                  <div
                    key={i}
                    className="grid   justify-center bg-white p-4 rounded-lg border border-gray-200 w-65 h-48"
                  >
                    <div className="flex flex-col justify-center items-center">
                      <Image
                        src={d.image}
                        alt={d.title}
                        width={110}
                        height={100}
                        className="object-cover rounded-full h-28 border-2 border-primary p-1 -mt-16 "
                      />
                    </div>
                    <div className="text-center">
                      <p className="text-secondary font-medium"> {d.name} </p>
                      <p className="text-gray-500 "> {d.speciality} </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Amenities */}
          <div className="overflow-x-auto mt-16">
            <h3 className="text-2xl font-semibold mb-5">Amenities and More</h3>
            <div className="grid grid-cols-2 gap-4">
              {amenities.map((a, i) => (
                <div key={i} className="flex items-center gap-2 text-gray-700">
                  <span className="text-lg">{a.icon} </span>
                  <span>{a.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Awards  */}
          <div className="overflow-x-auto mt-12">
            <h3 className="text-2xl font-semibold mb-5">
              Awards & Recognitions
            </h3>
            <div className="grid grid-cols-4 gap-4">
              {awards.map((award) => (
                <Image
                  src={award.image}
                  alt={award.title}
                  width={200}
                  height={250}
                  key={award.id}
                  className="w-full h-60 object-cover rounded"
                />
              ))}
            </div>
          </div>

          {/* Reviews & Rating */}
          <div className="overflow-x-auto mt-10">
            <h3 className="text-2xl font-semibold mb-5">Reviews & Rating</h3>
            {/* Overall Rating */}
            <div className="bg-white border border-gray-200 p-6 rounded-lg mb-6 flex items-center justify-between">
              <div className="grid gap-2 items-center justify-center">
                <h3 className="text-xl font-semibold ">Overall Rating (4.5)</h3>
                <div className="flex gap-1 text-yellow-400 text-2xl">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaRegStarHalfStroke />
                </div>
                <p className="text-gray-500 font-medium">120 reviews </p>
              </div>

              {/* Rating Breakdown */}
              <div className="flex-1 max-w-xs ml-8">
                {/* 5 */}
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-4 text-sm">5</span>
                  <FaStar className="text-yellow-400" size={12} />
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-yellow-400 h-2 rounded-full"
                      style={{ width: `${(90 / 120) * 100}%` }}
                    ></div>
                  </div>
                  <span className="w-8 text-sm text-gray-600">90</span>
                </div>

                {/* 4 */}
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-4 text-sm">4</span>
                  <FaStar className="text-yellow-400" size={12} />
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-orange-300 h-2 rounded-full"
                      style={{ width: `${(20 / 100) * 100}%` }}
                    ></div>
                  </div>
                  <span className="w-8 text-sm text-gray-600">20</span>
                </div>
                {/* 5 */}
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-4 text-sm">3</span>
                  <FaStar className="text-yellow-400" size={12} />
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-orange-400 h-2 rounded-full"
                      style={{ width: `${(5 / 120) * 100}%` }}
                    ></div>
                  </div>
                  <span className="w-8 text-sm text-gray-600">5</span>
                </div>
                {/* 5 */}
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-4 text-sm">2</span>
                  <FaStar className="text-yellow-400" size={12} />
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-red-400 h-2 rounded-full"
                      style={{ width: `${(3 / 120) * 100}%` }}
                    ></div>
                  </div>
                  <span className="w-8 text-sm text-gray-600">3</span>
                </div>
                {/* 1 */}
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-4 text-sm">1</span>
                  <FaStar className="text-yellow-400" size={12} />
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-yellow-400 h-2 rounded-full"
                      style={{ width: `${(0 / 120) * 100}%` }}
                    ></div>
                  </div>
                  <span className="w-8 text-sm text-gray-600">0</span>
                </div>
              </div>

              <button className="bg-white border border-gray-300 btn text-primary rounded-lg hover:bg-gray-50">
                Write a review
              </button>
            </div>
          </div>

          {/* user review */}
          <div className="space-y-4">
            {reviews.map((review) => (
              <div key={review.id} className="border-b border-gray-300 pb-4">
                <div className="flex gap-4 items-center">
                  <Image
                    src={review.avatar}
                    alt={review.location}
                    width={70}
                    height={70}
                    className="rounded-full h-18 object-cover p-1 border-2 border-primary"
                  />
                  <div className="grid ">
                    <h4 className="font-medium ">{review.username} </h4>
                    <p className="text-sm">Location : {review.location} </p>

                    <div className="flex gap-1 items-start">
                      <div className="flex gap-1 text-yellow-400">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar className="text-gray-300" />
                      </div>
                      <span className="text-gray-500 text-sm ml-2 -mt-0.5">
                        {review.date}{" "}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-sm mt-4">{review.comment}</p>
                {/* like */}
                <div className="flex gap-2 items-center mt-5 text-end justify-end">
                  <FaHeart className="text-red-600/80" size={20} />
                  <span className="text-gray-500 text-sm">
                    {" "}
                    {review.likes} Like this
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* right side */}
        <div className="col-span-1 ">
         <div className=" sticky top-4 space-y-3">
           {/* top card */}
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold text-lg mb-4 text-secondary">
              Request an appointment
            </h4>
            <div className="flex  items-center gap-8 text-gray-500 mb-4">
              <div className="">
                <p>Response Time </p>
                <p className="text-green-600">{responseTime} </p>
              </div>
              <div className="">
                <p>Response Rate </p>
                <p className="text-green-600">{responseRate} </p>
              </div>
            </div>
            <button className="w-full bg-secondary py-3 text-white rounded cursor-pointer">
              Make an Appointment
            </button>
          </div>

          {/* button */}
          <button className="w-full bg-primary py-3 text-secondary rounded cursor-pointer my-4">
            Request a Quote
          </button>

          {/* contact */}
          <div className="bg-white border border-gray-200 rounded-lg ">
            <a
              href="#"
              target="_blank"
              className="flex items-center justify-between text-gray-700 border border-gray-200  p-3"
            >
              <span>{contact.website}</span>
              <MdLanguage size={20} />
            </a>
            <a
              href="#"
              target="_blank"
              className="flex items-center justify-between text-gray-700 border border-gray-200  p-3"
            >
              <span>{contact.phone}</span>
              <MdPhone size={20} />
            </a>
            <a
              href="#"
              target="_blank"
              className="flex items-center justify-between text-gray-700 border border-gray-200  p-3"
            >
              <span>{contact.email}</span>
              <MdEmail size={20} />
            </a>
            <a
              href="#"
              target="_blank"
              className="flex items-center justify-between text-gray-700 font-medium border border-gray-200  p-3"
            >
              <span>Get Directions</span>
              <MdDirections size={20} />
            </a>
          </div>

          {/* map */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d20667.72061832565!2d90.29854338838838!3d23.691282461166708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1shospital%20!5e0!3m2!1sen!2sus!4v1763969177544!5m2!1sen!2sus"
              width="400"
              height="400"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* sponsors section */}
          <div className="mt-10">
            <h3 className="text-2xl font-semibold my-6">Sponsored</h3>
            <div className="grid grid-cols-1  gap-5">
              {services.slice(0, 3).map((s, i) => (
                <SponsorSectionCard key={i} service={s} />
              ))}
            </div>
          </div>
         </div>
        </div>
      </div>
      
          {/* Similar Listing  */}
          <div className="overflow-x-auto mt-12">
            <h3 className="text-2xl font-semibold mb-5">Similar Listing</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
              {services.slice(0, 4).map((s, i) => (
                <SimilarListingSectionCard key={i} service={s} />
              ))}
            </div>
          </div>
    </div>
  );
};

export default ListDetails;
