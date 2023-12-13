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
                      <p className="my-2 font-semibold">PT. Martabat Jaya Abadi</p>
                      <p className="text-sm my-1 font-normal text-black">
                      Financial
                      </p>
                      <p className="text-sm my-1  text-gray-400">
                        Majalengka, Jawa Barat
                      </p>
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
                  Nama Perusahaan
                  <input
                    className="border"
                    type="text"
                    placeholder="Masukan Nama Perusahaan"
                  />
                </label>
                <label className="flex flex-col mx-2 my-2">
                  Bidang
                  <input
                    className="border"
                    type="text"
                    placeholder="Masukan bidang perusahaan ex : Financial"
                  />
                </label>
                <label className="flex flex-col mx-2 my-2">
                    Kota
                  <input
                    className="border"
                    type="text"
                    placeholder="Masukan Kota"
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
                    placeholder="Tuliskan Deskripsi Singkat"
                  ></textarea>
                </label>
                <label className="flex flex-col mx-2 my-2">
                  Email
                  <input
                    className="border"
                    type="text"
                    placeholder="Masukan Email"
                  />
                </label>
                <label className="flex flex-col mx-2 my-2">
                  Instagram
                  <input
                    className="border"
                    type="text"
                    placeholder="Masukan Nama Instagram"
                  />
                </label>
                <label className="flex flex-col mx-2 my-2">
                  No Telepon
                  <input
                    className="border"
                    type="text"
                    placeholder="Masukan No Telepon"
                  />
                </label>
                <label className="flex flex-col mx-2 my-2">
                  Linkedin
                  <input
                    className="border"
                    type="text"
                    placeholder="Masukan Nama Linkedin"
                  />
                </label>
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
