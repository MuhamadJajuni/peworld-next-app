"use client";

import logoPeworld from "img/logoPeworld.svg";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export default function NavbarLayout() {
  const { data: session } = useSession(); // Use NextAuth.js hook to get session data

  return (
    <nav className="flex flex-col md:flex-row justify-between items-center md:items-stretch">
      <div className="flex items-center">
        <Image
          className="w-16 md:w-32 lg:w-48"
          src={logoPeworld}
          style={{ width: "130px", marginTop: "12px", marginLeft: "25px" }}
          alt="logo"
        />
        {session && (
          <li className="flex justify-between mx-1 md:mt-3 mt-4 ml-32 items-center">
            <Link href={"/home"}>
              <button
                type="button"
                className="font-openSans font-semibold text-[18px] leading-[28px] text-[#1F2A36] items-center md:ml-0 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-bounce"
              >
                Home
              </button>
            </Link>
          </li>
        )}
      </div>

      <section
        className="flex justify-end md:justify-end w-full md:w-auto"
        style={{ marginTop: "12px", marginRight: "25px" }}
      >
        <ul className="flex justify-between gap-3 mx-1">
          {session ? (
            <></>
          ) : (
            <>
              <Link href="/login">
                <button
                  type="button"
                  className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-bounce bg-white text-black border border-slate-300 text-sm items-center rounded-lg py-2 px-4"
                >
                  Masuk
                </button>
              </Link>
              <Link href="/register">
                <button
                  type="button"
                  className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-bounce bg-[#5E50A1] hover:border text-sm text-white items-center rounded-lg py-2 px-4"
                >
                  Daftar
                </button>
              </Link>
            </>
          )}
          {session && (
            <>
              <li className="flex justify-between gap-3 mx-1">
                <Link href={"/workers"}>
                  <button
                    type="button"
                    className="bg-[#5E50A1] hover:bg-white hover:text-black border-spacing-1 hover:border hover:border-slate-300 text-sm text-white items-center rounded py-2 px-4"
                  >
                    Profile
                  </button>
                </Link>
              </li>
            </>
          )}
        </ul>
      </section>
    </nav>
  );
}
