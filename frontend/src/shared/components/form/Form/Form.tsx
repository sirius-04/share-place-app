import { useForm } from "@/shared/components/form/useForm";
import { forwardRef, useEffect } from "react";
import FormContextProvider from "../context/FormContextProvider";
import type { FormContextType, FormValues } from "../form.types";

interface FormProps {
  children: React.ReactNode;
  className?: string;
  initialValues?: FormValues;
  onSubmit?: (values: FormValues) => void;
  onValidityChange?: (isValid: boolean) => void;
}

const Form = forwardRef<HTMLFormElement, FormProps>(({ children, className = "", initialValues, onSubmit, onValidityChange }, ref) => {
  const { formState, onInputChange } = useForm(initialValues);

  useEffect(() => {
    onValidityChange?.(formState.isValid);
  }, [formState.isValid, onValidityChange]);

  const formContextValue: FormContextType = {
    formState,
    onInputChange,
  };

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit?.(formState.values);
  };

  return (
    <FormContextProvider value={formContextValue}>
      <form ref={ref} onSubmit={handleSubmit} className={className}>
        {children}
      </form>
    </FormContextProvider>
  );
});

Form.displayName = "Form";

export default Form;
