import Input from "@/shared/components/form/Input/Input";
import Form from "@/shared/components/form/Form/Form";
import { Button } from "@/components/ui/button";
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "@/shared/components/form/validators/validators";
import type { FormValues } from "@/shared/components/form/form.types";
import { useState } from "react";

export default function NewPlace() {
  const [isValid, setIsValid] = useState(false);
  const handleSubmit = (values: FormValues) => {
    console.log(values);
  };

  return (
    <div className="flex justify-center">
      <Form
        className="p-[1rem] w-[90%] max-w-[40rem] shadow-md rounded-[6px] bg-white"
        initialValues={{
          title: { value: "", isValid: false },
          description: { value: "", isValid: false },
          address: { value: "", isValid: false },
        }}
        onSubmit={handleSubmit}
        onValidityChange={setIsValid}
      >
        <Input id="title" element="input" validators={[VALIDATOR_REQUIRE()]} label="Title" errorText="Please enter a valid title." />
        <Input id="description" element="textarea" validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5)]} label="Description" errorText="Please enter a valid description (at least 5 characters)." />
        <Input id="address" element="input" validators={[VALIDATOR_REQUIRE()]} label="Address" errorText="Please enter a valid address." />

        <div className="flex justify-end">
          <Button type="submit" disabled={!isValid}>Add Place</Button>
        </div>
      </Form>
    </div>
  );
}