import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "../styles/globals.css";

const roboto = Roboto({
  weight: '300',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Hercules Machado - Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="PT-BR">
      <body className={`${roboto.className}`}>
        {children}
      </body>
    </html>
  );
}
