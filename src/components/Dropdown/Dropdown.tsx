"use client";

import { RefObject, useRef, useState } from "react";
import style from "./style.module.css";
import { createPortal } from "react-dom";
import classNames from "classnames";
import Image from "next/image";

interface DropdownProps {
  placeholderText: string;
  options: {
    value: string;
    displayText: string;
  }[];
  defaultValue?: string;
  selectHandler: (value: string | undefined) => void;
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

  function handleOptionClick(value: string | undefined) {
    setIsOpen(false);
    if (value !== selectedValue) {
      setSelectedValue(value);
      props.selectHandler?.(value);
    }
  }

  return (
    <>
      <div>
        <button
          className={classNames("input", style.openButton, {
            open: isOpen,
            hasSelection: selectedValue,
          })}
          ref={openButton}
          onClick={() => setIsOpen(!isOpen)}
        >
          {selectedOptionDisplayText}
          <Image
            src={`/icons/arrow-square-${isOpen ? "up" : "down"}.svg`}
            width="20"
            height="20"
            alt=""
          />
        </button>
        {isOpen &&
          createPortal(
            <div className={style.popup} style={getPopupStyle(openButton)}>
              <button
                className={style.dropdownButton}
                onClick={() => handleOptionClick(undefined)}
              >
                Не выбран
              </button>
              {props.options.map((option) => (
                <button
                  key={option.value}
                  className={style.dropdownButton}
                  onClick={() => handleOptionClick(option.value)}
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
