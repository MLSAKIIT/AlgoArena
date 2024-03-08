import { verifyEmail } from "@/actions/verifyEmail";
import Link from "next/link";

const EmailVerificationPage = async (props) => {
  const { verificationtoken } = props.searchParams;
  const { error } = await verifyEmail(verificationtoken);

  return (
    <div className="flex  justify-center items-center h-screen md:p-8">
      <div className="border-2 p-8 border-color-2 md:w-96  grid gap-2 place-items-center rounded-2xl">
        {!error ? (
          <>
            <h1 className="text-white text-2xl font-bold">Email Verified!</h1>
            <p className="text-white">You may now login.</p>
            {/* TODO: LINK TO SIGN IN ROUTE */}
            <Link
              className=" box-border mt-8 grid place-items-center py-1 px-1 bg-[#9d5ae3] text-white w-40 h-14 rounded-full shadow-[0_0_1rem_0px_#9d5ae3] text-xl  outline-none border-none [text-shadow:_0px_0px_5px_rgb(0_0_0)] cursor-pointer hover:bg-[#7f3dbf] active:scale-95 transition duration-200"
              href="/"
            >
              Login
            </Link>
          </>
        ) : (
          <>
            <h1 className="text-white text-center text-2xl font-bold">
              Opps.. Something Went Wrong!
            </h1>
            <p className="text-white mt-2">{error}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default EmailVerificationPage;
