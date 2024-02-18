import RegistrationForm from "@/components/auth/sign-up/registration-form";
import React from "react";

const SignInPage = ({ searchParams }) => {
  return (
    <div className="container relative flex pt-20 flex-col items-center justify-center lg:px-0">
      <RegistrationForm callbackUrl={searchParams.callbackUrl} />
    </div>
  );
};

export default SignInPage;
