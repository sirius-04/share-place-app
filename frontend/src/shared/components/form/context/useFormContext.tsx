import { useContext } from "react";
import { FormContext } from "./context";

export function useFormContext() {
  const formContext = useContext(FormContext);

  if (!formContext) throw new Error("useFormContext must be used within a Form");

  return formContext;
}
