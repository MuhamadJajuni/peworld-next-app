import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import logoPeworld from "img/logoPeworld.svg";
import Avatar from "img/LiamPayne.svg";
import lonceng from "img/bell-navbar.svg";
import mail from "img/mail-navbar.svg";

interface GreetingProps {
  session: any;
}

const Greeting: React.FC<GreetingProps> = ({ session }) => {
  const status = session?.user ? "authenticated" : "unauthenticated";

  const handleSignOut = () => {
    const isConfirmed = window.confirm("Apakah kamu mau Logout?");

    if (isConfirmed) {
      signOut();
    }
  };

  return (
    <div className="flex justify-items-start items-center gap-4 mx-3">
      {status === "authenticated" ? (
        <>
          <Image
            src={lonceng}
            alt="logo"
            width={25}
            height={25}
            className="object-contain"
            priority
          />
          <Image
            src={mail}
            alt="logo"
            width={25}
            height={25}
            className="object-contain"
            priority
          />
          {session?.user?.image || (
            <>
              <div className="dropdown dropdown-end dropdown-hover">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-9 rounded-full">
                    <Image
                      src={Avatar}
                      alt="User Avatar"
                      width={20}
                      height={20}
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a className="justify-between">
                    {status === "authenticated" &&
                      session?.user?.role === "workers" && (
                        <Link href="/workers">
                          <li className="text-black font-normal cursor-pointer">
                            Profile
                          </li>
                        </Link>
                      )}
                    {status === "authenticated" &&
                      session?.user?.role === "recruiters" && (
                        <Link href="/recruiters">
                          <li className="text-black font-normal cursor-pointer">
                          Profile
                          </li>
                        </Link>
                      )}
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li>
                    <a onClick={handleSignOut}>Logout</a>
                  </li>
                </ul>
              </div>
            </>
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
  );
};

const NavbarAuth: React.FC = () => {
  const { data: session, status }: { data: any; status: string } = useSession();
  return (
    <nav className="flex py-1 px-1 mx-3 bg-white justify-between">
      <div className="flex justify-center justify-items-center items-center mx-5">
        <div>
          <Image
            src={logoPeworld}
            alt="logo"
            className="object-contain"
            priority
          />
        </div>
      </div>
      <Greeting session={session} />
    </nav>
  );
};

export default NavbarAuth;
