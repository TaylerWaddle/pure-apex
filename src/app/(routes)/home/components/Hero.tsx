import Link from "next/link";

const Hero = () => {
  return (
    <div className="font-mont relative h-full w-full">
      <video
        className="absolute left-0 top-0 hidden h-full w-full object-cover sm:flex"
        src={"/hero-vid-zoomed.mp4"}
        autoPlay
        muted
        loop
      />
      <video
        className="absolute left-0 top-0 flex h-full w-full object-cover sm:hidden"
        src={"/hero-vid-mobile.mp4"}
        autoPlay
        muted
        loop
      />
      <div className="mx-auto flex flex-col bg-zinc-900 xl:flex-row xl:items-center xl:justify-between">
        <div className="z-10 flex h-fit min-h-screen w-full flex-col items-center justify-center -space-y-[45px] pb-12 md:-space-y-[115px] xl:mt-20 xl:items-start xl:pl-60">
          <h1 className="text-7xl font-normal tracking-tight text-yellow-500/85 md:text-[200px]">
            PURE
          </h1>
          <h1 className="text-7xl font-normal tracking-tight text-yellow-500/85 md:text-[210px]">
            APEX
          </h1>
          <span className="pt-4 text-center text-[22px] font-normal tracking-tight text-yellow-500/85 md:pt-10 md:text-[48px]">
            POWER SUPPLEMENTS
          </span>
        </div>
        <div className="relative z-10 flex w-full items-center justify-center xl:mt-40">
          <div className="mx-8 mb-16 flex h-fit w-fit flex-col items-center justify-center space-y-4 rounded-xl bg-zinc-950/80 px-6 py-6 text-white ring-1 ring-yellow-500 xl:mx-0 xl:px-10 xl:py-16">
            <div className="max-w-[480px]">
              <h1 className="text-center text-2xl font-light sm:text-3xl">
                Sign Up For Our Monthly Newsletter
              </h1>
            </div>

            <div className="flex w-48 flex-col items-center justify-center">
              <Link
                href="sign-up"
                className="mt-1.5 flex w-32 justify-center rounded bg-yellow-500/95 px-4 pb-2 pt-2.5 text-xl font-medium text-black shadow-sm hover:bg-yellow-500/80 hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
