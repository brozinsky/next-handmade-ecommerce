"use client";
import HeadbandImg from "@/public/opaski-1.jpg";
import BagImg from "@/public/torebka-2.jpg";
import BackpackImg from "@/public/plecak-1.jpg";
import BasketImg from "@/public/koszyk-1.jpg";
import OtherImg from "@/public/inne-1.webp";
import clsx from "clsx";
import ScrollAnimated from "../utils/ScrollAnimated";
import useMenuTabsStore from "../../stores/useMenuTabsStore";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import CategoryTile from "../ui/CategoryTile";
import HeadingLine from "../ui/HeadingLine";

type Props = {
  pb?: "md" | "xl";
  pt?: "md" | "xl";
};

export default function Categories({ pb = "md", pt = "md" }: Props) {
  const { setTab } = useMenuTabsStore();
  const isMobile = useMediaQuery(`(max-width: 1280px)`);

  return (
    <section id="Categories" className={"pt-section-half"}>
      <ScrollAnimated className={clsx(!isMobile && "container container--xs")}>
        <HeadingLine textPosition="center">Kategorie</HeadingLine>

        <div className="grid grid-cols-2 gap-2 sm:gap-6 md:gap-2 lg:gap-8">
          <CategoryTile tabId={1} title={"Opaski"} imgSrc={HeadbandImg} />
          <CategoryTile tabId={3} title={"Plecaki i torebki"} imgSrc={BagImg} />
          <CategoryTile tabId={2} title={"Koszyki"} imgSrc={BasketImg} />
          <CategoryTile tabId={4} title={"Inne"} imgSrc={OtherImg} />


          {/* <CategoryTilePrimary tabId={2} title={"Koszyki"} imgSrc={Image1} />
          <CategoryTilePrimary tabId={3} title={"Plecaki"} imgSrc={Image1} />
          <CategoryTilePrimary tabId={4} title={"Torebki"} imgSrc={Image1} />
          <CategoryTilePrimary
            tabId={5}
            title={"Dostępne od ręki"}
            imgSrc={Image1}
          />
          <CategoryTilePrimary tabId={6} title={"Kursy"} imgSrc={Image1} /> */}
        </div>
      </ScrollAnimated>
    </section>
  );
}
