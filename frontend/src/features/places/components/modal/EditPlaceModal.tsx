import FormModal from "@/shared/components/form/FormModal";
import type { Place } from "@/shared/types/place";
import Input from "@/shared/components/form/Input/Input";
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "@/shared/components/form/validators/validators";
import type { FormValues } from "@/shared/components/form/form.types";

interface EditPlaceModalProps {
  Trigger: React.ReactElement,
  title?: string,
  description?: string,
  place: Place,
};

export default function EditPlaceModal({ Trigger, title, description, place }: EditPlaceModalProps) {
  const handleSubmit = (values: FormValues) => {
    console.log(values);
  };

  return (
    <FormModal
      title={place ? title ?? `Edit ${place.title}` : "Error"}
      description={description}
      Trigger={Trigger}
      initialValues={{
        title: { value: place?.title ?? "", isValid: !!place?.title },
        description: { value: place?.description ?? "", isValid: (place?.description?.length ?? 0) >= 5 },
      }}
      onSubmit={handleSubmit}
    >
      {place
        ? (
          <>
            <Input id="title" element="input" label="Title" validators={[VALIDATOR_REQUIRE()]} errorText="Please enter a valid title." />
            <Input id="description" element="textarea" label="Description" validators={[VALIDATOR_MINLENGTH(5)]} errorText="Please enter a valid description (min. 5 characters)." />
          </>
        )
        : <p>Could not find place!</p>
      }
    </FormModal>
  );
}
