type InputFieldProps = {
  id: string;
  label: string
  placeholder?: string
}

export function InputField({id, label, placeholder, ...rest}: InputFieldProps) {
  return (
    <div className="flex flex-col gap-3 md:w-[460px] xl:w-[555px]">
      <label 
        htmlFor={id}
        className="text-[#232222] font-medium"
      >{label}</label>
      <input 
        type="text" 
        placeholder={placeholder}
        className="bg-white px-[18px] py-3 rounded-[12px]"
        {...rest}
      />
    </div>
  );
}