import Header from "@/components/layout/navigation/Header";
import "../../styles/main.scss";
import Footer from "@/components/layout/navigation/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import ReactQueryProvider from "@/utils/provider";

export const metadata = {
  title: "Sznurkowe Królowe",
  description:
    "Odkryj świat ręcznie robionych torebek, plecaków, opasek do włosów i koszyków ze sznurka. Każdy produkt tworzony jest z pasją i starannością. Personalizuj swoje zamówienia i dołącz do grona Sznurkowych Królowych!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative h-full min-h-screen">
        <ReactQueryProvider>
          <ToastContainer />
          <Header />
          {children}
          <Footer />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
