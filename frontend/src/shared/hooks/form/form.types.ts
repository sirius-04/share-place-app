import type { InputValue } from "@/shared/components/form/Input/Input.types";

export type FormInputEntry = {
  value: InputValue;
  isValid: boolean;
};

export type FormValues = Record<string, FormInputEntry>;

export type FormState = {
  values: FormValues;
  isValid: boolean;
};

export type InputChangePayload = {
  inputId: string;
  value: InputValue;
  isValid: boolean;
};

export type FormAction =
  | { type: "INPUT_CHANGE"; payload: InputChangePayload };
