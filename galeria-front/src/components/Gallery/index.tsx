'use client'

import { useState } from "react";
import { GalleryItem } from "../GalleryItem";
import { ImageModal } from "../ImageModal";

const imageMocks = [
  {
    _id: "67f3076daa6cad63fcd17c91",
    url: "https://i.pinimg.com/236x/22/79/11/227911d597274b757f6be629d5435ec5.jpg",
    filename: "gato-feliz",
  },
  {
    _id: "67f3076daa6cad63fcd17c92",
    url: "https://i.pinimg.com/236x/a2/de/3e/a2de3e49c523f5f5b692a8a166435cfa.jpg",
    filename: "gato-feliz-na-janela",
  },
  {
    _id: "67f3076daa6cad63fcd17c93",
    url: "https://i.pinimg.com/474x/4a/73/d3/4a73d39983123d16812300c2f350c4eb.jpg",
    filename: "gato-feliz-na-janela",
  },
  {
    _id: "67f3076daa6cad63fcd17c94",
    url: "https://i.pinimg.com/236x/4e/68/a0/4e68a025e2373349bd1dc291a9b0acbc.jpg",
    filename: "gato-feliz-na-janela",
  },
  {
    _id: "67f3076daa6cad63fcd17c95",
    url: "https://i.pinimg.com/236x/98/95/9c/98959cbaf564406a664750936d6b5eb0.jpg",
    filename: "gato-feliz-na-janela",
  },
  {
    _id: "67f3076daa6cad63fcd17c96",
    url: "https://i.pinimg.com/236x/4e/5a/35/4e5a35cd0a588e690d9b4401b2748c94.jpg",
    filename: "gato-feliz-na-janela",
  },
  {
    _id: "67f3076daa6cad63fcd17c97",
    url: "https://i.pinimg.com/236x/a6/8a/ba/a68abadc337799911f4db1adb36a4cf1.jpg",
    filename: "gato-feliz-na-janela",
  }
]

export function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const handleCloseModal = () => setSelectedIndex(null);

  return (
    <>
      <div
        className="grid gap-4 
          auto-rows-[150px]
          grid-cols-4
          xl:grid-cols-6
          px-4 py-6"
      >
        {imageMocks.map((image, index) => (
          <GalleryItem 
            key={image._id}
            src={image.url}
            alt={image.filename}
            layoutClass={getGridClass(index)}
            onClick={() => setSelectedIndex(index)}
            />
          ))}
      </div>

      {
        selectedIndex !== null && (
          <ImageModal 
            image={imageMocks[selectedIndex].url} 
            title={imageMocks[selectedIndex].filename} 
            onClose={handleCloseModal}
            onNext={() => setSelectedIndex((prev) => (prev! +1) % imageMocks.length)}
            onPrev={() => setSelectedIndex((prev) => (prev! -1 + imageMocks.length) % imageMocks.length)}
          />
        )
      }
    </>
  )
}

function getGridClass(index: number) {
  const mobileAndTabletLayouts = [
    "row-span-2 col-span-2",
    "row-span-2 col-span-2",
    "row-span-2 col-span-4",
    "row-span-2 col-span-3",
    "row-span-1 col-span-1",
    "row-span-1 col-span-1",
  ];

  const laptopAndDesktopLayouts = [
    "md:row-span-2 md:col-span-2",
    "md:row-span-2 md:col-span-2",
    "md:row-span-2 md:col-span-2",
    "md:row-span-2 md:col-span-1",
    "md:row-span-2 md:col-span-1",
    "md:row-span-2 md:col-span-3",
    "md:row-span-2 md:col-span-1",
  ];

  return `
    ${mobileAndTabletLayouts[index % mobileAndTabletLayouts.length]}
    ${laptopAndDesktopLayouts[index % laptopAndDesktopLayouts.length]}
  `
}