import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import{ ClerkProvider } from "@clerk/nextjs" ;

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Converse NoteAI",
  description: "The intelligent notes app ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
    </ClerkProvider>
  );
}
