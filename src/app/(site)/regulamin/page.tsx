import About from "@/components/layout/about/About";
import PageWrapper from "@/components/utils/PageWrapper";
import { COMPANY_INFO, WEBSITE_URL } from "@/utils/const";

export default function AboutPage() {
  return (
    <PageWrapper className="bg-light-ivory">
      <div className="container container--sm">
        <div className="py-section min-h-screen-footer">
          <div className="content-section">
            <h1>Regulamin sklepu</h1>
            <h2 className="flex flex-col items-center">
              <span>§1</span> Postanowienia ogólne
            </h2>
            <p>
              1. Niniejszy Regulamin określa zasady funkcjonowania Serwisu{" "}
              {WEBSITE_URL}, w szczególności:
            </p>
            <div className="pl-4">
              <p>1.1 definiuje określenia używane w Regulaminie,</p>
              <p>
                1.2 określa zasady zawierania Umów sprzedaży, składania zamówień
                i ich realizacji,
              </p>
              <p>
                1.3 określa zasady dokonywania płatności i realizacji dostawy,
              </p>
              <p>1.4 określa zasady postępowania przy odbiorze przesyłki,</p>
              <p>
                1.5 określa zasady składania reklamacji i oświadczenia o
                odstąpieniu od umowy, w tym określa wyjątki,
              </p>
              <p>1.6 określa wymagania techniczne,</p>
              <p>1.7 informuje o Polityce prywatności,</p>
              <p>1.8 informuje o majątkowych prawach autorskich,</p>
              <p>1.9 wskazuje pozasądowe sposoby rozstrzygania sporów.</p>
            </div>
            <p>
              2. Serwis internetowy działający w domenie {WEBSITE_URL}{" "}
              prowadzony jest przez:
            </p>
            <div className="space-y-0 text-center">
              <p style={{ marginBottom: 0 }}>
                <strong>Paulina Dziubańska</strong>
              </p>
              <p>
                {COMPANY_INFO.address.street},{" "}
                {COMPANY_INFO.address.postalCodeCity}
              </p>
              <p>
                NIP: {COMPANY_INFO.nip} REGON: {COMPANY_INFO.regon}
              </p>
              <p>
                prowadząca działalność nieewidencjonowaną na podstawie Ustawy z
                dnia 6 marca 2018 r. –
              </p>
              <p>Prawo przedsiębiorców ( Dz. U. 2018 poz. 646)</p>
              <p>
                e-mail: {COMPANY_INFO.email} telefon kontaktowy:
                {COMPANY_INFO.phone}
              </p>
            </div>
            <br />
            <p>
              3. Ceny podane w Sklepie są podane w polskich złotych i są cenami
              brutto. Cena podana przy danym Produkcie jest wiążąca dla Klienta
              w chwili składania Zamówienia. Ceny nie zawierają kosztów dostawy.
            </p>
            <p>
              4. Sprzedawca korzysta ze zwolnienia z VAT na podstawie art. 113
              Ustawy z dnia 11 marca 2004 r. o podatku od towarów i usług (Dz.
              U. 2004 nr 54 poz. 535).
            </p>
            <p>
              5. Informacje o Produktach podane na stronach internetowych
              Sklepu, w szczególności ich opisy i ceny, nie stanowią oferty w
              rozumieniu Kodeksu cywilnego, a są jedynie zaproszeniem do
              zawarcia umowy w rozumieniu art.71 Kodeksu cywilnego.
            </p>
            <p>
              6. Sprzedawca zastrzega sobie prawo do zmiany cen Produktów
              dostępnych w Sklepie internetowym, wprowadzania nowych Produktów,
              wycofywania Produktów, przeprowadzania promocji i dawania rabatów,
              a także ograniczonego w czasie oferowania Produktów 2
              nieodpłatnych. Powyższe zapisy nie mają wpływu na Zamówienia,
              które zostały złożone przed datą wejścia w życie którejkolwiek ze
              zmian.
            </p>
            <p>
              7. Czas trwania promocji jest ograniczony. Rabaty i promocje nie
              łączą się. Szczegółowe informacje zawarte są każdorazowo w
              warunkach lub regulaminie danej promocji.
            </p>
            <p>
              8.Warunkiem złożenia Zamówienia przez Klienta jest zapoznanie się
              z Regulaminem i akceptacja jego postanowień w czasie składania
              Zamówienia. Klient poprzez akceptację wyraża zgodę na wszystkie
              postanowienia i zobowiązuje się ich przestrzegać.
            </p>
            <p>
              9. Serwis nie udostępnia możliwości rejestracji Konta klienta.
            </p>
            <p>
              10. Niniejszy Regulamin jest udostępniany nieodpłatnie. Klient
              może utrwalić treść Regulaminu w dogodny dla siebie sposób, np.
              poprzez zapis na trwałym nośniku lub wydruk.
            </p>
            <p>
              11. Regulamin może odsyłać do odrębnych regulaminów oraz ogólnych
              warunków świadczenia usług poprzez właściciela Serwisu
              internetowego, które w takim wypadku stają się integralną częścią
              niniejszego Regulaminu.
            </p>
            <p>
              12. Zastrzega się, że Konsumentów oraz Przedsiębiorców na prawach
              konsumentów, nie dotyczą te postanowienia Regulaminu, które
              stanowiłyby niedozwolone postanowienia umowne w rozumieniu Kodeksu
              cywilnego (art.385(1) do 385(3)), czy naruszałyby bezwzględnie
              obowiązujące przepisy prawne dotyczące zawierania umów z udziałem
              Konsumenta oraz Przedsiębiorcy na prawach konsumentów, które
              zostałyby zawarte w rejestrze postanowień wzorców umownych
              uznanych za niedozwolone, prowadzonych przez Prezesa Urzędu
              Ochrony Konkurencji i Konsumentów.
            </p>
            <p>
              13. Zakazane jest dostarczanie przez Klienta treści o charakterze
              bezprawnym.
            </p>
            <p>
              14. Sprzedawca nie jest dostawcą hostingu w rozumieniu przepisów
              Rozporządzenia DSA (Akt o usługach cyfrowych). Nie prowadzi bloga,
              nie umożliwia pozostawiania opinii oraz nie przechowuje na Koncie
              klienta innych danych jak dane osobowe niezbędne do obsługi
              zamówień.
            </p>
            <p>
              15. Sprzedawca nie stosuje mechanizmu plasowania Produktów na
              liście wyników wyszukiwania.
            </p>
            <h2 className="flex flex-col items-center">
              <span>§2</span> Definicje
            </h2>
            <p>
              <strong>Dzień roboczy</strong> – Jeden dzień od poniedziałku do
              piątku z wyłączeniem dni ustawowo wolnych od pracy.
            </p>
            <p>
              <strong>Formularz zamówienia</strong> – Usługa elektroniczna,
              interaktywna, dostępna w Sklepie internetowym Sprzedawcy,
              umożliwiająca złożenie zamówienia.
            </p>
            <p>
              <strong>Kodeks cywilny</strong> – Kodeks cywilny Ustawa Kodeks
              cywilny z dnia 23 kwietnia 1964 r. ( Dz.U.1964.16.93 ze zm.).
            </p>
            <p>
              <strong>Produkt</strong> - Produkt Wszystkie produkty dostępne w
              Sklepie internetowym będące przedmiotem Umowy sprzedaży między
              Sprzedawcą a Klientem.
            </p>
            <p>
              <strong>
                Produkt wyprodukowany według specyfikacji Konsumenta lub
                Przedsiębiorcy na prawach konsumenta Oznacza produkt
                nieprefabrykowany, który wykonano na podstawie indywidualnego
                wyboru lub decyzji Konsumenta lub Przedsiębiorcy na prawach
                konsumenta.
              </strong>
              - Produkt wyprodukowany według specyfikacji Konsumenta lub
              Przedsiębiorcy na prawach konsumenta Oznacza produkt
              nieprefabrykowany, który wykonano na podstawie indywidualnego
              wyboru lub decyzji Konsumenta lub Przedsiębiorcy na prawach
              konsumenta.
            </p>
            <p>
              <strong>Regulamin</strong> - Niniejszy Regulamin.
            </p>
            <p>
              <strong>Serwis/ Sklep internetowy</strong> – Serwis/ Sklep
              internetowy Sklep internetowy dostępny pod adresem
              {WEBSITE_URL} za pośrednictwem, którego Klient może dokonać
              zamówienia Produktów lub Usług.
            </p>
            <p>
              <strong>Sprzedawca/ Usługodawca </strong> – Sprzedawca/
              Usługodawca {COMPANY_INFO.name}, {COMPANY_INFO.address.street},{" "}
              {COMPANY_INFO.address.postalCodeCity}, NIP: {COMPANY_INFO.nip},
              REGON: {COMPANY_INFO.regon}
            </p>
            <p>
              <strong>Umowa sprzedaży</strong> - Umowa sprzedaży Umowa sprzedaży
              Produktu zawarta między Klientem a Sprzedawcą za pośrednictwem
              Sklepu internetowego.
            </p>
            <p>
              <strong>Usługa elektroniczna</strong> – Usługa elektroniczna
              Usługa świadczona drogą elektroniczną przez Usługodawcę na rzecz
              Usługobiorcy za pośrednictwem Serwisu internetowego.
            </p>

            <p>
              <strong>Zamówienie</strong> – Oświadczenie woli Klienta, składane
              za pomocą Formularza zamówienia, zmierzające bezpośrednio do
              zawarcia Umowy sprzedaży Produktu z Sprzedawcą.
            </p>

            <p>
              <strong>Polityka prywatności </strong> – Dokument, w którym
              opisane są cele i zasady przetwarzania danych, w tym prawa osób,
              których dane dotyczą.
            </p>

            <p>
              <strong>Klient/ Usługobiorca</strong> – Klient/ Usługobiorca
              Konsument, Przedsiębiorca na prawach konsumenta, Przedsiębiorca.
            </p>

            <p>
              <strong>Konsument</strong> – Zgodnie z definicją zawartą w art.
              22(1) Kodeksu cywilnego.
            </p>

            <p>
              <strong>Przedsiębiorca</strong> – Przedsiębiorca Zgodnie z
              definicją zawartą w art.43(1) Kodeksu cywilnego.
            </p>

            <p>
              <strong>Przedsiębiorca na prawach konsumenta</strong> – Osoba
              fizyczna prowadząca jednoosobową działalność gospodarczą,
              posiadająca wpis do Centralnej Ewidencji i Informacji o
              Działalności Gospodarczej, zawierająca umowę bezpośrednio związaną
              z jej działalnością gospodarczą, ale nieposiadającą dla niej
              charakteru zawodowego, wynikającego z przedmiotu wykonywanej
              działalności gospodarczej, weryfikowanego na podstawie przepisów o
              Centralnej Ewidencji i Informacji o Działalności Gospodarczej.
              Przy czym dotyczy to tylko umów zawieranych na odległość oraz poza
              lokalem przedsiębiorstwa.
            </p>

            <h2 className="flex flex-col items-center">
              <span>§3</span> INFORMACJE DOTYCZĄCE PRODUKTÓW ORAZ ICH ZAMAWIANIA
            </h2>
            <p>
              1. Sklep {WEBSITE_URL} prowadzi sprzedaż Produktów za
              pośrednictwem sieci Internet.
            </p>
            <p>
              2. Produkty oferowane w Sklepie są nowe, zgodne z umową i zostały
              legalnie wprowadzone na rynek polski.
            </p>
            <p>
              3. Informacje znajdujące się na stronach internetowych Sklepu nie
              stanowią oferty w rozumieniu przepisów prawa. Klient, składając
              Zamówienie, składa ofertę kupna określonego Produktu na warunkach
              podanych w jego opisie.
            </p>
            <p>
              4. Cena Produktu uwidoczniona na stronie internetowej Sklepu
              podana jest w złotych polskich (PLN) i zawiera wszystkie
              składniki. Cena nie zawiera kosztów dostawy.
            </p>
            <p>
              5. Zamówienia można składać poprzez witrynę internetową za pomocą
              Formularza Zamówień (Sklep www……………….pl) – 24 godziny na dobę
              przez cały rok.
            </p>
            <p>
              6. Warunkiem złożenia Zamówienia w Sklepie przez Klienta jest
              zapoznanie się z Regulaminem i akceptacja jego postanowień w
              czasie składania Zamówienia.
            </p>
            <h2 className="flex flex-col items-center">
              <span>§4</span> ZAWARCIE UMOWY SPRZEDAŻY
            </h2>
            <p>
              1. Do zawarcia Umowy Sprzedaży, niezbędne jest wcześniejsze
              złożenie przez Klienta Zamówienia udostępnionym przez Sprzedawcę
              sposobem, zgodnie z § 3 pkt 5 oraz 6 Regulaminu.
            </p>
            <p>
              2. Po złożeniu Zamówienia Sprzedawca niezwłocznie potwierdza jego
              otrzymanie.
            </p>
            <p>
              3. Potwierdzenie przyjęcia Zamówienia, o którym mowa w pkt 2
              niniejszego paragrafu powoduje związanie Klienta jego Zamówieniem.
              Potwierdzenie otrzymania Zamówienia następuje poprzez przesłanie
              wiadomości e-mail.
            </p>
            <p>4. Potwierdzenie otrzymania Zamówienia zawiera:</p>
            <ol>
              <li>
                a. potwierdzenie wszystkich istotnych elementów Zamówienia,
              </li>
              <li>b. formularz odstąpienia od umowy,</li>
              <li>
                c. niniejszy Regulamin zawierający pouczenie o prawie do
                odstąpienia od umowy.
              </li>
            </ol>
            <p>
              5. Z chwilą otrzymania przez Klienta wiadomości e-mail, o której
              mowa w pkt 4 niniejszego paragrafu, zostaje zawarta Umowa
              Sprzedaży między Klientem, a Sprzedawcą.
            </p>
            <p>
              6. Każda Umowa Sprzedaży będzie potwierdzana dowodem zakupu, który
              będzie dołączany do Produktu.
            </p>
            <h2 className="flex flex-col items-center">
              <span>§5</span> SPOSOBY PŁATNOŚCI
            </h2>
            <p>1. Sprzedawca udostępnia następujące sposoby płatności:</p>
            <ol>
              <li>
                a. płatność przelewem tradycyjnym na rachunek bankowy
                Sprzedawcy,
              </li>

              <li>
                b. płatność za pośrednictwem elektronicznego systemu płatności.
              </li>
            </ol>
            <p>
              2. W przypadku płatności przelewem tradycyjnym, wpłaty należy
              dokonać na rachunek bankowy numer:
              ……..………………………………………………………………………………………………………. (Bank ……..… S.A.)
              ……………………………………………………………………………………………………………………………………………………. W tytule
              przelewu należy wpisać „Zamówienie nr …”.
            </p>
            <p>
              3. W przypadku płatności za pośrednictwem elektronicznego systemu
              płatności Klient dokonuje zapłaty przed rozpoczęciem realizacji
              Zamówienia. Elektroniczny system płatności umożliwia dokonanie
              płatności za pomocą karty kredytowej lub szybkiego przelewu z
              wybranych polskich banków.
            </p>
            <p>
              4. Klient zobowiązany jest do dokonania zapłaty ceny z tytułu
              Umowy Sprzedaży w terminie ……. dni roboczych od dnia jej zawarcia,
              chyba że Umowa Sprzedaży stanowi inaczej.
            </p>
            <p>5. Produkt zostanie wysłany dopiero po jego opłaceniu.</p>
            <h2 className="flex flex-col items-center">
              <span>§6</span> KOSZT, TERMIN I SPOSOBY DOSTAWY PRODUKTU
            </h2>
            <p>
              1. Koszty dostawy Produktu, które pokrywa Klient, są ustalane w
              trakcie procesu składania Zamówienia.
            </p>
            <p>
              2. Na termin dostawy Produktu składa się czas kompletowania
              Produktu oraz czas dostawy Produktu przez przewoźnika:
            </p>
            <ol>
              <li>
                czas kompletowania Produktów wynosi …………….. dni roboczych,
              </li>
              <li>
                dostawa Produktów stanowiących rzeczy ruchome przez przewoźnika
                następuje w terminie przez niego deklarowanym tj. ……………….. dni
                roboczych od momentu nadania przesyłki (dostawa następuje
                wyłącznie w dni robocze z wyłączeniem sobót, niedziel i świąt).
              </li>
            </ol>
            <p>
              3. Zakupione w Sklepie Produkty są wysyłane wyłącznie na terenie
              Polski za pośrednictwem Poczty Polskiej lub firmy kurierskiej.
            </p>
            <h2 className="flex flex-col items-center">
              <span>§7</span> REKLAMACJA PRODUKTU
            </h2>
            <p>
              <strong>
                Reklamacja z tytułu braku zgodności Produktu z umową.
              </strong>
            </p>
            <p>
              1. Podstawa i zakres odpowiedzialności Sprzedawcy wobec Klienta
              będącego Konsumentem z tytułu braku zgodności Produktu z umową są
              określone w ustawie o prawach konsumenta z dnia z dnia 30 maja
              2014 r.,
            </p>
            <p>
              2. podstawa i zakres odpowiedzialności Sprzedawcy wobec Klienta
              będącego Przedsiębiorcą, z tytułu rękojmi są określone w ustawie
              Kodeks cywilny z dnia 23 kwietnia 1964 r.,
            </p>
            <p>
              3. Sprzedawca jest odpowiedzialny wobec Klienta będącego
              Konsumentem za brak zgodności Produktu z umową istniejący w chwili
              dostarczenia Produktu i ujawniony w ciągu 2 lat od tej chwili,
              chyba że termin przydatności Produktu określony przez Sprzedawcę
              lub osoby działające w jego imieniu jest dłuższy,
            </p>
            <p>
              4. zawiadomienia o braku zgodności Produktu z umową oraz
              zgłoszenie odpowiedniego żądania można dokonać za pośrednictwem
              poczty elektronicznej na adres: …………….. lub pisemnie na adres:
              …………………………..
            </p>
            <p>
              5. w powyższej wiadomości w formie pisemnej lub elektronicznej
              należy podać jak najwięcej informacji i okoliczności dotyczących
              przedmiotu reklamacji, w szczególności rodzaj i datę wystąpienia
              nieprawidłowości oraz dane kontaktowe. Podane informacje znacznie
              ułatwią i przyspieszą rozpatrzenie reklamacji przez Sprzedawcę,
            </p>
            <p>
              6. dla oceny nieprawidłowości i niezgodności Produktu z umową,
              Konsument ma obowiązek udostępnić Produkt Sprzedawcy, a Sprzedawca
              zobowiązany jest do odebrania go na swój koszt,
            </p>
            <p>
              7. Sprzedawca ustosunkuje się do żądania Klienta niezwłocznie, nie
              później niż w terminie 14 dni od momentu zgłoszenia reklamacji,
            </p>
            <p>
              8. w przypadku reklamacji Klienta będącego Konsumentem –
              nierozpatrzenie reklamacji w terminie 14 dni od jej zgłoszenia
              jest jednoznaczne z jej uwzględnieniem,
            </p>
            <p>
              9. w związku z uzasadnioną reklamacją Klienta będącego Konsumentem
              Sprzedawca odpowiednio:
            </p>
            <p>
              10. pokrywa koszty naprawy lub wymiany oraz ponownego dostarczenia
              Produktu do Klienta,
            </p>
            <p>
              11. obniża cenę Produktu (obniżona cena musi pozostawać w
              proporcji ceny towaru zgodnego z umową do towaru niezgodnego z
              umową) i zwraca Konsumentowi wartość obniżonej ceny najpóźniej w
              terminie 14 dni od otrzymania oświadczenia o obniżeniu ceny od
              Konsumenta,
            </p>
            <p>
              12. w przypadku odstąpienia od umowy przez Konsumenta – Sprzedawca
              zwraca mu cenę Produktu najpóźniej w terminie 14 dni od dnia
              otrzymania zwracanego towaru lub dowodu jego odesłania. W razie
              odstąpienia od umowy, Konsument zobowiązany jest niezwłocznie
              zwrócić towar do Sprzedawcy na koszt Sprzedawcy,
            </p>
            <p>
              13. odpowiedź na reklamację jest przekazywana na papierze lub
              innym trwałym nośniku np. wiadomość mailowa lub SMS.
            </p>
            <h2 className="flex flex-col items-center">
              <span>§8</span> PRAWO ODSTĄPIENIA OD UMOWY
            </h2>
            <p>
              1. Z zastrzeżeniem pkt 10 niniejszego paragrafu, Klient będący
              jednocześnie Konsumentem, który zawarł umowę na odległość, może od
              niej odstąpić bez podania przyczyn, składając stosowne
              oświadczenie w terminie 14 dni.
            </p>
            <p>
              2. W razie odstąpienia od umowy, Umowa Sprzedaży jest uważana za
              niezawartą, a Konsument ma obowiązek zwrócić Produkt Sprzedawcy
              lub przekazać go osobie upoważnionej przez Sprzedawcę do odbioru
              niezwłocznie, jednak nie później niż 14 dni od dnia, w którym
              odstąpił od umowy, chyba że Sprzedawca zaproponował, że sam
              odbierze Produkt. Do zachowania terminu wystarczy odesłanie
              Produktu przed jego upływem.
            </p>
            <p>
              3. W przypadku odstąpienia od Umowy Sprzedaży należy dokonać
              zwrotu Produktu na adres: …………………………………………………………………………………………
            </p>
            <p>
              4. Konsument ponosi odpowiedzialność za zmniejszenie wartości
              Produktu będące wynikiem korzystania z niego w sposób wykraczający
              poza konieczny do stwierdzenia charakteru, cech i funkcjonowania
              Produktu, chyba że Sprzedawca nie poinformował Konsumenta lub
              podmiotu, o którym mowa w § 10 o sposobie i terminie wykonania
              prawa odstąpienia od umowy oraz nie udostępnił mu wzoru formularza
              odstąpienia od umowy. W celu stwierdzenia charakteru, cech i
              funkcjonowania Produktów Konsument powinien obchodzić się z
              Produktami i sprawdzać je tylko w taki sam sposób, w jaki mógłby
              to zrobić w sklepie stacjonarnym.
            </p>
            <p>
              5. Z zastrzeżeniem pkt 6 oraz 8 niniejszego paragrafu, Sprzedawca
              dokona zwrotu wartości Produktu wraz z kosztami jego dostawy przy
              użyciu takiego samego sposobu zapłaty, jakiego użył Konsument,
              chyba że Konsument wyraźnie zgodził się na inny sposób zwrotu,
              który nie wiąże się dla niego z żadnymi kosztami. Z zastrzeżeniem
              pkt 7 niniejszego paragrafu, zwrot nastąpi niezwłocznie, a
              najpóźniej w terminie 14 dni od momentu otrzymania przez
              Sprzedawcę oświadczenia o odstąpieniu od Umowy Sprzedaży.
            </p>
            <p>
              6. Jeżeli Konsument wybrał sposób dostawy Produktu inny niż
              najtańszy zwykły sposób dostarczenia oferowany przez Sklep,
              Sprzedawca nie jest zobowiązany do zwrotu mu, poniesionych przez
              niego dodatkowych kosztów.
            </p>
            <p>
              7. Jeżeli Sprzedawca nie zaproponował, że sam odbierze Produkt od
              Konsumenta może wstrzymać się ze zwrotem płatności otrzymanych od
              Konsumenta do chwili otrzymania rzeczy z powrotem lub dostarczenia
              dowodu jej odesłania, w zależności od tego, które zdarzenie
              nastąpi wcześniej.
            </p>
            <p>
              8. Konsument odstępujący od Umowy Sprzedaży, zgodnie z pkt 1
              niniejszego paragrafu, ponosi jedynie koszty odesłania Produktu do
              Sprzedawcy.
            </p>
            <p>
              9. Termin czternastodniowy, w którym Konsument może odstąpić od
              umowy, liczy się dla umowy, w wykonaniu której Sprzedawca wydaje
              Produkt będąc zobowiązanym do przeniesienia jego własności - od
              dnia, w którym Konsument (lub wskazana przez niego osoba trzecia
              inna niż przewoźnik) objął Produkt w posiadanie.
            </p>
            <p>
              10. Prawo odstąpienia od umowy zawartej na odległość nie
              przysługuje Konsumentowi w wypadku Umowy Sprzedaży m.in., w której
              przedmiotem świadczenia jest towar nieprefabrykowany,
              wyprodukowany według specyfikacji Konsumenta lub służący
              zaspokojeniu jego zindywidualizowanych potrzeb.
            </p>
            <p>
              11. Prawo odstąpienia od Umowy Sprzedaży przysługuje zarówno
              Sprzedawcy, jak i Klientowi, w przypadku niewykonania przez drugą
              stronę umowy swojego zobowiązania w terminie ściśle określonym.
            </p>
            <h2 className="flex flex-col items-center">
              <span>§9</span> RODZAJ I ZAKRES USŁUG ELEKTRONICZNYCH
            </h2>
            <p>
              1. Usługodawca umożliwia za pośrednictwem Sklepu korzystanie z
              Usługi Elektronicznej jaką jest zawieranie Umów Sprzedaży
              Produktu.
            </p>
            <p>
              2. Świadczenie Usługi Elektronicznej na rzecz Usługobiorców w
              Sklepie odbywa się na warunkach określonych w Regulaminie.
            </p>
            <p>
              3. Usługodawca ma prawo do zamieszczania na stronie internetowej
              Sklepu treści reklamowych. Treści te, stanowią integralną część
              Sklepu i prezentowanych w nim materiałów.
            </p>
            <h2 className="flex flex-col items-center">
              <span>§10</span> WARUNKI ŚWIADCZENIA I ZAWIERANIA UMÓW O
              ŚWIADCZENIE USŁUG ELEKTRONICZNYCH
            </h2>
            <p>
              1. Świadczenie Usługi Elektronicznej określonej w § 9 pkt 1
              Regulaminu przez Usługodawcę jest nieodpłatne.
            </p>
            <p>
              2. Umowa o świadczenie Usługi Elektronicznej polegającej na
              umożliwieniu złożenia Zamówienia w Sklepie zawierana jest na czas
              oznaczony i ulega rozwiązaniu z chwilą złożenia Zamówienia albo
              zaprzestania jego składania przez Usługobiorcę.
            </p>
            <p>
              3. Wymagania techniczne niezbędne do współpracy z systemem
              teleinformatycznym, którym posługuje się Usługodawca:
            </p>
            <ol>
              <li>
                a. komputer (lub urządzenie mobilne) z dostępem do Internetu,
                dostęp do
              </li>
              <li>
                b. poczty elektronicznej, przeglądarka internetowa, włączenie w
              </li>
              <li>c. przeglądarce internetowej Cookies oraz Javascript.</li>
            </ol>
            <p>
              4. Usługobiorca zobowiązany jest do korzystania ze Sklepu w sposób
              zgodny z prawem i dobrymi obyczajami mając na uwadze poszanowanie
              dóbr osobistych i praw własności intelektualnej osób trzecich.
            </p>
            <p>
              5. Usługobiorca zobowiązany jest do wprowadzania danych zgodnych
              ze stanem faktycznym.
            </p>
            <ol>
              <li>
                1. Usługobiorcę obowiązuje zakaz dostarczania treści o
                charakterze bezprawnym.
              </li>
            </ol>
            <h2 className="flex flex-col items-center">
              <span>§11</span> REKLAMACJE ZWIĄZANE ZE ŚWIADCZENIEM USŁUG
              ELEKTRONICZNYCH
            </h2>
            <p>
              1. Reklamacje związane ze świadczeniem Usługi Elektronicznej za
              pośrednictwem Sklepu Usługobiorca może składać za pośrednictwem
              poczty elektronicznej na adres: ……………………
            </p>
            <p>
              2. W powyższej wiadomości e-mail, należy podać jak najwięcej
              informacji i okoliczności dotyczących przedmiotu reklamacji, w
              szczególności rodzaj i datę wystąpienia nieprawidłowości oraz dane
              kontaktowe. Podane informacje znacznie ułatwią i przyspieszą
              rozpatrzenie reklamacji przez Usługodawcę.
            </p>
            <p>
              3. Rozpatrzenie reklamacji przez Usługodawcę następuje
              niezwłocznie, nie później niż w terminie 14 dni od momentu
              zgłoszenia.
            </p>
            <p>
              4. Odpowiedź Usługodawcy w sprawie reklamacji jest wysyłana na
              adres e-mail Usługobiorcy podany w zgłoszeniu reklamacyjnym lub w
              inny podany przez Usługobiorcę sposób
            </p>
            <h2 className="flex flex-col items-center">
              <span>§12</span> POSTANOWIENIA KOŃCOWE
            </h2>
            <p>
              1. Umowy zawierane poprzez Sklep zawierane są zgodnie z prawem
              polskim.
            </p>
            <p>
              2. W przypadku niezgodności jakiejkolwiek części Regulaminu z
              obowiązującym prawem, w miejsce zakwestionowanego przepisu
              Regulaminu zastosowanie mają właściwe przepisy prawa polskiego.
            </p>
            <p>
              3. Wszelkie spory wynikłe z Umów Sprzedaży między Sklepem, a
              Konsumentami będą rozstrzygane w pierwszej kolejności na drodze
              negocjacji, z intencją polubownego zakończenia sporu, z
              uwzględnieniem ustawy o pozasądowym rozwiązywaniu sporów
              konsumenckich. Jeśli jednak nie byłoby to możliwe, lub też byłoby
              niesatysfakcjonujące dla którejkolwiek ze stron, spory będą
              rozstrzygane przez właściwy sąd powszechny, zgodnie z pkt 4
              niniejszego paragrafu.
            </p>
            <p>
              4. Ewentualne spory powstałe pomiędzy Usługodawcą, a Usługobiorcą
              (Klientem) będącym jednocześnie Konsumentem zostają poddane sądom
              właściwym zgodnie z przepisami kodeksu postępowania cywilnego z
              dnia 17 listopada 1964 r.
            </p>
            <p>
              5. Klient będący Konsumentem ma również prawo do skorzystania z
              pozasądowych sposobów rozstrzygania sporów w szczególności poprzez
              złożenie po zakończeniu postępowania reklamacyjnego wniosku o
              wszczęcie mediacji lub wniosku o rozpatrzenie sprawy przez sąd
              polubowny (wniosek można pobrać na stronie internetowej
              http://www.uokik.gov.pl/download.php?plik=6223). Wykaz Stałych
              Polubownych Sądów Konsumenckich działających przy Wojewódzkich
              Inspektoratach Inspekcji Handlowej dostępny jest na stronie
              internetowej: http://www.uokik.gov.pl/wazne_adresy.php#faq596.
              Konsument może skorzystać także z bezpłatnej pomocy powiatowego
              (miejskiego) rzecznika konsumentów lub organizacji społecznej, do
              której zadań statutowych należy ochrona konsumentów. Pozasądowe
              dochodzenie roszczeń po zakończeniu postępowania reklamacyjnego
              jest bezpłatne.
            </p>
            <p>
              6. Konsument w celu polubownego rozwiązania sporu może w
              szczególności złożyć skargę za pośrednictwem platformy
              internetowej ODR (Online Dispute Resolution), dostępnej pod
              adresem: http://ec.europa.eu/consumers/odr/.
            </p>
            <p>
              7. Dokument opracowany za pomocą automatycznego generatora
              dostępnego na stronie www.lexlab.pl/generator-regulaminu
            </p>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
