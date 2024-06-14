import React from "react";
import Category from "./components/Category";
import PagePadding from "@/components/PagePadding";
import PlayListCarousel from "@/components/PlayListCarousel";
import { dummyPlaylistArray, getPlaylistById } from "@/lib/dummyData";
import UserIcon from "@/components/UserIcon";

const page = async () => {
  const dummyPlaylistArray1 = [...dummyPlaylistArray];
  const dummyPlaylistArray2 = [await getPlaylistById(1)];
  const dummyPlaylistArray3 = [await getPlaylistById(2)];
  const dummyPlaylistArray4 = [await getPlaylistById(3)];

  return (
    <PagePadding>
      <div className="min-h-[600px]">
        <div className="mt-9"></div>
        <Category />
        <div className="mt-12"></div>
        <PlayListCarousel
          playlistArray={[...dummyPlaylistArray1]}
          Thunmbnail={
            <div className="size-[56px]">
              <UserIcon size="lg" />
            </div>
          }
          title="다시 듣기"
          subTitle="김바"
        />
        <div className="mt-20"></div>
        <PlayListCarousel
          playlistArray={[...dummyPlaylistArray2]}
          Thunmbnail={
            <div className="size-[56px]">
              <UserIcon size="lg" />
            </div>
          }
          title="케이시 - Full Bloom"
          subTitle="새로운 앨범"
        />

        <div className="mt-20"></div>
        <PlayListCarousel
          playlistArray={[...dummyPlaylistArray3]}
          Thunmbnail={
            <div className="size-[56px]">
              <UserIcon size="lg" />
            </div>
          }
          title="커뮤니티 제목"
        />

        <div className="mt-20"></div>
        <PlayListCarousel
          playlistArray={[...dummyPlaylistArray4]}
          Thunmbnail={
            <div className="size-[56px]">
              <UserIcon size="lg" />
            </div>
          }
          title="커버 및 리믹스"
        />

        <div className="mt-20"></div>
        <PlayListCarousel
          playlistArray={[...dummyPlaylistArray1]}
          Thunmbnail={
            <div className="size-[56px]">
              <UserIcon size="lg" />
            </div>
          }
          title="커뮤니티 제목"
        />
      </div>
    </PagePadding>
  );
};

export default page;
