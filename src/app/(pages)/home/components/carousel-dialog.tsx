import { useContext } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CarouselImages } from "./carousel";
import { ImagesCarouselContext } from "@/providers/carousel.provider";

export default function CarouselDialog() {
  const { images } = useContext(ImagesCarouselContext);
  console.log({ images });
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="text-cyan-500 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-cyan-400 text-sm cursor-pointer">
          Imagenes
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[700px] sm:w-full max-w-sm">
        <DialogHeader>
          <DialogTitle>Imagenes</DialogTitle>
          {/* <DialogDescription>
            Anyone who has this link will be able to view this.
          </DialogDescription> */}
        </DialogHeader>
        <div className="flex items-center justify-center max-w-[200px] sm:max-w-[600px] w-full mx-auto">
          <CarouselImages images={images} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
