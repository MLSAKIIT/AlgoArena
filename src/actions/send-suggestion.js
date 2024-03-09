"use server";

import { mailData } from "@/email/suggestion-email";
import { sendEmail } from "@/lib/emailer";

export const submitSuggestion = async (state, data) => {
  const suggestion = data.get("suggestions");
  if (!suggestion) return { error: "empty suggestion" };
  const res = await sendEmail(mailData(suggestion));
  return res;
};
