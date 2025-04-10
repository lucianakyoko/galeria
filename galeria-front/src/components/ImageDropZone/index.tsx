import { CloudArrowUp } from "@phosphor-icons/react/dist/ssr";
import { Button } from "../Button";


export function ImageDropZone() {
  return (
    <div className="
      w-full bg-white border border-dashed border-[#232222] rounded-[12px] px-[46px] py-6 md:py-8 xl:py-20 flex flex-col gap-8

    ">
      <div className="flex flex-col items-center gap-4">
        <CloudArrowUp size={32} weight="fill" color="#232222" />
        <p className="font-semibold text-[#232222]">Arraste e solte a imagem</p>
      </div>

      <div className="flex flex-col items-center gap-4">
        <span className="text-[#232222]">ou</span>
        <Button variant="secondary">Selecionar imagem</Button>
      </div>
    </div>
  );
}