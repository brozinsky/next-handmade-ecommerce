import * as React from "react";
import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Text,
  Hr,
  Section,
} from "@react-email/components";

type Product = {
  name: string;
  price: number;
  quantity: number;
};

type ReceiptEmailProps = {
  email: string;
  products: Product[];
  phone?: string;
  name: string;
  secondName: string;
  address: string;
  postalCode: string;
  city: string;
};

export default function ReceiptEmail({
  email,
  products,
  secondName,
  name,
  address,
  postalCode,
  city,
  phone,
}: ReceiptEmailProps) {
  const total = products.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );

  return (
    <Html>
      <Head />
      <Preview>Potwierdzenie zakupu - Twoje zamówienie</Preview>
      <Body
        style={{
          fontFamily: "sans-serif",
          background: "#f9f9f9",
          padding: "20px",
        }}
      >
        <Container
          style={{ background: "#fff", padding: "32px", borderRadius: "8px" }}
        >
          <Text
            style={{
              fontSize: "20px",
              marginBottom: "16px",
              fontWeight: "bold",
            }}
          >
            Cześć {name},
          </Text>
          <Text>Mamy to!</Text>
          <Text>
            Twoje zamówienie już do nas trafiło. Niedługo przygotujemy wszystko
            z największą starannością.
          </Text>
          <Text>Dziękujemy za wybranie naszej marki.</Text>

          <Hr style={{ margin: "24px 0" }} />

          <Section>
            {products.map((product, idx) => (
              <div key={idx} style={{ marginBottom: "8px" }}>
                <Text>
                  {product.name} × {product.quantity} –{" "}
                  <strong>{product.price * product.quantity} zł</strong>
                </Text>
              </div>
            ))}
          </Section>

          <Hr style={{ margin: "24px 0" }} />

          <Text style={{ fontSize: "16px" }}>
            <strong>Razem do zapłaty: {total} zł</strong>
          </Text>

          <Hr style={{ margin: "24px 0" }} />

          <Text
            style={{ fontSize: "16px", fontWeight: "bold", marginTop: "24px" }}
          >
            Adres rozliczeniowy
          </Text>
          <Text>
            {name} {secondName}
            <br />
            {address}
            <br />
            {postalCode} {city}
            <br />
            {phone && (
              <>
                Tel: {phone}
                <br />
              </>
            )}
            Email: {email}
          </Text>

          <Hr style={{ margin: "24px 0" }} />

          <Text>W razie pytań, śmiało napisz do nas na {email}.</Text>
          <Text style={{ fontSize: "14px", color: "#888" }}>
            Ten e-mail został wygenerowany automatycznie.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}
