import logoFooter from "img/logoFooter.svg";
import Image from "next/image";

export default function FooterLayout() {
  return (
    <footer className="flex flex-col max-w-fit max-h-max absolute bg-[#5E50A1] font-openSansl">
      <section className="grid grid-cols-1 md:grid-cols-3 max-w-fit mb-0 mx-4 md:mx-10 my-8">
        <div className="flex flex-col">
          <Image src={logoFooter} alt="logo" />
          <p className="text-start text-white my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            distinctio vero culpa, voluptatem voluptas mollitia?
          </p>
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 border-t mb-0 mx-4 md:mx-10 mt-10">
        <section className="mb-5 md:mb-0">
          <p className="text-white my-5">
            Copyright © 2023 Peworld. All rights reserved.
          </p>
        </section>
        <section className="flex flex-col md:flex-row justify-end items-center gap-5 my-5">
          <p className="text-white">Telepon</p>
          <p className="text-white">Email</p>
        </section>
      </section>
    </footer>
  );
}
