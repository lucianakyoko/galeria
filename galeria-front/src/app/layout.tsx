import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "../components/Navbar";

const poppinsFont = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-poppins',
})


export const metadata: Metadata = {
  title: "gale.ria",
  description: "Galeria de imagens simples com upload",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${poppinsFont.variable} antialiased px-4 md:px-8 xl:px-[72px] 2xl:px-[152px] 2xl:w-[1440px] 2xl:m-auto`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
