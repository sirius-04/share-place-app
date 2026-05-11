import { Button } from "@/components/ui/button";
import type { FormValues } from "@/shared/components/form/form.types";
import Form from "@/shared/components/form/Form/Form";
import Input from "@/shared/components/form/Input/Input";
import { Link, useNavigate } from "react-router-dom";

import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH } from "@/shared/components/form/validators/validators";
import { useState } from "react";
import { useAuth } from "../context/useAuth";

export default function SignInPage() {
  const navigate = useNavigate();
  const [isValid, setIsValid] = useState(false);
  const { login } = useAuth();

  const handleSubmit = (values: FormValues) => {
    login();
    navigate('/');
    console.log(values);
  };

  return (
    <div className="flex justify-center">
      <Form
        className="p-[1rem] w-[90%] max-w-[40rem] shadow-md rounded-[6px] bg-white"
        initialValues={{
          email: { value: "", isValid: false },
          password: { value: "", isValid: false },
        }}
        onSubmit={handleSubmit}
        onValidityChange={setIsValid}
      >
        <h1 className="font-bold text-center text-xl">Sign In</h1>

        <Input
          id="email"
          label="Email"
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
          <Link to="/auth/sign-up"><p className="underline text-small text-gray-300">Create an account</p></Link>
          <Button type="submit" disabled={!isValid}>Sign In</Button>
        </div>
      </Form>
    </div>
  );
}
