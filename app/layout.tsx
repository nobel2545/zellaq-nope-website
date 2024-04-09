import type { Metadata } from "next";
import { Koulen , IBM_Plex_Sans_Thai } from "next/font/google";
import "./globals.css";

const koulen = Koulen({ subsets: ["latin"] , weight: ["400"] });
const ibm = IBM_Plex_Sans_Thai({ subsets: ["thai"] , weight: ["400","700"] });

export const metadata: Metadata = {
  title: "ห้องฝ่ายบุคคลของโสมนัส / ตู้กาชา",
  description: "มาทำความรู้จักกับเพื่อนร่วมงานในสำนักงานกันเถอะ!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ibm.className}>{children}</body>
      <body className={koulen.className}>{children}</body>
    </html>
  );
}
