import { TopSong } from "@/types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import PlayListCard from "./PlayListCard";
import { chunkArray } from "@/lib/utils";
import SongCard from "./SongCard";

interface SongListCarouselProps {
  title: string;
  subTitle?: string;
  Thunmbnail?: React.ReactNode;
  songListTop10: TopSong[];
}

const SongColumn = ({ songList }: { songList: TopSong[] }) => {
  return (
    <div className="space-y-4">
      {songList.map((song, index) => {
        return <SongCard key={index} song={song} />;
      })}
    </div>
  );
};

const SongListCarousel: React.FC<SongListCarouselProps> = ({
  title,
  Thunmbnail,
  songListTop10,
  subTitle,
}) => {
  const chunkedTop10SongList = chunkArray(songListTop10, 4) as TopSong[][];

  return (
    <div className="w-full">
      <Carousel>
        <div className="flex justify-between items-end my-2">
          <article className="flex flex-row gap-3">
            {Thunmbnail}
            <div className="flex flex-col justify-center">
              <div>
                {subTitle && <div className="text-neutral-500">{subTitle}</div>}
              </div>
              <div className="text-[34px] font-bold leading-[34px]">
                {title}
              </div>
            </div>
          </article>
          <div className="relative left-[-45px]">
            <div className="absolute bottom-[20px]">
              <CarouselPrevious className="right-2" />
              <CarouselNext className="left-2" />
            </div>
          </div>
        </div>
        <CarouselContent className="mt-4">
          {chunkedTop10SongList?.map((songList, index) => {
            return (
              <CarouselItem key={index} className=" lg:basis-1/2 ">
                <SongColumn songList={songList} />
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default SongListCarousel;
