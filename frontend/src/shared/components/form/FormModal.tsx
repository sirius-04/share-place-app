import Modal from "../ui/modal/Modal";
import Form from "./Form/Form";
import type { BaseModalProps } from "../ui/modal/modal.types";
import type { FormValues } from "./form.types";
import { useRef, useState } from "react";

interface FormModalProps extends BaseModalProps {
  initialValues: FormValues;
  onSubmit: (values: FormValues) => void;
};

export default function FormModal({
  title,
  description,
  children,
  size = "xl",
  Trigger,
  initialValues,
  onSubmit,
}: FormModalProps) {
  const [isValid, setIsValid] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const actions = [
    {
      label: "Submit",
      onClick: () => formRef.current?.requestSubmit(),
      disabled: !isValid,
    },
  ];

  return (
    <Modal
      title={title}
      description={description}
      Trigger={Trigger}
      size={size}
      actions={actions}
    >
      <Form ref={formRef} initialValues={initialValues} onSubmit={onSubmit} onValidityChange={setIsValid}>
        {children}
      </Form>
    </Modal>
  );
}
