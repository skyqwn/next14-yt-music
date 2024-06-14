"use client";

import { cn } from "@/lib/utils";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";

import { AiFillCaretDown } from "react-icons/ai";
import { FiCheck } from "react-icons/fi";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import React from "react";

type Checked = DropdownMenuCheckboxItemProps["checked"];

const Category = () => {
  const libraryCategory = ["재생목록", "팟캐스트", "노래", "앨범", "아티스트"];

  return (
    <div className=" flex justify-between items-center gap-4 flex-wrap">
      <ul className="max-w-full overflow-x-auto flex gap-4">
        {libraryCategory.map((item) => {
          return (
            <li
              key={item}
              className={cn(
                "h-[38px] min-w-fit px-3 flex justify-center items-center border border-transparent rounded-lg bg-[rgba(144,144,144,0.2)] hover:bg-[rgba(144,144,144,0.45)] cursor-pointer"
              )}
            >
              {item}
            </li>
          );
        })}
      </ul>
      <div>
        {" "}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="flex items-center justify-between w-[162px] h-[42px] p-4 bg-neutral-600 border border-neutral-500 rounded-3xl text-[14px]  ">
              <div>최근활동</div>
              <div>
                <AiFillCaretDown />
              </div>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-[300px] bg-neutral-800">
            <DropdownMenuLabel className="p-4">정렬기준</DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-neutral-700" />
            <DropdownMenuCheckboxItem className="p-4">
              <span className="min-w-[40px]">
                <FiCheck />
              </span>
              최근 활동
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem className="p-4">
              <span className="min-w-[40px]"></span>
              최근에 저장됨
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem className="p-4">
              <span className="min-w-[40px]"></span>
              최근 재생한 음악
            </DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Category;
