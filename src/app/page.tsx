import Hero from "@/components/layout/home/Hero";
import Footer from "@/components/layout/navigation/Footer";
import Categories from "@/components/layout/Categories";
import PageWrapper from "@/components/utils/PageWrapper";
import Contact from "@/components/layout/contact/Contact";
import Featured from "@/components/layout/product/Featured";

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
