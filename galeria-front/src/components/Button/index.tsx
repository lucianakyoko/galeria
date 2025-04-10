import { ReactNode } from "react";

type ButtonProps = {
  variant: 'primary' | 'secondary';
  children: ReactNode
}

export function Button({ variant='primary', children }: ButtonProps) {
  const baseClasses = 'w-[155px] xl:min-w-[265px] py-2 px-4 rounded-[12px] text-[16px] md:text-[18px] font-bold cursor-pointer border border-[#1D5BC0]';
  const variantClasses = {
    primary: 'bg-[#1D5BC0] hover:bg-[#09367E] text-white border border-[#1D5BC0]',
    secondary: 'bg-[#D8EBF2] hover:bg-white text-[#1D5BC0]'
  }
  return(
    <button
      type="button"
      className={`${baseClasses} ${variantClasses[variant]}`}
    >
      {children}
    </button>
  )
}