import Input from "@/shared/components/form/Input/Input";
import { Button } from "@/components/ui/button";
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "@/shared/components/form/Input/validators/validators";
import { useForm } from "@/shared/hooks/form/useForm";
import { useCallback } from "react";
import type { InputValue } from "@/shared/components/form/Input/Input.types";

export default function NewPlace() {
  const { formState, onInputChange } = useForm();

  const inputHandler = useCallback((id: string, value: InputValue, isValid: boolean) => {
    onInputChange({ inputId: id, value, isValid });
  }, [onInputChange]);

  const addPlaceHandler = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(formState.values);
  };

  return (
    <div className="flex justify-center">
      <form className="p-[1rem] w-[90%] max-w-[40rem] shadow-md rounded-[6px] bg-white" onSubmit={addPlaceHandler}>
        <Input
          id="title"
          element="input"
          validators={[VALIDATOR_REQUIRE(),]}
          label="Title"
          errorText="Please enter a valid title."
          onInput={inputHandler}
        />

        <Input
          id="description"
          element="textarea"
          validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5),]}
          label="Description"
          errorText="Please enter a valid description (at least 5 characters)."
          onInput={inputHandler}
        />

        <Input
          id="address"
          element="input"
          validators={[VALIDATOR_REQUIRE(),]}
          label="Address"
          errorText="Please enter a valid address."
          onInput={inputHandler}
        />

        <div className="flex justify-end">
          <Button type="submit" disabled={!formState.isValid}>
            Add Place
          </Button>          
        </div>
      </form>      
    </div>
  );
}
