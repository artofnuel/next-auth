import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <nav className="w-full h-14 p-4 md:px-8 flex justify-between items-center">
        <Link href="/">
          <h1 className="font-bold text-3xl">Next.Auth</h1>
        </Link>
        <ul className="flex gap-4">
          {/* <Link href="/login">Login</Link> */}
          {/* <Link
            href="/sign-up"
            className="p-2 px-8 rounded-md bg-black/90 text-white"
          >
            Register
          </Link> */}
          <SignedIn>
            <SignInButton />
          </SignedIn>
          <SignedOut>
            <UserButton />
          </SignedOut>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
