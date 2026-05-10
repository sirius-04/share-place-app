import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import type { ModalFooterAction, ModalSize } from "./modal.types";

interface ModalProps {
  title: string,
  description?: string,
  children?: React.ReactNode,
  Trigger: React.ReactElement,
  size?: ModalSize,
  actions?: ModalFooterAction[],
};

const sizeMap: Record<ModalSize, string> = {
  sm: "sm:max-w-sm",
  md: "sm:max-w-md",
  lg: "sm:max-w-lg",
  xl: "sm:max-w-xl",
};

export default function Modal({
  title,
  description,
  children,
  Trigger,
  size = "md",
  actions,
}: ModalProps) {
  const [open, setOpen] = useState(false);

  const handleAction = (onClick: (() => void) | undefined) => {
    onClick?.();
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger render={Trigger} />
      <DialogContent className={`${sizeMap[size]}`}>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {description && (
            <DialogDescription>
              {description}
            </DialogDescription>
          )}
        </DialogHeader>

        {children}

        {actions && (
          <DialogFooter>
            <DialogClose render={<Button variant="outline">Cancel</Button>} />
            {actions.map(action => (
              <Button
                key={action.label}
                onClick={() => handleAction(action.onClick)}
                disabled={action.disabled}
                variant={action.variant ?? "default"}
              >
                {action.label}
              </Button>              
            ))}
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
}