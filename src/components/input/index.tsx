import type { RegisterOptions, UseFormRegister } from "react-hook-form";

interface InputProps {
    placeholder: string;
    type: string;
    name: string;
    register: UseFormRegister<any>;
    error?: string;
    rules?: RegisterOptions;
}

export function Input({ placeholder, type, name, error, rules, register }: InputProps) {
  return (
    <>
      <input
        className="w-full border-2 rounded-md h-11 px-2"
        type={type}
        placeholder={placeholder}
        {...register(name, rules)}
        id={name}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </>
  );
}