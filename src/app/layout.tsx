import { StoreProvider } from "@/redux/StoreProvider";
import "./globals.css";

import { Roboto } from "next/font/google";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

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
        <StoreProvider>
          <Header />
          <div className="pageContent">{children}</div>
          <Footer />
          <div id="modal-container" className="modalContainer"></div>
          <div id="popup-container" className="popupContainer"></div>
        </StoreProvider>
      </body>
    </html>
  );
}
