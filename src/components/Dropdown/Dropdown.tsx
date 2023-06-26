"use client";

import { RefObject, useRef, useState } from "react";
import style from "./style.module.css";
import { createPortal } from "react-dom";

interface DropdownProps {
  placeholderText: string;
  options: {
    value: string;
    displayText: string;
  }[];
  defaultValue?: string;
  selectHandler: (value: string) => void;
}

export default function Dropdown(props: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(props.defaultValue);
  const openButton = useRef<HTMLButtonElement>(null);

  const selectedOption = props.options.find(
    (option) => option.value === selectedValue
  );
  const selectedOptionDisplayText = selectedOption
    ? selectedOption.displayText
    : props.placeholderText;

  return (
    <>
      <div>
        <button
          className={style.openButton}
          ref={openButton}
          onClick={() => setIsOpen(!isOpen)}
        >
          {selectedOptionDisplayText}
        </button>
        {isOpen &&
          createPortal(
            <div className={style.popup} style={getPopupStyle(openButton)}>
              <button onClick={() => setSelectedValue(undefined)}>
                Не выбран
              </button>
              {props.options.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setSelectedValue(option.value)}
                >
                  {option.displayText}
                </button>
              ))}
            </div>,
            document.getElementById("popup-container")!
          )}
      </div>
    </>
  );
}

function getPopupStyle(buttonRef: RefObject<HTMLButtonElement>): {
  top: number;
  left: number;
  width: number;
} {
  const rect = buttonRef.current!.getBoundingClientRect();
  return {
    top: rect.bottom,
    left: rect.left,
    width: rect.width,
  };
}
