import { createContext } from "react";
import type { FormContextType } from "../form.types";

export const FormContext = createContext<FormContextType | null>(null);
