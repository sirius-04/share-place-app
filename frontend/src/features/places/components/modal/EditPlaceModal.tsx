import FormModal from "@/shared/components/form/FormModal";
import type { Place } from "@/shared/types/place";
import Input from "@/shared/components/form/Input/Input";
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "@/shared/components/form/Input/validators/validators";
import { useForm } from "@/shared/hooks/form/useForm";
import { useCallback } from "react";
import type { InputValue } from "@/shared/components/form/Input/Input.types";

type EditPlaceModalProps = {
  Trigger: React.ReactElement,
  title?: string,
  description?: string,
  place: Place,
};

export default function EditPlaceModal({ Trigger, title, description, place }: EditPlaceModalProps) {
  const { formState, onInputChange } = useForm();

  const fallbackContent = (
    <p>Could not find place!</p>    
  );

  const inputHandler = useCallback((id: string, value: InputValue, isValid: boolean) => {
    onInputChange({ inputId: id, value, isValid });
  }, [onInputChange]);

  const handleSubmit = () => {
  };

  return (
    <FormModal
      title={place ? title ?? `Edit ${place.title}` : 'Error'}
      description={description}
      Trigger={Trigger}
      isValid={formState.isValid}
      onSubmit={handleSubmit}
    >
      {place
        ? (
          <>
            <Input
              id="title"
              element="input"
              label="Title"
              validators={[VALIDATOR_REQUIRE(),]}
              errorText="Please enter a valid title."
              onInput={inputHandler}
            />

            <Input
              id="description"
              element="textarea"
              label="Description"
              validators={[VALIDATOR_MINLENGTH(5),]}
              errorText="Please enter a valid description (min. 5 characters)."
              onInput={inputHandler}
            />
          </>
        )
        : fallbackContent
      }
    </FormModal>
  );
}
