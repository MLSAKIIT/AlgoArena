"use server";

import { domains } from "@/constants";
import { authOptions } from "@/server/auth/options";
import { db } from "@/server/db";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const SubmitEditedFork = async (data) => {
  try {
    await db.learningPath.update({
      data: {
        title: data.title,
        description: data.description,
        domain: data.domain,
        tags: data.tags,
      },
      where: {
        id: data.id,
      },
    });

    data.sections.forEach(async (section) => {
      let createdSection;
      if (section.id) {
        createdSection = await db.section.update({
          data: {
            title: section.title,
            learningPathId: section.learningPathId,
          },
          where: {
            id: section.id,
          },
        });
      } else {
        createdSection = await db.section.create({
          data: {
            title: section.title,
            learningPathId: section.learningPathId,
          },
        });
      }

      section.chapters.forEach(async (chapter) => {
        let createdChapter;
        if (chapter.id) {
          createdChapter = await db.chapter.update({
            data: {
              title: chapter.title,
              content: chapter.content,
              sectionId: createdSection.id,
            },
            where: {
              id: chapter.id,
            },
          });
        } else {
          createdSection = await db.chapter.create({
            data: {
              title: chapter.title,
              content: chapter.content,
              sectionId: createdSection.id,
            },
          });
        }
      });
    });
    console.log(data);
    data.sections.forEach((element) => {});
    return {
      success: "Learning path forked successfully",
    };
  } catch (error) {
    console.error(error);
    return { error: "Something went wrong" };
  }
};
