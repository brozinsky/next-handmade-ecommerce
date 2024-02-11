"use client";
import React, { useEffect, useState } from "react";
import Button from "@/components/ui/Button";
import bg from "@/public/hero-bg.avif";
import logoBig from "@/public/logo-big.png";
import hero1 from "@/public/hero/hero-1.png";
import Link from "next/link";
import LogoSVG from "../../svg/LogoSVG";
import Image from "next/image";
import { useAnimation, motion } from "framer-motion";
import SocialLink from "../../ui/SocialLink";
import Animated from "../../utils/Animated";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import clsx from "clsx";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const animationControls = useAnimation();
  const isMobile = useMediaQuery(`(max-width: 768px)`);

  const animationVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  return (
    <section id="Hero" className="w-full lg:pt-6">
      <div className="relative mx-auto container-lg container-lg--sm">
        <Image
          className="w-11/12 transition max-lg:absolute max-lg:-translate-y-1/2 max-lg:-translate-x-1/2 lg:transform lg:mb-3 object- left-1/2 cover top-1/2 lg:w-full lg:static z-1"
          src={logoBig}
          priority
          alt="Sznurkowe Królowe"
        />
        <Image
          className="object-cover w-full h-56 transition lg:rounded-md lg:h-auto z-1"
          src={hero1}
          priority
          alt="Sznurkowe Królowe"
        />
      </div>
    </section>
  );
}
