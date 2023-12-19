"use client";

import FooterLayout from "@/components/Footer";
import NavbarAuth from "@/components/NavbarAuth";
import fotoLouis from "img/foto-louis-rounded.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { SetStateAction, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

export default function WorkersPage() {
  const [activeTab, setActiveTab] = useState(1);
  const [error, setError] = useState("");
  const { push } = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [namePerusahaan, setNamePerusahaan] = useState("");
  const [bidang, setBidang] = useState("");
  const [kota, setKota] = useState("");
  const [deskripsiSingkat, setDeskripsiSingkat] = useState("");
  const [email, setEmail] = useState("");
  const [noTelepon, setNoTelepon] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [instagram, setInstagram] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const res = await fetch("/api/recruiters/edit", {
      method: "POST",
      body: JSON.stringify({
        namePerusahaan,
        bidang,
        kota,
        deskripsiSingkat,
        email,
        noTelepon,
        linkedin,
        instagram,
      }),
    });

    if (res.ok) {
      e.target.reset();
      setIsLoading(false);
      push("/recruiters");
      toast.success("Data has been updated");
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
          <div className="grid grid-flow-row ">
            <div className="col-start-2 col-span-3 mr-24">
              <div className="grid grid-cols-1 h-64">
                <div className="col-start-1 col-span-4 flex flex-col h-auto bg-white rounded ml-20 mx-10 shadow">
                  <div className="grid grid-rows-1 grid-flow-col gap-2 justify-center items-center mt-5 mx-5">
                    <div className="flex flex-col justify-center items-center">
                      <Image
                        src={fotoLouis}
                        alt="logo"
                        width={100}
                        height={100}
                        className="object-contain"
                        priority
                      />
                      <p className="flex justify-center my-2 font-semibold text-[22px] text-[#1F2A36]">
                        PT. Martabat Jaya Abadi
                      </p>
                      <p className="flex justify-center my-2 font-normal text-[#1F2A36] text-[14px]">
                        Financial Technology
                      </p>
                      <p className="flex justify-center my-2 font-normal text-[#9EA0A5] text-[14px]">
                        Bandung, Jawa Barat
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center w-full gap-3 rounded my-5 mt-10">
                    <button className="bg-[#5E50A1] text-white py-2 px-2 font-bold text-[16px] leading-[20px] mx-1 rounded">
                      Simpan
                    </button>
                    <button className="bg-white box-content mx-1 py-2 px-2 border leading-[20px] font-bold border-[#5E50A1] text-[16px] text-[#5E50A1] rounded">
                      Batal
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
                    value={namePerusahaan}
                    onChange={(e) => setNamePerusahaan(e.target.value)}
                    placeholder="Masukan Nama Perusahaan"
                  />
                </label>
                <label className="flex flex-col my-2 mx-2 text-[12px] text-[#9EA0A5]">
                  Bidang
                  <input
                    className="border rounded mt-1 py-2 px-2 text-[14px] text-[#858D96]"
                    value={bidang}
                    onChange={(e) => setBidang(e.target.value)}
                    placeholder="Masukan bidang perusahaan ex : Financial"
                  />
                </label>
                <label className="flex flex-col my-2 mx-2 text-[12px] text-[#9EA0A5]">
                  Kota
                  <input
                    className="border rounded mt-1 py-2 px-2 text-[14px] text-[#858D96]"
                    type="text"
                    value={kota}
                    onChange={(e) => setKota(e.target.value)}
                    placeholder="Masukan Kota"
                  />
                </label>
                <label className="flex flex-col my-2 mx-2 text-[12px] text-[#9EA0A5]">
                  Deskripsi Singkat
                  <textarea
                    className="border rounded mt-1 py-2 px-2 text-[14px] text-[#858D96]"
                    value={deskripsiSingkat}
                    onChange={(e) => setDeskripsiSingkat(e.target.value)}
                    placeholder="Tuliskan Deskripsi Singkat"
                  ></textarea>
                </label>
                <label className="flex flex-col my-2 mx-2 text-[12px] text-[#9EA0A5]">
                  Email
                  <input
                    className="border rounded mt-1 py-2 px-2 text-[14px] text-[#858D96]"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Masukan Email"
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
                    type="text"
                    value={noTelepon}
                    onChange={(e) => setNoTelepon(e.target.value)}
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
                <button className="bg-[#5E50A1] w-full rounded py-2 text-white">
                  Simpan
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
