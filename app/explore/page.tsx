import PagePadding from "@/components/PagePadding";
import Category from "./components/Category";
import {
  dymmyGenreList,
  getAllPlaylist,
  getSongListTop10,
} from "@/lib/dummyData";
import PlayListCarousel from "@/components/PlayListCarousel";
import SongListCarousel from "@/components/SongListCarousel";
import GenreListCarousel from "@/components/GenreListCarousel";

const page = async () => {
  const [playlistArray, songListTop10] = await Promise.all([
    getAllPlaylist(),
    getSongListTop10(),
  ]);

  return (
    <PagePadding>
      <div className="mt-4"></div>
      <Category />
      <div className="mt-20"></div>
      <PlayListCarousel playlistArray={playlistArray} title="새 앨범 및 싱글" />
      <div className="mt-20"></div>
      <SongListCarousel songListTop10={songListTop10} title="인기곡" />
      <div className="mt-20"></div>
      <GenreListCarousel title="분위기 및 장르" genreList={dymmyGenreList} />
      <div className="mt-20"></div>
      <div className="mt-20"></div>
    </PagePadding>
  );
};

export default page;
