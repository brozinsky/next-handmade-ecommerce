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

const links = [
  { id: 0, title: "Strona główna", path: "/" },
  { id: 1, title: "Sklep", path: "/sklep" },
  { id: 2, title: "O mnie", path: "/o-mnie" },
  { id: 3, title: "Kontakt", path: "/kontakt" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomepage = pathname === "/";
  const { items } = useCartStore();
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationInstances, setAnimationInstances] = useState([]);

  useEffect(() => {
    const newInstance = { id: Date.now() }; // Using the current timestamp as a unique ID
    setAnimationInstances((prevInstances) => [...prevInstances, newInstance]);

    // Schedule removal of this instance after animation duration
    setTimeout(() => {
      setAnimationInstances((prevInstances) =>
        prevInstances.filter((instance) => instance.id !== newInstance.id)
      );
    }, 1000);
  }, [getTotalQuantity(items)]);

  useEffect(() => {
    const toggleOverflowHidden = (shouldHide: boolean) => {
      const action = shouldHide ? "add" : "remove";
      document.body.classList[action]("overflow-hidden");
      document.documentElement.classList[action]("overflow-hidden");
    };

    toggleOverflowHidden(isMenuOpen);

    return () => toggleOverflowHidden(false);
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={clsx(
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible",
          "transition absolute w-full h-full bg-black/50"
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
                {/* <span className="flex gap-1">
                  <span className="text-white font-brush">Asian</span>
                  <span className="text-primary-500 font-brush">Food</span>
                </span> */}
                <Image
                  className="w-full h-[40px] transition duration-500 group-hover:scale-110"
                  width={180}
                  height={53}
                  src={logoSm}
                  loading="lazy"
                  alt={"Sznurkowe Królowe logo"}
                />
              </Link>
              <Hamburger isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
            </div>
            <div
              className={clsx(
                isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible",
                "lg:visible transition absolute inset-x-0 z-20 w-full px-6 py-4 duration-300 ease-in-out bg-neutral-900 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center"
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
                <Link
                  onClick={() => setIsMenuOpen(false)}
                  className={clsx(
                    "font-light whitespace-nowrap relative my-2 transition-colors duration-300 transform md:mx-4 md:my-0"
                  )}
                  href={"/koszyk"}
                >
                  <svg
                    className="block w-5 h-5 MuiSvgIcon-root"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      className="fill-primary-800"
                      d="M19 6h-2c0-2.76-2.24-5-5-5S7 3.24 7 6H5c-1.1 0-1.99.9-1.99 2L3 20c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-3c1.66 0 3 1.34 3 3H9c0-1.66 1.34-3 3-3zm0 10c-2.76 0-5-2.24-5-5h2c0 1.66 1.34 3 3 3s3-1.34 3-3h2c0 2.76-2.24 5-5 5z"
                    ></path>
                  </svg>
                  <div className="absolute -right-[10px] -bottom-[10px]">
                    <span className="font-medium text-primary-800 z-10 w-[18px] h-[18px] text-xs bg-white rounded-full flex-center-center">
                      {getTotalQuantity(items)}
                    </span>
                    {animationInstances.map((instance) => (
                      <span
                        key={instance.id}
                        className="absolute top-0 left-0 w-[18px] h-[18px] rounded-full bg-primary-500 -z-10 animate-ping"
                      ></span>
                    ))}
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
