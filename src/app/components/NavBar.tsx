import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="font-mont fixed left-0 top-0 z-50 flex h-20 min-w-full items-center justify-between bg-zinc-950/80">
      <Link
        href="/"
        className="text-4xl font-normal text-yellow-500 hover:text-yellow-500/85 ml-8"
      >
        Pure Apex Logo
      </Link>

      <div className="hidden justify-center lg:flex">
        <Link
          href="/shop"
          className="mx-6 text-xl font-light text-white hover:text-yellow-500"
        >
          Shop
        </Link>
        <Link
          href="/cart"
          className="mx-6 text-xl font-light text-white hover:text-yellow-500"
        >
          Cart
        </Link>
        <Link
          href="/sign-in"
          className="ml-6 mr-8 text-xl font-light text-white hover:text-yellow-500"
        >
          Sign In
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
