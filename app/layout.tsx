import type { Metadata } from "next";
import "./globals.css";

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
    <html>
      <body className={`${comfortaa.className} antialiased bg-mobile bg-cover landscape:bg-white h-screen overflow-hidden`}>
        <main className="h-full w-full">
          {children}
        </main>
      </body>
    </html>
  );
}
