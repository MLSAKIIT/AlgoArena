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
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { registerSchema } from "@/schemas/auth/register";
import { createUser } from "@/app/actions/register";

export default function RegisterForm() {
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
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: registerSchema,
    onSubmit: async (values) => {
      try {
        const newUser = await createUser(values);

        if (newUser && !newUser.error) {
          toast.success("Account created successfully");
          router.push("/");
        } else {
          const errorMessage = newUser
            ? newUser.error
            : "Something went wrong. Please try again.";
          toast.error(errorMessage);
        }
      } catch (error) {
        console.error(error);
        toast.error(error.message);
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
          <div className="grid gap-2">
            <Label htmlFor="confirmPassword">confirmPassword</Label>
            <Input
              name="confirmPassword"
              placeholder="********"
              type="password"
              value={values.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              className={cn(errors.confirmPassword && "border-red-500")}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-start gap-5">
          <div>
            Dont have an account?
            <Link
              className={buttonVariants({
                variant: "link",
                className: "px-[2px] underline",
              })}
              href={"/sign-in"}
            >
              Sign In
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
