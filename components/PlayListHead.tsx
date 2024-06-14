import React from "react";
import Image from "next/image";
import { FiMoreVertical, FiPlay, FiFolder } from "react-icons/fi";
import IconButton from "./elements/IconButton";
import { getRandomElementFromArray } from "@/lib/utils";
import WhiteButton from "./elements/WhiteButton";
import DarkButton from "./elements/DarkButton";

interface PlaylistProps {
  id: number;
  owner: string;
  playlistName: string;
  songList: {
    name: string;
    channelId: number;
    channel: string;
    src: string;
    imageSrc: string;
  }[];
}

const PlayListHead: React.FC<{ playlist: PlaylistProps }> = ({ playlist }) => {
  const { playlistName, owner, songList } = playlist;

  const randomSong = getRandomElementFromArray(songList);
  return (
    <section>
      <div className="flex gap-[50px] flex-row ">
        <div className="relative size-[160px] lg:size-[240px] ">
          <Image
            fill
            src={randomSong?.imageSrc}
            alt="songImg"
            className="object-cover"
          />
        </div>
        <article className="flex flex-col justify-center">
          <div className="font-bold text-[28px]">{playlistName}</div>
          <div className="text-neutral-400 mt-4 text-[14px]">
            <div>{`앨범 • ${owner} • 2019`}</div>
            <div>{`${songList.length}곡 • 15분`}</div>
          </div>
          <ul className="hidden lg:flex *:text-[14px] *:cursor-pointer  gap-4 mt-4">
            <WhiteButton classname="w-[85px]" icon={<FiPlay />} label="재생" />
            <DarkButton
              classname="w-[135px]"
              icon={<FiFolder />}
              label="보관함에 저장"
            />
            <IconButton icon={<FiMoreVertical size={24} />} />
          </ul>
        </article>
      </div>
      <ul className="*:text-[14px] *:cursor-pointer flex gap-4 mt-4 lg:hidden">
        <WhiteButton classname="w-[85px]" icon={<FiPlay />} label="재생" />
        <DarkButton
          classname="w-[135px]"
          icon={<FiFolder />}
          label="보관함에 저장"
        />
        <IconButton icon={<FiMoreVertical size={24} />} />
      </ul>
    </section>
  );
};

export default PlayListHead;
