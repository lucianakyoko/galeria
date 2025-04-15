'use client'
import { CaretCircleLeft, CaretCircleRight, XSquare } from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";
import { ViewModeFooter } from "./ViewModeFooter";
import { EditModeFooter } from "./EditModeFooter";
import { DeleteModeFooter } from "./DeleteModeFooter";

type ImageModalProps = {
  image: string;
  title: string;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export function ImageModal({image, title, onClose, onNext, onPrev}: ImageModalProps) {
  const [mode, setMode] = useState<'view' | 'edit' | 'delete'>('view');

  return (
    <div 
      className="bg-black/80 w-full h-screen fixed top-0 left-0 flex justify-between items-center"
    >
      <div className="w-[294px] md:w-[564px] m-auto relative">
        <div className="absolute top-1/2 w-full flex justify-between">
          <button
            title="Ver imagem anterior"
            aria-label="Ver imagem anterior"
            onClick={onPrev}
          >
            <CaretCircleLeft 
              size={32} 
              weight="fill" 
              color="#464444" 
              className="cursor-pointer hover:fill-white"        
            />
          </button>
          <button
            title="Ver próxima imagem"
            aria-label="Ver próxima imagem"
            onClick={onNext}
          >
            <CaretCircleRight 
              size={32} 
              weight="fill" 
              color="#464444" 
              className="cursor-pointer hover:fill-white" 
            />
          </button>
        </div>
        <div 
          className="rounded-[12px] w-[230px] md:w-[500px] h-[376px] md:h-[570px] m-auto relative"
          style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <button
            aria-label="Fechar Modal" 
            title="Fechar Modal"
            onClick={onClose}
            >
            <XSquare 
              size={32} 
              weight="fill"
              color="#232222"
              className=" cursor-pointer absolute top-3 right-3 hover:fill-[#464444]"
            />
          </button>
          <div className="p-2 md:px-4 bg-[#161616] absolute bottom-0 right-0 w-full flex justify-between rounded-b-[12px]">
            {mode === 'view' && (
              <ViewModeFooter 
                title={title}
                onEdit={() => setMode('edit')} 
                onDelete={() => setMode('delete')} 
              />
            )}

            {mode === 'edit' && (
              <EditModeFooter 
                title={title}
                onCancel={() => setMode('view')} 
                onConfirm={(newTitle) => {
                  console.log('título atualizado', newTitle) 
                  setMode('view')
                }} 
              />
            )}
            {
              mode === 'delete' && (
              <DeleteModeFooter
                onCancel={() => setMode('view')}
                onConfirm={() => console.log('Imagem deletada')}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 