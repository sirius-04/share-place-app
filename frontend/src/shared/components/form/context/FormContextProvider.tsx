import type { FormContextType } from "../form.types";
import { FormContext } from "./context";

interface FormContextProviderProps {
  children: React.ReactNode;
  value: FormContextType
};

export default function FormContextProvider({ children, value }: FormContextProviderProps) {
  return (
    <FormContext.Provider value={value}>
      {children}
    </FormContext.Provider>
  );
}
