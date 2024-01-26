import React from "react";
import Button from "../ui/Button";
import Link from "next/link";
import Image from "next/image";
import Image6 from "@/public/bento/bento-6.jpg";
import ScrollAnimated from "../utils/ScrollAnimated";

export default function Banner() {
  return (
    <section id="Banner" className="py-section bg-neutral-900">
      <ScrollAnimated className="container mx-auto container--sm">
        <div className="grid w-full h-full grid-cols-2 mx-auto">
          <div className="flex flex-col self-center max-w-xl">
            <h2 className="mb-4 text-5xl font-brush font-semibold text-neutral-200">
              Lorem ipsum dolor
              <br />
              <span className="text-primary-500">Sit amet</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus, excepturi hic delectus sint officiis sunt.
            </p>
            <div className="flex flex-row gap-8 mt-8">
              <Link href="/menu#menu">
                <Button variant="primary">Check our menu</Button>
              </Link>
            </div>
          </div>
          <Image
            className="rounded-lg object-cover w-full h-64 md:h-96"
            width={764}
            height={955}
            src={Image6}
            loading="lazy"
            alt={"Lorem ipsum dolor"}
          />
        </div>
      </ScrollAnimated>
    </section>
  );
}
