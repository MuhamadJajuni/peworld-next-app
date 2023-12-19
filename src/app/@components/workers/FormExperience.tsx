import { useState } from "react"

export default function FormExperience() {

  const [posisi, setPosisi] = useState("")
  const [namaPerusahaan, setNamaPerusahaan] = useState("")
  const [mulai, setMulai] = useState("")
  const [deskripsi, setDeskripsi] = useState("")

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const res = await fetch("/api/workers/createExperience", {
      method: "POST",
      body: JSON.stringify({
        posisi,
        namaPerusahaan,
        mulai,
        deskripsi
      }),
    });

    if (res.ok) {
      e.target.reset();
      console.log("data submitted");
    } else if (res.status === 400) {
      console.log("something went wrong");
    } else {
      console.log("kesalahan");
    }
  };


    return (
        <div className="bg-white shadow my-2 gap-2 flex flex-col rounded">
        {/* form pengalaman kerja */}
        <form className="flex flex-col gap-2 my-2 justify-start rounded mx-4" onSubmit={handleSubmit}>
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
              value={posisi}
              onChange={(e) => setPosisi(e.target.value)}
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
                  value={namaPerusahaan}
                  onChange={(e) => setNamaPerusahaan(e.target.value)}
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
                  value={mulai}
                  onChange={(e) => setMulai(e.target.value)}
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
                  value={deskripsi}
                  onChange={(e) => setDeskripsi(e.target.value)}
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