import { PencilSimple, Trash } from "@phosphor-icons/react/dist/ssr";

type ViewModeFooterProps = {
  title: string;
  onEdit: () => void;
  onDelete: () => void;
}

export function ViewModeFooter({title, onEdit, onDelete}: ViewModeFooterProps) {
  return (
    <>
      <p className="text-white">{title}</p>

      <div className="flex items-center gap-2">
        <button
          aria-label="Excluir Imagem"
          title="Excluir Imagem"
          onClick={() => onDelete()}
          >
          <Trash 
            size={18} 
            weight="fill" 
            color="#88271E" 
            className="cursor-pointer hover:fill-[#980D01]" 
          />
        </button>
        <button
          aria-label="Editar Imagem"
          title="Editar Imagem"
          onClick={() => onEdit()}
          >
          <PencilSimple 
            size={18} 
            weight="fill" 
            color="#8F6F17" 
            className="cursor-pointer hover:fill-[#C59000]"
          />
        </button>
      </div>
    </>
  )
}