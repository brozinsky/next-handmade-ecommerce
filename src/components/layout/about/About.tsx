import React from "react";
import Image from "next/image";
import Image1 from "@/public/about/about-1.jpg";
import HeadingLine from "@/components/ui/HeadingLine";
import { getDescription } from "../../../../sanity/sanity-utils";
import renderText from "@/utils/renderText";
import { TTextMark } from "@/utils/types";

export default async function About() {
  const aboutDescription = await getDescription("o-mnie");

  return (
    <>
      <section id="About" className="py-section min-h-screen-footer">
        <div className="container container--sm">
          <div className="flex flex-col items-center content-center justify-center gap-16 md:grid md:grid-cols-2">
            <div className="font-light text-neutral-800 sm:text-lg">
              <HeadingLine>O mnie</HeadingLine>
              <div className="space-y-2 font-light">
                {aboutDescription.description &&
                  aboutDescription.description.map((block: any, blockIndex: number) => {
                    return (
                      <React.Fragment key={blockIndex}>
                        {block.children.map((child: {text: string, marks: TTextMark[]}, childIndex: string) => (
                          <p key={childIndex}>
                            {renderText(child.text, child.marks)}
                          </p>
                        ))}
                      </React.Fragment>
                    );
                  })}
              </div>
            </div>
            <Image
              className="relative z-10 object-cover w-full h-full rounded-lg rounded-custom"
              width={538}
              height={538}
              src={Image1}
              priority
              alt="Ręcznie wykonane brązowe torebki"
            />
          </div>
        </div>
      </section>
    </>
  );
}
