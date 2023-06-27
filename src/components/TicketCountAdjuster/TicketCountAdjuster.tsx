"use client";

import { selectTicketAmount } from "@/redux/features/cart/selector";
import { useDispatch, useSelector } from "react-redux";
import style from "./style.module.css";
import { State } from "@/redux/store";
import { cartActions } from "@/redux/features/cart";
import Image from "next/image";

export default function TicketCountAdjuster({ movieId }: { movieId: string }) {
  const count = useSelector((state: State) =>
    selectTicketAmount(state, movieId)
  );
  const dispath = useDispatch();

  return (
    <div className={style.container}>
      <button
        disabled={count === 0}
        className={style.button}
        onClick={() => dispath(cartActions.decrement(movieId))}
      >
        <Image src="/icons/minus.svg" width="12" height="12" alt="decrease" />
      </button>
      <p className={style.ticketCount}>{count}</p>
      <button
        disabled={count >= 30}
        className={style.button}
        onClick={() => dispath(cartActions.increment(movieId))}
      >
        <Image src="/icons/plus.svg" width="12" height="12" alt="decrease" />
      </button>
    </div>
  );
}
