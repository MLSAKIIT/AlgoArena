"use server";

import { getServerSession } from "next-auth";
const { db } = require("@/server/db");

export const getPopularPaths = async () => {
  try {
    const learningPaths = await db.learningPath.findMany({
      orderBy: {
        savedLearningPaths: {
          _count: "desc",
        },
      },
      take: 10,
      include: {
        savedLearningPaths: true,
        sections: {
          include: {
            chapters: true,
          },
        },
      },
    });

    return learningPaths;
  } catch (error) {
    console.error("Error fetching learning paths:", error);
    return { error: "Failed to fetch learning paths" };
  }
};
