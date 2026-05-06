import type { Validator } from "./validators/validators.types";

export type InputValue = string | number;

export type InputState = {
  value: InputValue;
  isValid: boolean;
  isTouched: boolean;
};

export type InputOnChangePayload = {
  value: string;
  validators: Validator[];
};

export type InputAction =
  | {
      type: "CHANGE";
      payload: InputOnChangePayload;
    }
  | {
      type: "TOUCH";
    };
