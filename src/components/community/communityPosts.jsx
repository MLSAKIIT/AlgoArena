"use client";
import React from "react";
import Image from "next/image";
import CommunityContent from "./communityContent";
import { VscTriangleUp } from "react-icons/vsc";
import { VscTriangleDown } from "react-icons/vsc";
import { FaBookmark, FaRegBookmark, FaShare } from "react-icons/fa";
import { TfiCommentAlt } from "react-icons/tfi";
import CommunityComment from "./communityComment";
import { likePost, savePost } from "@/actions/post";
import { useSession } from "next-auth/react";

const CommunityPosts = ({ post, revalidatePosts }) => {
  const stringToColour = (str) => {
    let hash = 0;
    str.split("").forEach((char) => {
      hash = char.charCodeAt(0) + ((hash << 5) - hash);
    });
    let colour = "#";
    for (let i = 0; i < 3; i++) {
      const value = (hash >> (i * 8)) & 0xff;
      colour += value.toString(16).padStart(2, "0");
    }
    return colour;
  };
  const session = useSession();

  const liked = post.postLikes.reduce((acc, element) => {
    if (session.data && element.userId === session.data.user.id) {
      if (element.type === "LIKE") {
        return 1; // User has liked the post
      } else {
        return 2; // User has disliked the post
      }
    }
    return 0;
  }, 0);

  const saved = post.savedPosts.reduce((acc, element) => {
    if (session.data && element.userId === session.data.user.id) {
      return true;
    }
    return false;
  }, 0);

  const likeState = {
    Dislike: 0,
    Like: 1,
  };
  const updateVote = async (state) => {
    console.log(post);
    likePost(post.id, state, session.data.user.id);
    revalidatePosts();
  };
  return (
    <section className="my-4">
      <div className=" border-solid border-purple-500 rounded-lg border-2 p-6 text-white hover:text-color-2 hover:shadow-[0_0_16px_3px_#4a0f87] hover:scale-102 hover:backdrop-blur-sm transition-all">
        <div className="flex">
          <div
            style={{ backgroundColor: stringToColour(post.user.name) }}
            className={`mr-6 mt-1 relative h-10 w-10 border-2 border-color-2 rounded-full`}
          >
            <div className="absolute text-white top-1 text-center bottom-0 m-auto left-0 right-0 text-2xl font-bold">
              {post.user.name[0]}
            </div>
          </div>
          <div>
            <p className="sm:text-md text-sm font-bold">From: {post.domain}</p>
            <p className="sm:text-md text-sm">
              User {post.user.name} Posted on{" "}
              {new Date(post.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>
        <p className="font-bold text-xl md:text-3xl my-4">{post.title}</p>
        <CommunityContent content={post.content} />
        <div className="flex justify-between">
          <button
            disabled={!session.data}
            onClick={() => updateVote(likeState.Dislike)}
            className={`${
              liked === 2 ? "text-red-400" : "text-white"
            } flex hover:text-color-2 hover:drop-shadow-glow transition-all`}
          >
            <VscTriangleDown className="mr-2 text-5xl" />
            <p className="pt-3 ">
              {post.postLikes.filter((like) => like.type === "DISLIKE").length}
            </p>
          </button>
          <button
            disabled={!session.data}
            onClick={() => updateVote(likeState.Like)}
            className={`${
              liked === 1 ? "text-green-400" : "text-white"
            } flex hover:text-color-2 hover:drop-shadow-glow transition-all`}
          >
            <VscTriangleUp className="mr-2 text-5xl" />
            <p className="pt-3">
              {post.postLikes.filter((like) => like.type === "LIKE").length}
            </p>
          </button>
          <button
            disabled={!session.data}
            className="flex pt-3  text-white hover:text-color-2 hover:drop-shadow-glow transition-all"
            onClick={() => {
              savePost(post.id, session.data.user.id);
              revalidatePosts();
            }}
          >
            {saved ? (
              <FaBookmark className="mr-2 text-3xl" />
            ) : (
              <FaRegBookmark className="mr-2 text-3xl" />
            )}
            <p>{post.savedPosts.length}</p>
          </button>

          {/* <div className="flex pt-3">
            <TfiCommentAlt className="mr-2 text-3xl" />
            <p>XX.X</p>
          </div> */}
        </div>
      </div>
      {/* <div className="text-right">
        <CommunityComment />
      </div> */}
    </section>
  );
};

export default CommunityPosts;
