import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import "./gsap-transitions.css";
import "./curtain-transitions.css";
import Navbar from '@/components/Navbar';
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
    <html lang="en" suppressHydrationWarning={true}>
      <body
        suppressHydrationWarning={true}
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
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (sessionStorage.getItem('loaderShown') === 'true') {
                  var style = document.createElement('style');
                  style.id = 'loader-override-style';
                  style.innerHTML = '#loader-overlay { display: none !important; } #main-content { opacity: 1 !important; }';
                  document.head.appendChild(style);
                }
              } catch (e) {}
            `,
          }}
        />
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
