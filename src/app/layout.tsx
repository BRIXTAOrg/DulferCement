import type { Metadata } from "next";
import { Outfit, Jost } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-wordmark",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-text",
  display: "swap",
});

export const metadata: Metadata = {
  title: "dulfer. cement | Building soon",
  description:
    "dulfer. cement: strong foundations, brighter tomorrows. Our website is being built.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${jost.variable}`}>
      <body>
        <div className="shell">
          <Header />
          <main className="main">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}