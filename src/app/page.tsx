import Hero from "@/components/layout/home/Hero";
import Footer from "@/components/layout/navigation/Footer";
import Categories from "@/components/layout/Categories";
import PageWrapper from "@/components/utils/PageWrapper";
import SimpleGallery from "@/components/layout/gallery/Gallery";
import Contact from "@/components/layout/contact/Contact";

export default function Home() {
  return (
    <PageWrapper className="overflow-x-hidden">
      <Hero />
      <Categories />
      {/* <About /> */}
      {/* <Banner /> */}
      {/* <Features /> */}
      <Contact />
    </PageWrapper>
  );
}
