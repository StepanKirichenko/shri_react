"use client";

import Link from "next/link";
import Image from "next/image";
import style from "./style.module.css";
import { useSelector } from "react-redux";
import { selectTicketTotalAmount } from "@/redux/features/cart/selector";
import { State } from "@/redux/store";

function TicketCounter() {
  const ticketAmount = useSelector((state: State) =>
    selectTicketTotalAmount(state)
  );

  if (ticketAmount === 0) {
    return <></>;
  }

  return (
    <div className={style.ticketCounter}>
      <p>{ticketAmount}</p>
    </div>
  );
}

export default function Header() {
  return (
    <header className={style.header}>
      <h1 className={style.siteName}>Билетопоиск</h1>
      <div className={style.cart}>
        <TicketCounter />
        <Link href="/">
          <Image src="/icons/basket.svg" width="32" height="32" alt="корзина" />
        </Link>
      </div>
    </header>
  );
}
