"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button, buttonVariants } from "@/components/ui/button";
import { signOut } from "next-auth/react";

const SignOut = () => {
  return (
    <div className=" relative h-screen overflow-hidden flex py-10 flex-col items-center justify-center flex-0 flex-auto lg:px-0">
      <Card className="sm:bg-color-6 w-full sm:w-96 sm:rounded-2xl rounded-none sm:border-solid border-none">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl text-center sm:text-left">
            Sign Out
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col text-center w-full space-y-4 mt-1">
            Are you sure you want to sign out?
          </div>
          <div className="flex flex-col justify-center items-center gap-1 mt-8">
            <Button
              onClick={() => signOut({ callbackUrl: "/sign-in" })}
              className="w-full font-bold text-md max-w-72"
              type="submit"
            >
              Sign out
            </Button>
            <Link
              className={buttonVariants({
                variant: "authLink",
                className: "text-xs",
              })}
              href="/"
            >
              No, take me back
            </Link>
          </div>
        </CardContent>
      </Card>
      {/* Background */}
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

export default SignOut;
