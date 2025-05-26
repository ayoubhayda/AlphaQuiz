import React from "react";
import { Button } from "@/components/ui/button";
import { Ban, RotateCcw } from "lucide-react";
import Link from "next/link";

interface iAppProps {
  title: string;
  description: string;
  buttonText: string;
  href: string;
  className?: string
}

const EmptyState = ({ buttonText, description, href, title, className = "" }: iAppProps) => {
  return (
    <div className={`flex flex-col flex-1 h-full items-center justify-center rounded-xl border p-8 text-center animate-in fade-in-50 ${className}`}>
      <div className="flex size-20 items-center justify-center rounded-full bg-primary/10">
        <Ban className="size-10 text-primary" />
      </div>
      <h2 className="mt-6 text-xl font-semibold">{title}</h2>
      <p className="mb-8 mt-2 text-center text-sm leading-tight text-muted-foreground max-w-sm mx-auto">
        {description}
      </p>

      <Button asChild>
        <Link href={href} className="text-white">
          <RotateCcw className="size-4 ml-1" /> {buttonText} 
        </Link>
      </Button>
    </div>
  );
};

export default EmptyState;
