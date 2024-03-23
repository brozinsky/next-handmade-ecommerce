import Hero from "@/components/layout/home/Hero";
import Categories from "@/components/layout/Categories";
import PageWrapper from "@/components/utils/PageWrapper";
import Contact from "@/components/layout/contact/Contact";
import Featured from "@/components/layout/product/Featured";
import { getProducts } from "../../../sanity/sanity-utils";
import React, { useEffect } from "react";

export default function Home() {

  return (
    <PageWrapper className="overflow-x-hidden">
      <Hero />
      <Featured />
      <Categories />
      {/* <About /> */}
      {/* <Banner /> */}
      {/* <Features /> */}
      <Contact />
    </PageWrapper>
  );
}
