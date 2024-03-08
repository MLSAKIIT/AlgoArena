"use client";
import SelectComponent from "@/components/posts/SelectComponent";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { domains } from "@/constants";
import { cn } from "@/lib/utils";
import { Label } from "@radix-ui/react-label";
import { useFormik } from "formik";
import React, { useState } from "react";
import EditSectionForm from "./EditSectionForm";
import { CgChevronDown, CgChevronUp } from "react-icons/cg";
import SectionComponent from "./SectionComponent";
import { v4 as uuidv4 } from "uuid";

const EditForm = ({ learningPathData }) => {
  const [sections, setSection] = useState(learningPathData.sections);
  const [showingSection, setShowingSection] = useState(false);
  const [editForm, setEditForm] = useState(false);
  const [currentSelection, setCurrentSelection] = useState();

  const addChapter = () => {};

  const addSection = () => {
    setSection((oldSection) => [
      ...oldSection,
      {
        id: uuidv4(),
        title: "Untitled",
        learningPathId: learningPathData.id,
        chapters: [],
      },
    ]);
  };

  const deleteSection = (index) => {
    console.log(index);
    setSection((oldSection) => oldSection.filter((_, i) => i !== index));
  };
  const handleSectionChange = (index, updatedSection) => {
    setSection((oldSections) =>
      oldSections.map((section, i) => (i === index ? updatedSection : section))
    );
  };

  const handleSectionVisibility = () => {
    setShowingSection((prev) => !prev);
  };

  const editCurrentSelection = (selection) => {
    setCurrentSelection(selection);
    console.log(selection);
    setEditForm(true);
  };
  const {
    values,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues: {
      title: learningPathData.title,
      description: learningPathData.description,
      domain: learningPathData.domain,
      tags: learningPathData.tags,
    },
    onSubmit: {},
  });
  return (
    <>
      {
        <div>
          <Card className="sm:bg-color-7 w-full sm:w-96 sm:rounded-2xl rounded-none sm:border-solid border-none">
            <CardHeader className="space-y-1">
              <Input
                name="title"
                id="title"
                value={values.title}
                onChange={handleChange}
                onBlur={handleBlur}
                className="text-2xl text-center p-0 font-bold"
              />
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-4 mt-2">
                <div className="flex flex-col space-y-2">
                  <Label htmlFor="name">Description</Label>
                  <Textarea
                    name="description"
                    placeholder="Description"
                    rows={2}
                    type="text"
                    value={values.description}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    // className={cn(errors.content && "border-red-500")}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="name">Domain</Label>
                  <SelectComponent
                    name="domain"
                    id="domain"
                    value={values.domain}
                    options={domains}
                    onChange={handleChange}
                  />
                  {/* {errors.domain && (
                  <p className="text-red-500 text-sm">{errors.domain}</p>
                )} */}
                </div>
                <hr className="border-white border-t-2 mt-6" />
                <section className="flex-col flex justify-center items-center">
                  <button
                    onClick={handleSectionVisibility}
                    className="font-bold flex hover:text-white transition-colors flex-row items-center text-color-2 text-center text-2xl mb-4"
                  >
                    Sections
                    <>{!showingSection ? <CgChevronDown /> : <CgChevronUp />}</>
                  </button>
                  {showingSection && (
                    <>
                      {sections.map((section, index) => (
                        <SectionComponent
                          index={index}
                          editCurrentSelection={editCurrentSelection}
                          key={index}
                          data={section}
                          deleteSection={deleteSection}
                          handleChange={handleSectionChange}
                        />
                      ))}
                      <Button className="max-w-[12rem]" onClick={addSection}>
                        Add Section
                      </Button>
                      <hr className="border-white border-t-2 mt-6 w-full" />
                    </>
                  )}
                </section>
                <Button>Submit</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      }
    </>
  );
};

export default EditForm;
