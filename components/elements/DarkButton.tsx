import { cn } from "@/lib/utils";
import React from "react";

interface WhiteButtonProps {
  icon: React.ReactNode;
  classname?: string | undefined;
  label: string;
}

const DarkButton = ({ icon, label, classname, ...props }: WhiteButtonProps) => {
  return (
    <div
      className={cn(
        "bg-black text-white border border-neutral-700 hover:bg-neutral-700 rounded-2xl flex items-center min-w-[80px] h-[36px] p-4 gap-2",
        classname
      )}
      {...props}
    >
      <span>{icon}</span>
      <span>{label}</span>
    </div>
  );
};

export default DarkButton;
