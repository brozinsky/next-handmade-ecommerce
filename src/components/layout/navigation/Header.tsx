"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import Hamburger from "@/components/ui/Hamburger";
import Image from "next/image";
import Image1 from "@/public/contact/contact-1.jpg";
import logoSm from "@/public/logo-sm.png";
import useCartStore from "@/stores/useCartStore";
import { getTotalQuantity } from "@/utils/function";
import LinkCart from "@/components/ui/LinkCart";

const links = [
  { id: 0, title: "Strona główna", path: "/" },
  { id: 1, title: "Sklep", path: "/sklep" },
  { id: 2, title: "O mnie", path: "/o-mnie" },
  { id: 3, title: "Kontakt", path: "/kontakt" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const toggleOverflowHidden = (shouldHide: boolean) => {
      const action = shouldHide ? "add" : "remove";
      document.body.classList[action]("overflow-hidden");
      document.documentElement.classList[action]("overflow-hidden");
    };

    toggleOverflowHidden(isMenuOpen);

    return () => toggleOverflowHidden(false);
  }, [isMenuOpen]);

  return (
    <>
      <div
        className={clsx(
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible",
          "transition absolute w-full h-full bg-black/50 z-20"
        )}
        onClick={() => setIsMenuOpen(false)}
      ></div>
      <nav
        id="Header"
        className={clsx("z-40 w-full transition fixed top-0 bg-primary-300")}
      >
        <div className="container container--sm">
          <div className="w-full py-4 mx-auto lg:flex md:justify-between md:items-center">
            <div className="flex items-center justify-between w-full">
              <Link
                href="/"
                className="flex items-center justify-center gap-2 text-2xl font-regular text-neutral-100"
              >
                <Image
                  className="w-full h-[40px] transition duration-500 group-hover:scale-110"
                  width={180}
                  height={53}
                  src={logoSm}
                  loading="lazy"
                  alt={"Sznurkowe Królowe logo"}
                />
              </Link>
              <div className="flex flex-row gap-6 xs:gap-8 lg:hidden">
                <LinkCart setIsOpen={setIsMenuOpen} />
                <Hamburger isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
              </div>
            </div>
            <div
              className={clsx(
                isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible",
                "lg:visible transition absolute inset-x-0 z-20 w-full px-6 py-4 duration-300 ease-in-out bg-primary-300 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center"
              )}
            >
              <div className="flex flex-col items-center gap-8 lg:flex-row">
                {links.map(({ id, title, path }) => {
                  const isPathname =
                    (pathname === "/" && path === "/") ||
                    (pathname !== "/" &&
                      pathname.includes(path) &&
                      path !== "/");
                  return (
                    <Link
                      key={id}
                      onClick={() => setIsMenuOpen(false)}
                      className={clsx(
                        "font-light whitespace-nowrap relative my-2 transition-colors duration-300 transform md:mx-4 md:my-0",
                        isPathname
                          ? "text-neutral-800"
                          : "text-neutral-800 hover:text-primary-800"
                      )}
                      href={path}
                    >
                      {title}
                      {isPathname && (
                        <div className="absolute w-5 h-[3px] -translate-x-1/2 rounded-custom -bottom-2 left-1/2 bg-primary-400"></div>
                      )}
                    </Link>
                  );
                })}
                <LinkCart setIsOpen={setIsMenuOpen} classes="hidden lg:flex"/>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
