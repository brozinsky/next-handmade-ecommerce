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
    <section id="Hero" className="w-full pt-6">
      <div className="container container--sm">
        <Image
          className="object-cover w-full mb-3 transition z-1"
          src={logoBig}
          priority
          alt="Sznurkowe Królowe"
        />
        <Image
          className="object-cover w-full transition rounded-md z-1"
          src={hero1}
          priority
          alt="Sznurkowe Królowe"
        />
      </div>
    </section>
  );
}
