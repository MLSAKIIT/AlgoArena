"use client";
import { getPosts, likePost, savePost } from "@/app/actions/post";
import SoloPost from "@/components/posts/SoloPost";
// import SoloPost from "@/components/posts/SoloPost";
import React, { useEffect } from "react";

const CreatePost = () => {
  const [posts, setPosts] = React.useState([]);
  useEffect(() => {
    getPosts()
      .then((res) => {
        console.log(res);
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
                onClick={() => likePost(post.id, post.authorId, 1)}
                className="border p-3 rounded-md"
              >
                Like a post
              </button>
              <button
                className="border p-3 rounded-md"
                onClick={() => savePost(post.id, post.authorId, 1)}
              >
                Save a Post
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CreatePost;
