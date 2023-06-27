"use client";

import { selectTicketAmount } from "@/redux/features/cart/selector";
import { useDispatch, useSelector } from "react-redux";
import style from "./style.module.css";
import { State } from "@/redux/store";
import { cartActions } from "@/redux/features/cart";
import Image from "next/image";
import { useState } from "react";
import { createPortal } from "react-dom";
import Modal from "../Modal/Modal";

export default function TicketCountAdjuster({
  movieId,
  isInCart,
}: {
  movieId: string;
  isInCart?: boolean;
}) {
  const count = useSelector((state: State) =>
    selectTicketAmount(state, movieId)
  );
  const dispath = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleDecrease() {
    if (count > 1 || !isInCart) {
      dispath(cartActions.decrement(movieId));
    } else {
      setIsModalOpen(true);
    }
  }

  return (
    <div className={style.container}>
      {isModalOpen &&
        createPortal(
          <Modal
            title="Удаление билета"
            text="Вы уверены, что хотите удалить билет?"
            onSubmit={() => {
              dispath(cartActions.reset(movieId));
              setIsModalOpen(false);
            }}
            onCancel={() => setIsModalOpen(false)}
          />,
          document.getElementById("modal-container")!
        )}
      <button
        disabled={count === 0}
        className={style.button}
        onClick={handleDecrease}
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
      {isInCart && (
        <button
          className={style.resetButton}
          onClick={() => setIsModalOpen(true)}
        >
          <Image src="/icons/close.svg" width="20" height="20" alt="delete" />
        </button>
      )}
    </div>
  );
}
