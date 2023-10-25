import Link from "next/link";

const Header = () => {
  return (
    <header className="h-16 p-4 sm:p-6 flex justify-between items-center z-10 absolute bg-white border-b-2 w-full">
      <div className="font-roboto font-semibold text-xl">Mott Can Go!</div>
      <nav className="flex gap-x-2">
        <Link
          href={"/sign-up"}
          className="font-roboto text-base font-semibold hover:clor"
        >
          Sign Up
        </Link>
        <Link href={"/sign-in"} className="font-roboto text-base font-semibold">
          Sign In
        </Link>
      </nav>
    </header>
  );
};

export default Header;
