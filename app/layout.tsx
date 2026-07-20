import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ethos Insurance Agency Ltd | Protecting What Matters Most in Kenya",
  description:
    "Leading independent insurance agency based in Nairobi, Kenya. We offer tailored personal, business, and specialized insurance solutions.",
  icons: {
    icon: "/logo.png", // Uses your logo.png as the browser favicon
  },
  openGraph: {
    title: "Ethos Insurance Agency Ltd",
    description: "Protecting What Matters Most in Kenya.",
    images: ["/logo.png"], // Image preview when sharing link on WhatsApp/Social Media
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
