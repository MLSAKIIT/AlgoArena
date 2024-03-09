"use server";

import { db } from "@/server/db";

export const createPost = async (data, userId) => {
  const { title, content, domain, tech } = data;
  const newPost = await db.post.create({
    data: {
      title: title,
      content: content,
      domain: domain,
      tags: tech,
      user: { connect: { id: userId } },
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

export const likePost = async (postId, state, userId) => {
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

export const savePost = async (postId, userId) => {
  try {
    const existingSavedPost = await db.savedPost.findFirst({
      where: { postId_userId: { postId: postId, userId: userId } },
    });

    if (!existingSavedPost) {
      const newSavedPost = await db.savedPost.create({
        data: {
          user: { connect: { id: userId } },
          post: { connect: { id: postId } },
        },
      });
      return { message: "Saved a Post", savedPostId: newSavedPost.id };
    } else {
      await db.savedPost.delete({ where: { id: existingSavedPost.id } });
      return { message: "Unsaved a Post" };
    }
  } catch (error) {
    console.error("Error saving post:", error);
    return {
      error: error.message || "An error occurred while saving the post",
    };
  }
};
