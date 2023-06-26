import { StoreProvider } from "@/redux/StoreProvider";
import "./globals.css";
import style from "./layout-styles.module.css";

import { Roboto } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["cyrillic", "latin"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--ff-roboto",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={`${roboto.variable}`}>
      <body>
        <header className={style.header}>
          <h1 className={style.siteName}>Билетопоиск</h1>
          <Link href="#">
            <Image
              src="/icons/basket.svg"
              width="32"
              height="32"
              alt="корзина"
            />
          </Link>
        </header>
        <div className={style.pageContent}>
          <StoreProvider>{children}</StoreProvider>
        </div>
      </body>
    </html>
  );
}
