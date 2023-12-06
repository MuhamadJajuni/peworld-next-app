/* eslint-disable react/jsx-no-duplicate-props */
"use client";

import FooterLayout from "@/components/Footer";
import NavbarAuth from "@/components/NavbarAuth";
import foto from "img/LouisTomlinson.svg";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
interface Geolocation {
  lat: string;
  long: string;
}

interface Address {
  city: string;
  street: string;
  number: number;
  zipcode: string;
  geolocation: Geolocation;
}

interface Name {
  firstname: string;
  lastname: string;
}

interface Worker {
  id: number;
  email: string;
  username: string;
  password: string;
  name: Name;
  address: Address;
  phone: string;
}

export default function Home() {
  const [workers, setWorkers] = useState<Worker[]>([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const workersPerPage = 6; // Jumlah pekerja per halaman

  useEffect(() => {
    // Fetch data from the fake API
    fetch("https://fakestoreapi.com/users")
      .then((res) => res.json())
      .then((data) => setWorkers(data));
  }, []);

  const filteredWorkers = workers.filter((worker) =>
    `${worker.name.firstname} ${worker.name.lastname} ${worker.email}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  const pageCount = Math.ceil(filteredWorkers.length / workersPerPage);

  const changePage = ({ selected }: { selected: number }) => {
    setPageNumber(selected);
  };

  const displayWorkers = filteredWorkers
    .slice(pageNumber * workersPerPage, (pageNumber + 1) * workersPerPage)
    .map((worker) => (
      <div
        key={worker.id}
        className="bg-white rounded-xl overflow-hidden shadow-lg"
      >
        <div className="relative h-48 overflow-hidden">
          <Image
            src={foto} // Ganti dengan URL gambar yang sebenarnya
            alt={`Picture of ${worker.name.firstname} ${worker.name.lastname}`}
            className="object-cover w-full h-full"
            layout="fill"
          />
        </div>
        <div className="p-4">
          <h1 className="text-lg font-bold mb-2">
            {worker.name.firstname} {worker.name.lastname}
          </h1>
          <p className="text-sm text-gray-500">{worker.email}</p>
          <p className="text-sm text-gray-500">
            {worker.address.city}, {worker.address.street}
          </p>
          <hr className="my-3" />
          <div className="flex justify-end">
            <Link href={`/workers/${worker.username}`}>
              <button className="bg-[#5E50A1] text-white rounded py-2 text-sm">
                Lihat Profile
              </button>
            </Link>
          </div>
        </div>
      </div>
    ));

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Your search logic here
    // You can use setSearchTerm to update the search term and trigger filtering
  };

  return (
    <main className="container">
      <NavbarAuth />
      <nav className="flex bg-[#5E50A1] py-5 px-5">
        <div className="font-openSans font-bold text-[28px] leading-[20px] content-center text-white">
          Top Jobs
        </div>
      </nav>
      <section className="flex flex-col mx-12 mt-8 mb-2">
        <form onSubmit={handleSearch}>
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Mockups, Logos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              required
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayWorkers}
        </div>
        <div className="flex justify-center my-5">
          <div className="join">
            <button
              className="join-item btn"
              onClick={() => setPageNumber((prev) => Math.max(prev - 1, 0))}
              disabled={pageNumber === 0}
            >
              «
            </button>
            <button className="join-item btn">Page {pageNumber + 1}</button>
            <button
              className="join-item btn"
              onClick={() =>
                setPageNumber((prev) => Math.min(prev + 1, pageCount - 1))
              }
              disabled={pageNumber === pageCount - 1}
            >
              »
            </button>
          </div>
        </div>
      </section>
      <FooterLayout />
    </main>
  );
}
