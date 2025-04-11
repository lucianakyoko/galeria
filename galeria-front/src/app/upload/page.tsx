import { Button } from "@/components/Button";
import { ImageDropZone } from "@/components/ImageDropZone";
import { InputField } from "@/components/InputField";
import NextLink from "next/link";

export default function Upload() {
  return (
    <div
      className="md:w-[460px] xl:w-[750px] flex flex-col gap-12 m-auto pb-16"
    >
      <ImageDropZone />

      <InputField
        id="imagetitle" 
        label="Defina um título para esta imagem:"
        placeholder="Ex. Filhotinho sorridente"
      />
      
      <div className="min-w-[328px] flex justify-between xl:justify-start gap-6 ">
        <NextLink 
          className="w-[155px] xl:min-w-[265px] py-2 px-4 rounded-[12px] text-[16px] text-center md:text-[18px] font-bold cursor-pointer border border-[#1D5BC0] bg-[#D8EBF2] hover:bg-white text-[#1D5BC0]" 
          href={'/'}>Cancelar</NextLink>
        <Button variant="primary">Salvar</Button>
      </div>
    </div>
  );
}