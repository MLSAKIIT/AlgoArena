"use client";

import React from "react";
import { Button } from "./ui/button";
import { useFormStatus } from "react-dom";
import { Loader2 } from "lucide-react";

const SubmitButton = ({ children, ...props }) => {
  const { pending } = useFormStatus();
  return (
    <Button disabled={pending} {...props}>
      {pending ? <Loader2 className="h-4 w-4" /> : { children }}
    </Button>
  );
};

export default SubmitButton;
