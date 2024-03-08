"use client";

import { newPasswordSchema } from "@/schemas/auth/new-password";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { useFormik } from "formik";
import Image from "next/image";
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
import { newPassword } from "@/actions/new-password";

const NewPasswordForm = ({ token }) => {
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
            router.push("/sign-in");
          }
        });
      });
    },
  });
  return (
    <div className=" relative h-screen overflow-hidden flex py-10 flex-col items-center justify-center flex-0 flex-auto lg:px-0">
      <form onSubmit={handleSubmit} className="space-y-8">
        <Card className="sm:bg-color-6 w-full sm:w-96 sm:rounded-2xl rounded-none sm:border-solid border-none">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl flex justify-center">
              Reset Your Password
            </CardTitle>
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
      <Image
        src="/assets/icons/Ellipse3.svg"
        alt="Ellipse"
        height={100}
        width={24}
        className="fixed min-[1536px]:hidden -z-10 w-[80rem] h-[75rem] left-[-20rem] top-[5rem] opacity-60 lg:block hidden "
      />
      <Image
        src="/assets/icons/Ellipse3.svg"
        alt="Ellipse"
        height={100}
        width={24}
        className="fixed min-[1536px]:hidden -z-10 w-[68.0625rem] h-[56.5rem] left-[-16rem] top-[16rem] opacity-50 lg:block hidden"
      />
      <Image
        src="/assets/icons/Ellipse3.svg"
        alt="Ellipse"
        height={100}
        width={24}
        className="fixed min-[1536px]:hidden -z-10 w-[51.5rem] h-[44.5rem] left-[-10rem] top-[24rem] overflow-hidden opacity-50 lg:block hidden"
      />
      <div className="fixed min-[1536px]:hidden -z-10 w-[15rem] h-[15rem] left-[5rem] bg-color-2 rounded-full blur-2xl bottom-[-10rem] opacity-50 lg:block hidden" />
    </div>
  );
};

export default NewPasswordForm;
