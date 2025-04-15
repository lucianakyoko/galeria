'use client'

import { CloudArrowUp } from "@phosphor-icons/react/dist/ssr";
import { Button } from "../Button";
import { useRef, useState } from "react";
import { ImagePreview } from "./ImagePreview";


export function ImageDropZone() {
  const [preview, setPreview] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if(file) {
      const previewURL = URL.createObjectURL(file);
      setPreview(previewURL)
    }
  }

  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault();
    setIsDragging(true)
  };

  const handleDragLeave = () => setIsDragging(false);
  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault();
    setIsDragging(false);

    const file = event.dataTransfer.files?.[0];
    if(file) {
      const previewURL = URL.createObjectURL(file);
      setPreview(previewURL)
    }
  }

  return (
    <div 
      className={`
        w-full  border border-dashed bg-white rounded-[12px] border-[#232222] px-[46px] py-6 md:py-8 xl:py-20 flex flex-col gap-8
        ${isDragging ? 'border-none' : 'border-[#232222'}
      `}
      onDragOver={handleDragOver}  
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      {
        preview ? (
          <ImagePreview src={preview} alt=""/>
        ): (
          <>
            <div className="flex flex-col items-center gap-4">
              <CloudArrowUp size={32} weight="fill" color="#232222" />
              <p className="font-semibold text-[#232222]">Arraste e solte a imagem</p>
              <span className="text-[#232222]">ou</span>
            </div>
          </>
        )
      }

      <Button variant="secondary" onClick={() => inputRef.current?.click()}>Selecionar {preview ? 'outro' : 'imagem'}</Button>

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />
    </div>
  );
}