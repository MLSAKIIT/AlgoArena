"use server";

import { redirect } from "next/navigation";

export const searchAction = async (formData) => {
  const query = formData.get("query");
  const domain = formData.get("domain");
  const url = new URLSearchParams({
    q: query,
  });
  redirect(`/learning-paths/${domain}?${url.toString()}`);
};
