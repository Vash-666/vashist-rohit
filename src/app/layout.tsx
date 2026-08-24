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
  title: "Vash — Builder. Seeker.",
  description: "I built things in the future. AI systems. Web3 protocols. Startups in emerging tech. A decade in pattern recognition.",
  keywords: ["AI", "Web3", "Blockchain", "Ethereum", "Federal AI", "Tokenization", "Builder", "Seeker"],
  authors: [{ name: "Rohit Vashist" }],
  openGraph: {
    title: "Vash — Builder. Seeker.",
    description: "I built things in the future. AI systems. Web3 protocols.",
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
