import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import logoPeworld from "img/logoPeworld.svg";
import Avatar from "img/LiamPayne.svg";

interface GreetingProps {
  session: any;
}

const Greeting: React.FC<GreetingProps> = ({ session }) => {
  const status = session?.user ? "authenticated" : "unauthenticated";

  const getCurrentTimeOfDay = () => {
    const currentHour = new Date().getHours();
    if (currentHour >= 5 && currentHour < 12) {
      return "Morning";
    } else if (currentHour >= 12 && currentHour < 18) {
      return "Afternoon";
    } else if (currentHour >= 18 && currentHour < 21) {
      return "Evening";
    } else {
      return "Night";
    }
  };

  const handleSignOut = () => {
    const isConfirmed = window.confirm("Apakah kamu mau Logout?");

    if (isConfirmed) {
      signOut();
    }
  };

  return (
    <div className="flex justify-items-start items-center gap-1 mx-2">
      {status === "authenticated" ? (
        <>
          {session?.user?.image || (
            <Image
              src={Avatar}
              alt="User Avatar"
              className="w-8 h-8 rounded-full ml-2"
            />
          )}
          <h4 className="text-black text-md mr-2">
            {`Good ${getCurrentTimeOfDay()}, ${session?.user?.name}`}
          </h4>
          <button
            className="bg-amber-500 text-black rounded-md px-2 text-sm h-7 hover:bg-amber-400 hover:text-white"
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
  );
};

const NavbarAuth: React.FC = () => {
  const { data: session, status }: { data: any; status: string } = useSession();
  console.log(session);

  return (
    <nav className="flex bg-white py-3 px-5 justify-between">
      <div className="flex justify-center justify-items-center items-center mx-5">
        <div>
          <Image
            src={logoPeworld}
            alt="logo"
            className="object-contain"
            priority
          />
        </div>
        <ul className="flex justify-center justify-items-center items-center ml-3 gap-2">
          {status === "authenticated" && session?.user?.role === "workers" && (
            <Link href="/workers">
              <li className="text-white text-xs cursor-pointer bg-[#5E50A1] rounded">
                Workers
              </li>
            </Link>
          )}
          {status === "authenticated" &&
            session?.user?.role === "recruiters" && (
              <Link href="/recruiters">
                <li className="text-white text-xs cursor-pointer bg-[#5E50A1] rounded">
                  Recruiters
                </li>
              </Link>
            )}
        </ul>
      </div>
      <Greeting session={session} />
    </nav>
  );
};

export default NavbarAuth;
