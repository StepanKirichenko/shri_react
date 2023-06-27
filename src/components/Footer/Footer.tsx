import Link from "next/link";
import style from "./style.module.css";

export default function Footer() {
  return (
    <footer className={style.footer}>
      <Link href="/questions-answers">Вопросы-ответы</Link>
      <Link href="/about">О нас</Link>
    </footer>
  );
}
