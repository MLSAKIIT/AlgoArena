"use server";

import { domains } from "@/constants";
import { authOptions } from "@/server/auth/options";
import { db } from "@/server/db";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const CreatePath = async (data) => {
  const session = await getServerSession(authOptions);

  try {
    const path = await db.learningPath.create({
      data: {
        title: data.title,
        description: data.description,
        domain: data.domain,
        isPublished: true,
        isForked: false,
        tags: data.tags,
        user: { connect: { id: session.user.id } },
      },
    });

    data.sections.forEach(async (section) => {
      let createdSection;
      createdSection = await db.section.create({
        data: {
          title: section.title,
          learningPathId: path.id,
        },
      });

      section.chapters.forEach(async (chapter) => {
        let createdChapter;
        createdChapter = await db.chapter.create({
          data: {
            title: chapter.title,
            content: chapter.content,
            sectionId: createdSection.id,
          },
        });
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
