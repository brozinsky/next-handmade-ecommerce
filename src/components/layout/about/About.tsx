import React from "react";
import Image from "next/image";
import Image1 from "@/public/about/about-1.jpg";
import HeadingLine from "@/components/ui/HeadingLine";
import { getDescription } from "../../../../sanity/sanity-utils";

type TTextMark = "strong" | "em";

const renderText = (text: string, marks: TTextMark[]): JSX.Element | string => {
  if (!marks || marks.length === 0) return text;
  return marks.reduce<JSX.Element | string>((acc, mark) => {
    switch (mark) {
      case "strong":
        return <strong className="font-bold" key={mark}>{acc}</strong>;
      case "em":
        return <em key={mark}>{acc}</em>;
      default:
        return acc;
    }
  }, text);
};

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
