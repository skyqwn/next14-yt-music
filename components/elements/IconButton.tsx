"use client";

import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const IconButton = ({
  icon,
  onClickIcon,
}: {
  icon: React.ReactNode;
  onClickIcon?: () => void;
}) => {
  return (
    <div
      onClick={onClickIcon}
      className="flex justify-center items-center w-[36px] h-[36px] hover:bg-[rgba(144,144,144,0.45)] rounded-full cursor-pointer transition"
    >
      {icon}
    </div>
  );
};

export default IconButton;
