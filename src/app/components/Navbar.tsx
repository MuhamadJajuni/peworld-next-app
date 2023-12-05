import logoPeworld from "img/logoPeworld.png";
import Image from "next/image";
import Link from "next/link";

export default function NavbarLayout() {
  return (
    <nav className="flex justify-between">
      <Image
        className="w-16 md:w-32 lg:w-48"
        src={logoPeworld}
        style={{ width: "130px", marginTop: "12px", marginLeft: "25px" }}
        alt="logo"
      />
      <section
        className="flex justify-end w-16 md:w-32 lg:w-48"
        style={{ marginTop: "12px", marginRight: "25px" }}
      >
        <ul>
          <Link href="/login">
            <button
              type="button"
              className="transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-110 hover:bg-white duration-300 font-openSans ml-2 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium border rounded-md border-gray-200 bg-white text-gray-800 shadow-sm disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            >
              Masuk
            </button>
          </Link>
          <Link href="/register">
            <button
              type="button"
              className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 font-openSans ml-2 py-3 px-4 inline-flex items-center gap-x-2 text-sm rounded-md font-semibold border border-transparent bg-[#5E50A1] text-white disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            >
              Daftar
            </button>
          </Link>
        </ul>
      </section>
    </nav>
  );
}
