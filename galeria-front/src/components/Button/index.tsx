import { ReactNode } from "react";

type ButtonProps = {
  variant: 'primary' | 'secondary';
  onClick?: () => void;
  children: ReactNode
}

export function Button({ variant='primary', children, onClick }: ButtonProps) {
  const baseClasses = 'py-2 px-4 rounded-[12px] text-[16px] md:text-[18px] font-bold cursor-pointer border border-[#1D5BC0]';
  const variantClasses = {
    primary: 'bg-[#1D5BC0] hover:bg-[#09367E] text-white border border-[#1D5BC0]',
    secondary: 'bg-[#D8EBF2] hover:bg-white text-[#1D5BC0]'
  }
  return(
    <button
      type="button"
      className={`${baseClasses} ${variantClasses[variant]}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}