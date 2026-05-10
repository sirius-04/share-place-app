import { useState } from "react";
import { useFormContext } from "../context/useFormContext";
import type { Validator } from "../validators/validators.types";

interface InputProps {
  id: string;
  label: string;
  element?: string;
  type?: string;
  placeholder?: string;
  rows?: number;
  errorText?: string;
  validators?: Validator[];
};

export default function Input({
  id,
  label,
  element = "input",
  type = "text",
  placeholder = "",
  rows = 3,
  errorText = "Error.",
  validators = [],
}: InputProps) {
  const { formState, onInputChange } = useFormContext();
  const [isTouched, setIsTouched] = useState(false);
  
  const inputValue = formState.values[id]?.value ?? "";
  const isInputValid = formState.values[id]?.isValid ?? false;
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    onInputChange({
      inputId: id,
      value: e.target.value,
      validators,
    });
  };

  const isInvalid = !isInputValid && isTouched;
  const validClassName = "block w-full border border-solid py-[.15rem] px-[.25rem]";
  const invalidClassName = "block w-full border border-solid py-[.15rem] px-[.25rem] text-red-500 bg-red-100";

  return (
    <div className="my-[1rem] mx-0">
      <label className={`block font-bold mb-[.5rem] ${isInvalid && 'text-red-500'}`} htmlFor={id}>{label}</label>

      {element === "input"
        ? (
          <input
            className={isInvalid ? invalidClassName : validClassName}
            id={id}
            type={type}
            placeholder={placeholder}
            onBlur={() => setIsTouched(true)}
            onChange={e => handleInputChange(e)}
            value={inputValue}
          />
        )
        : (
          <textarea
            className={isInvalid ? invalidClassName : validClassName}
            id={id}
            rows={rows}
            onBlur={() => setIsTouched(true)}
            onChange={e => handleInputChange(e)}
            value={inputValue}
          />
        )
      }

      {isInvalid && (
        <p className="text-red-500">{errorText}</p>
      )}
    </div>
  );
}
