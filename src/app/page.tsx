import FooterLayout from "@/@components/Footer";
import NavbarLayout from "@/@components/Navbar";
import ceklisOrange from "img/ceklisOrange.svg";
import ceklisPurple from "img/ceklisPurple.svg";
import hero1 from "img/hero1.svg";
import hero2 from "img/hero2.svg";
import hero3 from "img/hero3.svg";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="scroll-smooth focus:scroll-auto container mx-auto bg-neutral-50">
      <NavbarLayout />
      <section className="mx-5 my-5 pt-5">
        <section className="grid grid-cols-1 md:grid-cols-2 justify-center items-center mt-5">
          <section className="p-4">
            <p className="text-[#1F2A36] leading-[70px] text-[44px] font-[600] text-center font-openSans">
              Talenta terbaik negeri <br /> untuk perubahan <br /> revolusi 4.0
            </p>
            <p className="text-[#46505C] font-[400] text-[18px] leading-[28px] my-3 mx-3 font-openSans">
              Sebuah website untuk mencari lowongan kerja terbaik, dan pekerja
              profesional terbesar se-Indonesia
            </p>
            <Link href="/register">
              <button
                type="button"
                className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 font-openSans mt-5 ml-2 py-3 px-4 my-3 mx-3 inline-flex items-center gap-x-2 text-sm rounded-md font-semibold border border-transparent bg-[#5E50A1] text-white disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              >
                Mulai Dari Sekarang
              </button>
            </Link>
          </section>
          <section className="p-4">
            <Image
              src={hero1}
              alt="Picture of the author"
              className="object-contain"
            />
          </section>
        </section>
      </section>
      <section className="mx-5 my-5 pt-5">
        <section className="grid grid-cols-1 md:grid-cols-2">
          <section className="md:px-4 md:py-9 p-4">
            <Image
              src={hero2}
              alt="Picture of the author"
              className="object-contain"
            />
          </section>
          <section className="p-4">
            <p className="font-[600] text-[36px] leading-[56px] text-[#1F2A36]">
              Kenapa harus mencari talent di peworld
            </p>
            <section className="flex flex-col md:flex-col">
              <section className="flex flex-col md:flex-row">
                <section className="flex-none p-4">
                  <Image src={ceklisPurple} alt="Logo" />
                </section>
                <section className="flex-none p-4">
                  <p>Mempunyai skill yang relevan dengan industri.</p>
                </section>
              </section>
              {/* Baris 2 */}
              <section className="flex flex-col md:flex-row">
                <section className="flex-none p-4">
                  <Image src={ceklisPurple} alt="Logo" />
                </section>
                <section className="flex-none p-4">
                  <p>Kemampuan beradaptasi dan semangat terus belajar.</p>
                </section>
              </section>
              {/* Baris 3 */}
              <section className="flex flex-col md:flex-row">
                <section className="flex-none p-4">
                  <Image src={ceklisPurple} alt="Logo" />
                </section>
                <section className="flex-none p-4">
                  <p>Mempunyai skill public speaking.</p>
                </section>
              </section>
              {/* Baris 4 */}
              <section className="flex flex-col md:flex-row">
                <section className="flex-none p-4">
                  <Image src={ceklisPurple} alt="Logo" />
                </section>
                <section className="flex-none p-4">
                  <p>Growth mindset serta kemauan untuk berkembang.</p>
                </section>
              </section>
            </section>
          </section>
        </section>
      </section>
      <section className="mx-5 my-5 pt-5">
        <section className="grid grid-cols-1 md:grid-cols-2 pl-4 md:ml-36">
          <section className="p-4 justify-items-center">
            <section className="justify-items-center">
              <h1 className="font-[600] text-[36px] leading-[56px] text-[#1F2A36] font-openSans">
                Skill Talent
              </h1>
              <h2 className="text-[#46505C] font-[400] text-[18px] leading-[28px] mx-2 my-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                euismod ipsum et dui rhoncus auctor.
              </h2>
            </section>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-3 my-3">
              <section className="flex items-center">
                <Image src={ceklisOrange} alt="Logo" />
                <p className="ml-3">Java</p>
              </section>
              <section className="flex flex-row items-center">
                <Image src={ceklisOrange} alt="Logo" />
                <p className="ml-3">Kotlin</p>
              </section>
              <section className="flex items-center">
                <Image src={ceklisOrange} alt="Logo" />
                <p className="ml-3">PHP</p>
              </section>
              <section className="flex items-center">
                <Image src={ceklisOrange} alt="Logo" />
                <p className="ml-3">Javascript</p>
              </section>
              <section className="flex items-center">
                <Image src={ceklisOrange} alt="Logo" />
                <p className="ml-3">Golang</p>
              </section>
              <section className="flex items-center">
                <Image src={ceklisOrange} alt="Logo" />
                <p className="ml-3">C++</p>
              </section>
              <section className="flex items-center">
                <Image src={ceklisOrange} alt="Logo" />
                <p className="ml-3">Ruby</p>
              </section>
              <section className="flex items-center">
                <Image src={ceklisOrange} alt="Logo" />
                <p className="ml-3">10+ Bahasa Lainnya</p>
              </section>
            </section>
          </section>
          <section className="flex justify-end p-4">
            <Image
              src={hero3}
              alt="Picture of the author"
              className="object-contain"
            />
          </section>
        </section>
      </section>
      <section className="grid grid-cols-1">
        <section className="bg-white h-60 md:h-80 lg:h-96">
          
        </section>
      </section>
      <section className="grid grid-cols-1 mx-5 my-5 mb-[100px] mt-[82px]">
        <section className="flex h-[227px] mx-5 md:mx-10 lg:mx-32">
          <section className="bg-[#5E50A1] rounded-tl-[40px] w-full rounded-tr-[8px] rounded-br-[40px] rounded-bl-[8px] grid grid-cols-1 md:grid-cols-2 gap-4">
            <section className="self-center place-content-center mx-5 md:mx-10 lg:mx-10">
              <p className="text-white font-openSans text-2xl md:text-4xl">
                Lorem ipsum <br /> dolor sit amet
              </p>
            </section>
            <section className="self-center place-content-end mx-5 md:mx-auto lg:mr-10">
              <Link href="/Register">
                <button
                  type="button"
                  className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-white duration-300 font-openSans mt-5 ml-2 py-3 px-4 my-3 mx-3 inline-flex items-center gap-x-2 text-sm font-medium border rounded-md border-gray-200 bg-white text-gray-800 shadow-sm disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  Mulai Dari Sekarang
                </button>
              </Link>
            </section>
          </section>
        </section>
      </section>
      <FooterLayout />
    </main>
  );
}
