import { useReducer } from "react";
import type { FormState, FormAction, InputChangePayload, FormValues } from "./form.types";

function formIsValid(values: FormValues) {
  return (
    Object.keys(values).length > 0
    &&
    Object.values(values).every(value => value.isValid)
  );
}

function buildInitialState(initialValues: FormValues): FormState {
  return {
    values: initialValues,
    isValid: formIsValid(initialValues),
  };
}

function formReducer(state: FormState, action: FormAction) {
  switch (action.type) {
    case "INPUT_CHANGE": {
      const updatedInputs = {
        ...state.values,
        [action.payload.inputId]: {
          value: action.payload.value,
          isValid: action.payload.isValid,
        },
      };

      return {
        values: updatedInputs,
        isValid: formIsValid(updatedInputs),
      };
    }

    default:
      return state;
  }
}

export function useForm(initialValues: FormValues = {}) {
  const [formState, dispatch] = useReducer(
    formReducer,
    undefined,
    () => buildInitialState(initialValues),
  );

  const onInputChange = (payload: InputChangePayload) => {
    dispatch({
      type: "INPUT_CHANGE",
      payload,
    });
  };

  return {
    formState,
    onInputChange,
  };
}
