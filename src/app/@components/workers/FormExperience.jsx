import { useSession } from "next-auth/react";
import { useState } from "react";

export default function FormExperience() {
  const { data: session } = useSession();
  const [jobdesk, setJobdesk] = useState("");
  const [company_name, setCompany_Name] = useState("");
  const [date_start, setDate_Start] = useState("");
  const [date_end, setDate_End] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!session) {
      console.error("User not authenticated");
      return;
    }

    const requestBody = {
      jobdesk,
      company_name,
      date_start,
      date_end,
      description,
    };

    const res = await fetch(
      "https://hire-job-backend-rho.vercel.app/work-experience",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${session.user.accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      }
    );

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
      <form
        className="flex flex-col gap-2 my-2 justify-start rounded mx-4"
        onSubmit={handleSubmit}
      >
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
            value={jobdesk}
            onChange={(e) => setJobdesk(e.target.value)}
            placeholder="Masukan Posisi"
          />
        </label>
        <div className="grid grid-flow-row w-full">
          <div className="grid grid-cols-1">
            <div>
              <label className="flex flex-col my-2 mx-2 text-[12px] text-[#9EA0A5]">
                Nama Perusahaan
                <input
                  className="border rounded mt-1 py-2 px-2 text-[14px] text-[#858D96]"
                  type="text"
                  value={company_name}
                  onChange={(e) => setCompany_Name(e.target.value)}
                  placeholder="Masukan Nama Perusahaan"
                />
              </label>
            </div>
            <div className="grid grid-cols-2">
              <div>
                <label className="flex flex-col my-2 mx-2 text-[12px] text-[#9EA0A5]">
                  Mulai
                  <input
                    className="border rounded mt-1 py-2 px-2 text-[14px] text-[#858D96]"
                    type="text"
                    value={date_start}
                    onChange={(e) => setDate_Start(e.target.value)}
                    placeholder="Masukan Mulai Masuk"
                  />
                </label>
              </div>
              <div>
                <label className="flex flex-col my-2 mx-2 text-[12px] text-[#9EA0A5]">
                  Sampai
                  <input
                    className="border rounded mt-1 py-2 px-2 text-[14px] text-[#858D96]"
                    type="text"
                    value={date_end}
                    onChange={(e) => setDate_End(e.target.value)}
                    placeholder="Masukan Sampai"
                  />
                </label>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1">
            <label className="flex flex-col my-2 mx-2 text-[12px] text-[#9EA0A5]">
              Deskripsi Singkat
              <textarea
                className="border rounded mt-1 py-2 px-2 text-[14px] text-[#858D96]"
                placeholder="Tuliskan Deskripsi Singkat"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
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
  );
}
