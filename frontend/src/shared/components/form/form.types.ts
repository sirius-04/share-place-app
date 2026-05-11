import type { Validator } from "@/shared/components/form/validators/validators.types";

export type InputValue = string | number;

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
  validators: Validator[];
};

export type FormAction =
  | { type: "INPUT_CHANGE"; payload: InputChangePayload };

export type FormContextType = {
  formState: FormState;
  onInputChange: (payload: InputChangePayload) => void;
};
