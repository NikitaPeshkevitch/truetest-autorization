import React from "react";
import css from "./continueButton.module.css";

export function ContinueButton() {
  return (
    <button className={css.continueButton}>
      <div className={css.text}>Продолжить</div>
    </button>
  );
}
