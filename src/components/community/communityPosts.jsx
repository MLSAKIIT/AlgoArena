"use client";
import React from "react";
import Image from "next/image";
import CommunityContent from "./communityContent";
import { VscTriangleUp } from "react-icons/vsc";
import { VscTriangleDown } from "react-icons/vsc";
import { FaShare } from "react-icons/fa";
import { TfiCommentAlt } from "react-icons/tfi";
import CommunityComment from "./communityComment";
import { likePost } from "@/actions/post";

const CommunityPosts = ({ post }) => {
  return (
    <section className="my-4">
      <div className=" border-solid border-purple-500 rounded-lg border-2 p-6 text-white">
        <div className="flex">
          <div className="mr-6 mt-1 h-10 w-10 border-2 border-slate-500 bg-slate-500 rounded-full">
            {/* <Image alt="user_img" /> */}
          </div>
          <div>
            <p className="font-bold">From: {post.domain}</p>
            <p>
              User {post.user.name} Posted on{" "}
              {new Date(post.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>
        <p className="font-bold text-3xl my-4">{post.title}</p>
        <CommunityContent content={post.content} />
        <div className="flex justify-between">
          <button onClick={() => likePost(post.id, 0)} className="flex">
            <VscTriangleDown className="mr-2 text-5xl" />
            <p className="pt-3">
              {post.postLikes.filter((like) => like.type === "DISLIKE").length}
            </p>
          </button>
          <button onClick={() => likePost(post.id, 1)} className="flex">
            <VscTriangleUp className="mr-2 text-5xl" />
            <p className="pt-3">
              {post.postLikes.filter((like) => like.type === "LIKE").length}
            </p>
          </button>
          <div className="flex pt-3">
            <FaShare className="mr-2 text-3xl" />
            <p>{post.savedPosts.length}</p>
          </div>

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
