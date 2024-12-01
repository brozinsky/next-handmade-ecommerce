import PageWrapper from "@/components/utils/PageWrapper";
import NotFoundSVG from "@/public/404.svg";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Link from "next/link";

export default function NotFound() {
  return (
    <PageWrapper className="overflow-x-hidden">
      <section className="py-section h-screen-footer">
        <div className="container justify-center container--sm flex-items-center">
          <Image
            className="w-full h-full max-w-sm mx-auto opacity-80"
            src={NotFoundSVG}
            priority
            alt="404 nie znaleziono"
          />
          <div className="mx-auto">
            <h1 className="mt-10 mb-4 text-3xl font-medium text-center">
              Ups! Nie znaleziono strony.
            </h1>
            <p className="mb-6 text-lg text-center font-regular">
              Niestety, nie możemy znaleźć strony, której szukasz.
            </p>
            <Link className="block mx-auto w-fit" href="/">
              <Button variant="primary" shape="rectangle">
                Wróć do strony głównej
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
