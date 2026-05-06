import Modal from "../ui/modal/Modal";
import type { ModalFooterAction, ModalSize } from "../ui/modal/modal.types";

type FormModalProps = {
  title: string,
  description?: string,
  children: React.ReactNode,
  size?: ModalSize,
  Trigger: React.ReactElement,
  isValid: boolean,
  onSubmit?: () => void,
  actions?: ModalFooterAction[],
};

export default function FormModal({
  title,
  description,
  children,
  size="xl",
  Trigger,
  isValid,
  onSubmit,
  actions,
}: FormModalProps) {
  const DEFAULT_ACTIONS: ModalFooterAction[] = [
    { label: "Submit", onClick: onSubmit, disabled: !isValid },
  ];
  const resolvedActions = actions ?? DEFAULT_ACTIONS;

  return (
    <Modal
      title={title}
      description={description}
      Trigger={Trigger}
      size={size}
      actions={resolvedActions}
    >
      {children}
    </Modal>
  );
}
