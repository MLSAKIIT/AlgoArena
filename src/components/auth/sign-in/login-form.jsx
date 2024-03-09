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
import { loginSchema } from "@/schemas/auth/login";
import { signIn } from "next-auth/react";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { useState, useTransition } from "react";
import { resendVerificationEmail } from "@/actions/resend-verification-email";
import { PasswordInput } from "@/components/ui/input-password";

export function LoginForm({ callbackUrl }) {
  const [isPending, startTransition] = useTransition();
  const [showPassword, setShowPassword] = useState(false);
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
    <form onSubmit={handleSubmit} className="space-y-8 flex justify-center">
      <Card className="sm:bg-color-6  bg-color-6 sm:w-96 sm:rounded-2xl rounded-none sm:border-solid border-none w-full">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl flex justify-center">LOGIN</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col  space-y-2">
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
                  } text-xs sm:text-sm `
                )}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>
            <div className="flex flex-col space-y-2">
              <PasswordInput
                name="password"
                placeholder="Password"
                type={showPassword ? "text" : "password"}
                value={values.password}
                onChange={handleChange}
                showPassword={() => setShowPassword((prev) => !prev)}
                onBlur={handleBlur}
                className={cn(
                  ` ${errors.password && "border-red-500"} text-xs sm:text-sm `
                )}
              />
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password}</p>
              )}
            </div>
          </div>
          <div className="flex flex-col items-start">
            <Link
              className="my-2 text-gray-300 transition-colors hover:text-color-2 w-full text-xs text-end"
              href={"/reset"}
            >
              Forgot Password?
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
          <Button
            className="w-full font-bold text-md"
            type="submit"
            disabled={isSubmitting}
          >
            LOGIN
            {isSubmitting && <Loader2 className="animate-spin h-4 w-4 ml-2" />}
          </Button>
          <div className="text-xs text-gray-300 text-center w-full">
            Dont have an account?{" "}
            <Link
              className={buttonVariants({
                variant: "authLink",
                className: "text-xs",
              })}
              href={"/sign-up"}
            >
              Register
            </Link>
          </div>
        </CardFooter>
      </Card>
    </form>
  );
}
