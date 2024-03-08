import EditForm from "@/components/learningPath/edit/EditForm";
import React from "react";

const getLearningPathData = async (id) => {
  const data = await db.learningPath.findUnique({
    where: {
      id,
    },
    include: {
      user: {
        select: {
          name: true,
        },
      },
      sections: {
        include: {
          chapters: true,
        },
      },
    },
  });
  return data;
};

const EditPage = async ({ params }) => {
  const learningPathData = await getLearningPathData(params.id);
  return (
    <div className="h-screen flex justify-center mt-10">
      <EditForm learningPathData={learningPathData} />
    </div>
  );
};

export default EditPage;
