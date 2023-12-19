"use client";

import FooterLayout from "@/components/Footer";
import NavbarAuth from "@/components/NavbarAuth";
import fotoLouis from "img/foto-louis-rounded.svg";
import Image from "next/image";
import { SetStateAction, useState } from "react";

export default function WorkersPage() {
  const [activeTab] = useState(1);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState('');
  import React, { useState } from 'react';

const MyProfileForm = () => {
  const [personalData, setPersonalData] = useState({
    namaLengkap: '',
    jobDesk: '',
    domisili: '',
    tempatKerja: '',
    deskripsi: '',
  });

  const [skill, setSkill] = useState('');

  const [workExperience, setWorkExperience] = useState({
    posisi: '',
    namaPerusahaan: '',
    bulanTahun: '',
    deskripsiPekerjaan: '',
  });

  const [portfolio, setPortfolio] = useState({
    namaAplikasi: '',
    linkRepository: '',
    typePortofolio: 'aplikasiMobile',
    file: null,
  });

  const handlePersonalDataChange = (e) => {
    const { name, value } = e.target;
    setPersonalData({
      ...personalData,
      [name]: value,
    });
  };

  const handleSkillChange = (e) => {
    setSkill(e.target.value);
  };

  const handleWorkExperienceChange = (e) => {
    const { name, value } = e.target;
    setWorkExperience({
      ...workExperience,
      [name]: value,
    });
  };

  const handlePortfolioChange = (e) => {
    const { name, value, type } = e.target;
    setPortfolio({
      ...portfolio,
      [name]: type === 'file' ? e.target.files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lakukan sesuatu dengan data formulir, misalnya kirim ke server atau tampilkan di konsol
    console.log({
      personalData,
      skill,
      workExperience,
      portfolio,
    });
  };


  return (
    <main className="flex flex-col relative">
      <NavbarAuth />
      <section className="container bg-[#5E50A1] h-64">
        <section className="grid grid-cols-2 h-full mt-[58px] gap-5">
          <div className="grid grid-flow-row">
            <div className="col-start-2 col-span-3 mr-24">
              <div className="grid grid-cols-1 h-64">
                <div className="col-start-1 col-span-4 flex flex-col h-auto bg-white rounded ml-20 mx-10 shadow">
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
                      <p className="flex justify-center my-2 font-semibold text-[22px] text-[#1F2A36]">
                        Loius Tomlinson
                      </p>
                      <p className="flex justify-center my-2 font-normal text-[#1F2A36] text-[14px]">
                        Web Developer
                      </p>
                      <p className="flex justify-center my-2 font-normal text-[#9EA0A5] text-[14px]">
                        Majalengka, Jawa Barat
                      </p>
                      <p className="flex justify-center my-2 font-normal text-[#9EA0A5] text-[14px]">
                        Freelance
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center w-full gap-3 rounded my-5 mt-10">
                    <button className="bg-[#5E50A1] text-white py-2 px-2 font-bold text-[16px] leading-[20px] rounded mx-1">
                      Simpan
                    </button>
                    <button className="bg-white box-content mx-1 py-2 px-2 border leading-[20px] font-bold border-[#5E50A1] text-[16px] text-[#5E50A1] rounded">
                      Batal
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section className="bg-white mr-24 mb-20 grid grid-flow-row gap-2 mx-2 rounded">
            <div className="bg-white shadow my-2 gap-2 flex flex-col rounded">
              {/* form data diri */}
              <form className="flex flex-col gap-2 justify-start mx-4">
                <div className="mb-2 text-start text-xl">
                  <h4 className="font-semibold text-[22px] text-[#1F2A36] leading-[56px]">
                    Data Diri
                  </h4>
                  <hr className="border" />
                </div>
                <label className="flex flex-col my-2 mx-2 text-[12px] text-[#9EA0A5]">
                  Nama Lengkap
                  <input
                    className="border rounded mt-1 py-2 px-2 text-[14px] text-[#858D96]"
                    type="text"
                    placeholder="Masukan Nama Lengkap"
                  />
                </label>
                <label className="flex flex-col my-2 mx-2 text-[12px] text-[#9EA0A5]">
                  Job Desk
                  <input
                    className="border rounded mt-1 py-2 px-2 text-[14px] text-[#858D96]"
                    type="text"
                    placeholder="Masukan Job Desk"
                  />
                </label>
                <label className="flex flex-col my-2 mx-2 text-[12px] text-[#9EA0A5]">
                  Domisili
                  <input
                    className="border rounded mt-1 py-2 px-2 text-[14px] text-[#858D96]"
                    type="text"
                    placeholder="Masukan Domisili"
                  />
                </label>
                <label className="flex flex-col my-2 mx-2 text-[12px] text-[#9EA0A5]">
                  Tempat Kerja
                  <input
                    className="border rounded mt-1 py-2 px-2 text-[14px] text-[#858D96]"
                    type="text"
                    placeholder="Masukan Tempat Kerja"
                  />
                </label>
                <label className="flex flex-col my-2 mx-2 text-[12px] text-[#9EA0A5]">
                  Deskripsi Singkat
                  <textarea
                    className="border rounded mt-1 py-2 px-2 text-[14px] text-[#858D96]"
                    placeholder="Masukan Deskripsi"
                  ></textarea>
                </label>
              </form>
              {/* end form */}
            </div>
            <div className="bg-white shadow my-2 gap-2 flex flex-col rounded">
              {/* form skill */}
              <form className="flex flex-col gap-2 my-2 justify-start mx-4">
                <div className="mb-2 text-start text-xl">
                  <h4 className="font-semibold text-[22px] text-[#1F2A36] leading-[56px]">
                    SKILL
                  </h4>
                  <hr className="border" />
                </div>
                <div className="grid grid-cols-3 roun">
                  <div className="col-span-2">
                    <label className="flex flex-col my-2 mx-2 text-[12px] text-[#9EA0A5]">
                      <input
                        className="border rounded mt-1 py-2 px-2 text-[14px] text-[#858D96]"
                        type="text"
                        placeholder="Masukan Skill"
                      />
                    </label>
                  </div>
                  <div className="flex justify-end">
                    <button className="bg-[#FBB017] text-white font-bold w-full text-[14px] leading-[19px] my-2 mx-1 rounded">
                      Simpan
                    </button>
                  </div>
                </div>
              </form>
              {/* end form skill */}
            </div>
            <div className="bg-white shadow my-2 gap-2 flex flex-col rounded">
              {/* form pengalaman kerja */}
              <form className="flex flex-col gap-2 my-2 justify-start rounded mx-4">
                <div className="mb-2 text-start text-xl">
                  <h4 className="font-semibold text-[22px] text-[#1F2A36] leading-[56px]">
                    Pengalaman Kerja
                  </h4>
                  <hr className="border" />
                </div>
                <label className="flex flex-col my-2 mx-2 text-[12px] text-[#9EA0A5]">
                  Posisi
                  <input
                    className="border rounded mt-1 py-2 px-2 text-[14px] text-[#858D96]"
                    type="text"
                    placeholder="Masukan Posisi"
                  />
                </label>
                <div className="grid grid-flow-row w-full">
                  <div className="grid grid-cols-2">
                  <div>
                    <label className="flex flex-col my-2 mx-2 text-[12px] text-[#9EA0A5]">
                      Nama Perusahaan
                      <input
                        className="border rounded mt-1 py-2 px-2 text-[14px] text-[#858D96]"
                        type="text"
                        placeholder="Masukan Mulai"
                      />
                    </label>
                  </div>
                  <div>
                    <label className="flex flex-col my-2 mx-2 text-[12px] text-[#9EA0A5]">
                      Bulan/Tahun
                      <input
                        className="border rounded mt-1 py-2 px-2 text-[14px] text-[#858D96]"
                        type="text"
                        placeholder="Masukan Sampai"
                      />
                    </label>
                  </div>
                  </div>
                  <div className="grid grid-cols-1">
                    <label className="flex flex-col my-2 mx-2 text-[12px] text-[#9EA0A5]">
                      Deskripsi Singkat
                      <textarea
                        className="border rounded mt-1 py-2 px-2 text-[14px] text-[#858D96]"
                        placeholder="Tuliskan Deskripsi Singkat"
                      ></textarea>
                    </label>
                  </div>
                </div>
                <button className="border border-[#FBB017] text-[#FBB017] leading-[20px] font-bold text-[16px] py-2 my-3 mx-2 rounded">
                  Tambah Pengalaman Kerja
                </button>
              </form>
              {/* end form pengalaman kerja */}
            </div>
            <div className="bg-white shadow my-2 gap-2 flex flex-col rounded">
              {/* form portofolio */}
              <form className="flex flex-col gap-2 my-2 justify-start mx-4">
                <div className="mb-2 text-start text-xl">
                  <h4 className="font-semibold text-[22px] text-[#1F2A36] leading-[56px]">
                    Portofolio
                  </h4>
                  <hr className="border" />
                </div>
                <label className="flex flex-col my-2 mx-2 text-[12px] text-[#9EA0A5]">
                  Nama Aplikasi
                  <input
                    className="border rounded mt-1 py-2 px-2 text-[14px] text-[#858D96]"
                    type="text"
                    placeholder="Masukan Nama Aplikasi"
                  />
                </label>
                <label className="flex flex-col my-2 mx-2 text-[12px] text-[#9EA0A5]">
                  Link Repository
                  <input
                    className="border rounded mt-1 py-2 px-2 text-[14px] text-[#858D96]"
                    type="text"
                    placeholder="Masukan Link Repository"
                  />
                </label>
                <label className="flex flex-col my-2 mx-2 text-[12px] text-[#9EA0A5]">
                  Type Portofolio
                  <div className="grid sm:grid-cols-2 gap-2">
                    <label
                      htmlFor="hs-radio-in-form"
                      className="flex mt-1 p-3 w-full bg-white border border-gray-200 rounded text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                    >
                      <input
                        type="radio"
                        name="hs-radio-in-form"
                        className="shrink-0 mt-1 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-[#5E50A1] dark:checked:border-[#5E50A1] dark:focus:ring-offset-gray-800"
                        id="hs-radio-in-form"
                      />
                      <span className="text-[#46505C] ms-3 checked:dark:text-gray-400 checked:font-semibold checked:leading-[19px] checked:text-[14px]">
                        Aplikasi Mobile
                      </span>
                    </label>

                    <label
                      htmlFor="hs-radio-checked-in-form"
                      className="flex mt-1 p-3 w-full bg-white border border-gray-200 rounded text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                    >
                      <input
                        type="radio"
                        name="hs-radio-in-form"
                        className="shrink-0 mt-1 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                        id="hs-radio-checked-in-form"
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
                    className="block w-full border border-gray-200 shadow-sm rounded text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600
                  file:bg-gray-200 file:border-0 file:me-4
                  file:py-3 file:px-4
                  dark:file:bg-gray-700 dark:file:text-gray-400"
                  />
                </div>

                <button className="border border-[#FBB017] text-[#FBB017] leading-[20px] font-bold text-[16px] py-2 my-3 mx-2 rounded">
                  Tambah Portofolio
                </button>
              </form>
              {/* end form portofolio */}
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
