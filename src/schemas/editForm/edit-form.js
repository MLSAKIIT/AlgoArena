import { ALLOWED_DOMAINS } from "@/constants";
import * as yup from "yup";

export const editFormSchema = yup.object({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Content is required"),
  domain: yup
    .string()
    .oneOf(Object.keys(ALLOWED_DOMAINS), "Invalid domain")
    .required("Domain is required"),
  tags: yup
    .array()
    .of(yup.string())
    .min(1, "Tags are required")
    .required("Tags are required"),
});
