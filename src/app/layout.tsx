import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "DULFER Cement | Built for what comes next",
  description: "Discover DULFER cement. Get in touch for product and dealer enquiries.",
  icons: { icon: "/dulferlogo.ico", shortcut: "/dulferlogo.ico" },
  openGraph: {
    title: "DULFER Cement",
    description: "A considered approach to cement for everyday construction.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="site-shell">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
