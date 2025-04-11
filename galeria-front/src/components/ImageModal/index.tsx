'use client'
import { CaretCircleLeft, CaretCircleRight, PencilSimple, Trash, XSquare } from "@phosphor-icons/react/dist/ssr";
import { useEffect } from "react";

type ImageModalProps = {
  image: string;
  title: string;
}

export function ImageModal({image, title}: ImageModalProps) {
  useEffect(() => {
    document.body.classList.add('overflow-hidden')

    return () => {
      document.body.classList.remove('overflow-hidden')
    }
  }, [])

  return (
    <div 
      className="bg-black/80 w-full h-screen absolute top-0 left-0 flex justify-between items-center"
    >
      <div className="w-[294px] md:w-[564px] m-auto relative">
        <div className="absolute top-1/2 w-full flex justify-between">
          <span
            title="Ver imagem anterior"
            aria-label="Ver imagem anterior"
            >
            <CaretCircleLeft 
              size={32} 
              weight="fill" 
              color="#464444" 
              className="cursor-pointer hover:fill-white"        
            />
          </span>
          <span
            title="Ver próxima imagem"
            aria-label="Ver próxima imagem"
            >
            <CaretCircleRight 
              size={32} 
              weight="fill" 
              color="#464444" 
              className="cursor-pointer hover:fill-white" 
            />
          </span>
        </div>
        <div 
          className="rounded-[12px] w-[230px] md:w-[500px] h-[376px] md:h-[570px] m-auto relative"
          style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <span
            aria-label="Fechar Modal" 
            title="Fechar Modal"
            >
            <XSquare 
              size={32} 
              weight="fill"
              color="#232222"
              className=" cursor-pointer absolute top-3 right-3 hover:fill-[#464444]"
            />
          </span>

          <div className="p-2 md:px-4 bg-[#161616] absolute bottom-0 right-0 w-full flex justify-between rounded-b-[12px]">
              <p className="text-white">{title}</p>

              <div className="flex items-center gap-2">
                <span
                  aria-label="Excluir Imagem"
                  title="Excluir Imagem"
                  >
                  <Trash 
                    size={18} 
                    weight="fill" 
                    color="#88271E" 
                    className="cursor-pointer hover:fill-[#980D01]" 
                  />
                </span>
                <span
                  aria-label="Editar Imagem"
                  title="Editar Imagem"
                  >
                  <PencilSimple 
                    size={18} 
                    weight="fill" 
                    color="#8F6F17" 
                    className="cursor-pointer hover:fill-[#C59000]"
                  />
                </span>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}