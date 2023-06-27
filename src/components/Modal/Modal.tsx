"use client";

import classNames from "classnames";
import style from "./style.module.css";

interface ModalProps {
  title: string;
  text: string;
  onSubmit: () => void;
  onCancel: () => void;
}

export default function Modal({ title, text, onSubmit, onCancel }: ModalProps) {
  return (
    <div className={style.backdrop}>
      <div className={style.modal}>
        <h3 className={style.title}>{title}</h3>
        <p className={style.text}>{text}</p>
        <div className={style.buttons}>
          <button
            className={classNames(style.button, style.confirm)}
            onClick={onSubmit}
          >
            Да
          </button>
          <button
            className={classNames(style.button, style.cancel)}
            onClick={onCancel}
          >
            Нет
          </button>
        </div>
      </div>
    </div>
  );
}
