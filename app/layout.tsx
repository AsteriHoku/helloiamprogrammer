import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });
const sauceTwo = localFont({
    src: "./fonts/OpenSauceTwo-Regular.ttf",
    variable: "--font-sauce-two-regular",
    weight: "100 900",
});

export const metadata: Metadata = {
  title: "Hello I am Programmer",
  description: "Beep Boop Beep",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sauceTwo.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
