"use client";

import FooterLayout from "cmp/Footer";
import NavbarAuth from "cmp/NavbarAuth";
import fotoLouis from "img/TomLouis.svg";
import Instagram from "img/instagram.svg";
import Linkedin from "img/linkedin 1.svg";
import Email from "img/mail.svg";
import Telepon from "img/phone 1.svg";
import Image from "next/image";
import { useEffect, useState } from 'react';

interface Company {
  id: string;
  kota: string;
  namePerusahaan: string;
  linkedin: string;
  email: string;
  deskripsiSingkat: string;
  noTelepon: string;
  bidang: string;
  instagram: string;
}

async function getData(): Promise<Company[]> {
  const res = await fetch('http://localhost:3000/api/users');
  
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  
  const data = await res.json();
  return data.data; // Access the 'data' property of the API response
}

export default function RecruitersPage() {
  const [data, setData] = useState<Company[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getData();
        setData(result);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <main>
      <NavbarAuth />
      <section className="container bg-slate-50">
        <div className="h-auto mx-40">
          <div className="container h-auto grid grid-row-2 rounded mb-10">
            <div className="bg-[#5E50A1] container h-36 mt-7 rounded"></div>
            <div className="flex flex-col justify-center items-center shadow-md rounded my-5">
              <div>
                <div className="flex justify-center -top-20">
                  <Image
                    src={fotoLouis}
                    alt="logo"
                    width={100}
                    height={100}
                    className="object-contain rounded-full -top-1/2"
                    priority
                  />
                </div>
                <div className="flex flex-col justify-center my-3 gap-1">
                  {data.map((company) => (
                    <div key={company.id}>
                      <p className="font-semibold flex justify-center text-[#1F2A36] text-[22px]">
                        {company.namePerusahaan}
                      </p>
                      <p className="flex justify-center font-normal text-[#1F2A36] text-[14px]">
                        {company.bidang}
                      </p>
                      <p className="flex justify-center font-normal text-[#9EA0A5] text-[14px]">
                        {company.kota}
                      </p>
                      <p className="flex justify-center font-normal text-[#9EA0A5] text-[14px] text-center mx-10">
                        {company.deskripsiSingkat}
                      </p>
                      {/* Add more information as needed */}
                    </div>
                  ))}
                  <div className="flex justify-center">
                    <button className="bg-[#5E50A1] w-50 h-50 py-2 px-3 text-white rounded">
                      Edit Profile
                    </button>
                  </div>
                </div>
              </div>
              <div className="mb-10">
                <div className="grid grid-flow-row justify-center items-center place-content-center gap-2 my-2 mx-1">
                  {data.map((company) => (
                    <div key={company.id} className="flex justify-center">
                      <Image
                        src={Email}
                        alt="logo"
                        width={24}
                        height={24}
                        className="object-contain"
                        priority
                      />
                      <p className="ml-2 mx-1 font-normal text-[#9EA0A5] text-[14px]">
                        {company.email}
                      </p>
                    </div>
                  ))}
                  {data.map((company) => (
                    <div key={company.id} className="flex justify-center">
                      <Image
                        src={Instagram}
                        alt="logo"
                        width={24}
                        height={24}
                        className="object-contain"
                        priority
                      />
                      <p className="ml-2 mx-1 font-normal text-[#9EA0A5] text-[14px]">
                        {company.instagram}
                      </p>
                    </div>
                  ))}
                  {data.map((company) => (
                    <div key={company.id} className="flex justify-center">
                      <Image
                        src={Telepon}
                        alt="logo"
                        width={24}
                        height={24}
                        className="object-contain"
                        priority
                      />
                      <p className="ml-2 mx-1 font-normal text-[#9EA0A5] text-[14px]">
                        {company.noTelepon}
                      </p>
                    </div>
                  ))}
                  {data.map((company) => (
                    <div key={company.id} className="flex justify-center">
                      <Image
                        src={Linkedin}
                        alt="logo"
                        width={24}
                        height={24}
                        className="object-contain"
                        priority
                      />
                      <p className="ml-2 mx-1 font-normal text-[#9EA0A5] text-[14px]">
                        {company.linkedin}
                      </p>
                    </div>
                  ))}
                  {/* Repeat similar blocks for other social media */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <FooterLayout />
      </section>
    </main>
  );
}
