"use client";
import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";

const Header = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  return (
    <header className="h-16 p-4 sm:p-6 flex justify-between items-center z-10 absolute bg-white border-b-2 w-full">
      <div className="font-roboto font-semibold text-xl">Mott Can Go!</div>
      <nav className="flex gap-x-2 font-semibold items-center">
        {!isSignedIn ? (
          <>
            <Link href={"/sign-up"} className="text-base hover:clor">
              가입하기
            </Link>
            <Link href={"/sign-in"} className="text-base">
              로그인
            </Link>
          </>
        ) : (
          <>
            <Link
              href={"/place/upload"}
              className="text-base py-2 px-4 rounded-3xl hover:bg-green-50 transition-all">
              장소 등록
            </Link>
            <div className="flex justify-center items-center">
              <div className="mr-2">
                {user.lastName}
                {user.firstName}
              </div>
              <UserButton />
            </div>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
