import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "Traditio Co. — Building for the Next Thousand Years",
    template: "%s — Traditio Co.",
  },
  description:
    "Traditio Co. exists to equip men of God to faithfully steward their faith, family, work, wealth, and influence for generations to come.",
  metadataBase: new URL("https://traditio.co"),
  openGraph: {
    title: "Traditio Co.",
    description: "Building for the next thousand years.",
    type: "website",
    siteName: "Traditio Co.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-parchment font-sans text-charcoal">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
