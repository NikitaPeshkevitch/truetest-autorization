import React, { useState } from "react";
import css from "./input.module.css";
import { OpenEye } from "../assets/eye/openEye";
import { CloseEye } from "../assets/eye/closeEye";

interface IInput {
  type: string;
  placeholder: string;
  showPasswordIcon?: boolean;
}

export function Input(props: IInput) {
  const [isPasswordVisible, setIsPassportVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPassportVisible(!isPasswordVisible);
  };

  return (
    <div className={css.inputWrapper}>
      <input
        className={css.input}
        type={isPasswordVisible ? "text" : props.type}
        placeholder={props.placeholder}
      />
      {props.showPasswordIcon && (
        <div className={css.eyeIcon} onClick={togglePasswordVisibility}>
          {isPasswordVisible ? <OpenEye /> : <CloseEye />}
        </div>
      )}
    </div>
  );
}
