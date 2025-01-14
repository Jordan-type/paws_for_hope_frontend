"use client"

import Link from "next/link";
import SearchBar from "./SearchBar";
import { PawPrintIcon } from "../components/ui/Icons";
import { ModeToggle } from "./DarkMode";
import { ConnectWallet } from "@thirdweb-dev/react";


const Navbar = async () => {

  return (
    <div className="fixed dark:bg-[#030711] dark:text-white top-0 inset-x-0 h-fit bg-zinc-100 border-b border-zinc-300 z-[10] py-2">
      <div className="container max-w-7xl h-full mx-auto flex items-center justify-between gap-2">
        {/* logo */}
        <Link href="/" className="flex gap-2 items-center">
          {/* <Icons.logo className='h-8 w-8 sm:h-6 sm:w-6' /> */}
          <PawPrintIcon className="h-6 w-6 text-primary" />
          <span className="ml-2 text-lg font-semibold text-foreground">
            Paws for Hope
          </span>
        </Link>

        {/* search bar */}
        <SearchBar />

        {/* actions */}
        <div className="flex items-center gap-3 sm:gap-5">
          <ConnectWallet
            className="btn-outline btn-sm px-4 py-2 border border-gray-300 text-sm font-medium  transition-all"
          />

          {/* {session?.user ? (
            <UserAccountNav user={session.user} />
          ) : (
            <Link href="/sign-in" className={buttonVariants()}>
              Sign In
            </Link>
          )} */}
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

// beavis and butt-head cartoon

export default Navbar;
