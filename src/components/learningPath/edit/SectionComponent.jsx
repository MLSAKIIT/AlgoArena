import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import EditSectionForm from "./EditSectionForm";

const SectionComponent = ({
  data,
  handleChange,
  index,
  deleteSection,
  setSection,
}) => {
  const [editing, setEditing] = useState(false);

  const addChapter = () => {
    setSection((prev) =>
      prev.map((section, i) => {
        if (index === i) {
          return {
            ...section,
            chapters: [
              ...section.chapters,
              { title: "untitled", content: "Content" },
            ],
          };
        }
        return section;
      })
    );
  };

  const handleChapterChange = (Cindex, e) => {
    setSection((prev) =>
      prev.map((section, i) => {
        if (index === i) {
          return {
            ...section,
            chapters: section.chapters.map((c, j) => {
              if (j === Cindex) {
                return { ...c, [e.target.name]: e.target.value };
              }
              return c;
            }),
          };
        }
        return section;
      })
    );
  };

  const handleSectionChange = (e) => {
    // setSection((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    const newData = JSON.parse(JSON.stringify(data));
    newData[e.target.name] = e.target.value;
    handleChange(index, newData);
  };

  return (
    <>
      <div className=" border-dotted border-2 border-color-2 w-full rounded-xl p-6 my-4">
        <div className="flex flex-col space-y-2 text-md gap-4">
          <Input
            name="title"
            placeholder="title"
            rows={2}
            required
            type="text"
            value={data.title}
            className="text-center  font-bold p-0"
            onChange={handleSectionChange}
          />
          {editing && (
            <EditSectionForm
              addChapter={addChapter}
              closeSelection={() => setEditForm(false)}
              handleChange={handleChapterChange}
              chapters={data.chapters}
            />
          )}
          <Button
            type="button"
            onClick={() => setEditing((value) => !value)}
            className="w-full"
          >
            {editing ? "Done" : "Edit Section"}
          </Button>
          <Button
            type="button"
            onClick={() => deleteSection(index)}
            className="w-full"
          >
            Delete Section
          </Button>
        </div>
      </div>
    </>
  );
};

export default SectionComponent;
