import { domains, tags } from "@/constants";
import * as yup from "yup";

export const postSchema = yup.object({
  title: yup.string().min(3).required("Title is required"),
  content: yup.string().required("Content is required"),
  domain: yup
    .string()
    .oneOf(domains, "Invalid Domain")
    .required("Domain is required"),
  tech: yup.string().when("domain", (domain, schema) => {
    const availableTags = tags[domain] || [];
    return schema
      .required("Tech is required")
      .oneOf(availableTags, "Inavlid Tech");
  }),
});
