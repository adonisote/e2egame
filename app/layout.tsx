import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// const inter = Inter({ subsets: ["latin"] });
// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>{children}</body>
//     </html>
//   );
// }
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
    <html >
      <body className={`${comfortaa.className} antialiased bg-mobile bg-cover landscape:bg-white h-screen overflow-hidden`} >{children}</body>
    </html >

  );
}