import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { CgClose } from "react-icons/cg";

export const Tags = ({ setFieldValue, value }) => {
  const [currentTag, setCurrentTag] = useState("");

  const removeTag = (_index) => {
    const newValue = value.filter((item, index) => index != _index);
    setFieldValue("tags", newValue);
  };

  const addTag = () => {
    if (currentTag.length > 1) {
      const newValue = [...value];
      newValue.push(currentTag);
      setFieldValue("tags", newValue);
      setCurrentTag("");
    }
  };
  return (
    <div className=" flex flex-col">
      <div className="flex flex-wrap gap-1">
        {value.map((tag, index) => (
          <div
            key={index}
            className="bg-color-2 text-nowrap text-xs  flex flex-row text-white gap-2 w-min  rounded-lg p-1  "
          >
            {tag}
            <button onClick={() => removeTag(index)}>
              <CgClose />
            </button>
          </div>
        ))}
      </div>
      <div className="flex mt-4 items-center justify-center gap-2 flex-row">
        <Input
          placeholder="Enter Tag"
          className="text-sm md:text-md"
          value={currentTag}
          onChange={(e) => {
            e.preventDefault();
            setCurrentTag(e.target.value);
          }}
        />
        <Button type="button" onClick={addTag}>
          Add
        </Button>
      </div>
    </div>
  );
};
