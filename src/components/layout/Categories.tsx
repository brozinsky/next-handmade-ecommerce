"use client";
import HeadbandImg from "@/public/opaski-1.jpg";
import BagImg from "@/public/torebka-2.jpg";
import BackpackImg from "@/public/plecak-1.jpg";
import BasketImg from "@/public/koszyk-1.jpg";
import OtherImg from "@/public/inne-1.webp";
import clsx from "clsx";
import ScrollAnimated from "../utils/ScrollAnimated";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import CategoryTile from "../ui/CategoryTile";
import HeadingLine from "../ui/HeadingLine";

type Props = {
  pb?: "md" | "xl";
  pt?: "md" | "xl";
};

export default function Categories({ pb = "md", pt = "md" }: Props) {
  const isMobile = useMediaQuery(`(max-width: 1280px)`);

  return (
    <section id="Categories" className={"pt-section-half"}>
      <ScrollAnimated className={clsx("container container--xs")}>
        <HeadingLine textPosition="center">Kategorie</HeadingLine>
        <div className="grid gap-2 md:grid-cols-2 sm:gap-6 md:gap-2 lg:gap-8">
          <CategoryTile value="opaski" title={"Opaski"} imgSrc={HeadbandImg} />
          <CategoryTile value="plecaki" title={"Plecaki i torebki"} imgSrc={BagImg} />
          <CategoryTile value="koszyki" title={"Koszyki"} imgSrc={BasketImg} />
          <CategoryTile value="inne" title={"Inne"} imgSrc={OtherImg} />
        </div>
      </ScrollAnimated>
    </section>
  );
}
