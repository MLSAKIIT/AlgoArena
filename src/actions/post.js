"use server";

import { db } from "@/server/db";
import { type } from "os";

export const createPost = async (data) => {
  const { title, content, domain, tech } = data;
  const newPost = await db.post.create({
    data: {
      title: title,
      content: content,
      domain: domain,
      tags: tech,
      // TODO: Replace with the user's id ( get from the session )
      user: { connect: { id: "65e6261cbf92a412117be2ab" } },
    },
  });
  if (!newPost) return { error: "Post not created" };
  return newPost;
};

export const getPosts = async () => {
  const posts = await db.post.findMany({
    include: { user: true, postLikes: true, savedPosts: true },
  });
  if (!posts) return { error: "No posts found" };
  return posts;
};

export const likePost = async (postId, state) => {
  const userId = "65e6261cbf92a412117be2ab";
  console.log("Like Post Executed");
  try {
    if (postId && userId) {
      const existingPostLike = await db.postLike.findFirst({
        where: {
          userId: userId,
          postId: postId,
        },
      });

      if (existingPostLike) {
        await db.postLike.update({
          where: { id: existingPostLike.id },
          data: { type: state === 1 ? "LIKE" : "DISLIKE" },
        });
        return { message: state === 1 ? "Liked Post" : "Disliked Post" };
      } else {
        const postLike = await db.postLike.create({
          data: {
            user: { connect: { id: userId } },
            post: { connect: { id: postId } },
            type: state === 1 ? "LIKE" : "DISLIKE",
          },
        });
        return { message: state === 1 ? "Liked Post" : "Disliked Post" };
      }
    } else {
      throw new Error("Unknown error occurred");
    }
  } catch (error) {
    console.log(error);
    return { error: error.message };
  }
};

export const savePost = async (postId, state, savePostId) => {
  // state = 1 : Save a Post
  // state = 0 : Un Save a Post
  console.log("Save Post Executed");
  try {
    if (state === 1) {
      const savePost = await db.savedPost.create({
        data: {
          user: { connect: { id: "65e6261cbf92a412117be2ab" } },
          post: { connect: { id: postId } },
        },
      });
      return { message: "Saved a Post" };
    } else if (state === 0) {
      const savePost = await db.savedPost.delete({
        where: { id: savePostId },
      });
      return { message: "UnSaved a Post" };
    }
  } catch (error) {
    console.log(error);
    return { error: error.message };
  }
};
