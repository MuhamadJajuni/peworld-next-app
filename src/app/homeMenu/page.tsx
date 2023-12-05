"use client";

import FooterLayout from "@/components/Footer";
import NavbarAuth from "@/components/NavbarAuth";
import fotoHarry from "img/harry-styles.png";
import fotoLouis from "img/loius-tomlinson.png";
import fotoNial from "img/nial-horan.png";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { data: session, status }: { data: any; status: string } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }

    if (status === "authenticated" && session?.user) {
      const { role } = session.user;

      if (role === "workers") {
        router.push("/homeMenu");
      } else if (role === "recruiters") {
        router.push("/homeMenu");
      } else {
      }
    }
  }, [router, session, status]);

  return (
    <main className="container">
      <NavbarAuth />
      <nav className="flex bg-[#5E50A1] py-5 px-5 ">
        <h1 className="font-openSans font-bold text-[28px] leading-[20px] content-center text-white">
          Top Jobs
        </h1>
      </nav>
      <section className="flex flex-col h-60 mx-12 px-12 gap-2 py-5">
        <div className="flex justify-center items-center">
          <div className="flex items-center w-full bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500">
            <div className="flex bg-gray-100 p-4 w-full rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 opacity-30"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                className="bg-gray-100 outline-none"
                type="text"
                placeholder="Search for any skill"
              />
            </div>
            <div className="flex py-3 px-4 rounded-lg text-gray-500 font-semibold cursor-pointer">
              <span>Kategori</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            <div className="bg-[#5E50A1] py-3 px-3 text-white font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer">
              <span>Search</span>
            </div>
          </div>
        </div>
        <div className="grid grid-flow-col my-3">
          <div className="grid grid-cols-2 max-h-min my-2">
            <div className=" flex">
              <Image
                src={fotoHarry}
                alt="Picture of the author"
                className="rounded-full object-cover"
              />
              <div className="flex flex-col ml-3">
                <h1 className="text-lg font-bold">Harry Styles</h1>
                <br></br>
                <p className="text-sm mt-0">Web Developer</p>
                <h5 className="text-sm">Javascript</h5>
              </div>
            </div>
            <div className="flex justify-end items-center content-center">
              <Link href="/workers/HarryStyles">
                <button className="bg-[#5E50A1] text-white rounded py-2 text-sm mr-5">
                  Lihat Profile
                </button>
              </Link>
            </div>
          </div>
          <hr></hr>
          <div className="grid grid-cols-2 max-h-min my-2">
            <div className=" flex">
              <Image
                src={fotoLouis}
                alt="Picture of the author"
                className="rounded-full object-cover"
              />
              <div className="flex flex-col ml-3">
                <h1 className="text-lg font-bold">Loius Tomlinson</h1>
                <br></br>
                <p className="text-sm mt-0">Web Developer</p>
                <h5 className="text-sm">Javascript</h5>
              </div>
            </div>
            <div className="flex justify-end items-center content-center">
              <Link href="/workers/LoiusTomlinson">
                <button className="bg-[#5E50A1] text-white rounded py-2 text-sm mr-5">
                  Lihat Profile
                </button>
              </Link>
            </div>
          </div>
          <hr></hr>
          <div className="grid grid-cols-2 max-h-min my-2">
            <div className=" flex">
              <Image
                src={fotoNial}
                alt="Picture of the author"
                className="rounded-full object-cover"
              />
              <div className="flex flex-col ml-3">
                <h1 className="text-lg font-bold">Nial Horan</h1>
                <br></br>
                <p className="text-sm mt-0">Web Developer</p>
                <h5 className="text-sm">Javascript</h5>
              </div>
            </div>
            <div className="flex justify-end items-center content-center">
              <Link href="/workers/NialHoran">
                <button className="bg-[#5E50A1] text-white rounded py-2 text-sm mr-5">
                  Lihat Profile
                </button>
              </Link>
            </div>
          </div>
          <hr></hr>
        </div>
        <FooterLayout />
      </section>
    </main>
  );
}
