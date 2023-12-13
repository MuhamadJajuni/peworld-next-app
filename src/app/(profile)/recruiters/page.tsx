"use client";
import FooterLayout from "@/components/Footer";
import Image from "next/image";
import fotoLouis from "img/TomLouis.svg";
import NavbarAuth from "@/components/NavbarAuth";
import Instagram from "img/instagram.svg";
import Linkedin from "img/linkedin 1.svg";
import Telepon from "img/phone 1.svg";
import Email from "img/mail.svg";
export default function recruitersPage() {
  return (
    <main>
      <NavbarAuth />
      <section className="container bg-slate-50 h-screen min-h-max">
        <div className="h-auto mx-40">
          <div className="container h-auto grid grid-row-2 rounded">
            <div className="bg-[#5E50A1] container h-36 mt-10 rounded"></div>
            <div className="flex flex-col justify-center items-center shadow-md rounded mb-10">
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
                    <p className="font-semibold flex justify-center">
                      PT. Martabat Jaya Abadi
                    </p>
                  </div>
                  <div>
                    <p className="flex justify-center">Financial</p>
                  </div>
                  <div>
                    <p className="flex justify-center">
                      Majalengka, Jawa Barat
                    </p>
                  </div>
                  <div className="flex justify-center items-center">
                    <p className="flex justify-center">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Quis odit corrupti quas quibusdam, facilis odio!
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <button className="bg-[#5E50A1] w-24 h-10 text-white rounded">
                      Edit Profile
                    </button>
                  </div>
                </div>
              </div>
              <div className="mb-10">
                <div className="flex flex-col justify-center gap-2 my-2 mx-1">
                  <div className="flex justify-center">
                    <Image
                      src={Email}
                      alt="logo"
                      width={24}
                      height={24}
                      className="object-contain"
                      priority
                    />
                    <p className="ml-2 mx-1">martabatjaya@gmail.com</p>
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
                    <p className="ml-2 mx-1">@martabatjaya</p>
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
                    <p className="ml-2 mx-1">08123456789</p>
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
                    <p className="ml-2 mx-1">@martabatjaya</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterLayout />
    </main>
  );
}
