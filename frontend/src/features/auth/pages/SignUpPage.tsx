import { Button } from "@/components/ui/button";
import type { FormValues } from "@/shared/components/form/form.types";
import Form from "@/shared/components/form/Form/Form";
import Input from "@/shared/components/form/Input/Input";
import { Link } from "react-router-dom";

import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "@/shared/components/form/validators/validators";
import { useState } from "react";

export default function SignUpPage() {
  const [isValid, setIsValid] = useState(false);

  const handleSubmit = (values: FormValues) => {
    console.log('sign up', values);
  };

  return (
    <div className="flex justify-center">
      <Form
        className="p-[1rem] w-[90%] max-w-[40rem] shadow-md rounded-[6px] bg-white"
        initialValues={{
          name: { value: "", isValid: false },
          password: { value: "", isValid: false },
        }}
        onSubmit={handleSubmit}
        onValidityChange={setIsValid}
      >
        <h1 className="font-bold text-center text-xl">Create a new account</h1>

        <Input
          id="name"
          label="Your Name"
          validators={[VALIDATOR_REQUIRE(),]}
          errorText="Please enter a name."
        />

        <Input
          id="email"
          label="Your Email"
          validators={[VALIDATOR_EMAIL(),]}
          errorText="Please enter a valid email."
        />

        <Input
          id="password"
          label="Password"
          validators={[VALIDATOR_MINLENGTH(8),]}
          errorText="Password must at least contains 8 characters."
        />

        <div className="flex justify-end items-center gap-2">
          <Link to="/auth/sign-in"><p className="underline text-small text-gray-300">Sign In</p></Link>
          <Button type="submit" disabled={!isValid}>Sign Up</Button>
        </div>
      </Form>
    </div>
  );
}
