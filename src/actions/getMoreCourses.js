"use server"

import { ALLOWED_DOMAINS } from "@/constants";
import { authOptions } from "@/server/auth/options";
import { db } from "@/server/db";
import { getServerSession } from "next-auth";

export const getMoreCoursesData = async () => {
    try {
      const session = await getServerSession(authOptions);
      if (!session) return {};
  
      const domains = Object.values(ALLOWED_DOMAINS);
      const data = await Promise.all(
        domains.map(async (domain) => {
          const data = await db.savedLearningPath.count({
            where: {
              learningPath: {
                domain,
              },
            },
          });
          return {
            domain,
            stars: data,
          };
        })
      );
      return data;
    } catch (error) {
      console.log(error);
      return {};
    }
  };
  