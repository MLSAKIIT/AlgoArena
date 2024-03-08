"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const SoloPost = ({ post }) => {
  return (
    <Card>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl"></CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div>Post Id : {post.id}</div>
        <div>Title : {post.title}</div>
        <div>Content : {post.content}</div>
        <div>Tags : {post.tags}</div>
        <div>Domain : {post.domain}</div>
        <div>Author : {post.user.name}</div>
        <div>Author Email : {post.user.email}</div>
        <div>Author Id : {post.user.id}</div>
        <div>Created At : {new Date(post.createdAt).toISOString()}</div>
        <div>PostLikes : {post.postLikes.length}</div>
        <div>PostSaved : {post.savedPosts.length}</div>
      </CardContent>
    </Card>
  );
};

export default SoloPost;
