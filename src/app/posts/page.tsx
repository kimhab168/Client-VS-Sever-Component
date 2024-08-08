// "use client"; // If you're using Next.js or a similar framework

import React, { useEffect, useState } from "react";
import PostComponent from "./post-component";
import fetchData from "./fetchData";

interface Post {
  albumId: string;
  id: string;
  title: string;
  url: string;
  thumbnailUrl: string;
}

const Posts: React.FC = async () => {
  // const [posts, setPosts] = useState<Post[]>([]);
  // const [loading, setLoading] = useState<boolean>(true);
  // const [error, setError] = useState<string | null>(null);
  const posts = await fetchData();

  // useEffect(() => {
  //   const loadPosts = async () => {
  //     try {
  //       const data: Post[] = await fetchData();
  //       setPosts(data);
  //     } catch (error) {
  //       setError("Failed to fetch posts");
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   loadPosts();
  // }, []);
  // console.log(posts);
  // if (posts) {
  // }
  // if (loading)
  //   return (
  //     <div className="text-7xl text-red-600 w-full h-full flex justify-center items-center">
  //       Loading...
  //     </div>
  //   );
  // if (error) return <div>{error}</div>;

  return (
    <div className="w-full grid grid-cols-4 place-items-center py-24 gap-y-7">
      {/* <h1>Posts</h1> */}
      {posts.map((post) => (
        <PostComponent
          key={post.albumId}
          albumId={post.albumId}
          id={post.id}
          title={post.title}
          url={post.url}
          thumbnailUrl={post.thumbnailUrl}
        />
      ))}
    </div>
  );
};

export default Posts;
