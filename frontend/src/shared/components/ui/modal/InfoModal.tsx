import Modal from "./Modal";

type InfoModalProps = {
  title: string,
  description?: string,
  children: React.ReactNode,
  Trigger: React.ReactElement,
};

export default function InfoModal({
  title,
  description,
  children,
  Trigger,
}: InfoModalProps) {
  return (
    <Modal
      title={title}
      description={description}
      Trigger={Trigger}
    >
      {children}
    </Modal>
  );
}
