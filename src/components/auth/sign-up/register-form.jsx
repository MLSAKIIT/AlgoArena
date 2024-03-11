"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useFormik } from "formik";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { registerSchema } from "@/schemas/auth/register";
import { createUser } from "@/actions/register";
import { PasswordInput } from "@/components/ui/input-password";
import { useState } from "react";

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
      <Card className="sm:bg-color-6 w-full sm:w-96 sm:rounded-2xl rounded-none sm:border-solid border-none ">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Create Account</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Input
              name="name"
              placeholder="Name"
              type="text"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className={cn(
                `bg-[url('/assets/auth/user.svg')] ${
                  errors.name && "border-red-500"
                }`
              )}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>
          <div className="grid gap-2">
            <Input
              name="email"
              placeholder="Email"
              type="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={cn(
                `bg-[url('/assets/auth/email.svg')] ${
                  errors.email && "border-red-500"
                }`
              )}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>
          <div className="grid gap-2">
            <PasswordInput
              name="password"
              showPassword={() => setShowPassword((prev) => !prev)}
              placeholder="Password"
              type={showPassword ? "text" : "password"}
              value={values.password}
              passwordState={showPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              className={cn(`${errors.password && "border-red-500"}`)}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </div>
          <div className="grid gap-2">
            <PasswordInput
              name="confirmPassword"
              placeholder="Confirm Password"
              type={showConfirmPassword ? "text" : "password"}
              passwordState={showConfirmPassword}
              showPassword={() => setShowConfirmPassword((prev) => !prev)}
              value={values.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              className={cn(`${errors.confirmPassword && "border-red-500"}`)}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-start gap-5">
          <Button className="w-full" type="submit" disabled={isSubmitting}>
            Create Account
            {isSubmitting && <Loader2 className="animate-spin h-4 w-4 ml-2" />}
          </Button>
          <div className="text-xs text-gray-300 text-center w-full">
            Dont have an account?{" "}
            <Link
              className={buttonVariants({
                variant: "authLink",
                className: "text-xs",
              })}
              href={"/sign-in"}
            >
              Sign In
            </Link>
          </div>
        </CardFooter>
      </Card>
    </form>
  );
}
