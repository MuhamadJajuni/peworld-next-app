import { useState } from "react"

export default function formBiodata() {


  const [namaLengkap, setNamaLengkap] = useState("")
  const [jobDesk, setJobDesk] = useState("")
  const [domisili, setDomisili] = useState("")
  const [tempatKerja, setTempatKerja] = useState('')
  const [deskripsi, setDeskripsi] = useState('')

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const res = await fetch("/api/workers/createBiodata", {
      method: "POST",
      body: JSON.stringify({
        namaLengkap,
        jobDesk,
        domisili,
        tempatKerja,
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
    {/* form data diri */}
    <form className="flex flex-col gap-2 justify-start mx-4" onSubmit={handleSubmit}>
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
          name="namaLengkap"
          value={namaLengkap}
          onChange={(e) => setNamaLengkap(e.target.value)}
        />
      </label>

      <label className="flex flex-col my-2 mx-2 text-[12px] text-[#9EA0A5]">
        Job Desk
        <input
          className="border rounded mt-1 py-2 px-2 text-[14px] text-[#858D96]"
          type="text"
          placeholder="Masukan Job Desk"
          name="jobDesk"
          value={jobDesk}
          onChange={(e) => setJobDesk(e.target.value)}
        />
      </label>

      <label className="flex flex-col my-2 mx-2 text-[12px] text-[#9EA0A5]">
        Domisili
        <input
          className="border rounded mt-1 py-2 px-2 text-[14px] text-[#858D96]"
          type="text"
          placeholder="Masukan Domisili"
          name="domisili"
          value={domisili}
          onChange={(e) => setDomisili(e.target.value)}
        />
      </label>

      <label className="flex flex-col my-2 mx-2 text-[12px] text-[#9EA0A5]">
        Tempat Kerja
        <input
          className="border rounded mt-1 py-2 px-2 text-[14px] text-[#858D96]"
          type="text"
          placeholder="Masukan Tempat Kerja"
          name="tempatKerja"
          value={tempatKerja}
          onChange={(e) => setTempatKerja(e.target.value)}
        />
      </label>

      <label className="flex flex-col my-2 mx-2 text-[12px] text-[#9EA0A5]">
        Deskripsi Singkat
        <textarea
          className="border rounded mt-1 py-2 px-2 text-[14px] text-[#858D96]"
          placeholder="Masukan Deskripsi"
          name="deskripsiSingkat"
          value={deskripsi}
          onChange={(e) => setDeskripsi(e.target.value)}
        ></textarea>
      </label>

      <button className="bg-[#5E50A1] text-white py-2 px-2 font-bold text-[16px] leading-[20px] rounded" type="submit">
        Simpan
      </button>
    </form>
    {/* end form */}
  </div>
  )
  }
