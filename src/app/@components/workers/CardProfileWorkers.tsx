"use client"

import fotoLouis from "img/TomLouis.svg"
import Image from "next/image"
export default function CardProfileWorkers() {
    return (
        <div className="col-start-1 col-span-4 flex flex-col h-auto bg-white rounded ml-20 mx-10 shadow">
        <div className="grid grid-rows-1 grid-flow-col gap-2 justify-center items-center mt-5 mx-5">
          <div className="flex flex-col justify-center items-center">
            <Image
              src={fotoLouis}
              alt="logo"
              width={100}
              height={100}
              className="object-contain rounded-full"
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
    )
}