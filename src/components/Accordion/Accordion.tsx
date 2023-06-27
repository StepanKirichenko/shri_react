"use client";

import React, { useContext, useState } from "react";
import { ReactNode } from "react";
import style from "./style.module.css";
import Image from "next/image";

const AccordionContext = React.createContext<any>({});

export const Accordion = ({ children }: { children?: ReactNode }) => {
  const [activeItem, setActiveItem] = useState<string | undefined>(undefined);

  return (
    <AccordionContext.Provider value={{ activeItem, setActiveItem }}>
      <div className={style.accordion}>{children}</div>
    </AccordionContext.Provider>
  );
};

Accordion.Item = function AccordionItem({
  title,
  children,
}: {
  title: string;
  children?: ReactNode;
}) {
  const { activeItem, setActiveItem } = useContext(AccordionContext);

  return (
    <div className={style.item}>
      <div
        className={style.titleRow}
        onClick={() =>
          setActiveItem?.((activeItem: any) =>
            activeItem === title ? undefined : title
          )
        }
      >
        <h2 className={style.title}>{title}</h2>
        <Image
          src={`/icons/arrow-square-black-${
            activeItem === title ? "up" : "down"
          }.svg`}
          width="32"
          height="32"
          alt=""
        />
      </div>
      {activeItem === title && children}
    </div>
  );
};
