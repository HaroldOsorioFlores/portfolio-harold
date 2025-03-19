import React, { ReactNode } from "react";

function CarouselProvider({
  children,
  initialImages,
}: Readonly<CarouselProviderProps>) {
  const [images, setImages] = React.useState<string[]>(initialImages);

  const obj = React.useMemo(() => ({ images, setImages }), [images]);

  return (
    <ImagesCarouselContext.Provider value={obj}>
      {children}
    </ImagesCarouselContext.Provider>
  );
}

interface CarouselProviderProps {
  children: ReactNode;
  initialImages: string[];
}

interface ImagesContextProps {
  images: string[];
  setImages: (images: string[]) => void;
}

const ImagesCarouselContext = React.createContext<ImagesContextProps>({
  images: [],
  setImages: () => {},
});

export { CarouselProvider, ImagesCarouselContext };
