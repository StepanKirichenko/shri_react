"use client";

import { Accordion } from "@/components/Accordion/Accordion";
import style from "./style.module.css";

export default function QuestionsPage() {
  return (
    <main>
      <h1 className={style.heading}>Вопросы-ответы</h1>
      <Accordion>
        <Accordion.Item title="Что такое Билетопоиск?">
          <p>
            Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть
            фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных
            видео и интересные факты, поставить фильмам оценки, написать
            рецензии и дополнить описание фильмов.
          </p>
        </Accordion.Item>
        <Accordion.Item title="Какой компании принадлежит Билетопоиск?">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam,
            mollitia.
          </p>
        </Accordion.Item>
        <Accordion.Item title="Как купить билет на Билетопоиск?">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            assumenda debitis vero repellendus ratione incidunt molestias odit,
            at veritatis architecto blanditiis, id perspiciatis voluptatum
            sapiente numquam a, dolorum deleniti pariatur.
          </p>
        </Accordion.Item>
        <Accordion.Item title="Как оставить отзыв на Билетопоиск?">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur repellat cupiditate earum cumque repellendus dolorem
            suscipit deserunt ipsum sit consequatur.
          </p>
        </Accordion.Item>
      </Accordion>
    </main>
  );
}
