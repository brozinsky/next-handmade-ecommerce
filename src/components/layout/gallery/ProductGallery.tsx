"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { Swiper as SwiperClass } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Image from "next/image";
import { ZoomIn } from "react-feather";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";

type TProps = {
  title: string;
  featuredImage: string;
  images: string[];
}

export default function ProductGallery({title, featuredImage, images}: TProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
  const [lightbox, setLightbox] = useState<PhotoSwipeLightbox | null>(null);

  const imagesGallery = images && images.length > 0 ? [featuredImage, ...images] : [featuredImage];

  useEffect(() => {
    const lightbox = new PhotoSwipeLightbox({
      gallery: ".slider-gallery-main",
      children: "div.swiper-slide",
      pswpModule: () => import("photoswipe"),
    });
    lightbox.init();
    setLightbox(lightbox);

    return () => {
      lightbox.destroy();
    };
  }, []);

  const handleImageClick = (index: number) => {
    lightbox && lightbox.loadAndOpen(index);
  };

  return (
      <div className="w-full xs:w-[400px] sm:w-[600px] lg:w-[400px]">
        <Swiper
          loop={true}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="relative mb-2 slider-gallery-main"
        >
          <div className="pointer-events-none absolute z-10 flex flex-row items-center gap-2 px-3 py-0.5 transition duration-200 rounded-lg cursor-pointer select-none bg-white/50 top-2 right-2 opacity-80 hover:opacity-100">
            <ZoomIn width="16" className="text-neutral-700" />
            <div className="text-sm text-neutral-800">Powiększ</div>
          </div>
          {imagesGallery.map((image, index) => (
            <SwiperSlide key={`slide-${index}`}>
              <a
                className="rounded-lg bg-neutral-200"
                href={image}
                data-pswp-width={1300}
                data-pswp-height={1300}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => {
                  e.preventDefault();
                  handleImageClick(index);
                }}
              >
                <Image
                  className="w-full object-cover rounded-lg max-h-[300px] xs:max-h-[400px] sm:max-h-[600px] lg:max-h-[400px] aspect-square"
                  width={1300}
                  height={1300}
                  alt={title ? title : ""}
                  src={image}
                />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
        {imagesGallery && imagesGallery.length > 1 && <Swiper
          onSwiper={(swiper: SwiperType) => setThumbsSwiper(swiper)}
          loop={true}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="slider-gallery-thumbs"
        >
          {imagesGallery.map((image, index) => (
            <SwiperSlide key={`slide-sm-${index}`}>
            <Image
              className="w-full h-auto transition duration-200 rounded-lg cursor-pointer hover:brightness-110"
              width="133"
              height="133"
              alt={title ? title : ""}
              src={image}
            />
          </SwiperSlide>
          ))}
        </Swiper>}
      </div>
  );
}
