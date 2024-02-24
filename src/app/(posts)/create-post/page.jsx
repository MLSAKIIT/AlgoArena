import CreatePostForm from "@/components/posts/CreatePostForm";
import React from "react";

const CreatePost = () => {
  return (
    <div className="container relative flex pt-20 flex-col items-center justify-center lg:px-0">
      <CreatePostForm />
    </div>
  );
};

export default CreatePost;
