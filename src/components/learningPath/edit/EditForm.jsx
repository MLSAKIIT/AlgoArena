"use client";
import SelectComponent from "@/components/posts/SelectComponent";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ALLOWED_DOMAINS, domains } from "@/constants";
import { cn } from "@/lib/utils";
import { Label } from "@radix-ui/react-label";
import { useFormik } from "formik";
import React, { useState } from "react";
import { toast } from "sonner";
import { CgChevronDown, CgChevronUp } from "react-icons/cg";
import SectionComponent from "./SectionComponent";
import { Tags } from "./Tags";
import { editFormSchema } from "@/schemas/editForm/edit-form";
import { SubmitEditedFork } from "@/actions/edit-fork-path";
import { useRouter } from "next/navigation";

const EditForm = ({ learningPathData }) => {
  const [sections, setSection] = useState(learningPathData.sections);
  const [showingSection, setShowingSection] = useState(false);
  const router = useRouter();

  const addSection = () => {
    setSection((oldSection) => [
      ...oldSection,
      {
        title: "Untitled",
        chapters: [],
        learningPathId: learningPathData.id,
      },
    ]);
  };

  const deleteSection = (index) => {
    console.log(index);
    setSection((oldSection) => oldSection.filter((_, i) => i !== index));
  };
  const handleSectionChange = (index, updatedSection) => {
    setSection((oldSections) => {
      const newSection = JSON.parse(JSON.stringify(oldSections));
      newSection[index] = updatedSection;
      return newSection;
    });
    console.log(sections);
  };

  const handleSectionVisibility = () => {
    setShowingSection((prev) => !prev);
  };

  const editCurrentSelection = (selection) => {
    setCurrentSelection(selection);
    setEditForm(true);
  };

  const {
    values,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    isSubmitting,
    setFieldValue,
  } = useFormik({
    initialValues: {
      title: learningPathData.title,
      description: learningPathData.description,
      domain: learningPathData.domain,
      tags: learningPathData.tags,
    },
    validationSchema: editFormSchema,
    onSubmit: async (values) => {
      if (sections.length <= 0) {
        toast.error("Please add a section");
      }

      const data = {
        id: learningPathData.id,
        ...values,
        sections,
      };

      const status = await SubmitEditedFork(data);
      if (status.success) {
        toast.success("Path Updated!");
        router.push("/");
      } else {
        toast.error("Something went wrong...");
      }
    },
  });
  return (
    <>
      {
        <div className="flex flex-col items-center justify-center">
          <form
            className="space-y-2 w-full sm:w-96 sm:rounded-2xl rounded-none sm:border-solid border-none"
            onSubmit={handleSubmit}
          >
            <Card className="sm:bg-color-6 w-full sm:w-96 sm:rounded-2xl rounded-none sm:border-solid border-none">
              <CardHeader className="space-y-1">
                <Input
                  name="title"
                  id="title"
                  required
                  value={values.title}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="text-xl text-center p-0 text-color-2 font-semi-bold"
                />
                {errors.title && (
                  <p className="text-red-500 text-xs">{errors.title}</p>
                )}
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-4 mt-2">
                  <div className="flex flex-col space-y-2">
                    <Label htmlFor="name" className="text-color-1">
                      Description
                    </Label>
                    <Textarea
                      name="description"
                      placeholder="Description"
                      rows={2}
                      required
                      type="text"
                      value={values.description}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={cn(errors.description && "border-red-500")}
                    />
                  </div>{" "}
                  {errors.description && (
                    <p className="text-red-500 text-xs">{errors.description}</p>
                  )}
                  <div className="grid gap-2">
                    <Label htmlFor="name" className=" text-color-1 font">
                      Domain
                    </Label>
                    <SelectComponent
                      name="domain"
                      id="domain"
                      value={values.domain}
                      options={Object.keys(ALLOWED_DOMAINS)}
                      onChange={handleChange}
                    />
                    {errors.domain && (
                      <p className="text-red-500 text-xs">{errors.domain}</p>
                    )}
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="name" className=" text-color-1 font">
                      Tags
                    </Label>
                    <Tags
                      className=""
                      setFieldValue={setFieldValue}
                      value={values.tags}
                    />
                    {errors.tags && (
                      <p className="text-red-500 text-xs">{errors.domain}</p>
                    )}
                  </div>
                  <hr className="border-white border-t-2 mt-6" />
                  <section className="flex-col flex justify-center items-center">
                    <button
                      type="button"
                      onClick={handleSectionVisibility}
                      className="font-semi-bold flex hover:text-white transition-colors flex-row items-center text-color-1 text-center text-l mb-4"
                    >
                      Sections
                      <>
                        {!showingSection ? <CgChevronDown /> : <CgChevronUp />}
                      </>
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
                        <Button
                          type="button"
                          className="max-w-[12rem] text-sm"
                          onClick={addSection}
                        >
                          Add Section
                        </Button>
                        <hr className="border-white border-t-2 mt-6 w-full" />
                      </>
                    )}
                  </section>
                  <Button type="submit">Submit</Button>
                </div>
              </CardContent>
            </Card>
          </form>
        </div>
      }
    </>
  );
};

export default EditForm;
