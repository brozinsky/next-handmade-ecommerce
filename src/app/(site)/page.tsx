'use client'
import Hero from "@/components/layout/home/Hero";
import Footer from "@/components/layout/navigation/Footer";
import Categories from "@/components/layout/Categories";
import PageWrapper from "@/components/utils/PageWrapper";
import Contact from "@/components/layout/contact/Contact";
import Featured from "@/components/layout/product/Featured";
import useProductsQuery from "@/stores/useProductsQuery";

export default function Home() {
  const {productsData} = useProductsQuery()
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
