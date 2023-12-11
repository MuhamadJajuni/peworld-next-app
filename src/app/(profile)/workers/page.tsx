"use client";

import foto1 from "img/porto-hape.svg";
import foto2 from "img/porto-hape2.svg";
import foto3 from "img/porto-hape3.svg";
import foto4 from "img/porto-hape4.svg";
import foto5 from "img/porto-hape5.svg";
import foto6 from "img/porto-hape6.svg";
import fotoLouis from "img/foto-louis-rounded.svg";
import logoPeworld from "img/logoPeworld.svg";
import Image from "next/image";
import { SetStateAction, useState } from "react";

export default function WorkersPage() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabChange = (tabIndex: SetStateAction<number>) => {
    setActiveTab(tabIndex);
  };

  return (
    <main className="flex flex-col relative">
      <nav className="py-3 px-3">
        <ul className="flex justify-between items-center mx-5">
          <li className="flex justify-start items-center">
            <Image
              src={logoPeworld}
              alt="logo"
              className="object-contain"
              priority
            />
          </li>
          <li className="flex justify-end items-center">
            <Image
              src={fotoLouis}
              alt="logo"
              width={30}
              height={30}
              className="object-contain"
              priority
            />
          </li>
        </ul>
      </nav>
      <section className="container bg-[#5E50A1] h-64">
        <section className="grid grid-cols-2 h-full mt-[58px] gap-5">
          <div className="grid grid-flow-col">
            <div className="col-start-2 col-span-3 mr-24">
              <div className="grid grid-cols-1 h-64">
                <div className="col-start-1 col-span-4 flex flex-col bg-white rounded-md ml-20 mx-10">
                  <div className="grid grid-rows-3 grid-flow-col gap-2 justify-center items-center mt-5 mx-2">
                    <div className="flex flex-col justify-center items-center">
                      <Image
                        src={fotoLouis}
                        alt="logo"
                        width={100}
                        height={100}
                        className="object-contain"
                        priority
                      />
                      <p className="my-2 font-semibold">Louis Tomlinson</p>
                      <p className="text-sm my-1  text-gray-400">Web Developer</p>
                      <p className="text-sm my-1  text-gray-400">Jawa Barat</p>
                      <p className="text-sm my-1  text-gray-400">Freelancer</p>
                      <p className="text-sm my-1 text-gray-400">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Ipsam ipsum fuga repudiandae! Blanditiis, eos aut?
                      </p>
                      <button className="bg-[#5E50A1] text-white p-2 w-32 rounded mt-2">
                        Hire
                      </button>
                    </div>
                    <section className="flex flex-col">
                      <h4 className="mb-2">SKILL</h4>
                      <div className="grid grid-cols-4 gap-4">
                        <button className="bg-amber-500 text-white text-sm rounded-md">Phyton</button>
                        <button className="bg-amber-500 text-white text-sm rounded-md">Laravel</button>
                        <button className="bg-amber-500 text-white text-sm rounded-md">Javascript</button>
                        <button className="bg-amber-500 text-white text-sm rounded-md">Golang</button>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            role="tablist"
            className="tabs tabs-bordered bg-white rounded-md mr-24 grid grid-cols-2"
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
                    <p className="flex justify-center my-2 text-xs">
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
                    <p className="flex justify-center my-2 text-xs">
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
                    <p className="flex justify-center my-2 text-xs">
                      Project Management Web
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
                    <p className="flex justify-center my-2 text-xs">
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
                    <p className="flex justify-center my-2 text-xs">
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
                    <p className="flex justify-center my-2 text-xs">
                      Project Management App
                    </p>
                  </div>
                  {/* Add more items for Portofolio tab */}
                </>
              )}
              {activeTab === 2 && (
                <>
                  <section className="flex flex-col w-full">
                    <div className="bg-red-300">Tokopedia</div>
                    <div className="bg-red-400">2</div>
                    <div className="bg-red-500">3</div>
                    <div className="bg-red-600">4</div>
                    <div className="bg-red-700">5</div>
                    <div className="bg-red-800">6</div>
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
