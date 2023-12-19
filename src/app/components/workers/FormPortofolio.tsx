import React from "react";

export default function FormPortofolio() {
    return (
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
    )
}