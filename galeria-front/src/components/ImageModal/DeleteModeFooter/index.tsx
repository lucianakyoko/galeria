import { CheckFat, XCircle } from "@phosphor-icons/react/dist/ssr";
type DeleteModeFooterProps = {
  onCancel: () => void;
  onConfirm: () => void;
}

export function DeleteModeFooter ({onCancel, onConfirm}: DeleteModeFooterProps) {
  return (
    <>
      <p className="text-white">Deletar esta imagem?</p>

      <div className="flex items-center gap-2">
        <button
          aria-label="Cancelar"
          title="Cancelar"
          onClick={() => onCancel()}
          >
          <XCircle
            size={18} 
            weight="fill" 
            color="#D8EBF2" 
            className="cursor-pointer hover:fill-white" 
          />
        </button>
        <button
          aria-label="Salvar"
          title="Salvar"
          onClick={() => onConfirm()}
          >
          <CheckFat  
            size={18} 
            weight="fill" 
            color="#1D5BC0" 
            className="cursor-pointer hover:fill-[#09367E]"
          />
        </button>
      </div>
    </>
  )
}