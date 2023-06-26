import { StoreProvider } from "@/redux/StoreProvider";
import "./globals.css";

import { Roboto } from "next/font/google";

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
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
