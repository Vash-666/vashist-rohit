import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vash — Pattern Seer. System Architect.",
  description: "I see things before they're built. AI systems. Web3 protocols. Federal modernization. A decade reading the noise.",
  keywords: ["AI", "Web3", "Blockchain", "Ethereum", "Federal AI", "Tokenization", "Pattern Recognition", "System Architecture"],
  authors: [{ name: "Rohit Vashist" }],
  openGraph: {
    title: "Vash — Pattern Seer. System Architect.",
    description: "I see things before they're built. AI systems. Web3 protocols.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="antialiased">
        {children}
        <div className="noise-overlay" aria-hidden="true" />
      </body>
    </html>
  );
}
