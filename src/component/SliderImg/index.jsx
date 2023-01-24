import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import ImgCard from "../ImgCard";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./style.css"
// import required modules
import { Pagination } from "swiper";
const data = [
    { title: "Bali, Indonesia", img: "/img/image 18.png" },
    { title: "Kerry, Ireland", img: "/img/image 18 (1).png" },
    { title: "Sydney, Australia", img: "/img/image 18 (2).png " },
    { title: "Paris, France", img: "/img/image 18 (3).png " },
  ];
  
export default function SliderImg() {
  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >{
        data.map((x) => 
        <SwiperSlide >{
            data.map((i)=>
            <ImgCard  title={i.data} img={i.img} />
            )
        }
        </SwiperSlide>
        )
      }
        {/* <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </>
  );
}