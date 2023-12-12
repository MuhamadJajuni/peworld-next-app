"use client";

import FooterLayout from "@/components/Footer";
import NavbarAuth from "@/components/NavbarAuth";
import fotoLouis from "img/foto-louis-rounded.svg";
import Image from "next/image";
import { SetStateAction, useState } from "react";

export default function WorkersPage() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabChange = (tabIndex: SetStateAction<number>) => {
    setActiveTab(tabIndex);
  };

  return (
    <main className="flex flex-col relative">
      <NavbarAuth />
      <section className="container bg-[#5E50A1] h-64">
        <section className="grid grid-cols-2 h-full mt-[58px] gap-5">
          <div className="grid grid-flow-row ">
            <div className="col-start-2 col-span-3 mr-24">
              <div className="grid grid-cols-1 h-64">
                <div className="col-start-1 col-span-4 flex flex-col h-auto bg-white rounded-md ml-20 mx-10 shadow">
                  <div className="grid grid-rows-1 grid-flow-col gap-2 justify-center items-center mt-5 mx-5">
                    <div className="flex flex-col justify-center items-center">
                      <Image
                        src={fotoLouis}
                        alt="logo"
                        width={100}
                        height={100}
                        className="object-contain"
                        priority
                      />
                      <p className="my-2 font-semibold">Louis Tomlinson</p>
                      <p className="text-sm my-1 font-normal text-black">
                        Web Developer
                      </p>
                      <p className="text-sm my-1  text-gray-400">
                        Majalengka, Jawa Barat
                      </p>
                      <p className="text-sm my-1  text-gray-400">Freelancer</p>
                      <div className="flex flex-col justify-center w-full gap-2 my-5 mt-10">
                        <button className="bg-[#5E50A1] text-white">
                          Edit
                        </button>
                        <button className="bg-white box-content shadow-lg border-purple-500">
                          Simpan
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section className="bg-white mr-24 rounded grid grid-flow-row gap-2 mx-2">
            <div className="bg-white shadow my-2 gap-2 flex flex-col">
              <form className="flex flex-col gap-2 my-2 justify-start">
                <div className="mb-2 text-start text-xl mx-3 my-2">
                  <h4 className="my-2 font-semibold">Data Diri</h4>
                  <hr className="border" />
                </div>
                <label className="flex flex-col mx-2 my-2">
                  Nama Lengkap
                  <input
                    className="border"
                    type="text"
                    placeholder="Masukan Nama Lengkap"
                  />
                </label>
                <label className="flex flex-col mx-2 my-2">
                  Job Desk
                  <input
                    className="border"
                    type="text"
                    placeholder="Masukan Job Desk"
                  />
                </label>
                <label className="flex flex-col mx-2 my-2">
                  Domisili
                  <input
                    className="border"
                    type="text"
                    placeholder="Masukan Domisili"
                  />
                </label>
                <label className="flex flex-col mx-2 my-2">
                  Tempat Kerja
                  <input
                    className="border"
                    type="text"
                    placeholder="Masukan Tempat Kerja"
                  />
                </label>
                <label className="flex flex-col mx-2 my-2">
                  Deskripsi Singkat
                  <textarea
                    className="border"
                    placeholder="Masukan Deskripsi"
                  ></textarea>
                </label>
              </form>
            </div>
            <div className="bg-white shadow mt-5 my-2 border">
              <div>
                <form className="flex flex-col gap-2 my-2 justify-start">
                  <div className="mb-2 text-start text-xl mx-3 my-2">
                    <h4 className="my-2 font-semibold">Skill</h4>
                    <hr className="border" />
                  </div>
                  <div className="grid grid-cols-3 roun">
                    <div className="col-span-2">
                      <label className="flex flex-col mx-3 my-3">
                        <input
                          className="border"
                          type="text"
                          placeholder="Masukan Skill"
                        />
                      </label>
                    </div>
                    <div className="flex justify-end">
                      <button className="border bg-amber-400 w-full my-3 mx-3 text-white rounded ">
                        Simpan
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="bg-white shadow my-2 border rounded">
              <form className="flex flex-col gap-2 my-2 justify-start rounded">
                <div className="mb-2 text-start text-xl mx-3 my-2 rounded">
                  <h4 className="my-2 font-semibold">Pengalaman Kerja</h4>
                  <hr className="border" />
                </div>
                <label className="flex flex-col mx-2 my-2">
                  Posisi
                  <input
                    className="border rounded"
                    type="text"
                    placeholder="Masukan Posisi"
                  />
                </label>
                <div className="grid grid-cols-2 w-full">
                  <div>
                    <label className="flex flex-col mx-2 my-2">
                      Nama Perusahaan
                      <input
                        className="border rounded"
                        type="text"
                        placeholder="Masukan Mulai"
                      />
                    </label>
                  </div>
                  <div>
                    <label className="flex flex-col mx-2 my-2">
                      Bulan/Tahun
                      <input
                        className="border rounded"
                        type="text"
                        placeholder="Masukan Sampai"
                      />
                    </label>
                  </div>
                  <div className="grid grid-cols-1">
                    <label className="mx-2 my-2">
                      Deskripsi Singkat
                      <textarea
                        className="border w-auto rounded"
                        placeholder="Masukan Deskripsi"
                      ></textarea>
                    </label>
                  </div>
                </div>
                <button className="border bg-amber-400 my-3 mx-3 text-white rounded">
                  Tambah Pengalaman Kerja
                </button>
              </form>
            </div>
            <div className="bg-white shadow my-2 border">
              <form className="flex flex-col gap-2 my-2 justify-start">
                <div className="mb-2 text-start text-xl mx-3 my-2">
                  <h4 className="my-2 font-semibold">Portofolio</h4>
                  <hr className="border" />
                </div>
                <label className="flex flex-col mx-2 my-2">
                  Nama Aplikasi
                  <input
                    className="border"
                    type="text"
                    placeholder="Masukan Nama Aplikasi"
                  />
                </label>
                <label className="flex flex-col mx-2 my-2">
                  Link Repository
                  <input
                    className="border"
                    type="text"
                    placeholder="Masukan Link Repository"
                  />
                </label>
                <label className="flex flex-col mx-2 my-2">
                  Type Portofolio
                  <div className="grid sm:grid-cols-2 gap-2">
                    <label
                      htmlFor="hs-radio-in-form"
                      className="flex p-3 w-full bg-white border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                    >
                      <input
                        type="radio"
                        name="hs-radio-in-form"
                        className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                        id="hs-radio-in-form"
                      />
                      <span className="text-sm text-gray-500 ms-3 dark:text-gray-400">
                        Aplikasi Mobile
                      </span>
                    </label>

                    <label
                      htmlFor="hs-radio-checked-in-form"
                      className="flex p-3 w-full bg-white border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                    >
                      <input
                        type="radio"
                        name="hs-radio-in-form"
                        className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                        id="hs-radio-checked-in-form"
                        checked
                      />
                      <span className="text-sm text-gray-500 ms-3 dark:text-gray-400">
                        Aplikasi Web
                      </span>
                    </label>
                  </div>
                </label>
                <div className="mx-2">
                  <label htmlFor="file-input" className="sr-only">
                    Choose file
                  </label>
                  <input
                    type="file"
                    name="file-input"
                    id="file-input"
                    className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600
                  file:bg-gray-50 file:border-0 file:me-4
                  file:py-3 file:px-4
                  dark:file:bg-gray-700 dark:file:text-gray-400"
                  />
                </div>

                <button className="border bg-amber-400 my-3 mx-3 text-white rounded">
                  Upload
                </button>
              </form>
            </div>
          </section>
          <div>
            <FooterLayout />
          </div>
        </section>
      </section>
    </main>
  );
}
