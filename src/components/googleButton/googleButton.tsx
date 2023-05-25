import React, { ReactElement, ReactNode } from "react";
import css from "./googleButton.module.css";
import { Google } from "../assets/social/google";
import { Vk } from "../assets/social/vk";
import { Yandex } from "../assets/social/yandex";

const link = {
  google: "https://google.com",
  vk: "https://vk.ru",
  yandex: "https://yandex.ru",
};

const icon = {
  google: Google,
  vk: Vk,
  yandex: Yandex,
};

interface ISocialButtonProps {
  type: "google" | "vk" | "yandex";
}

export function GoogleButton(props: ISocialButtonProps) {
  const Icon = icon[props.type];
  const url = link[props.type];

  return (
    <a target="_blank" href={url}>
      <button className={css.googleButton}>
        <Icon />
      </button>
    </a>
  );
}
