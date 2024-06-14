import { cn } from "@/lib/utils";
import React from "react";

interface WhiteButtonProps {
  icon: React.ReactNode;
  classname?: string | undefined;
  label: string;
}

const WhiteButton = ({
  icon,
  label,
  classname,
  ...props
}: WhiteButtonProps) => {
  return (
    <div
      className={cn(
        "bg-white text-black hover:bg-neutral-200 rounded-2xl flex items-center min-w-[80px] h-[36px] p-4 gap-2",
        classname
      )}
      {...props}
    >
      <span>{icon}</span>
      <span>{label}</span>
    </div>
  );
};

export default WhiteButton;
