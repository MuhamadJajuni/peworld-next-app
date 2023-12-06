import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function NavbarAuth() {
  const { data: session, status }: { data: any; status: string } = useSession();

  const handleSignOut = () => {
    const isConfirmed = window.confirm("Apakah kamu mau Logout?");

    if (isConfirmed) {
      signOut();
    }
  };

  return (
    <nav className="flex bg-white py-2 px-5 justify-between">
      <div className="flex">
        <h1 className="text-purple-500">Peworld</h1>
        <ul className="flex ml-3 gap-2">
          <Link href="/">
            <li className="text-black cursor-pointer hover:text-blue-300">
              Home
            </li>
          </Link>
          <Link href="/workers">
            <li className="text-black cursor-pointer hover:text-blue-300">
              Workers
            </li>
          </Link>
          <Link href="/recruiters">
            <li className="text-black cursor-pointer hover:text-blue-300">
              Recruiters
            </li>
          </Link>
        </ul>
      </div>
      <div className="flex items-center">
        {status === "authenticated" ? (
          <>
            <h4 className="text-black mr-2">Hi, {session?.user?.email}</h4>
            <button
              className="bg-orange-400 rounded-md px-3 text-sm h-7 hover:text-blue-300"
              onClick={handleSignOut}
            >
              Log Out
            </button>
          </>
        ) : (
          <button
            className="bg-orange-400 rounded-md px-3 text-sm h-7 hover:text-blue-300"
            onClick={() => signIn()}
          >
            Log In
          </button>
        )}
      </div>
    </nav>
  );
}
