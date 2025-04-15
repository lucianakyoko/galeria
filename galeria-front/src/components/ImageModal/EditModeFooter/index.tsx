import { CheckFat, XCircle } from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";

type EditModeFooterProps = {
  title: string
  onCancel: () => void
  onConfirm: ((newTitle: string) => void)
}

export function EditModeFooter ({title, onCancel, onConfirm}: EditModeFooterProps) {
  const [inputValue, setInputValue] = useState(title);

  return (
    <>
      <input 
        value={inputValue}
        className="bg-transparent  text-wite flex-1 px-1 focus:outline-none "
        onChange={(e) => setInputValue(e.target.value)}
      />

      <div className="flex items-center gap-2">
        <span
          aria-label="Cancelar"
          title="Cancelar"
          >
          <XCircle
            size={18} 
            weight="fill" 
            color="#D8EBF2" 
            className="cursor-pointer hover:fill-white"
            onClick={onCancel}
          />
        </span>
        <span
          aria-label="Salvar"
          title="Salvar"
          >
          <CheckFat  
            size={18} 
            weight="fill" 
            color="#1D5BC0" 
            className="cursor-pointer hover:fill-[#09367E]"
            onClick={() => onConfirm(inputValue)}
          />
        </span>
      </div>
    </>
  )
}