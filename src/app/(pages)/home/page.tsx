"use client";

import Link from "next/link";
import { IconsList } from "@/lib/interfaces";
import { Github, Linkedin } from "lucide-react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { dataProjects } from "@/lib/data";
import { CldImage } from "next-cloudinary";
import CarouselDialog from "./components/carousel-dialog";
import { CarouselProvider } from "@/providers/carousel.provider";

export default function HomePage() {
  return (
    <div className="bg-primary">
      <section
        id="home-header"
        className="h-[350px] md:h-[600px] flex flex-col"
      >
        <Image
          src={"/home-header.jpg"}
          alt="Imagen Home"
          width={1000}
          height={1000}
          className="w-full min-h-[350px] md:h-[600px] object-cover grayscale-75 absolute z-10 brightness-50"
          priority
        />
        <div className="z-10 h-full w-full flex justify-center items-center mt-8">
          <div className="flex flex-col gap-4 justify-center items-center text-muted px-4 md:p-0">
            <div className="md:text-[40px] text-center text-[30px]">
              <h1>Harold Osorio Flores</h1>
            </div>
            <div className="text-center">
              <p>Desarrollador Fullstack - Ingeniero en Sistmas</p>
            </div>
            <div className="flex gap-6">
              {socialNetworksList.map((social, index) => (
                <Link
                  title={social.title}
                  href={social.url}
                  key={social.title + index}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="grid md:grid-cols-2 h-[470px]" id="about">
        <Image
          src={"/home-about.jpg"}
          width={1000}
          height={1000}
          alt="home-about"
          className="h-[470px] object-cover absolute z-10 md:relative"
        />
        <div
          id="about-me"
          className="text-muted flex flex-col gap-4 justify-center items-center text-center py-4 px-10 z-20 bg-primary/50 backdrop-invert backdrop-opacity-10 md:bg-transparent"
        >
          <h2 className="text-2xl text-cyan-500 font-medium">Acerca de mi</h2>
          <p className="text-sm">
            Soy desarrollador de software, siendo capaz de crear, aplicar
            tecnologías de la información en cualquier entorno de desarrollo. He
            logrado adquirir habilidades blandas, como trabajo en equipo y
            comunicación afectiva, además de aprender nuevas practicas de
            desarrollo. Mi objetivo es trabajar en una empresa donde pueda
            desarrollarme profesionalmente y aprender más conocimientos.
          </p>
        </div>
      </section>
      <section className="px-4 py-12 flex flex-col gap-4" id="projects">
        <h2 className="text-2xl text-cyan-500 text-center font-medium">
          Proyectos
        </h2>
        <div className="max-w-[1100px] w-full mx-auto flex justify-center">
          {dataProjects.map((project, index) => (
            <Card
              className="bg-primary/30 backdrop-invert backdrop-opacity-10 border-0 max-w-[380px]"
              key={project.title + index}
            >
              <CardContent>
                <CldImage
                  width="960"
                  height="600"
                  src={project.images[0]}
                  sizes="100vw"
                  alt={project.title}
                />
              </CardContent>
              <CardFooter className="text-muted flex flex-col items-start gap-4">
                <CardTitle>{project.title}</CardTitle>
                <CardDescription className="text-muted">
                  {project.description}
                </CardDescription>
                <div className="flex gap-4">
                  {project.urlDemo && (
                    <Link
                      className="text-cyan-500 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-cyan-400 text-sm"
                      href={project.urlDemo}
                    >
                      Ver demo
                    </Link>
                  )}
                  <CarouselProvider initialImages={project.images}>
                    <CarouselDialog />
                  </CarouselProvider>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
      <section
        id="contact"
        className="max-w-[550px] w-full justify-center mx-auto px-4 py-8"
      >
        <div className="p-4 space-y-6 bg-[#558FFF]/5 backdrop-invert backdrop-opacity-5 rounded-2xl flex flex-col items-center">
          <h2 className="text-2xl text-muted text-center font-medium">
            Tienes un proyecto en mente?
          </h2>
          <Button className="text-muted bg-cyan-800 hover:bg-cyan-700 cursor-pointer">
            Contactame
          </Button>
        </div>
      </section>
    </div>
  );
}

const socialNetworksList: IconsList[] = [
  {
    title: "Github",
    url: "/home",
    icon: <Github />,
  },
  {
    title: "Linkedin",
    url: "/home",
    icon: <Linkedin />,
  },
];
