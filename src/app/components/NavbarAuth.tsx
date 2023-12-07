import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

interface NavbarAuthProps {}

const NavbarAuth: React.FC<NavbarAuthProps> = () => {
  const { data: session, status }: { data: any; status: string } = useSession();
  console.log(session);

  const handleSignOut = () => {
    const isConfirmed = window.confirm("Apakah kamu mau Logout?");

    if (isConfirmed) {
      signOut();
    }
  };

  return (
    <nav className="flex bg-white py-2 px-5 justify-between">
      <div className="flex items-center">
        <h1 className="text-purple-500">Peworld</h1>
        <ul className="flex ml-3 gap-2">
          <Link href="/">
            <li className="text-black cursor-pointer hover:text-blue-300">
              Home
            </li>
          </Link>
          {status === "authenticated" && session?.user?.role === "workers" && (
            <Link href="/workers">
              <li className="text-black cursor-pointer hover:text-blue-300">
                Workers
              </li>
            </Link>
          )}
          {status === "authenticated" && session?.user?.role === "recruiters" && (
            <Link href="/recruiters">
              <li className="text-black cursor-pointer hover:text-blue-300">
                Recruiters
              </li>
            </Link>
          )}
        </ul>
      </div>
      <div className="flex items-center">
        {status === "authenticated" ? (
          <>
            <h4 className="text-black mr-2">Hi, {session?.user?.name}</h4>
            <button
              className="bg-orange-400 rounded-md px-3 text-sm h-7 hover:text-blue-300"
              onClick={handleSignOut}
            >
              Log Out
            </button>
            {session?.user?.image && (
              <Image
                src={session.user.image}
                alt="User Avatar"
                className="w-8 h-8 rounded-full ml-2"
              />
            )}
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
};

export default NavbarAuth;
