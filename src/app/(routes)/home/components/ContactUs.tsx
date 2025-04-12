const ContactUs = () => {
  return (
    <div className="font-mont relative flex h-fit w-full items-center justify-center bg-zinc-950 py-20 shadow-xl shadow-zinc-400/10 lg:px-20">
      <div className="flex h-fit w-fit flex-col items-center justify-evenly rounded-3xl bg-zinc-800/35">
        <span className="py-16 text-4xl font-normal text-yellow-500/95 sm:px-24 md:px-48">
          Contact Us
        </span>
        <form className="flex h-fit w-[22rem] flex-col items-center justify-center rounded-r-3xl pb-16 md:w-[30rem]">
          <input
            type="text"
            placeholder="First Name"
            className="mb-3 block w-[18rem] rounded border-0 pb-1 pl-2 pt-1.5 text-base text-gray-950 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 md:w-80"
          ></input>
          <input
            type="text"
            placeholder="Last Name"
            className="mb-3 block w-[18rem] rounded border-0 pb-1 pl-2 pt-1.5 text-base text-gray-950 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 md:w-80"
          ></input>
          <input
            type="email"
            placeholder="Email"
            className="mb-3 block w-[18rem] rounded border-0 pb-1 pl-2 pt-1.5 text-base text-gray-950 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 md:w-80"
          ></input>
          <textarea
            placeholder="Questions or Concerns"
            className="mb-3 block min-h-32 w-[18rem] rounded border-0 py-1.5 pl-2 text-base text-gray-950 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 md:w-80"
          ></textarea>
          <div className="flex w-[18rem] justify-center md:w-80">
            <button
              type="submit"
              className="font-mont flex w-full items-center justify-center rounded-md bg-zinc-900 px-1 text-base font-medium leading-8 text-yellow-500 shadow-lg outline outline-[0.2px] outline-yellow-500/50 hover:bg-yellow-500/85 hover:font-semibold hover:text-black hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 md:px-3 md:pb-1 md:pt-2"
            >
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
