import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import EditSectionForm from "./EditSectionForm";

const SectionComponent = ({
  data,
  handleChange,
  index,
  deleteSection,
  editCurrentSelection,
}) => {
  const [editing, setEditing] = useState(false);
  const [section, setSection] = useState(data);
  const handleChapterChange = (index, e) => {
    setSection((prev) => {
      const newData = JSON.parse(JSON.stringify(prev));
      newData.chapters[index][e.target.name] = e.target.value;
      return newData;
    });
  };
  const addChapter = () => {
    setSection((prev) => ({
      ...prev,
      chapters: [...prev.chapters].push({
        title: "untitled",
        content: "testContent",
        sectionId: section.id,
      }),
    }));
  };
  const handleSectionChange = (e) => {
    handleChange(index, { ...section, title: e.target.value });
  };
  return (
    <>
      <div className=" border-dotted border-2 border-color-2 w-full rounded-xl p-6 my-4">
        <div className="flex flex-col space-y-2 gap-4">
          <Input
            name="description"
            placeholder="Description"
            rows={2}
            type="text"
            value={section.title}
            className="text-center font-bold p-0"
            onChange={handleSectionChange}
          />
          {editing && (
            <EditSectionForm
              addChapter={addChapter}
              closeSelection={() => setEditForm(false)}
              handleChange={handleChapterChange}
              section={section}
            />
          )}
          <Button
            onClick={() => setEditing((value) => !value)}
            className="w-full"
          >
            {editing ? "Done" : "Edit Section"}
          </Button>
          <Button onClick={() => deleteSection(index)} className="w-full">
            Delete Section
          </Button>
        </div>
      </div>
    </>
  );
};

export default SectionComponent;
