import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import EditSectionForm from "./EditSectionForm";

const SectionComponent = ({ data, handleChange, index, deleteSection }) => {
  const [editing, setEditing] = useState(false);

  const handleChapterChange = (index, e) => {
    const newData = JSON.parse(JSON.stringify(data));
    const { name, value } = e.target;
    newData.chapters[index][name] = value;
    handleChange(index, newData);
  };

  const addChapter = () => {
    const newData = JSON.parse(JSON.stringify(data));
    newData.chapters.push({
      title: "untitled",
      content: "Content",
      // sectionId: data.id,
    });
    handleChange(index, newData);
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
        <div className="flex flex-col space-y-2 gap-4">
          <Input
            name="title"
            placeholder="title"
            rows={2}
            required
            type="text"
            value={data.title}
            className="text-center font-bold p-0"
            onChange={handleSectionChange}
          />
          {editing && (
            <EditSectionForm
              addChapter={addChapter}
              closeSelection={() => setEditForm(false)}
              handleChange={handleChapterChange}
              section={data}
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
