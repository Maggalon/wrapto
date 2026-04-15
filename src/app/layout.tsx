import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
});

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["700", "800"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Wrapto | Ваша машина уже зарабатывает",
  description: "Wrapto — сервис во Владивостоке, который платит водителям за рекламу на автомобиле. Вы ездите как обычно, а бренды платят вам каждый месяц.",
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${inter.variable} ${manrope.variable}`}>
      <body className="antialiased min-h-screen selection:bg-accent-gold/30">
        {children}
      </body>
    </html>
  );
}
