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
import { domains, tags } from "@/constants";
import { postSchema } from "@/schemas/posts/new-post";
import Link from "next/link";
import { toast } from "sonner";
import { createPost } from "@/actions/post";
import { useRouter } from "next/navigation";

const CreatePostForm = () => {
  const router = useRouter()
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
      tech: "",
    },
    validationSchema: postSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        const newPost = await createPost(values);
        if (newPost && !newPost.error) {
          toast.success("Post created successfully")
          router.push("/community")
        } else {
          const errorMessage = newPost
            ? newPost.error
            : "Something went wrong. Please try again.";
          toast.error(errorMessage);
        }
        resetForm({ title: "", content: "", domain: "", tech: "" });
      } catch (error) {
        console.error(error);
        toast.error(error.message);
      }
    },
  });

  return (
    <form onSubmit={handleSubmit} className="space-y-8 p-4 ">
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-3xl text-white">Create a Post</CardTitle>
        </CardHeader>
        <hr className="border-t-3 border-color-2 mb-5"></hr>
        <CardContent className="grid gap-4">
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
              <Label htmlFor="name">Tech</Label>
              <SelectComponent
                name="tech"
                value={values.tech}
                id="tech"
                options={tags[values.domain]}
                onChange={handleChange}
              />
              {errors.tech && (
                <p className="text-red-500 text-sm">{errors.tech}</p>
              )}
            </div>
          )}
          <div className="grid gap-2">
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
        </CardContent>
        <hr className="border-t-3 border-color-2 mb-5"></hr>
      </Card>
      <div className="flex justify-end pr-10 pt-3 ">
        <Link href="/community">
          <Button
            className="bg-white pl-6 pr-6  text-purple-500 border-white border font-bold rounded-full shadow-[0_0_1rem_0px_#9d5ae3] p-  transition-colors duration-300 hover:text-white"
            type="submit"
          >
            Cancel
          </Button>
        </Link>
        <Button
          className="ml-10 pl-8 pr-8  hover:bg-purple-800 "
          type="submit"
          disabled={isSubmitting}
        >
          Post
          {isSubmitting && <Loader2 className="animate-spin h-4 w-4 ml-2" />}
        </Button>
      </div>
    </form>
  );
};

export default CreatePostForm;
