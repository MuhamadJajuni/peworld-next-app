/* eslint-disable @next/next/no-img-element */
"use client";

import FooterLayout from "@/components/Footer";
import NavbarAuth from "@/components/NavbarAuth";
import fotoLouis from "img/TomLouis.svg";
import Image from "next/image";
export default function HirePage() {
  return (
    <main>
      <NavbarAuth />
      <section className="container bg-slate-100 h-screen shadow-xl">
        <section className="grid grid-cols-2 justify-center bg-slate-100">
          <div className="bg-slate-100">
            <div className="flex justify-center mx-10 my-10">
              <div className="col-start-1 col-span-4 flex flex-col bg-white rounded-md ml-20 mr-20 mx-5 shadow">
                <div className="grid grid-flow-row gap-2 justify-center items-center mt-5 mx-5">
                  <div className="flex flex-col justify-center items-center">
                    <Image
                      src={fotoLouis}
                      alt="logo"
                      width={100}
                      height={100}
                      className="object-contain rounded-full"
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
                    <p className="text-sm my-1 text-gray-400">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Ipsam ipsum fuga repudiandae! Blanditiis, eos aut?
                    </p>
                  </div>
                  <section className="flex flex-col mb-10 my-5">
                    <h4 className="mb-5 mx-2 my-5 font-semibold">SKILL</h4>
                    <div className="grid grid-cols-4 gap-4 mx-2">
                      <div className="bg-amber-500 text-slate-300 text-sm rounded-md flex justify-center items-center">
                        Phyton
                      </div>
                      <div className="bg-amber-500 text-slate-300 text-sm rounded-md flex justify-center items-center">
                        Laravel
                      </div>
                      <div className="bg-amber-500 text-slate-300 text-sm rounded-md flex justify-center items-center">
                        Javascript
                      </div>
                      <div className="bg-amber-500 text-slate-300 text-sm rounded-md flex justify-center items-center">
                        Golang
                      </div>
                      <div className="bg-amber-500 text-slate-300 text-sm rounded-md flex justify-center items-center">
                        C++
                      </div>
                      <div className="bg-amber-500 text-slate-300 text-sm rounded-md flex justify-center items-center">
                        PHP
                      </div>
                      <div className="bg-amber-500 text-slate-300 text-sm rounded-md flex justify-center items-center">
                        HTML
                      </div>
                      <div className="bg-amber-500 text-slate-300 text-sm rounded-md flex justify-center items-center">
                        Kotlin
                      </div>
                      <div className="bg-amber-500 text-slate-300 text-sm rounded-md flex justify-center items-center">
                        Swift
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
          <div className="mr-5 my-7">
            <form className="flex flex-col gap-2 justify-start mr-20">
              <div className="text-start text-xl">
                <h4 className="font-semibold text-[#1F2A36] text-[32px] leading-[43px]">
                  Hubungi Lous Tomlinson
                </h4>
              </div>
              <p className="font-normal mb-10 mt-3 text-[#46505C] text-[18px] leading-[24px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                euismod ipsum et dui rhoncus auctor.
              </p>
              <label className="flex flex-col my-2 text-[12px] text-[#9EA0A5]">
                Tujuan tentang pesan ini
                <input
                  className="border rounded mt-1 py-2 px-2 text-[14px] text-[#858D96]"
                  type="text"
                  placeholder="Projek"
                />
              </label>
              <label className="flex flex-col my-2 text-[12px] text-[#9EA0A5]">
                Nama lengkap
                <input
                  className="border rounded mt-1 py-2 px-2 text-[14px] text-[#858D96]"
                  type="text"
                  placeholder="Masukan nama lengkap"
                />
              </label>
              <label className="flex flex-col my-2 text-[12px] text-[#9EA0A5]">
                Email
                <input
                  className="border rounded mt-1 py-2 px-2 text-[14px] text-[#858D96]"
                  type="text"
                  placeholder="Masukan email"
                />
              </label>
              <label className="flex flex-col my-2 text-[12px] text-[#9EA0A5]">
                No Handpone
                <input
                  className="border rounded mt-1 py-2 px-2 text-[14px] text-[#858D96]"
                  type="text"
                  placeholder="Masukan no handpone"
                />
              </label>
              <label className="flex flex-col my-2 text-[12px] text-[#9EA0A5]">
                Deskripsi Singkat
                <textarea
                  className="border rounded h-32 mt-1 py-2 px-2 text-[14px] text-[#858D96]"
                  placeholder="Deskripsikan/jelaskan lebih detail"
                ></textarea>
              </label>
              <div className="flex justify-center my-5 mb-20">
                <button className="bg-[#FBB017] w-full rounded text-white font-bold text-[16px] leading-[20px] py-2 px-2">
                  Hire
                </button>
              </div>
            </form>
          </div>
          <div>
            <FooterLayout />
          </div>
        </section>
      </section>
    </main>
  );
}
