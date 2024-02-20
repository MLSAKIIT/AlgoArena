"use client";

import { newPasswordSchema } from "@/schemas/auth/new-password";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { useFormik } from "formik";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { newPassword } from "@/app/actions/new-password";

const NewPasswordForm = ( { token }) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      password: "",
    },
    validationSchema: newPasswordSchema,
    onSubmit: (values) => {
      startTransition(() => {
        newPassword(values, token).then((data) => {
          if (data.error) {
            toast.error(data.error);
          } else {
            toast.success(data.success);
            router.push("/sign-in")
          }
        });
      });
    },
  });
  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Reset Your Password</CardTitle>
          <CardDescription>Enter your new password</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
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
          <Button className="w-full" type="submit" disabled={isPending}>
            Reset Password
            {isPending && <Loader2 className="animate-spin h-4 w-4 ml-2" />}
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
};

export default NewPasswordForm;
