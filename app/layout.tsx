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

// Add Ultra font for hero headlines
const ultra = {
  variable: "--font-ultra",
  className: "ultra-regular",
};

export const metadata: Metadata = {
  title: "NIA Construction - Building Your Dreams Into Reality",
  description:
    "Premier construction services with excellence, innovation, and dedication to quality craftsmanship",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${roboto.variable}
          ${ultra.variable}
          min-h-screen
          antialiased
          bg-gradient-to-b
          from-white
          via-sky-50
          to-blue-100
          text-slate-900
        `}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
