import type { InputValue } from "../Input.types";
import type { EmailValidator, FileValidator, LengthValidator, NumberValidator, RequireValidator, Validator } from "./validators.types";

const VALIDATOR_TYPE_REQUIRE = 'REQUIRE';
const VALIDATOR_TYPE_MINLENGTH = 'MINLENGTH';
const VALIDATOR_TYPE_MAXLENGTH = 'MAXLENGTH';
const VALIDATOR_TYPE_MIN = 'MIN';
const VALIDATOR_TYPE_MAX = 'MAX';
const VALIDATOR_TYPE_EMAIL = 'EMAIL';
const VALIDATOR_TYPE_FILE = 'FILE';

export const VALIDATOR_REQUIRE = (): RequireValidator => ({ type: VALIDATOR_TYPE_REQUIRE });
export const VALIDATOR_FILE = (): FileValidator => ({ type: VALIDATOR_TYPE_FILE });
export const VALIDATOR_MINLENGTH = (payload: number): LengthValidator => ({
  type: VALIDATOR_TYPE_MINLENGTH,
  payload,
});
export const VALIDATOR_MAXLENGTH = (payload: number): LengthValidator => ({
  type: VALIDATOR_TYPE_MAXLENGTH,
  payload
});
export const VALIDATOR_MIN = (payload: number): NumberValidator => ({ type: VALIDATOR_TYPE_MIN, payload });
export const VALIDATOR_MAX = (payload: number): NumberValidator => ({ type: VALIDATOR_TYPE_MAX, payload });
export const VALIDATOR_EMAIL = (): EmailValidator => ({ type: VALIDATOR_TYPE_EMAIL });

export const validate = (value: InputValue, validators: Validator[]) => {
  let isValid = true;
  for (const validator of validators) {
    if (validator.type === VALIDATOR_TYPE_REQUIRE) {
      isValid = isValid && value.toString().trim().length > 0;
    }
    if (validator.type === VALIDATOR_TYPE_MINLENGTH) {
      isValid = isValid && value.toString().trim().length >= validator.payload;
    }
    if (validator.type === VALIDATOR_TYPE_MAXLENGTH) {
      isValid = isValid && value.toString().trim().length <= validator.payload;
    }
    if (validator.type === VALIDATOR_TYPE_MIN) {
      isValid = isValid && +value >= validator.payload;
    }
    if (validator.type === VALIDATOR_TYPE_MAX) {
      isValid = isValid && +value <= validator.payload;
    }
    if (validator.type === VALIDATOR_TYPE_EMAIL) {
      isValid = isValid && /^\S+@\S+\.\S+$/.test(value.toString());
    }
  }
  return isValid;
};
