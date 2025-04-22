"use client";
import React from "react";
import logoBig from "@/public/logo-big.webp";
import hero1 from "@/public/hero/hero-1.webp";
import Image from "next/image";

export default function Hero() {

  return (
    <section id="Hero" className="w-full lg:pt-6">
      <div className="relative mx-auto container-lg container-lg--sm">
        <Image
          className="w-11/12 transition max-lg:absolute max-lg:-translate-y-1/2 max-lg:-translate-x-1/2 lg:transform lg:mb-3 object- left-1/2 cover top-1/2 lg:w-full lg:static z-1 bg-neutral-200/50"
          src={logoBig}
          priority
          alt="Sznurkowe Królowe - produkty ręcznie robione z przędzy bawełnianej"
        />
        <Image
          className="object-cover w-full h-56 transition lg:rounded-md lg:h-auto z-1 bg-neutral-200/50"
          src={hero1}
          priority
          alt="Torebkai Handmade ręcznie robione szydełko przędza bawełniana t-shirt yarn kolor mleczna czekolada"
        />
      </div>
    </section>
  );
}
