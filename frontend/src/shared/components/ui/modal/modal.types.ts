export type ModalSize = "sm" | "md" | "lg" | "xl";

export interface BaseModalProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
  size?: ModalSize;
  Trigger: React.ReactElement;
};

export type ModalFooterAction = {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  variant?: "default" | "outline" | "destructive" | "ghost";
}; 
