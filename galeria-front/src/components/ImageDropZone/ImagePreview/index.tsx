type ImagePreviewProps = {
  src: string;
  alt?: string
}

export function ImagePreview({ src, alt='Pré-visualização da imagem'}: ImagePreviewProps) {
  return (
    <div className="flex items-center justify-center w-[200px] h-[120px] m-auto">
      <img 
        src={src}
        alt={alt}
        className="max-h-full max-w-full object-contain"
      />
    </div>
  );
}