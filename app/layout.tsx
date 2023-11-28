import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./header";
import { Footer } from "./footer";

export const metadata: Metadata = {
  title: "Сайт выпускников е-профиля",
  description:
    "Делаем всякие прикольные движухи и инвестируем в будущее человечества! (в образование желающих учиться в е-профиле)",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
