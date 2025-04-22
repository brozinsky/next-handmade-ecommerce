import Link from "next/link";
import React from "react";
import Image from "next/image";
import logoSm from "@/public/logo-sm.webp";

const links = [
  { id: 0, title: "Strona główna", path: "/" },
  { id: 1, title: "Sklep", path: "/sklep" },
  { id: 2, title: "O mnie", path: "/o-mnie" },
  { id: 3, title: "Kontakt", path: "/kontakt" },
  {
    id: 4,
    title: "Polityka prywatności",
    isPdf: true,
    path: "/pdf/Polityka prywatności.pdf",
  },
  { id: 5, title: "Regulamin", isPdf: true, path: "/pdf/Regulamin sklepu.pdf" },
  { id: 6, title: "Zwrot", path: "/zwrot" },
  { id: 7, title: "Reklamacje", path: "/reklamacje" },
];

export default function Footer() {
  return (
    <footer
      id="Footer"
      className="bottom-0 w-full py-6 rounded-t-lg absoltue justify-self-end bg-primary-300"
    >
      <div className="container container--sm">
        <div className="max-w-screen-xl mx-auto text-center">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 text-2xl font-regular text-neutral-900"
          >
            <Image
              className="w-fit h-[50px] transition duration-500 group-hover:scale-110"
              width={180}
              height={53}
              src={logoSm}
              loading="lazy"
              alt={"Sznurkowe Królowe logo"}
            />
          </Link>
          <div>
            <div className="flex flex-wrap items-center justify-center gap-6 mt-4 mb-2 text-neutral-900">
              {links.map(({ id, title, path }) => {
                if (id >= 4) return;
                return (
                  <Link
                    key={id}
                    className="font-light hover:underline"
                    href={path}
                  >
                    {title}
                  </Link>
                );
              })}
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 mb-6 text-neutral-900">
              {links.map(({ id, title, path, isPdf }) => {
                if (id < 4) return;
                return (
                  <Link
                    key={id}
                    className="font-light hover:underline"
                    href={path}
                    target={isPdf ? "_blank" : "_self"}
                  >
                    {title}
                  </Link>
                );
              })}
            </div>
          </div>
          <span className="text-sm font-light text-neutral-800 sm:text-center">
            Created by{" "}
            <Link
              className="hover:underline"
              href={"https://github.com/brozinsky"}
            >
              brozinsky
            </Link>{" "}
            © 2024 All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
