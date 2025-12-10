import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import "./gsap-transitions.css";
import "./curtain-transitions.css";
import { Providers } from "./providers";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NIA Construction - Building Your Dreams Into Reality",
  description: "Premier construction services with excellence, innovation, and dedication to quality craftsmanship",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} antialiased`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
