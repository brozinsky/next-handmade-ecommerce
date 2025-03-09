import About from "@/components/layout/about/About";
import DownloadLink from "@/components/ui/DownloadLink";
import PageWrapper from "@/components/utils/PageWrapper";
import { COMPANY_INFO } from "@/utils/const";
import { Download } from "lucide-react";
import Link from "next/link";

const downloadLinks = [
  {
    id: 0,
    name: "Obniżenie ceny po naprawie wymiana",
    fileName: "Obniżenie ceny po naprawie wymiana",
  },
  {
    id: 1,
    name: "Odstąpienie od umowy po naprawie wymianie",
    fileName: "Odstąpienie od umowy po naprawie wymianie",
  },
  {
    id: 2,
    name: "Reklamacja z tytułu niezgodności towaru z umową",
    fileName: "Reklamacja z tytułu niezgodności towaru z umową",
  },
];

export default function Complaints() {
  return (
    <PageWrapper className="bg-light-ivory">
      <div className="container container--sm">
        <div className="py-section min-h-screen-footer">
          <div className="content-section">
            <h1>Reklamacje</h1>
            <p>
              Jako konsument masz możliwość złożenia reklamacji z tytułu
              niezgodności produktu z umową.
            </p>

            <h2>
              Jak zgłosić reklamację z tytułu niezgodności produktu z umową?
            </h2>

            <p>
              W przypadku niezgodności produktu z zawartą umową, jako konsument
              masz prawo do złożenia reklamacji w oparciu o przepisy Ustawy o
              prawach konsumenta z dnia 30 maja 2014 r.
            </p>

            <p>
              Forma złożenia reklamacji jest dowolna, niemniej warto to zrobić
              pisemnie.
            </p>

            <p>
              Dla usprawnienia procedury reklamacyjnej Sprzedawca udostępnia:
            </p>

            <p>
              1. adres e-mail:{" "}
              <Link
                className="font-medium text-black truncate w-fit hover:underline hover:text-primary-500"
                href={`mailto:${COMPANY_INFO.email}`}
              >
                {COMPANY_INFO.email}
              </Link>{" "}
              na który możesz wysłać reklamację;
            </p>
            <p>
              2. adres Sprzedawcy: {COMPANY_INFO.name},{" "}
              {COMPANY_INFO.address.street},
              {COMPANY_INFO.address.postalCodeCity};
            </p>
            <p>
              3. telefon kontaktowy: <a href={`tel:${COMPANY_INFO.phone}`}></a>{" "}
              {COMPANY_INFO.phone};
            </p>

            <h2>Informacje dodatkowe:</h2>

            <p>
              Jeśli w ramach reklamacji odsyłasz produkt do Sprzedawcy,
              odpowiednio zabezpiecz go przed uszkodzeniami w czasie transportu.
              Do paczki włóż egzemplarz reklamacji oraz dowód zakupu.
            </p>

            <p>
              Twoje prawo do złożenia reklamacji z tytułu niezgodności produktu
              z umową zostało szczegółowo opisane w §9 Regulaminu sklepu.
            </p>

            <p>Pamiętaj, że nie przyjmujemy przesyłek za pobraniem.</p>

            <div className="flex flex-col gap-2 mt-10">
              {downloadLinks.map(({ name, id }) => {
                return (
                  <DownloadLink key={id} href={`/pdf/${name}.pdf`}>
                    {name}
                  </DownloadLink>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
