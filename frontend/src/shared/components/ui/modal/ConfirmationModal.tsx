import Modal from "./Modal";
import type { BaseModalProps, ModalFooterAction } from "./modal.types";

interface ConfirmationModalProps extends BaseModalProps {
  onConfirm: () => void;
};

export default function ConfirmationModal({ title, description, children, size, Trigger, onConfirm }: ConfirmationModalProps) {
  const actions: ModalFooterAction[] = [
    { label: "Confirm", onClick: onConfirm, disabled: false, variant:"destructive" },
  ];

  return (
    <Modal
      title={title}
      description={description}
      Trigger={Trigger}
      size={size}
      actions={actions}
    >
      {children}
    </Modal>
  );
}
