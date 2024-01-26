"use client";
import Image from "next/image";
import Image1 from "@/public/contact/contact-1.jpg";
import clsx from "clsx";
import { paddingBot, paddingTop } from "@/utils/props";
import ScrollAnimated from "../utils/ScrollAnimated";
import CategoryTile from "../ui/CategoryTile";
import Link from "next/link";
import useMenuTabsStore from "../../stores/useMenuTabsStore";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import CategoryTilePrimary from "../ui/CategoryTilePrimary";
import HeadingLine from "../ui/HeadingLine";

type Props = {
  pb?: "md" | "xl";
  pt?: "md" | "xl";
};

export default function Categories({ pb = "md", pt = "md" }: Props) {
  const { setTab } = useMenuTabsStore();
  const isMobile = useMediaQuery(`(max-width: 1280px)`);

  return (
    <section id="Categories" className={"pt-section"}>
      <ScrollAnimated className={clsx(!isMobile && "container container--xs")}>
        <HeadingLine>Kategorie</HeadingLine>

        <div className="grid grid-cols-3 gap-2 sm:gap-6 md:gap-2 lg:gap-8">
          <CategoryTilePrimary tabId={1} title={"Opaski"} imgSrc={Image1} />
          <CategoryTilePrimary tabId={2} title={"Koszyki"} imgSrc={Image1} />
          <CategoryTilePrimary tabId={3} title={"Plecaki"} imgSrc={Image1} />
          <CategoryTilePrimary tabId={4} title={"Torebki"} imgSrc={Image1} />
          <CategoryTilePrimary
            tabId={5}
            title={"Dostępne od ręki"}
            imgSrc={Image1}
          />
          <CategoryTilePrimary tabId={6} title={"Kursy"} imgSrc={Image1} />
        </div>
      </ScrollAnimated>
    </section>
  );
}
