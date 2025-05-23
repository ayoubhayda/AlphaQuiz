"use client";
import React from "react";
import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";

interface SubmitButtonProps {
  text: string;
  icon?: React.ReactNode;
  className?: string;
  variant?:
    | "default"
    | "outline"
    | "ghost"
    | "link"
    | "destructive"
    | "secondary"
    | null
    | undefined;
}

const SubmitButton = ({
  text,
  icon,
  className,
  variant,
}: SubmitButtonProps) => {
  const { pending } = useFormStatus();
  return (
    <Button
      variant={variant}
      className={`${className} cursor-pointer`}
      type="submit"
      disabled={pending}
    >
      {pending ? (
        <>
          <Loader2 className="size-4 animate-spin" />
          <span>Chargement...</span>
        </>
      ) : (
        <>
          {icon && icon}
          <span>{text}</span>
        </>
      )}
    </Button>
  );
};

export default SubmitButton;
