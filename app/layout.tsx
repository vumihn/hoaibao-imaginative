import { Noto_Serif } from "next/font/google";
import Lausanne from "next/font/local";
import "./globals.css";

const noto = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
});

const laus = Lausanne({
  src: [
    {
      path: "./../public/font/TWKLausanne-600.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./../public/font/TWKLausanne-400.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./../public/font/TWKLausanne-200Italic.woff",
      weight: "200",
      style: "italic", 
    },
  ],
  variable: "--font-laus",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${noto.variable} ${laus.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
