"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import Image from "next/image";

export default function LibraryCarouselPage() {
  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <Image
            src="/images/1.jpg"
            alt="1"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "400px", objectFit: "cover" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/2.jpg"
            alt="2"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "400px", objectFit: "cover" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/3.jpg"
            alt="3"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "400px", objectFit: "cover" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/4.jpg"
            alt="4"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "400px", objectFit: "cover" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/5.jpg"
            alt="5"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "400px", objectFit: "cover" }}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
