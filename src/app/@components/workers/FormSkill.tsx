"use client";
import { useState } from "react";

export default function FormSkill() {
  const [skill, setSkill] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const res = await fetch("/api/workers/createSkill", {
      method: "POST",
      body: JSON.stringify({
        skill,
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
      {/* form skill */}
      <form className="flex flex-col gap-2 my-2 justify-start mx-4" onSubmit={handleSubmit}>
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
                value={skill}
                onChange={(e) => setSkill(e.target.value)}
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
  );
}
