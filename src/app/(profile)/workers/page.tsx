"use client";

import FooterLayout from "cmp/Footer";
import NavbarAuth from "cmp/NavbarAuth";
import fotoLouis from "img/foto-louis-rounded.svg";
import github from "img/github.svg";
import gitlab from "img/gitlab.svg";
import instagram from "img/instagram.svg";
import logoTokped from "img/logoTokped.svg";
import email from "img/mail.svg";
import foto1 from "img/porto-hape.svg";
import foto2 from "img/porto-hape2.svg";
import foto3 from "img/porto-hape3.svg";
import foto4 from "img/porto-hape4.svg";
import foto5 from "img/porto-hape5.svg";
import foto6 from "img/porto-hape6.svg";
import Image from "next/image";
import { SetStateAction, useState } from "react";

export default function WorkersPage() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabChange = (tabIndex: SetStateAction<number>) => {
    setActiveTab(tabIndex);
  };

  return (
    <main className="flex flex-col relative">
      <NavbarAuth />
      <section className="container bg-[#5E50A1] h-64">
        <section className="grid grid-cols-2 h-full mt-[58px] gap-5">
          <div className="grid grid-flow-col ">
            <div className="col-start-2 col-span-3 mr-24">
              <div className="grid grid-cols-1 h-64">
                <div className="col-start-1 col-span-4 flex flex-col h-auto bg-white rounded-md ml-20 mx-10 mb-20 shadow">
                  <div className="grid grid-flow-row gap-2 justify-center items-center mt-5 mx-5">
                    <div className="flex flex-col justify-center items-center">
                      <Image
                        src={fotoLouis}
                        alt="logo"
                        width={100}
                        height={100}
                        className="object-contain"
                        priority
                      />
                      <div className="gap-2 flex flex-col justify-center items-center">
                        <p className="font-semibold text-[22px] leading-[56px] text-[#1F2A36]">
                          Louis Tomlinson
                        </p>
                        <p className="font-normal text-[14px] leading-[24px] text-[#1F2A36]">
                          Web Developer
                        </p>
                        <p className="font-normal text-[14px] leading-[20px] text-[#9EA0A5]">
                          Majalengka, Jawa Barat
                        </p>
                        <p className="text-sm my-1  text-gray-400">
                          Freelancer
                        </p>
                        <p className="mx-2 flex justify-center text-left font-normal text-[14px] leading-[24px] text-[#9EA0A5]">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Vestibulum erat orci, mollis nec gravida sed,
                          ornare quis urna. Curabitur eu lacus fringilla,
                          vestibulum risus at.
                        </p>
                        <div className="flex justify-center items-center bg-[#5E50A1] mt-8 py-2 px-2 w-full rounded text-white font-bold text-[16px] leading-[20px]">
                          Hire
                        </div>
                      </div>
                    </div>
                    <section className="flex flex-col my-5">
                      <h4 className="mb-5 font-semibold text-[22px] leading-[24px] text-[#1F2A36]">
                        SKILL
                      </h4>
                      <div className="grid grid-cols-4 gap-4">
                        <div className="bg-[#FBB01799] text-white font-semibold text-[12px] leading-[20px] py-1 px-1 rounded flex justify-center items-center">
                          Phyton
                        </div>
                        <div className="bg-[#FBB01799] text-white font-semibold text-[12px] leading-[20px] py-1 px-1 rounded flex justify-center items-center">
                          Laravel
                        </div>
                        <div className="bg-[#FBB01799] text-white font-semibold text-[12px] leading-[20px] py-1 px-1 rounded flex justify-center items-center">
                          Javascript
                        </div>
                        <div className="bg-[#FBB01799] text-white font-semibold text-[12px] leading-[20px] py-1 px-1 rounded flex justify-center items-center">
                          Golang
                        </div>
                        <div className="bg-[#FBB01799] text-white font-semibold text-[12px] leading-[20px] py-1 px-1 rounded flex justify-center items-center">
                          C++
                        </div>
                        <div className="bg-[#FBB01799] text-white font-semibold text-[12px] leading-[20px] py-1 px-1 rounded flex justify-center items-center">
                          PHP
                        </div>
                        <div className="bg-[#FBB01799] text-white font-semibold text-[12px] leading-[20px] py-1 px-1 rounded flex justify-center items-center">
                          HTML
                        </div>
                        <div className="bg-[#FBB01799] text-white font-semibold text-[12px] leading-[20px] py-1 px-1 rounded flex justify-center items-center">
                          Kotlin
                        </div>
                        <div className="bg-[#FBB01799] text-white font-semibold text-[12px] leading-[20px] py-1 px-1 rounded flex justify-center items-center">
                          Swift
                        </div>
                      </div>
                    </section>
                    <section className="flex flex-col justify-center gap-4 mx-2 my-10 mb-10">
                      <div className="flex flex-row gap-2">
                        <div>
                          <Image
                            src={email}
                            alt="logo"
                            width={20}
                            height={20}
                            className="object-contain"
                            priority
                          />
                        </div>
                        <div className="mx-2 font-normal text-[#9EA0A5]">
                          Louistommo@gmail.com
                        </div>
                      </div>
                      <div className="flex flex-row gap-2">
                        <div>
                          <Image
                            src={instagram}
                            alt="logo"
                            width={20}
                            height={20}
                            className="object-contain"
                            priority
                          />
                        </div>
                        <div className="mx-2 font-normal text-[#9EA0A5]">
                          @Louist91
                        </div>
                      </div>
                      <div className="flex flex-row gap-2">
                        <div>
                          <Image
                            src={github}
                            alt="logo"
                            width={20}
                            height={20}
                            className="object-contain"
                            priority
                          />
                        </div>
                        <div className="mx-2 font-normal text-[#9EA0A5]">
                          @Louistommo
                        </div>
                      </div>
                      <div className="flex flex-row gap-2">
                        <div>
                          <Image
                            src={gitlab}
                            alt="logo"
                            width={20}
                            height={20}
                            className="object-contain"
                            priority
                          />
                        </div>
                        <div className="mx-2 font-normal text-[#9EA0A5]">
                          @Louistommo91
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
                <div className="mt-10">
                  <FooterLayout />
                </div>
              </div>
            </div>
          </div>
          <div
            role="tablist"
            className="tabs tabs-bordered bg-white rounded-md mr-24 grid grid-cols-2 shadow"
          >
            <input
              type="radio"
              name="my_tabs_1"
              role="tab"
              className="tab font-semibold font-openSans text-base leading-tight"
              aria-label="Portofolio"
              checked={activeTab === 1}
              onChange={() => handleTabChange(1)}
            />
            <input
              type="radio"
              name="my_tabs_1"
              role="tab"
              className="tab font-semibold font-openSans text-base leading-tight"
              aria-label="Pengalaman Kerja"
              checked={activeTab === 2}
              onChange={() => handleTabChange(2)}
            />
            <div
              role="tabpanel"
              className="tab-content p-10 grid grid-cols-3 gap-4 py-1 px-2 my-3 mx-2 justify-start items-center justify-items-center text-xs"
              aria-labelledby="portofolio-tab"
            >
              {activeTab === 1 && (
                <>
                  <div className="mx-auto">
                    <Image
                      src={foto1}
                      alt="logo"
                      className="object-contain"
                      priority
                      height={200}
                      width={200}
                    />
                    <p className="flex justify-center font-normal text-[14px] leading-[24px] text-[#1F2A36]">
                      Remainder App
                    </p>
                  </div>
                  <div className="">
                    <Image
                      src={foto2}
                      alt="logo"
                      className="object-contain"
                      priority
                      height={200}
                      width={200}
                    />
                    <p className="flex justify-center font-normal text-[14px] leading-[24px] text-[#1F2A36]">
                      Social Media App
                    </p>
                  </div>
                  <div className="">
                    <Image
                      src={foto3}
                      alt="logo"
                      className="object-contain"
                      priority
                      height={200}
                      width={200}
                    />
                    <p className="flex justify-center font-normal text-[14px] leading-[24px] text-[#1F2A36]">
                      Project Management
                    </p>
                  </div>
                  <div className="">
                    <Image
                      src={foto4}
                      alt="logo"
                      className="object-contain"
                      priority
                      height={200}
                      width={200}
                    />
                    <p className="flex justify-center font-normal text-[14px] leading-[24px] text-[#1F2A36]">
                      Remainder App
                    </p>
                  </div>
                  <div className="">
                    <Image
                      src={foto5}
                      alt="logo"
                      className="object-contain"
                      priority
                      height={200}
                      width={200}
                    />
                    <p className="flex justify-center font-normal text-[14px] leading-[24px] text-[#1F2A36]">
                      Social Media App
                    </p>
                  </div>
                  <div className="">
                    <Image
                      src={foto6}
                      alt="logo"
                      className="object-contain"
                      priority
                      height={200}
                      width={200}
                    />
                    <p className="flex justify-center text-center font-normal text-[14px] leading-[24px] text-[#1F2A36]">
                      Project Management
                    </p>
                  </div>
                </>
              )}
              {activeTab === 2 && (
                <>
                  <section className="grid grid-flow-row gap-2 w-full">
                    <div className="flex flex-grow mx-2 my-1 gap-2">
                      <div className="flex justify-start mb-10">
                        <Image
                          src={logoTokped}
                          alt="logo"
                          className="object-contain mb-10"
                          priority
                          height={70}
                          width={70}
                        />
                      </div>
                      <div className="mx-2 gap-1">
                        <p className="font-semibold text-[20px] leading-[27px] text-[#1F2A36]">
                          Engineer
                        </p>
                        <p className="font-normal text-[18px] leading-[24px] text-[#46505C]">
                          Tokopedia
                        </p>
                        <p className="font-normal text-[16px] leading-[22px] text-[#9EA0A5]">
                          July 2019 - January 2020
                        </p>
                        <p className="font-normal my-2 text-[14px] leading-[24px] text-[#1F2A36]">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Quos sapiente, non animi ex dolor veritatis.
                        </p>
                      </div>
                    </div>
                    <hr className="border ml-20 mr-5" />
                    <div className="flex flex-grow mx-2 my-1 gap-2">
                      <div className="flex justify-start mb-10">
                        <Image
                          src={logoTokped}
                          alt="logo"
                          className="object-contain mb-10"
                          priority
                          height={70}
                          width={70}
                        />
                      </div>
                      <div className="mx-2 gap-1">
                        <p className="font-semibold text-[20px] leading-[27px] text-[#1F2A36]">
                          Engineer
                        </p>
                        <p className="font-normal text-[18px] leading-[24px] text-[#46505C]">
                          Tokopedia
                        </p>
                        <p className="font-normal text-[16px] leading-[22px] text-[#9EA0A5]">
                          July 2019 - January 2020
                        </p>
                        <p className="font-normal my-2 text-[14px] leading-[24px] text-[#1F2A36]">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Quos sapiente, non animi ex dolor veritatis.
                        </p>
                      </div>
                    </div>
                  </section>
                </>
              )}
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
