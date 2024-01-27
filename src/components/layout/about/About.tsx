import Image from "next/image";
import Image1 from "@/public/about/about-1.jpg";
import Button from "@/components/ui/Button";
import Link from "next/link";
import ScrollAnimated from "../../utils/ScrollAnimated";
import HeadingLine from "@/components/ui/HeadingLine";

export default function About() {
  return (
    <>
      <section id="About" className="py-section min-h-screen-footer">
        <div className="container container--sm">
          <div className="flex flex-col items-center content-center justify-center gap-16 md:grid md:grid-cols-2">
            <div className="font-light text-neutral-800 sm:text-lg">
              <HeadingLine>O mnie</HeadingLine>
              <p className="mb-2 text-lg font-bold">
                Hej! Mam na imię Paulina.
              </p>
              <div className="space-y-4">
                <p>
                  Witaj na mojej stronie sznurkowych królowych. Znajdziesz tutaj
                  piękne torebki, plecaki i inne dodatki, jak opaski do włosów
                  oraz koszyki ze sznurka.
                </p>
                <p>
                  Moja pasja rozpoczęła się właśnie od koszyczków. Zachwycona
                  ilością splotów i kolorów chciałam stworzyć coś wyjątkowego.
                  Zaczęłam szydełkować i nie mogłam już przestać. 😊
                </p>
                <p>
                  Wszystkie rzeczy wykonuję ręcznie z wysokiej jakości przędzy
                  bawełnianej T-shirt yarn premium wyprodukowanej w Polsce.
                  Zamawiając produkty na stronie możesz je spersonalizować
                  poprzez wybór koloru sznurka lub galanterii metalowej
                  (łańcuszki, karabińczyki).
                </p>
                <p>
                  Stwórz wyjątkową rzecz dla siebie i dołącz do grona
                  sznurkowych królowych!
                </p>
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
            {/* <div className="relative w-full mt-4 rounded-lg lg:mt-10">
                <Image
                  className="relative z-10 object-cover w-full h-full rounded-custom"
                  width={284}
                  height={434}
                  src={
                    "https://images.unsplash.com/photo-1526318896980-cf78c088247c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  }
                  alt=""
                />
              </div> */}
          </div>
        </div>
      </section>
    </>
  );
}
