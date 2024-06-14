"use client";

import { Song } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  FiPlayCircle,
  FiThumbsUp,
  FiThumbsDown,
  FiMoreVertical,
} from "react-icons/fi";

import IconButton from "./elements/IconButton";

interface SongCardRowExpandProps {
  song: Song;
}

const SongCardRowExpand: React.FC<SongCardRowExpandProps> = ({ song }) => {
  const { channel, channelId } = song;
  const { push } = useRouter();
  const onClickChannel = () => {
    push(`/channel/${channelId}`);
  };
  return (
    <article className="flex items-center gap-4 h-[48px] w-full ml-3 relative group ">
      <div className="size-[48px] relative">
        <Image fill src={song.imageSrc} alt="img" className="object-cover" />
        <section className="hidden bg-black group-hover:flex items-center justify-center absolute top-0 size-[48px] cursor-pointer">
          <FiPlayCircle size={20} />
        </section>
      </div>

      <div className="flex gap-4 justify-between basis-1/3">
        <div className="w-[130px] truncate">{song.name}</div>
        <div
          onClick={onClickChannel}
          className="text-neutral-500 hover:underline cursor-pointer"
        >
          {channel}
        </div>
      </div>
      <section className="hidden group-hover:flex items-center absolute top-0 right-0  justify-end h-[48px] w-[120px] bg-[rgba(0,0,0,0.8)] ">
        <IconButton icon={<FiThumbsDown size={20} />} />
        <IconButton icon={<FiThumbsUp size={20} />} />
        <IconButton icon={<FiMoreVertical size={20} />} />
      </section>
    </article>
  );
};

export default SongCardRowExpand;
