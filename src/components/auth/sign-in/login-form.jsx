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
import { useState, useTransition } from "react";
import { resendVerificationEmail } from "@/actions/resend-verification-email";

export function LoginForm({ callbackUrl }) {
  const [isPending, startTransition] = useTransition();
  const [showResendEmailOption, setShowResendEmailOption] = useState(false);
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
      if (signInData?.ok) {
        toast.success("Logged in successfully");
        router.push(callbackUrl || "/");
        router.refresh();
      } else {
        if (signInData.error == "AccessDenied") {
          // AccessDenied is returned by next-auth signIn callback when the user email is not verified
          toast.error("Email not verified. Please verify your email.");
          setShowResendEmailOption(true);
        } else {
          toast.error(signInData.error);
        }
      }
    },
  });

  const onResendEmail = () => {
    startTransition(() => {
      resendVerificationEmail(values.email)
        .then((data) => {
          if (data.success) {
            toast.success("Verification email sent successfully");
          } else {
            toast.error(data.error);
          }
        })
        .catch((_) => {
          toast.error("Error sending verification email");
        });
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Login to your account</CardTitle>
          <CardDescription>
            Enter your email and password to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                name="email"
                placeholder="test@example.com"
                type="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={cn(errors.email && "border-destructive")}
              />
              {errors.email && (
                <p className="text-destructive text-sm">{errors.email}</p>
              )}
            </div>
            <div className="flex flex-col space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                name="password"
                placeholder="********"
                type="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className={cn(errors.password && "border-destructive")}
              />
              {errors.password && (
                <p className="text-destructive text-sm">{errors.password}</p>
              )}
            </div>
          </div>
          <div className="flex flex-col items-start">
            <Link
              className={buttonVariants({
                variant: "link",
                className: "pl-0",
              })}
              href={"/reset"}
            >
              Forgot your password?
            </Link>

            {showResendEmailOption ? (
              <Button
                variant="link"
                className="px-0 text-purple-500"
                type="button"
                onClick={onResendEmail}
              >
                Resend verification email
                {isPending && <Loader2 className="animate-spin h-4 w-4 ml-2" />}
              </Button>
            ) : null}
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
            {isSubmitting && <Loader2 className="animate-spin h-4 w-4 ml-2" />}
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
}
