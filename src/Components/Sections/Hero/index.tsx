"use client";

import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Img01 from "../../../../public/images/bannar/b1.jpeg";
import Img02 from "../../../../public/images/bannar/b2.jpeg";
import Img03 from "../../../../public/images/bannar/b3.jpeg";
import Img04 from "../../../../public/images/bannar/b4.jpeg";
import Img05 from "../../../../public/images/bannar/b5.jpeg";
import Img06 from "../../../../public/images/bannar/b6.jpeg";
import Img07 from "../../../../public/images/bannar/b7.jpeg";
import Img09 from "../../../../public/images/bannar/b9.jpeg";

// IMAGES DATA FOR CAROUSEL
interface Data {
  imgSrc: any;
}

const ImageBnnar: Data[] = [
  { imgSrc: Img01 },
  { imgSrc: Img02 },
  { imgSrc: Img03 },
  { imgSrc: Img04 },
  { imgSrc: Img05 },
  { imgSrc: Img06 },
  { imgSrc: Img09 },
];

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className={`relative z-10  overflow-hidden pb-16 pt-[120px] dark:bg-gray-dark `}
      >
        <div className="container ">
          <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 9000 }} // Optional: adds autoplay with 5 seconds delay
            breakpoints={{
              1024: { slidesPerView: 1 },
              600: { slidesPerView: 1 },
              480: { slidesPerView: 1 },
            }}
          >
            {ImageBnnar.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="w[400px] h-[400px]">
                <Image
                  src={item.imgSrc}
                  alt={`Slide image ${i + 1}`}
                  width={0} // Adjust width according to your layout needs
                  height={0} // Adjust height according to your layout needs
                  className="w-full"
                />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Hero;
