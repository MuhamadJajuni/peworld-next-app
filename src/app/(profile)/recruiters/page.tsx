"use client";
import FooterLayout from "@/components/Footer";
import NavbarAuth from "@/components/NavbarAuth";
import fotoLouis from "img/TomLouis.svg";
import Instagram from "img/instagram.svg";
import Linkedin from "img/linkedin 1.svg";
import Email from "img/mail.svg";
import Telepon from "img/phone 1.svg";
import Image from "next/image";
export default function recruitersPage() {
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
                  <div>
                    <p className="font-semibold flex justify-center text-[#1F2A36] text-[22px]">
                      PT. Martabat Jaya Abadi
                    </p>
                  </div>
                  <div>
                    <p className="flex justify-center font-normal text-[#1F2A36] text-[14px]">
                      Financial Technology
                    </p>
                  </div>
                  <div>
                    <p className="flex justify-center font-normal text-[#9EA0A5] text-[14px]">
                      Bandung, Jawa Barat
                    </p>
                  </div>
                  <div className="flex justify-center items-center my-5">
                    <p className="flex justify-center font-normal text-[#9EA0A5] text-[14px] text-center mx-10">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vestibulum erat orci, mollis nec gravida sed, ornare quis
                      urna. Curabitur eu lacus fringilla, vestibulum risus at.
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <button className="bg-[#5E50A1] w-50 h-50 py-2 px-3 text-white rounded">
                      Edit Profile
                    </button>
                  </div>
                </div>
              </div>
              <div className="mb-10">
                <div className="grid grid-flow-row justify-center items-center place-content-center gap-2 my-2 mx-1">
                  <div className="flex justify-center">
                    <Image
                      src={Email}
                      alt="logo"
                      width={24}
                      height={24}
                      className="object-contain"
                      priority
                    />
                    <p className="ml-2 mx-1 font-normal text-[#9EA0A5] text-[14px]">
                      martabatjaya@gmail.com
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <Image
                      src={Instagram}
                      alt="logo"
                      width={24}
                      height={24}
                      className="object-contain"
                      priority
                    />
                    <p className="ml-2 mx-1 font-normal text-[#9EA0A5] text-[14px]">
                      @martabatjaya
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <Image
                      src={Telepon}
                      alt="logo"
                      width={24}
                      height={24}
                      className="object-contain"
                      priority
                    />
                    <p className="ml-2 mx-1 font-normal text-[#9EA0A5] text-[14px]">
                      08123456789
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <Image
                      src={Linkedin}
                      alt="logo"
                      width={24}
                      height={24}
                      className="object-contain"
                      priority
                    />
                    <p className="ml-2 mx-1 font-normal text-[#9EA0A5] text-[14px]">
                      @martabatjaya
                    </p>
                  </div>
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
