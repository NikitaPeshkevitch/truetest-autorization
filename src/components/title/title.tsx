import React from "react";
import css from "./title.module.css";

export function Title() {
  return (
    <div className={css.title}>
      <div className={css.text}>
        Войдите <br />
        или зарегистрируйтесь
      </div>
      <div className={css.textTwo}>С помощью e-mail</div>
    </div>
  );
}
