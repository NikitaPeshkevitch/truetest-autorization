import React, { useState } from "react";
import css from "./input.module.css";
import { OpenEye } from "../assets/eye/openEye";
import { CloseEye } from "../assets/eye/closeEye";
import { ClearButton } from "../assets/clearButton/clearButton";

interface IInput {
  type: string;
  placeholder: string;
  showPasswordIcon?: boolean;
  showClearButton?: boolean;
}

export function Input(props: IInput) {
  const [isPasswordVisible, setIsPassportVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const togglePasswordVisibility = () => {
    setIsPassportVisible(!isPasswordVisible);
  };

  const clearInputValue = () => {
    setInputValue("");
  };

  return (
    <div className={css.inputWrapper}>
      <input
        onChange={(e) => setInputValue(e.target.value)}
        className={css.input}
        type={isPasswordVisible ? "text" : props.type}
        placeholder={props.placeholder}
      />
      {props.showPasswordIcon && (
        <div className={css.eyeIcon} onClick={togglePasswordVisibility}>
          {isPasswordVisible ? <OpenEye /> : <CloseEye />}
        </div>
      )}
      {props.showClearButton && inputValue && (
        <div className={css.clearButton} onClick={clearInputValue}>
          <ClearButton />
        </div>
      )}
    </div>
  );
}
