"use server";

import { db } from "@/server/db";

export const createPost = async (data) => {
  const { title, content, domain, tags } = data;
  const newPost = await db.post.create({
    data: {
      title: title,
      content: content,
      domain: domain,
      tags: tags,
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

export const likePost = async (postId, state, postLikeId) => {
  // state = 1 : Like Post
  // state = 0 : Dislike Post
  console.log("Like Post Executed");
  try {
    if (state === 1 && postId && "65e6261cbf92a412117be2ab") {
      const postLike = await db.postLike.create({
        data: {
          user: { connect: { id: "65e6261cbf92a412117be2ab" } },
          post: { connect: { id: postId } },
        },
      });
      return { message: "Liked Post" };
    } else if (state === 0 && postLikeId) {
      const postLike = await db.postLike.delete({
        where: { id: postLikeId },
      });
      return { message: "UnLiked Post" };
    } else {
      throw new Error("Unknown error occured");
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
