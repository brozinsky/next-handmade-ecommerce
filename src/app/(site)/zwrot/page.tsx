import About from "@/components/layout/about/About";
import DownloadLink from "@/components/ui/DownloadLink";
import PageWrapper from "@/components/utils/PageWrapper";
import { COMPANY_INFO } from "@/utils/const";
import Link from "next/link";
import { Download } from "react-feather";

export default function Return() {
  return (
    <PageWrapper className="bg-light-ivory">
      <div className="container container--sm">
        <div className="py-section min-h-screen-footer">
          <div className="content-section">
            <h1>Odstąpienie od umowy (Zwrot)</h1>

            <p>
              Zgodnie z art. 27 ust. 1 Ustawy o prawach konsumenta (Dz. U. 2014,
              poz. 827) Konsument lub Przedsiębiorca na prawach konsumenta,
              zawierając „umowę na odległość” – ma prawo odstąpić od umowy bez
              podania przyczyny – w terminie 14 dni kalendarzowych od daty
              objęcia w posiadanie produktu.
            </p>

            <h2>Jak dokonać zwrotu zakupionego produktu?</h2>

            <p>
              Aby dokonać zwrotu zakupionego produktu i otrzymać zwrot
              zapłaconej kwoty, poinformuj Sprzedawcę o swojej decyzji,
              składając oświadczenie o odstąpieniu od umowy. Masz na to 14 dni
              kalendarzowych od daty otrzymania przesyłki.
            </p>

            <h2>W jaki sposób poinformować Sprzedawcę o zwrocie?</h2>

            <p>
              Forma złożenia oświadczenia może być dowolna, ale najlepiej
              uczynić to na piśmie. Poniżej przedstawiamy dwie przykładowe
              możliwości poinformowania Sprzedawcy o zwrocie:
            </p>

            <p>
              Oświadczenie o odstąpieniu od umowy możesz przesłać na adres
              e-mail Sprzedawcy:{" "}
              <Link
                className="font-medium text-black truncate w-fit hover:underline hover:text-primary-500"
                href={`mailto:${COMPANY_INFO.email}`}
              >
                {COMPANY_INFO.email}
              </Link>{" "}
              . Sprzedawca potwierdzi otrzymanie Twojego oświadczenia. Od tego
              momentu masz 14 dni kalendarzowych na odesłanie produktu, którego
              dotyczy oświadczenie o odstąpieniu od umowy.
            </p>
            <p>
              Oświadczenie o odstąpieniu od umowy wraz z produktem oraz dowodem
              zakupu możesz odesłać na adres Sprzedawcy:
            </p>
            <p>
              {COMPANY_INFO.name}
              <br />
              {COMPANY_INFO.address.street}
              <br />
              {COMPANY_INFO.address.postalCodeCity}
            </p>

            <h2>Informacje dodatkowe:</h2>

            <p>
              Twoje prawo do odstąpienia od umowy zostało szczegółowo opisane w
              §10 Regulaminu sklepu.
            </p>
            <p>
              Odsyłane produkty odpowiednio zabezpiecz przed uszkodzeniami w
              czasie transportu.
            </p>
            <p>
              Do paczki włóż egzemplarz oświadczenia o odstąpieniu od umowy oraz
              dowód zakupu.
            </p>
            <p>
              Odpowiadasz za zmniejszenie wartości produktu wynikające z
              korzystania z niego w sposób inny niż było to konieczne do
              stwierdzenia charakteru, cech i funkcjonowania produktu.
            </p>
            <p>Nie przyjmujemy przesyłek za pobraniem.</p>
            <p>Zwrotu dokonujesz na własny koszt.</p>

            <h2>Wyjątki od prawa do odstąpienia od umowy</h2>

            <p>
              Zgodnie z art. 38 ust. 1 Ustawy o prawach konsumenta (Dz. U. 2014,
              poz. 827) prawo odstąpienia od umowy zawartej na odległość nie
              przysługuje konsumentowi w odniesieniu do umów:
            </p>

            <p>
              W której przedmiotem świadczenia jest produkt nieprefabrykowany,
              wyprodukowany według specyfikacji Konsumenta lub służący
              zaspokojeniu jego zindywidualizowanych potrzeb.
            </p>
            <p>
              W której przedmiotem świadczenia są produkty, które po
              dostarczeniu, ze względu na swój charakter, zostają nierozłącznie
              połączone z innymi rzeczami.
            </p>
            <p>
              Świadczenie usług, za które Konsument jest zobowiązany do zapłaty
              ceny, jeżeli Sprzedawca wykonał w pełni usługę za wyraźną i
              uprzednią zgodą Konsumenta, który został poinformowany przed
              rozpoczęciem świadczenia, że po spełnieniu świadczenia przez
              Sprzedawcę utraci prawo odstąpienia od umowy i przyjął to do
              wiadomości.
            </p>

            <div className="flex flex-col gap-2 mt-10">
              <DownloadLink href="">
                Wzór formularza reklamacji_2023_obniżenie ceny po
                naprawie/wymiana
              </DownloadLink>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
