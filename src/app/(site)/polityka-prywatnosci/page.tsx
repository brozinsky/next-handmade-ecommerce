import About from "@/components/layout/about/About";
import PageWrapper from "@/components/utils/PageWrapper";
import { COMPANY_INFO, WEBSITE_URL } from "@/utils/const";

export default function AboutPage() {
  return (
    <PageWrapper className="bg-light-ivory">
      <div className="container container--sm">
        <div className="py-section min-h-screen-footer">
          <div className="content-section">
            <h1>Polityka Prywatności Serwisu {WEBSITE_URL}</h1>
            <h2>1. Informacje ogólne</h2>
            <p>
              Niniejsza Polityka Prywatności określa zasady przetwarzania i
              ochrony danych osobowych przekazanych przez Użytkowników w związku
              z korzystaniem przez nich usług poprzez Serwis.
            </p>
            <h2>
              2. Administratorem danych osobowych zawartych w serwisie jest
            </h2>
            <p>
              {COMPANY_INFO.companyName} z siedzibą w{" "}
              {COMPANY_INFO.address.street}, {COMPANY_INFO.address.postalCodeCity} KRS
              {COMPANY_INFO.krs} NIP {COMPANY_INFO.nip} REGON
              {COMPANY_INFO.regon}
            </p>
            <h2>3. Bezpieczeństwo danych</h2>
            <p>
              W trosce o bezpieczeństwo powierzonych nam danych opracowaliśmy
              wewnętrzne procedury i zalecenia, które mają zapobiec
              udostępnieniu danych osobom nieupoważnionym. Kontrolujemy ich
              wykonywanie i stale sprawdzamy ich zgodność z odpowiednimi aktami
              prawnymi - ustawą o ochronie danych osobowych, ustawą o
              świadczeniu usług drogą elektroniczną, a także wszelkiego rodzaju
              aktach wykonawczych i aktach prawa wspólnotowego.
            </p>
            <h2>4. Podstawa przetwarzania danych</h2>
            <p>
              Dane Osobowe przetwarzane są na podstawie zgody wyrażanej przez
              Użytkownika oraz w przypadkach, w których przepisy prawa
              upoważniają Administratora do przetwarzania danych osobowych na
              podstawie przepisów prawa lub w celu realizacji zawartej pomiędzy
              stronami umowy.
            </p>
            <h2>5. Funkcje pozyskiwania informacji</h2>
            <p>
              Serwis realizuje funkcje pozyskiwania informacji o użytkownikach i
              ich zachowaniach w następujący sposób:
            </p>
            <ul>
              <li>
                a) poprzez dobrowolnie wprowadzone w formularzach informacje
              </li>
              <li>
                b) poprzez gromadzenie plików “cookies” [patrz polityka plików
                “cookies”].
              </li>
            </ul>
            <h2>6. Dobrowolność podania danych</h2>
            <p>
              Serwis zbiera informacje dobrowolnie podane przez użytkownika.
            </p>
            <h2>7. Cel przetwarzania danych</h2>
            <p>
              dane podane w formularzu są przetwarzane w celu wynikającym z
              funkcji konkretnego formularza np. w celu dokonania procesu
              obsługi kontaktu informacyjnego
            </p>
            <h2>8. Ochrona danych osobowych</h2>
            <p>
              Dane osobowe pozostawione w serwisie nie zostaną sprzedane ani
              udostępnione osobom trzecim, zgodnie z przepisami Ustawy o
              ochronie danych osobowych.
            </p>
            <h2>9. Prawo dostępu do danych</h2>
            <p>
              Do danych zawartych w formularzu przysługuje wgląd osobie
              fizycznej, która je tam umieściła. Osoba ta ma również praw do
              modyfikacji i zaprzestania przetwarzania swoich danych w dowolnym
              momencie.
            </p>
            <h2>10. Zmiany w polityce prywatności</h2>
            <p>
              Zastrzegamy sobie prawo do zmiany w polityce ochrony prywatności
              serwisu, na które może wpłynąć rozwój technologii internetowej,
              ewentualne zmiany prawa w zakresie ochrony danych osobowych oraz
              rozwój naszego serwisu internetowego. O wszelkich zmianach
              będziemy informować w sposób widoczny i zrozumiały.
            </p>
            <h2>11. Linki do innych stron</h2>
            <p>
              W Serwisie mogą pojawiać się linki do innych stron internetowych.
              Takie strony internetowe działają niezależnie od Serwisu i nie są
              w żaden sposób nadzorowane przez serwis …………... Strony te mogą
              posiadać własne polityki dotyczące prywatności oraz regulaminy, z
              którymi zalecamy się zapoznać.
            </p>
            <p>
              W razie wątpliwości co któregokolwiek z zapisów niniejszej
              polityki prywatności jesteśmy do dyspozycji - nasze dane znaleźć
              można w zakładce - KONTAKT.
            </p>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
