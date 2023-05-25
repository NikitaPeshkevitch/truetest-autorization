import React from "react";
import css from "./body.module.css";
import { Main } from "../main/main";

export function Body() {
  return (
    <div className={css.body}>
      <Main />
    </div>
  );
}
