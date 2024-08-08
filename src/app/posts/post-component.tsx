"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
interface Post {
  albumId: string;
  id: string;
  title: string;
  url: string;
  thumbnailUrl: string;
}
const PostComponent: React.FC<Post> = ({ id, title, url, thumbnailUrl }) => {
  const router = useRouter();
  return (
    <div
      className="border border-slate-700 flex flex-col max-w-64 justify-center items-center p-5"
      onClick={() => router.push(`/posts/${id}`)}
    >
      <h1 className="w-full h-10 overflow-hidden text-3xl font-semibold text-center">
        {title}
      </h1>
      <Image src={url} alt={title} width={400} height={400} />
    </div>
  );
};

export default PostComponent;
