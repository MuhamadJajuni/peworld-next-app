"use client";

import leftPoster from "img/poster-login.svg";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RegisterPage() {
  const { push } = useRouter();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [NoHp, setNoHp] = useState("");
  const [password, setPassword] = useState("");
  const [selectedRole, setSelectedRole] = useState("");

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
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError("Invalid email format");
      return;
    }
    if (!validateNoHp(NoHp)) {
      setError("Invalid phone number (must be 12 digits)");
      return;
    }
    if (!validatePassword(password)) {
      setError("Password must be at least 6 characters");
      return;
    }
    if (!validateRole(selectedRole)) {
      setError("Please select a role");
      return;
    }
    setError("");
    setIsLoading(true);

    const res = await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify({
        email: e.target.email.value,
        password: e.target.password.value,
        NoHp: e.target.NoHp.value,
        role: selectedRole,
      }),
    });

    if (res.status === 200) {
      e.target.reset();
      setIsLoading(false);
      push("/login");
      toast.success(
        "Registration successful! Please check your email to verify your account."
      );
    } else if (res.status === 400) {
      setError("Email already exists");
      setIsLoading(false);
      toast.error("Email already exists. Please use a different email.");
    } else {
      setError("Registration failed");
      setIsLoading(false);
      toast.error("Registration failed. Please try again.");
    }
  };

  return (
    <main className="flex grid-col-2 bg-slate-50 font-openSans">
      <section className="flex justify-normal">
        <Image
          src={leftPoster}
          alt="logo"
          className="object-contain"
          priority
        />
      </section>
      <section className="md:max-xl:flex flex justify-center items-center bg-slate-50 w-1/2">
        <form className="flex flex-col w-1/2" onSubmit={handleSubmit}>
          <section className="flex flex-col">
            <text className="text-2xl mb-[20px] text-[32px] font-openSans font-semibold">
              Hallo, People
            </text>
            <text className="font-normal my-5 mt-5 text-[#46505C]">
              Silahkan Mendaftar Terlebih Dahulu, Untuk Melihat Talenta
              Profesional Dari Berbagai Pilihan
            </text>
            {error !== "" && (
              <div className="flex justify-center text-center text-red-500 font-bold mb-3">
                <h1 className="font-italic">{error}</h1>
              </div>
            )}
            <label className="text-[12px] text-[#858D96]">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Masukkan Email"
              className="input input-bordered w-full max-w-xs text-[14px]"
            />
            <br />
            <label className="text-[#9EA0A5] text-[12px]">No handphone</label>
            <input
              id="NoHp"
              name="NoHp"
              type="number"
              value={NoHp}
              onChange={(e) => setNoHp(e.target.value)}
              placeholder="Masukkan No.HP"
              className="input input-bordered w-full max-w-xs text-[14px] text-[#9EA0A5]"
            />
            <label className="text-[#9EA0A5] text-[12px]">Kata Sandi</label>
            <input
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Masukkan Kata Sandi"
              className="input input-bordered w-full max-w-xs text-[14px] text-[#9EA0A5]"
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
                className="select select-bordered select-sm w-full max-w-xs"
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
              {isLoading ? "Loading..." : "Daftar"}
            </button>
            <button
              type="button"
              className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            >
              <svg
                className="w-4 h-auto"
                width="46"
                height="47"
                viewBox="0 0 46 47"
                fill="none"
              >
                <path
                  d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z"
                  fill="#4285F4"
                />
                <path
                  d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z"
                  fill="#34A853"
                />
                <path
                  d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z"
                  fill="#FBBC05"
                />
                <path
                  d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z"
                  fill="#EB4335"
                />
              </svg>
              Sign Up with Google
            </button>
            <text className="text-[#1F2A36] text-[15px] leading-[21px] font-[400] flex justify-center my-3 mt-3 font-openSans">
              Sudah Punya Akun?{" "}
              <Link href="/login">
                <text className="text-[#FBB017]"> Masuk disini</text>
              </Link>
            </text>
          </section>
        </form>
      </section>
      <ToastContainer />
    </main>
  );
}
