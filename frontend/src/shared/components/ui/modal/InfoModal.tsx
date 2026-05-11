import Modal from "./Modal";
import type { BaseModalProps } from "./modal.types";

type InfoModalProps = BaseModalProps;

export default function InfoModal({
  title,
  description,
  children,
  size = "lg",
  Trigger,
}: InfoModalProps) {
  return (
    <Modal
      title={title}
      description={description}
      Trigger={Trigger}
      size={size}
    >
      {children}
    </Modal>
  );
}
