"use client";

import React from "react";
import { Button } from "./ui/button";
import { useFormStatus } from "react-dom";
import { Loader2 } from "lucide-react";

const SubmitButton = ({ children, ...props }) => {
  const { pending } = useFormStatus();
  return (
    <Button disabled={pending} {...props}>
<<<<<<< HEAD
      {pending ? <Loader2 className="h-4 w-4" /> : children}
=======
      {pending ? <Loader2 className="h-4 w-4 animate-spin" /> : children}
>>>>>>> 27cfa88623dc45a3e0eb5f6b54c1f669628ee95f
    </Button>
  );
};

export default SubmitButton;
