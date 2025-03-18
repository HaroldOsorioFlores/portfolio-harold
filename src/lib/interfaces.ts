import { JSX } from "react";

export interface ItemsList {
  title: string;
  url: string;
}

export interface IconsList extends ItemsList {
  icon: JSX.Element;
}

export interface IProjects {
  title: string;
  description: string;
  images: string[];
  urlDemo: string | null;
}
