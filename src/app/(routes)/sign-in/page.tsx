import Link from "next/link";

const SignIn = () => {
  return (
    <div className="font-mont flex h-screen flex-col items-center justify-center bg-zinc-950 px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full">
        <Link
          href={"/"}
          className="m-0 flex justify-center p-0 text-[4rem] font-light text-yellow-500"
        >
          PURE APEX
        </Link>
        <h2 className="mt-5 text-center text-[1.5rem] tracking-tight text-gray-200">
          Sign In To Your Account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form action="#" method="POST" className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-xl font-light leading-6 text-gray-200"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-xl font-light leading-6 text-gray-200"
              >
                Password
              </label>
              <div className="text-md">
                <a
                  href="#"
                  className="font-medium text-yellow-500 hover:text-yellow-500/85"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                required
                autoComplete="current-password"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="font-mont flex w-full items-center justify-center rounded-md bg-zinc-900 px-1 text-xl font-medium leading-8 text-yellow-500 shadow-lg outline outline-[0.2px] outline-yellow-500/50 hover:bg-yellow-500/85 hover:font-semibold hover:text-black hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 md:px-3 md:pb-1 md:pt-2"
            >
              Sign in
            </button>
          </div>
        </form>
        <p className="text-md mt-10 text-center text-gray-200">
          Not a member?{" "}
          <Link
            href={"/sign-up"}
            className="font-medium leading-6 text-yellow-500 hover:text-yellow-500/85"
          >
            Create an Account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
