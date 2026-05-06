import { useEffect } from "react";
import { useInput } from "./useInput";
import type { Validator } from "./validators/validators.types";
import type { InputValue } from "./Input.types";

type InputProps = {
  id: string;
  value?: InputValue;
  label: string;
  element?: string;
  type?: string;
  placeholder?: string;
  rows?: number;
  errorText?: string;
  validators: Validator[];
  onInput: (id: string, value: InputValue, isValid: boolean ) => void;
};

export default function Input({
  id,
  value = "",
  label,
  element = "input",
  type = "text",
  placeholder = "",
  rows = 3,
  errorText = "Error.",
  validators,
  onInput,
}: InputProps) {
  const { inputState, onChange, onTouch } = useInput(value, validators);
  const validClassName = "block w-full border border-solid py-[.15rem] px-[.25rem]";
  const invalidClassName = "block w-full border border-solid py-[.15rem] px-[.25rem] text-red-500 bg-red-100";
  const isInvalid = !inputState.isValid && inputState.isTouched;

  useEffect(() => {
    onInput(id, inputState.value, inputState.isValid);
  }, [id, inputState.value, inputState.isValid]);

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
            onBlur={onTouch}
            onChange={e => onChange({
              value: e.target.value,
              validators,
            })}
            value={inputState.value}
          />
        )
        : (
          <textarea
            className={isInvalid ? invalidClassName : validClassName}
            id={id}
            rows={rows}
            onBlur={onTouch}
            onChange={e => onChange({
              value: e.target.value,
              validators,
            })}
            value={inputState.value}
          />
        )
      }

      {isInvalid && (
        <p className="text-red-500">{errorText}</p>
      )}
    </div>
  );
}
