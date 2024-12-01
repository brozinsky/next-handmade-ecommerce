import Image from "next/image";
import React from "react";
import Button from "@/components/ui/Button";
import EmailSentSVG from "@/public/email-sent.svg";
import Link from "next/link";

export default async function ThankYou() {
  return (
    <>
      <section id="ThankYou" className="flex justify-center py-section min-h-screen-footer">
        <div className="container container--sm">
          <div className="flex flex-col items-center justify-center h-full">
            <Image
              className="mb-4 max-w-56 opacity-80"
              src={EmailSentSVG}
              width={200}
              height={200}
              priority
              alt="Brak produktów w koszyku"
            />
            <div className="max-w-md text-center">
              <h1 className="mb-4 text-center heading-second text-primary-800">
                Dziękujemy za zamówienie!
              </h1>
              <div className="mb-6 text-neutral-500">
                Wkrótce powinieneś otrzymać wiadomość e-mail z potwierdzeniem
                zakupu.
              </div>
            </div>
            <Link href="/sklep">
              <Button variant="primary" shape="rectangle">
                Wróć do sklepu
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
