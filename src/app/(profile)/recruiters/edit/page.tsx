"use client";

import CardProfileRecruiters from "@/@components/recruiters/CardProfileRecruiters";
import FooterLayout from "cmp/Footer";
import NavbarAuth from "cmp/NavbarAuth";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { SetStateAction, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function WorkersPage() {
  const [activeTab, setActiveTab] = useState(1);
  const [error, setError] = useState("");
  const { push } = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const { data: session } = useSession();

  const [company_name, setCompanyName] = useState("");
  const [company_field, setCompanyField] = useState("");
  const [residence, setResidence] = useState("");
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");
  const [nohp, setNoHp] = useState("");
  const [instagram, setInstagram] = useState("");
  const [linkedin, setLinkedin] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!session) {
      console.error("User not authenticated");
      return;
    }

    const res = await fetch(
      `https://hire-job-backend-rho.vercel.app/recruiter/profile/${session.user.userId}`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${session.user.accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          company_name,
          company_field,
          residence,
          description,
          email,
          instagram,
          nohp,
          linkedin,
        }),
      }
    );

    if (res.ok) {
      e.target.reset();
      setIsLoading(false);
      push("/recruiters");
      toast.success("Data updated successfully");
    } else if (res.status === 400) {
      setError("Something ");
      setIsLoading(false);
      toast.error("Something went wrong");
    } else {
      setIsLoading(false);
      toast.error("Gagal Submit");
    }
  };

  const handleTabChange = (tabIndex: SetStateAction<number>) => {
    setActiveTab(tabIndex);
  };

  return (
    <main className="flex flex-col relative">
      <NavbarAuth />
      <section className="container bg-[#5E50A1] h-64">
        <section className="grid grid-cols-2 h-full mt-[58px] gap-5">
          <CardProfileRecruiters />
          <section className="bg-white mr-24 rounded grid grid-flow-row gap-2 mx-2 mb-20">
            <div className="bg-white shadow py-2 my-1 gap-2 flex flex-col rounded">
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
                  Nama Perusahaan
                  <input
                    className="border rounded mt-1 py-2 px-2 text-[14px] text-[#858D96]"
                    type="text"
                    value={company_name}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="Masukan nama perusahaan"
                  />
                </label>
                <label className="flex flex-col my-2 mx-2 text-[12px] text-[#9EA0A5]">
                  Bidang
                  <input
                    className="border rounded mt-1 py-2 px-2 text-[14px] text-[#858D96]"
                    type="text"
                    value={company_field}
                    onChange={(e) => setCompanyField(e.target.value)}
                    placeholder="Masukan bidang perusahaan ex : Financial"
                  />
                </label>
                <label className="flex flex-col my-2 mx-2 text-[12px] text-[#9EA0A5]">
                  Kota
                  <input
                    className="border rounded mt-1 py-2 px-2 text-[14px] text-[#858D96]"
                    value={residence}
                    onChange={(e) => setResidence(e.target.value)}
                    placeholder="Masukan kota"
                  />
                </label>
                <label className="flex flex-col my-2 mx-2 text-[12px] text-[#9EA0A5]">
                  Deskripsi Singkat
                  <textarea
                    className="border rounded mt-1 py-5 px-5 text-[14px] text-[#858D96]"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Tuliskan Deskripsi Singkat"
                  ></textarea>
                </label>
                <label className="flex flex-col my-2 mx-2 text-[12px] text-[#9EA0A5]">
                  Email
                  <input
                    className="border rounded mt-1 py-2 px-2 text-[14px] text-[#858D96]"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Masukan email"
                  />
                </label>
                <label className="flex flex-col my-2 mx-2 text-[12px] text-[#9EA0A5]">
                  Instagram
                  <input
                    className="border rounded mt-1 py-2 px-2 text-[14px] text-[#858D96]"
                    type="text"
                    value={instagram}
                    onChange={(e) => setInstagram(e.target.value)}
                    placeholder="Masukan nama Instagram"
                  />
                </label>
                <label className="flex flex-col my-2 mx-2 text-[12px] text-[#9EA0A5]">
                  No Telepon
                  <input
                    className="border rounded mt-1 py-2 px-2 text-[14px] text-[#858D96]"
                    type="number"
                    value={nohp}
                    onChange={(e) => setNoHp(e.target.value)}
                    placeholder="Masukan nomor telepon"
                  />
                </label>
                <label className="flex flex-col my-2 mx-2 text-[12px] text-[#9EA0A5]">
                  Linkedin
                  <input
                    className="border rounded mt-1 py-2 px-2 text-[14px] text-[#858D96]"
                    type="text"
                    value={linkedin}
                    onChange={(e) => setLinkedin(e.target.value)}
                    placeholder="Masukan nama Linkedin"
                  />
                </label>
                <button className="bg-[#5E50A1] w-full rounded my-5 flex justify-center py-2 text-white">
                  Update Data
                </button>
              </form>
            </div>
          </section>
          <div>
            <FooterLayout />
          </div>
        </section>
      </section>
      <ToastContainer />
    </main>
  );
}
