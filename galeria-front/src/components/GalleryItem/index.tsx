import Image from "next/image";

type GalleryItemProps = {
  src: string
  alt: string
  layoutClass: string
  onClick?: () => void
}

export function GalleryItem({src, alt, layoutClass, onClick}: GalleryItemProps) {
  return (
    <div 
      onClick={onClick}
      className={`
        ${layoutClass}
        hover:border-[1px] hover:border-[#1D5BC0] cursor-pointer
        relative rounded-xl overflow-hidden
        w-full h-full min-h-[150px]
    `}>
      <Image
        src={src}
        alt={alt}
        fill
        className='object-cover'
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
      />
    </div>
  )
} 