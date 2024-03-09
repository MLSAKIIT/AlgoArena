"use server";

import { authOptions } from "@/server/auth/options";
import { getServerSession } from "next-auth";
const { db } = require("@/server/db");

const getDomainPaths = async (domain, userId) => {
  try {
    const learningPaths = await db.learningPath.findMany({
      orderBy: {
        id: "asc",
      },
      take: 10,
      where: {
        domain,
      },
      include: {
        savedLearningPaths: true,
        sections: {
          include: {
            chapters: {
              include: {
                userProgress: {
                  where: {
                    userId,
                  },
                },
              },
            },
          },
        },
      },
    });

    return learningPaths;
  } catch (error) {
    throw error;
  }
};

const getRandomPaths = async () => {
  try {
    const learningPaths = await db.learningPath.findMany({
      orderBy: {
        id: "asc",
      },
      take: 10,
      where: {
        id: {
          in: (
            await db.learningPath.findMany({
              orderBy: {
                id: "asc",
              },
              select: {
                id: true,
              },
              skip: Math.floor(Math.random() * (await db.learningPath.count())),
              take: 10,
            })
          ).map(({ id }) => id),
        },
      },
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
    throw error;
  }
};
const getCommonDomain = (array) => {
  if (array.length == 0) return [];
  let modeMap = {};
  let maxEl = array[0],
    maxCount = 1;
  for (let i = 0; i < array.length; i++) {
    let el = array[i];
    if (modeMap[el] == null) modeMap[el] = 1;
    else modeMap[el]++;
    if (modeMap[el] > maxCount) {
      maxEl = el;
      maxCount = modeMap[el];
    }
  }
  return maxEl;
};

const getDomainArray = (domainArray) => {
  if (domainArray.length === 0) return [];

  const array = [];

  domainArray.forEach((element) => {
    array.push(element.learningPath.domain);
  });

  return array;
};

export const getRecommendedPaths = async () => {
  const session = await getServerSession(authOptions);
  if (!session) {
    const learningPath = await getRandomPaths();
    return learningPath;
  }

  try {
    const learningPathDomains = await db.savedLearningPath.findMany({
      where: {
        userId: session.user.id,
      },
      select: {
        learningPath: {
          select: {
            domain: true,
          },
        },
      },
      take: 10,
    });

    if (learningPathDomains.length === 0) {
      const learningPath = await getRandomPaths();
      return learningPath;
    }
    const domainArray = getDomainArray(learningPathDomains);

    const commonDomain = getCommonDomain(domainArray);

    const learningPath = await getDomainPaths(commonDomain, session.user.id);

    return learningPath;
  } catch (error) {
    console.error("Error fetching learning paths:", error);
    return { error: "Failed to fetch learning paths" };
  }
};
