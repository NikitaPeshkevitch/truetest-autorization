import React from "react";
import css from "./main.module.css";
import { Title } from "../title/title";
import { Input } from "../input/input";
import { GoogleButton } from "../googleButton/googleButton";
import { Footer } from "../footer/footer";
import { ContinueButton } from "../continueButton/continueButton";

export function Main() {
  return (
    <div className={css.main}>
      <Title />
      <div className={css.inputBox}>
        <Input type="text" placeholder="Введите e-mail" />
        <Input
          type="password"
          placeholder="Введите или придумайте пароль"
          showPasswordIcon={true}
        />
      </div>
      <div className={css.forgot}>
        <p>Забыли пароль?</p>
      </div>
      <div className={css.anotherBox}>
        <ContinueButton />
        <div className={css.socialText}>Или соцсети</div>
      </div>
      <div className={css.boxButton}>
        <GoogleButton type="google" />
        <GoogleButton type="yandex" />
        <GoogleButton type="vk" />
      </div>
      <Footer />
    </div>
  );
}
