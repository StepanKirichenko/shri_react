"use client";

import Link from "next/link";
import Image from "next/image";
import style from "./style.module.css";

export default function Header() {
  return (
    <header className={style.header}>
      <h1 className={style.siteName}>Билетопоиск</h1>
      <Link href="/">
        <Image src="/icons/basket.svg" width="32" height="32" alt="корзина" />
      </Link>
    </header>
  );
}
