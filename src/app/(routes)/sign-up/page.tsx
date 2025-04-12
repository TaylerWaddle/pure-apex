import Link from "next/link";

const SignUp = () => {
  return (
    <div className="font-mont flex h-screen flex-col items-center justify-center bg-zinc-950 px-6 font-light lg:px-8">
      <Link
        href={"/"}
        className="m-0 flex justify-center p-0 text-[4rem] font-light text-yellow-500"
      >
        PURE APEX
      </Link>
      <h2 className="mt-5 text-center text-[1.5rem] tracking-tight text-gray-200">
        Sign Up For A New Account
      </h2>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form action="#" method="POST" className="space-y-3">
          <div>
            <label className="block text-base font-light leading-6 text-gray-200">
              First Name
            </label>
            <div className="mt-2">
              <input
                id="firstname"
                name="firstname"
                type="firstname"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label className="block text-base font-light leading-6 text-gray-200">
              Last Name
            </label>
            <div className="mt-2">
              <input
                id="lastname"
                name="lastname"
                type="lastname"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label className="block text-base font-light leading-6 text-gray-200">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-base font-light leading-6 text-gray-200"
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label className="block text-base font-light leading-6 text-gray-200">
                Confirm Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="confirm-password"
                name="passconfirm-passwordword"
                type="passwconfirm-passwordord"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex">
              <input type="checkbox" />
              <p className="block pl-3 text-base font-light leading-6 text-gray-200">
                I agree to the Terms and Conditions.
              </p>
            </div>
            <div className="flex">
              <input type="checkbox" />
              <p className="block pl-3 text-base font-light leading-6 text-gray-200">
                Sign Up for Our Monthly Newsletter.
              </p>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="font-mont flex w-full items-center justify-center rounded-md bg-zinc-900 px-1 text-xl font-medium leading-8 text-yellow-500 shadow-lg outline outline-[0.2px] outline-yellow-500/50 hover:bg-yellow-500/85 hover:font-semibold hover:text-black hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 md:px-3 md:pb-1 md:pt-2"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
