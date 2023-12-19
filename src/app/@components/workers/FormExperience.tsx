export default function FormExperience() {
    return (
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
    )
}