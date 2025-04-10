import { Button } from "@/components/Button";
import { ImageDropZone } from "@/components/ImageDropZone";
import { InputField } from "@/components/InputField";

export default function Upload() {
  return (
    <div
      className="md:w-[460px] xl:w-[750px] flex flex-col gap-12 m-auto"
    >
      <ImageDropZone />

      <InputField
        id="imagetitle" 
        label="Defina um título para esta imagem:"
        placeholder="Ex. Filhotinho sorridente"
      />
      
      <div className="min-w-[328px] flex justify-between xl:justify-start gap-6 ">
        <Button variant="secondary">Cancelar</Button>
        <Button variant="primary">Salvar</Button>
      </div>
    </div>
  );
}