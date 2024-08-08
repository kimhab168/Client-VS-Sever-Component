"use client";
import React, { useEffect, useState } from "react";
import fetchData from "./fetchData";
import Image from "next/image";
interface Post {
  albumId: string;
  id: string;
  title: string;
  url: string;
  thumbnailUrl: string;
}
const PostDetail = ({
  params,
}: {
  params: {
    postId: string;
  };
}) => {
  const [dataDetail, setDataDetail] = useState<Post | null>(null);
  // const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  useEffect(() => {
    const loadDetail = async () => {
      try {
        // setLoading(true);
        const data = await fetchData(params.postId);
        setDataDetail(data);
        // setLoading(false);
      } catch (error) {
        setError("Failed to fetch posts: " + error);
      } finally {
        // setLoading(false);
      }
    };
    loadDetail();
  }, [params.postId]);
  // if (loading)
  //   return (
  //     <div className="text-7xl text-red-600 w-full h-full flex justify-center items-center">
  //       Loading...
  //     </div>
  //   );
  if (error) return <div>{error}</div>;
  return (
    <div className="w-full h-full pt-20 flex flex-col justify-center items-center">
      <h1>Post Detail</h1>
      <h1>
        Album ID: {dataDetail?.albumId} ID: {dataDetail?.id}
      </h1>
      <h1>{dataDetail?.title}</h1>
      {dataDetail ? (
        <Image src={dataDetail.url} width={400} height={400} alt="" />
      ) : (
        ""
      )}
      <h1>Thumbnal Url: {dataDetail?.thumbnailUrl}</h1>
      <h1>Url: {dataDetail?.url}</h1>
    </div>
  );
};

export default PostDetail;
