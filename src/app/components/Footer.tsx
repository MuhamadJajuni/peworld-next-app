import logoFooter from "img/logoFooter.png";
import Image from "next/image";
import Link from "next/link";
export default function FooterLayout() {
  return (
    <footer className="bg-[#5E50A1] h-72 font-openSans">
      <section className="mx-5 my-2 py-2 mb-4">
        <Image
          src={logoFooter}
          alt="Picture of the author"
          style={{
            marginBottom: "10px",
            marginLeft: "10px",
            marginTop: "5px",
          }}
          className="object-cover"
        />
        <section className="ml-3 mt-5">
          <text className="text-white">
            Lorem ipsum dolor sit amet, consectetur <br></br> adipiscing elit.
            In euismod ipsum et dui <br></br> rhoncus auctor.
          </text>
        </section>
        <section className="border-b py-8" />
        <section className="grid grid-cols-2 py-2 pt-4">
          <section className="mt-2 ml-2">
            <Link href="https://camp.pijarmahir.id/">
              <text className="text-white">
                2023 Peworld. All right reserved
              </text>
            </Link>
          </section>
          <section className="flex justify-end mt-2 mr-2">
            <Link href="https://wa.link/64tcez">
              <text className="text-white mx-3">Telepon</text>
            </Link>
            <Link href="mailto:datatersimpan@gmail.com">
              <text className="text-white mx-3">Email</text>
            </Link>
          </section>
        </section>
      </section>
    </footer>
  );
}
