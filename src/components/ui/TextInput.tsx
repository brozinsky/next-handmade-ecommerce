import React from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";

interface TextInputProps {
  label: string;
  name: string;
  placeholder: string;
  required?: boolean;
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  name,
  placeholder,
  required = false,
  register,
  errors,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="font-medium text-neutral-900 ">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        id={name}
        className={`border-2 text-neutral-800 rounded-lg px-4 py-1.5 transition-all duration-200 
          ${
            errors[name]
              ? "border-red-500 focus:ring-red-500"
              : "font-medium border-primary-500 focus:ring-primary-500"
          }
          focus:outline-none focus:ring-2`}
        type="text"
        placeholder={placeholder}
        {...register(name, { required })}
      />
      {errors[name] && (
        <p className="text-sm text-red-500">{(errors[name] as any).message}</p>
      )}
    </div>
  );
};

export default TextInput;
