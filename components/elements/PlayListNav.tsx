"use client";

import React from "react";
import { IoMdPlayCircle } from "react-icons/io";

export interface IPlayList {
  id: number;
  owner: string;
  playlistName: string;
  songList: {
    name: string;
    channelId: number;
    channel: string;
    src: string;
    imageSrc: string;
  };
}
const PlayListNav = ({ playlist }: { playlist: any }) => {
  const onClickPlay = () => {};
  return (
    <li className="mx-3 px-4 h-[56px] flex justify-between items-center hover:bg-neutral-700 rounded-lg group">
      <div>
        <div className="text-[14px]">{playlist.playlistName}</div>
        <div className="text-[12px] text-neutral-500">{playlist.owner}</div>
      </div>
      <div>
        <div
          onClick={onClickPlay}
          className="hidden group-hover:block cursor-pointer"
        >
          <IoMdPlayCircle size={30} />
        </div>
      </div>
    </li>
  );
};

export default PlayListNav;
