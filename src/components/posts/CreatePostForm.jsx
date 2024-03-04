"use client";

import { useFormik } from "formik";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";
import SelectComponent from "./SelectComponent";
import { domains, tags } from "@/app/constants";
import { postSchema } from "@/schemas/posts/new-post";
import { createPost } from "@/app/actions/post";
import { toast } from "sonner";

const CreatePostForm = () => {
  const {
    values,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues: {
      title: "",
      content: "",
      domain: "",
      tags: "",
    },
    validationSchema: postSchema,
    onSubmit: async (values) => {
      try {
        const newPost = await createPost(values);
        if (newPost && !newPost.error) {
          toast.success("Post created successfully");
        } else {
          const errorMessage = newPost
            ? newPost.error
            : "Something went wrong. Please try again.";
          toast.error(errorMessage);
        }
      } catch (error) {
        console.error(error);
        toast.error(error.message);
      }
    },
  });

  return (
    <form onSubmit={handleSubmit} className="space-y-8 md:min-w-96 max-w-96">
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Create Post</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input
              name="title"
              placeholder="Title"
              type="text"
              value={values.title}
              onChange={handleChange}
              onBlur={handleBlur}
              className={cn(errors.title && "border-red-500")}
            />
            {errors.title && (
              <p className="text-red-500 text-sm">{errors.title}</p>
            )}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="name">Content</Label>
            <Textarea
              name="content"
              placeholder="Content"
              rows={10}
              type="text"
              value={values.content}
              onChange={handleChange}
              onBlur={handleBlur}
              className={cn(errors.content && "border-red-500")}
            />
            {errors.content && (
              <p className="text-red-500 text-sm">{errors.content}</p>
            )}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="name">Domain</Label>
            <SelectComponent
              name="domain"
              id="domain"
              value={values.domain}
              options={domains}
              onChange={handleChange}
            />
            {errors.domain && (
              <p className="text-red-500 text-sm">{errors.domain}</p>
            )}
          </div>
          {values.domain && (
            <div className="grid gap-2">
              <Label htmlFor="name">Tags</Label>
              <SelectComponent
                name="tags"
                value={values.tags}
                id="tags"
                options={tags[values.domain]}
                onChange={handleChange}
              />
              {errors.tags && (
                <p className="text-red-500 text-sm">{errors.tags}</p>
              )}
            </div>
          )}
          <Button className="w-full" type="submit" disabled={isSubmitting}>
            Create Post
            {isSubmitting && <Loader2 className="animate-spin h-4 w-4 ml-2" />}
          </Button>
        </CardContent>
      </Card>
    </form>
  );
};

export default CreatePostForm;
