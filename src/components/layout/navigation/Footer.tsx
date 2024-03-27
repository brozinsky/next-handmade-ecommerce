import Link from "next/link";
import React from "react";
import LogoSVG from "../../svg/LogoSVG";
import Image from "next/image";
import logoSm from "@/public/logo-sm.png";

const links = [
  { id: 0, title: "Strona główna", path: "/" },
  { id: 1, title: "Sklep", path: "/sklep" },
  { id: 2, title: "O mnie", path: "/o-mnie" },
  { id: 3, title: "Kontakt", path: "/kontakt" },
  { id: 4, title: "Polityka prywatności", path: "/polityka-prywatnosci" },
  { id: 5, title: "Regulamin", path: "/regulamin" },
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
          <div className="flex flex-wrap items-center justify-center gap-6 mt-4 mb-6 text-neutral-900">
            {links.map(({ id, title, path }) => {
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
