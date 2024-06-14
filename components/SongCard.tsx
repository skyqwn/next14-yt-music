import { TopSong } from "@/types";
import Image from "next/image";

import { FaCircle } from "react-icons/fa";
import {
  FiPlayCircle,
  FiThumbsUp,
  FiThumbsDown,
  FiMoreVertical,
} from "react-icons/fi";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import IconButton from "./elements/IconButton";

interface SongCardProps {
  song: TopSong;
}

const SongCard: React.FC<SongCardProps> = ({ song }) => {
  return (
    <article className="flex items-center gap-4 h-[48px] w-full ml-3 relative group ">
      <div className="size-[48px] relative">
        <Image fill src={song.imageSrc} alt="img" className="object-cover" />
        <section className="hidden bg-black group-hover:flex items-center justify-center absolute top-0 size-[48px] cursor-pointer">
          <FiPlayCircle size={20} />
        </section>
      </div>
      <div className="flex  items-center gap-4">
        <div>
          {song.rank === song.prevRank ? (
            <FaCircle size={10} />
          ) : song.rank > song.prevRank ? (
            <AiOutlineCaretUp size={10} color="#3CA63F" />
          ) : (
            <AiOutlineCaretDown size={10} color="#FF0000" />
          )}
        </div>
        <div>{song.rank + 1}</div>
      </div>
      <div>
        <div>{song.name}</div>
      </div>
      <section className="hidden group-hover:flex items-center absolute top-0 right-0  justify-end h-[48px] w-1/2 bg-[rgba(0,0,0,0.8)] ">
        <IconButton icon={<FiThumbsDown size={20} />} />
        <IconButton icon={<FiThumbsUp size={20} />} />
        <IconButton icon={<FiMoreVertical size={20} />} />
      </section>
    </article>
  );
};

export default SongCard;
