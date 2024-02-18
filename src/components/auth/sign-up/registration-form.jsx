"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useFormik } from "formik";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { signIn } from "next-auth/react";
import { registerSchema } from "@/schemas/auth/register";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

export default function RegistrationForm({ callbackUrl }) {
  const router = useRouter();
  const {
    values,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues: {
      name: "John Doe",
      email: "loremipsum@gmail.com",
      password: "1234567",
    },
    validationSchema: registerSchema,
    onSubmit: async (values) => {
      try {
        toast.info("Creating your account");
        const signInData = await signIn("credentials", {
          name: values.name,
          email: values.email,
          password: values.password,
          redirect: false,
        });
        if (signInData?.ok) {
          toast.success("Account created successfully");
          router.push(callbackUrl || "/");
          router.refresh();
        } else {
          toast.error(signInData.error);
        }
      } catch (error) {
        toast.error("An error occurred while creating account");
      }
    },
  });

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Create your account</CardTitle>
          <CardDescription>
            Enter your name, email and password to proceed creating your account
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input
              name="name"
              placeholder="John Doe"
              type="text"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className={cn(errors.name && "border-red-500")}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              name="email"
              placeholder="test@example.com"
              type="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={cn(errors.email && "border-red-500")}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              name="password"
              placeholder="********"
              type="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className={cn(errors.password && "border-red-500")}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-start gap-5">
          <div>
            Already have an account?
            <Link
              className={buttonVariants({
                variant: "link",
                className: "px-[2px] underline",
              })}
              href={"/sign-in"}
            >
              Sign Up
            </Link>
          </div>
          <Button className="w-full" type="submit" disabled={isSubmitting}>
            Create Account
            {isSubmitting && <Loader2 className="animate-spin h-4 w-4 ml-2" />}
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
}
