import { useReducer } from "react";
import type { InputState, InputAction, InputOnChangePayload, InputValue } from "./Input.types";
import { validate } from "./validators/validators";
import type { Validator } from "./validators/validators.types";

function buildInitialState(initialValue: InputValue, validators: Validator[]): InputState {
  return {
    value: initialValue,
    isValid: validate(initialValue, validators),
    isTouched: false,
  };
}

function inputReducer(state: InputState, action: InputAction) {
  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        value: action.payload.value,
        isValid: validate(action.payload.value, action.payload.validators),
      };
    
    case "TOUCH":
      return {
        ...state,
        isTouched: true,
      };
      
    default:
      return state;
  }
};

export function useInput(initialValue: InputValue = "", validators: Validator[] = []) {
  const [inputState, dispatch] = useReducer(
    inputReducer,
    undefined,
    () => buildInitialState(initialValue, validators),
  );

  const onChange = (payload: InputOnChangePayload) => {
    dispatch({ type: "CHANGE", payload });
  };

  const onTouch = () => {
    dispatch({ type: "TOUCH" });
  };

  return {
    inputState,
    onChange,
    onTouch,
  };
}
