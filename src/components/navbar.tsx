"use client";
import { ItemsList } from "@/lib/interfaces";
import Link from "next/link";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import React from "react";

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  return (
    <nav className="fixed w-full z-50 bg-primary/30 backdrop-blur-md">
      <div className="md:max-w-[1216px] md:mx-auto flex justify-between items-center p-4">
        <Link
          href="/home"
          className="text-muted font-bold text-xl hover:text-amber-400 transition-colors duration-300"
        >
          Harold
        </Link>

        <div className="hidden md:block">
          <ul className="flex gap-8">
            {navList.map((item, index) => (
              <li key={item.title + index}>
                <Link
                  href={item.url}
                  className="py-2 border-b-2 hover:border-amber-400 border-transparent transition-all duration-300 text-muted hover:scale-105 text-sm"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <Button
          size="icon"
          variant="ghost"
          className="md:hidden hover:bg-white/10 transition-all duration-300"
          onClick={() => setOpen(!open)}
        >
          {!open ? (
            <Menu className="text-muted" />
          ) : (
            <X className="text-muted" />
          )}
        </Button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-2 p-4 bg-primary/30 backdrop-blur-md border-t border-white/10">
          {navList.map((item, index) => (
            <li key={item.title + index}>
              <Link
                href={item.url}
                className="py-3 px-4 rounded-md text-muted hover:bg-white/10 transition-colors duration-300 transform hover:translate-x-2 block text-sm"
                onClick={() => setOpen(false)}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

const navList: ItemsList[] = [
  {
    title: "Perfil",
    url: "/home",
  },
  {
    title: "Proyectos",
    url: "/home",
  },
  {
    title: "Contacto",
    url: "/home",
  },
];
