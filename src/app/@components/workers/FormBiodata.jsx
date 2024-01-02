/* eslint-disable react-hooks/rules-of-hooks */
import { useSession } from "next-auth/react";
import { useState } from "react";

export default function formBiodata() {
  const { data: session } = useSession();
  const [name, setName] = useState("");
  const [nohp, setNoHp] = useState("");
  const [jobdesk, setJobDesk] = useState("");
  const [residence, setResidence] = useState("");
  const [workplace, setWorkplace] = useState("");
  const [description, setDescription] = useState("");
  const [job_type, setJobType] = useState("");
  const [instagram, setInstagram] = useState("");
  const [github, setGithub] = useState("");
  const [gitlab, setGitlab] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!session) {
      console.error("User not authenticated");
      return;
    }

    const requestBody = {
      name,
      nohp,
      jobdesk,
      residence,
      workplace,
      description,
      job_type,
      instagram,
      github,
      gitlab,
    };

    const res = await fetch(
      `https://hire-job-backend-rho.vercel.app/worker/profile/${session.user.userId}`,
      {
        method: "PUT",
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
      {/* form data diri */}
      <form
        className="flex flex-col gap-2 justify-start mx-4"
        onSubmit={handleSubmit}
      >
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
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label className="flex flex-col my-2 mx-2 text-[12px] text-[#9EA0A5]">
          No Hp
          <input
            className="border rounded mt-1 py-2 px-2 text-[14px] text-[#858D96]"
            type="text"
            placeholder="Masukan No Hp"
            name="jobDesk"
            value={nohp}
            onChange={(e) => setNoHp(e.target.value)}
          />
        </label>

        <label className="flex flex-col my-2 mx-2 text-[12px] text-[#9EA0A5]">
          Jobdesk
          <input
            className="border rounded mt-1 py-2 px-2 text-[14px] text-[#858D96]"
            type="text"
            placeholder="Masukan Jobdesk"
            name="jobDesk"
            value={jobdesk}
            onChange={(e) => setJobDesk(e.target.value)}
          />
        </label>

        <label className="flex flex-col my-2 mx-2 text-[12px] text-[#9EA0A5]">
          Tempat Tinggal
          <input
            className="border rounded mt-1 py-2 px-2 text-[14px] text-[#858D96]"
            type="text"
            placeholder="Masukan Tempat Tinggal"
            name="tempatKerja"
            value={residence}
            onChange={(e) => setResidence(e.target.value)}
          />
        </label>
        <label className="flex flex-col my-2 mx-2 text-[12px] text-[#9EA0A5]">
          Tempat Kerja
          <input
            className="border rounded mt-1 py-2 px-2 text-[14px] text-[#858D96]"
            type="text"
            placeholder="Masukan Tempat Kerja"
            name="tempatKerja"
            value={workplace}
            onChange={(e) => setWorkplace(e.target.value)}
          />
        </label>
        <label className="flex flex-col my-2 mx-2 text-[12px] text-[#9EA0A5]">
          Job Type
          <input
            className="border rounded mt-1 py-2 px-2 text-[14px] text-[#858D96]"
            type="text"
            placeholder="Masukan Type Job"
            name="jobType"
            value={job_type}
            onChange={(e) => setJobType(e.target.value)}
          />
        </label>
        <label className="flex flex-col my-2 mx-2 text-[12px] text-[#9EA0A5]">
          Instagram
          <input
            className="border rounded mt-1 py-2 px-2 text-[14px] text-[#858D96]"
            type="text"
            placeholder="Masukan Instagram"
            name="Instagram"
            value={instagram}
            onChange={(e) => setInstagram(e.target.value)}
          />
        </label>
        <label className="flex flex-col my-2 mx-2 text-[12px] text-[#9EA0A5]">
          Github
          <input
            className="border rounded mt-1 py-2 px-2 text-[14px] text-[#858D96]"
            type="text"
            placeholder="Masukan Github"
            name="Github"
            value={github}
            onChange={(e) => setGithub(e.target.value)}
          />
        </label>
        <label className="flex flex-col my-2 mx-2 text-[12px] text-[#9EA0A5]">
          Gitlab
          <input
            className="border rounded mt-1 py-2 px-2 text-[14px] text-[#858D96]"
            type="text"
            placeholder="Masukan Gitlab"
            name="Gitlab"
            value={gitlab}
            onChange={(e) => setGitlab(e.target.value)}
          />
        </label>

        <label className="flex flex-col my-2 mx-2 text-[12px] text-[#9EA0A5]">
          Description
          <textarea
            className="border rounded mt-1 py-2 px-2 text-[14px] text-[#858D96]"
            placeholder="Masukan Description"
            name="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </label>

        <button
          className="bg-[#5E50A1] text-white py-2 px-2 font-bold text-[16px] leading-[20px] rounded"
          type="submit"
        >
          Simpan
        </button>
      </form>
      {/* end form */}
    </div>
  );
}
