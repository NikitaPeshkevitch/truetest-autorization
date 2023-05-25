import React from "react";
import css from "./footer.module.css";

export function Footer() {
  return (
    <div className={css.footer}>
      <div>
        Регистрируясь на сайте, вы принимаете
        <a> правила политики конфиденциальности</a>
      </div>
    </div>
  );
}
