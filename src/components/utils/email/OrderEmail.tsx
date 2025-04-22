import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Text,
  Heading,
  Section,
} from "@react-email/components";

type Product = {
  name: string;
  price: number;
  quantity: number;
};

type OrderEmailProps = {
  name: string;
  secondName: string;
  email: string;
  phone: string;
  address: string;
  postalCode: string;
  city: string;
  shipping: string;
  shippingPrice: string;
  products: Product[];
};

export default function OrderEmail({
  name,
  secondName,
  email,
  phone,
  address,
  postalCode,
  city,
  shipping,
  shippingPrice,
  products,
}: OrderEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Nowe zamówienie od {name}</Preview>
      <Body
        style={{
          fontFamily: "sans-serif",
          backgroundColor: "#f6f6f6",
          padding: "20px",
        }}
      >
        <Container
          style={{
            backgroundColor: "#fff",
            padding: "20px",
            borderRadius: "8px",
          }}
        >
          <Heading as="h2">Nowe zamówienie 🎉</Heading>
          <Section>
            <Text>
              <strong>Imię i nazwisko:</strong> {name} {secondName}
            </Text>
            <Text>
              <strong>Email:</strong> {email}
            </Text>
            <Text>
              <strong>Telefon:</strong> {phone}
            </Text>
            <Text>
              <strong>Adres:</strong> {address}, {postalCode} {city}
            </Text>
            <Text>
              <strong>Dostawa:</strong> {shipping} ({Number(shippingPrice).toFixed(2)}{" "}
              PLN)
            </Text>
          </Section>

          <Section>
            <Heading as="h3">Produkty:</Heading>
            <ul>
              {products.map((p, index) => (
                <li key={index}>
                  {p.name} — {p.quantity} × {p.price.toFixed(2)} PLN
                </li>
              ))}
            </ul>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
