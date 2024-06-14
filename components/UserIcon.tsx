import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

const UserIcon = ({ size = "sm" }) => {
  return (
    <Avatar className={cn("size-[26px]" && size === "lg" && "size-[56px]")}>
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
};

export default UserIcon;
