"use client";
import { getPosts, likePost, savePost } from "@/actions/post";
import SoloPost from "@/components/posts/SoloPost";
import React, { useEffect } from "react";

const AllPosts = () => {
  const [posts, setPosts] = React.useState([]);
  useEffect(() => {
    getPosts()
      .then((res) => {
        setPosts(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="container relative flex pt-20 flex-col items-center justify-center lg:px-0">
      {posts.map((post) => {
        return (
          <div key={post.id}>
            {<SoloPost post={post} />}{" "}
            <div className="flex gap-5 justify-evenly p-3">
              <button
                onClick={() => likePost(post.id, 1)}
                className="border p-3 rounded-md"
              >
                UpVote
              </button>
              <button
                onClick={() => likePost(post.id, 0)}
                className="border p-3 rounded-md"
              >
                DownVote
              </button>
              <button
                className="border p-3 rounded-md"
                onClick={() => savePost(post.id, 1, null)}
              >
                Star
              </button>
              <button
                className="border p-3 rounded-md"
                onClick={() => savePost(post.id, 1, null)}
              >
                UnStar
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AllPosts;
