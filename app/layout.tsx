import type { Metadata } from "next";
import "./globals.css";
import Image from "next/image";
import backgoundImg from '@/public/Background_withFade.png'


export const metadata: Metadata = {
  title: "E2E Game",
  description: "Discover what it takes to be in the E2E Solutions Community",
};

import { comfortaa } from "@/app/ui/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${comfortaa.className} antialiased h-screen overflow-hidden`}>
        <div className="relative w-full h-full">
          <Image
            src={backgoundImg}
            alt="Background with Fade"
            fill
            style={{ objectFit: "cover" }}
            quality={100}
            priority
          />
          <main className=" absolute h-full w-full z-10 inset-0">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
