export type RequireValidator = {
  type: "REQUIRE";
};

export type LengthValidator = {
  type: "MINLENGTH" | "MAXLENGTH";
  payload: number;
};

export type FileValidator = {
  type: "FILE";
};

export type NumberValidator = {
  type: "MIN" | "MAX";
  payload: number;
};

export type EmailValidator = {
  type: "EMAIL";
};

export type Validator =
  | RequireValidator
  | FileValidator
  | LengthValidator
  | NumberValidator
  | EmailValidator;
