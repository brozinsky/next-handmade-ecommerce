import React from "react";
import SocialLink from "../../ui/SocialLink";
import Link from "next/link";
import ScrollAnimated from "../../utils/ScrollAnimated";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import Image from "next/image";
import contact1 from "@/public/contact/contact-1.jpg";
import contact2 from "@/public/contact/contact-2.jpg";
import HeadingLine from "@/components/ui/HeadingLine";

export default function Contact() {
  return (
    <section id="Contact" className="py-section">
      <ScrollAnimated className="container container--sm">
        <div className="grid w-full grid-cols-3 gap-4">
          <div className="w-full h-full overflow-hidden rounded-md bg-primary-300">
            <Image
              className="object-cover w-full h-full transition z-1"
              src={contact1}
              priority
              alt="Sznurkowe Królowe"
            />
          </div>
          <div className="flex flex-col items-center justify-center px-8 space-y-8 py-section">
            <h2 className="text-center heading-second text-primary-800">
              Skontaktuj się
            </h2>
            <div className="flex items-center justify-center gap-2 group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-primary-800 group-hover:text-primary-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <Link
                className="font-light truncate text-neutral-600 hover:underline group-hover:text-primary-500"
                href={"tel:1234567890"}
              >
                (123) 456-7890
              </Link>
            </div>

            <div className="flex items-center justify-center gap-2 font-light group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-primary-800 group-hover:text-primary-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>

              <Link
                className="truncate w-fit text-neutral-600 group-hover:underline group-hover:text-primary-500"
                href={"mailto:contact@loremipsum.com"}
              >
                contact@loremipsum.com
              </Link>
            </div>
            <section className="mt-6 ">
              <p className="mb-2 font-light text-center text-neutral-600">Obserwuj nas:</p>
              <div className="flex items-center justify-center gap-2 lg:justify-start">
                <SocialLink variant="facebook" url="https://facebook.com/" />
                <SocialLink variant="instagram" url="https://instagram.com/" />
              </div>
            </section>
          </div>
          <div className="w-full h-full overflow-hidden rounded-md bg-primary-300">
            <Image
              className="object-cover w-full h-full transition z-1"
              src={contact2}
              priority
              alt="Sznurkowe Królowe"
            />
          </div>
        </div>
      </ScrollAnimated>
    </section>
  );
}
