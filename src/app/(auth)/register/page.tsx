"use client";

import axios from "axios";
import leftPoster from "img/poster-login.svg";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SyntheticEvent, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RegisterPage() {
  const { push } = useRouter();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nohp, setNohp] = useState("");
  const [password, setPassword] = useState("");
  const [selectedRole, setSelectedRole] = useState("");

  const router = useRouter();
  const validateEmail = (input: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input);
  };
  const validateNoHp = (input: string) => {
    return !isNaN(Number(input)) && input.length >= 12;
  };
  const validatePassword = (input: string | any[]) => {
    return input.length >= 6;
  };
  const validateRole = (input: string) => {
    return input.trim() !== ""; // Role must not be an empty string
  };

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await axios.post("/api/auth/register", {
      name,
      email,
      nohp,
      password,
      role: selectedRole,
    });

    setIsLoading(false);
    setName("");
    setEmail("");
    setNohp("");
    setPassword("");
    setSelectedRole("");
    router.refresh();
    push("/login");
  };
    
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 bg-slate-50 font-openSans">
      <section className="flex justify-center md:justify-start">
        <Image
          src={leftPoster}
          alt="logo"
          className="object-contain"
          priority
        />
      </section>
      <section className="md:max-xl:flex flex justify-center items-center bg-slate-50">
        <form
          className="flex flex-col w-full md:w-1/2 px-6"
          onSubmit={handleSubmit}
        >
          <section className="flex flex-col gap-2 my-1 max-w-md md:mx-auto">
            <h1 className="text-3xl md:text-4xl font-semibold text-[32px] mb-5 text-center md:text-left">
              Hallo, People
            </h1>
            <p className="text-sm md:text-base font-normal mb-5 text-[#46505C] text-center md:text-left">
              Silahkan Mendaftar Terlebih Dahulu, Untuk Melihat Talenta
              Profesional Dari Berbagai Pilihan
            </p>
            {error !== "" && (
              <div className="flex justify-center text-center text-red-500 font-bold mb-3">
                <h1 className="font-italic">{error}</h1>
              </div>
            )}

            <label className="text-[12px] text-[#858D96]">Full Name</label>
            <input
              id="name"
              name="name"
              type="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Masukkan Full Name"
              className="input input-bordered w-full text-[14px]"
            />

            <label className="text-[12px] text-[#858D96]">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Masukkan Email"
              className="input input-bordered w-full text-[14px]"
            />

            <label className="text-[#9EA0A5] text-[12px]">No handphone</label>
            <input
              id="NoHp"
              name="NoHp"
              type="string"
              value={nohp}
              onChange={(e) => setNohp(e.target.value)}
              placeholder="Masukkan No.HP"
              className="input input-bordered w-full text-[14px] text-[#9EA0A5]"
            />

            <label className="text-[#9EA0A5] text-[12px]">Kata Sandi</label>
            <input
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Masukkan Kata Sandi"
              className="input input-bordered w-full text-[14px] text-[#9EA0A5]"
            />

            <section>
              <label htmlFor="role" className="text-[12px] text-[#9EA0A5] mt-3">
                Role
              </label>
              <select
                id="role"
                name="role"
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
                className="select select-bordered select-sm w-full"
              >
                <option value="" disabled>
                  Pilih Role
                </option>
                <option value="workers">Pekerja (Workers)</option>
                <option value="recruiters">Perekrut (Recruiters)</option>
              </select>
            </section>

            <button
              disabled={isLoading}
              type="submit"
              className="btn btn-block my-3 btn-warning text-white"
            >
              {isLoading ? (
                <span className="loading loading-bars loading-md"></span>
              ) : (
                "Daftar"
              )}
            </button>

            <text className="text-[#1F2A36] flex justify-center items-center my-2 text-[15px] leading-[21px] font-[400] text-center md:text-left">
              Sudah Punya Akun?{" "}
              <Link href="/login">
                <span className="text-[#FBB017] mx-1"> Masuk disini</span>
              </Link>
            </text>
          </section>
        </form>
      </section>
      <ToastContainer />
    </main>
  );
}
