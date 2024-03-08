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
import { resetSchema } from "@/schemas/auth/reset";
import { useTransition } from "react";
import { resetPassword } from "@/actions/reset-password";

export function ResetPasswordForm() {
  const [isPending, startTransition] = useTransition()
  const {
    values,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: resetSchema,
    onSubmit: (values) => {
        startTransition(() => {
            resetPassword(values)
            .then((data) => {
                if (data.error) {
                    toast.error(data.error)
                } else {
                    toast.success(data.success)
                }
            })
        })
    },
  });

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Forgot your password?</CardTitle>
          <CardDescription>
            Enter your email and we will send you a link to reset your password.
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
        </CardContent>
        <CardFooter className="flex flex-col items-start gap-5">
          <div>
            <Link
              className={buttonVariants({
                variant: "link",
                className: "px-[2px] underline",
              })}
              href={"/sign-in"}
            >
              Back to login
            </Link>
          </div>
          <Button className="w-full" type="submit" disabled={isPending}>
            Send reset email
            {isPending && <Loader2 className="animate-spin h-4 w-4 ml-2" />}
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
}
