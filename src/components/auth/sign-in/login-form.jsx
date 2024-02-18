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
import { loginSchema } from "@/schemas/auth/login";
import { signIn } from "next-auth/react";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

export function LoginForm({ callbackUrl }) {
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
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      const signInData = await signIn("credentials", {
        email: values.email,
        password: values.password,
        redirect: false,
      });
      console.log(signInData);
      if (signInData?.ok) {
        toast.success("Logged in successfully");
        router.push(callbackUrl || "/");
        router.refresh();
      } else {
        toast.error(signInData.error);
      }
    },
  });

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Login to your account</CardTitle>
          <CardDescription>
            Enter your email and password to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
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
            Dont have an account?
            <Link
              className={buttonVariants({
                variant: "link",
                className: "px-[2px] underline",
              })}
              href={"/sign-up"}
            >
              Sign up
            </Link>
          </div>
          <Button className="w-full" type="submit" disabled={isSubmitting}>
            Login
            {isSubmitting && (<Loader2 className="animate-spin h-4 w-4 ml-2"/>)}
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
}
