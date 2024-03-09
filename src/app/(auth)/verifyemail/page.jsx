import { verifyEmail } from "@/actions/verifyEmail";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button, buttonVariants } from "@/components/ui/button";

const EmailVerificationPage = async (props) => {
  const { verificationtoken } = props.searchParams;
  const { error } = await verifyEmail(verificationtoken);
  // const [countdown, setCountdown] = useState(10); // Set the initial countdown value

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     if (countdown > 0) {
  //       setCountdown(countdown - 1); // Decrease the countdown value by 1
  //     }
  //   }, 1000); // Update the countdown every second

  //   return () => clearTimeout(timer); // Clear the timer when the component unmounts
  // }, [countdown]);

  return (
    <div className=" relative h-screen overflow-hidden flex py-10 flex-col items-center justify-center flex-0 flex-auto lg:px-0">
      {!error ? (
        <>
          <div className="fixed min-[1536px]:hidden -z-10 w-[15rem] mdxs:block h-[15rem] left-[5rem] bg-color-2 rounded-full blur-2xl bottom-[-10rem] opacity-50 lg:block hidden" />
          <Card className="sm:bg-color-6 w-full sm:w-96 sm:rounded-2xl rounded-none sm:border-solid border-none">
            <CardHeader className="space-y-1">
              <div className="flex justify-center">
                <CardTitle className="text-2xl sm:text-left">
                  SUCCESS
                  <div className="flex justify-center py-3 items-center">
                    <Image
                      src={"/assets/icons/success.svg"}
                      alt=" "
                      height={100}
                      width={100}
                    />
                  </div>
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col text-center w-full space-y-4 mt-1">
                Congratulations! You have been successfully authenticated.
              </div>
              <div className="flex flex-col justify-center items-center gap-1 mt-8">
                <Button
                  className="w-full font-bold text-md max-w-72"
                  type="submit"
                >
                  <Link href="/">CONTINUE</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Background */}
          <Image
            src="/assets/icons/Ellipse3.svg"
            alt="Ellipse"
            height={100}
            width={24}
            className="fixed min-[1536px]:hidden -z-10 w-[80rem] h-[75rem] left-[-20rem] top-[5rem] opacity-60 lg:block mdxs:block hidden "
          />
          <Image
            src="/assets/icons/Ellipse3.svg"
            alt="Ellipse"
            height={100}
            width={24}
            className="fixed min-[1536px]:hidden -z-10 w-[68.0625rem] h-[56.5rem] left-[-16rem] top-[16rem] mdxs:block opacity-50 lg:block hidden"
          />
          <Image
            src="/assets/icons/Ellipse3.svg"
            alt="Ellipse"
            height={100}
            width={24}
            className="fixed min-[1536px]:hidden -z-10 w-[51.5rem] mdxs:block h-[44.5rem] left-[-10rem] top-[24rem] overflow-hidden opacity-50 lg:block hidden"
          />
          <div className="fixed min-[1536px]:hidden -z-10 w-[15rem] mdxs:block h-[15rem] left-[5rem] bg-color-2 rounded-full blur-2xl bottom-[-10rem] opacity-50 lg:block hidden" />
        </>
      ) : (
        <>
          <div className="fixed min-[1536px]:hidden -z-10 w-[15rem] mdxs:block h-[15rem] left-[5rem] bg-color-2 rounded-full blur-2xl bottom-[-10rem] opacity-50 lg:block hidden" />
          <Card className="sm:bg-color-6 w-full sm:w-96 sm:rounded-2xl rounded-none sm:border-solid border-none">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl text-center flex-col justify-center items-center  sm:text-left">
                Opps.. Something Went Wrong!
                <div className="flex justify-center py-3 items-center">
                  <Image
                    src={"/assets/icons/XCircle.svg"}
                    alt=" "
                    height={100}
                    width={100}
                  />
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col text-center w-full space-y-4 mt-1">
                {error}
              </div>
              <div className="flex flex-col justify-center items-center gap-1 mt-8">
                <Button
                  className="w-full font-bold text-md max-w-72"
                  type="submit"
                >
                  <Link href="/">CONTINUE</Link>
                </Button>
              </div>
              {/* <div className="text-center mt-4">Countdown:</div> */}
            </CardContent>
          </Card>

          {/* Background */}
          <Image
            src="/assets/icons/Ellipse3.svg"
            alt="Ellipse"
            height={100}
            width={24}
            className="fixed min-[1536px]:hidden -z-10 w-[80rem] h-[75rem] left-[-20rem] top-[5rem] opacity-60 lg:block mdxs:block hidden "
          />
          <Image
            src="/assets/icons/Ellipse3.svg"
            alt="Ellipse"
            height={100}
            width={24}
            className="fixed min-[1536px]:hidden -z-10 w-[68.0625rem] h-[56.5rem] left-[-16rem] top-[16rem] mdxs:block opacity-50 lg:block hidden"
          />
          <Image
            src="/assets/icons/Ellipse3.svg"
            alt="Ellipse"
            height={100}
            width={24}
            className="fixed min-[1536px]:hidden -z-10 w-[51.5rem] mdxs:block h-[44.5rem] left-[-10rem] top-[24rem] overflow-hidden opacity-50 lg:block hidden"
          />
          <div className="fixed min-[1536px]:hidden -z-10 w-[15rem] mdxs:block h-[15rem] left-[5rem] bg-color-2 rounded-full blur-2xl bottom-[-10rem] opacity-50 lg:block hidden" />
        </>
      )}
    </div>
  );
};

export default EmailVerificationPage;
