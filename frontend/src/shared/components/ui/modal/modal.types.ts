export type ModalSize = "sm" | "md" | "lg" | "xl";

export type ModalFooterAction = {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  variant?: "default" | "outline" | "destructive" | "ghost";
}; 
