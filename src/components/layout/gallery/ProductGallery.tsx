"use client";
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Image from "next/image";
import { ZoomIn } from "react-feather";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";

export default function ProductGallery() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [lightbox, setLightbox] = useState(null);

  const images = [
    {
      src: "https://swiperjs.com/demos/images/nature-1.jpg",
      width: "532",
      height: "532",
    },
    {
      src: "https://swiperjs.com/demos/images/nature-2.jpg",
      width: "532",
      height: "532",
    },
    {
      src: "https://swiperjs.com/demos/images/nature-3.jpg",
      width: "532",
      height: "532",
    },
    {
      src: "https://swiperjs.com/demos/images/nature-4.jpg",
      width: "532",
      height: "532",
    },
    {
      src: "https://swiperjs.com/demos/images/nature-5.jpg",
      width: "532",
      height: "532",
    },
    {
      src: "https://swiperjs.com/demos/images/nature-6.jpg",
      width: "532",
      height: "532",
    },
    {
      src: "https://swiperjs.com/demos/images/nature-7.jpg",
      width: "532",
      height: "532",
    },
  ];

  useEffect(() => {
    const lightbox = new PhotoSwipeLightbox({
      gallery: ".slider-gallery-main",
      children: "div.swiper-slide", // Adjust this selector based on your actual SwiperSlide element
      pswpModule: () => import("photoswipe"),
    });
    lightbox.init();
    setLightbox(lightbox);

    return () => {
      lightbox.destroy();
    };
  }, []);

  const handleImageClick = (index) => {
    lightbox && lightbox.loadAndOpen(index);
  };

  return (
    <div>
      <div className="max-w-[400px]">
        {/* Conditional rendering of SimpleGallery */}

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
          {images.map((image, index) => (
            <SwiperSlide key={`slide-${index}`}>
              <a // Ensure this <a> tag has the correct attributes for PhotoSwipe
                href={image.src} // Large image URL
                data-pswp-width={image.width}
                data-pswp-height={image.height}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => {
                  e.preventDefault(); // Prevent default to stop navigation
                  handleImageClick(index);
                }}
              >
                <Image
                  className="w-full rounded-lg"
                  width={image.width}
                  height={image.height}
                  alt=""
                  src={image.src}
                />
              </a>
            </SwiperSlide>
          ))}
          {/* <SwiperSlide >
            <Image
              key={`slide-1}`} onClick={() => handleImageClick(1)}
              className="w-full rounded-lg"
              width="532"
              height="532"
              alt=""
              src="https://swiperjs.com/demos/images/nature-1.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className="w-full rounded-lg"
              width="532"
              height="532"
              alt=""
              src="https://swiperjs.com/demos/images/nature-2.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className="w-full rounded-lg"
              width="532"
              height="532"
              alt=""
              src="https://swiperjs.com/demos/images/nature-3.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className="w-full rounded-lg"
              width="532"
              height="532"
              alt=""
              src="https://swiperjs.com/demos/images/nature-4.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className="w-full rounded-lg"
              width="532"
              height="532"
              alt=""
              src="https://swiperjs.com/demos/images/nature-5.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className="w-full rounded-lg"
              width="532"
              height="532"
              alt=""
              src="https://swiperjs.com/demos/images/nature-6.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className="w-full rounded-lg"
              width="532"
              height="532"
              alt=""
              src="https://swiperjs.com/demos/images/nature-7.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className="w-full rounded-lg"
              width="532"
              height="532"
              alt=""
              src="https://swiperjs.com/demos/images/nature-8.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className="w-full rounded-lg"
              width="532"
              height="532"
              alt=""
              src="https://swiperjs.com/demos/images/nature-9.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className="w-full rounded-lg"
              width="532"
              height="532"
              alt=""
              src="https://swiperjs.com/demos/images/nature-10.jpg"
            />
          </SwiperSlide> */}
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="slider-gallery-thumbs"
        >
          <SwiperSlide>
            <Image
              className="w-full transition duration-200 rounded-lg cursor-pointer hover:brightness-110"
              width="133"
              height="133"
              alt=""
              src="https://swiperjs.com/demos/images/nature-1.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className="w-full transition duration-200 rounded-lg cursor-pointer hover:brightness-110"
              width="133"
              height="133"
              alt=""
              src="https://swiperjs.com/demos/images/nature-2.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className="w-full transition duration-200 rounded-lg cursor-pointer hover:brightness-110"
              width="133"
              height="133"
              alt=""
              src="https://swiperjs.com/demos/images/nature-3.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className="w-full transition duration-200 rounded-lg cursor-pointer hover:brightness-110"
              width="133"
              height="133"
              alt=""
              src="https://swiperjs.com/demos/images/nature-4.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className="w-full transition duration-200 rounded-lg cursor-pointer hover:brightness-110"
              width="133"
              height="133"
              alt=""
              src="https://swiperjs.com/demos/images/nature-5.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className="w-full transition duration-200 rounded-lg cursor-pointer hover:brightness-110"
              width="133"
              height="133"
              alt=""
              src="https://swiperjs.com/demos/images/nature-6.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className="w-full transition duration-200 rounded-lg cursor-pointer hover:brightness-110"
              width="133"
              height="133"
              alt=""
              src="https://swiperjs.com/demos/images/nature-7.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className="w-full transition duration-200 rounded-lg cursor-pointer hover:brightness-110"
              width="133"
              height="133"
              alt=""
              src="https://swiperjs.com/demos/images/nature-8.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className="w-full transition duration-200 rounded-lg cursor-pointer hover:brightness-110"
              width="133"
              height="133"
              alt=""
              src="https://swiperjs.com/demos/images/nature-9.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className="w-full transition duration-200 rounded-lg cursor-pointer hover:brightness-110"
              width="133"
              height="133"
              alt=""
              src="https://swiperjs.com/demos/images/nature-10.jpg"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
