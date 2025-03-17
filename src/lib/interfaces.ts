import { JSX } from "react";

export interface ItemsList {
  title: string;
  url: string;
}

export interface IconsList extends ItemsList {
  icon: JSX.Element;
}
