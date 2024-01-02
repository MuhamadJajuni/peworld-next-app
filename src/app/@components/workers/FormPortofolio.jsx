import { useSession } from "next-auth/react";
import { useState } from "react";

export default function FormPortofolio() {
  const { data: session } = useSession();
  const [name, setName] = useState("");
  const [portfolio_type, setPortfolio_type] = useState("");
  const [image, setImage] = useState("");
  const [repo_link, setRepo_link] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!session) {
      // Handle jika pengguna belum terotentikasi
      console.error("User not authenticated");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("portfolio_type", portfolio_type);
    formData.append("image", image);
    formData.append("repo_link", repo_link);

    const res = await fetch(
      "https://hire-job-backend-rho.vercel.app/portfolio",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${session.user.accessToken}`, // Tambahkan token akses ke dalam header
        },
        body: formData,
      }
    );

    if (res.ok) {
      setName(""); // Atur ulang nilai name setelah berhasil dikirim
      setPortfolio_type(""); // Atur ulang nilai portfolio_type setelah berhasil dikirim
      setImage(""); // Atur ulang nilai image setelah berhasil dikirim
      setRepo_link(""); // Atur ulang nilai repo_link setelah berhasil dikirim
      console.log("Data submitted");
    } else if (res.status === 400) {
      console.log("Something went wrong");
    } else {
      console.log("Error");
    }
  };

  return (
    <div className="bg-white shadow my-2 gap-2 flex flex-col rounded">
      {/* form portofolio */}
      <form
        className="flex flex-col gap-2 my-2 justify-start mx-4"
        onSubmit={handleSubmit}
      >
        <div className="mb-2 text-start text-xl">
          <h4 className="font-semibold text-[22px] text-[#1F2A36] leading-[56px]">
            Portofolio
          </h4>
          <hr className="border" />
        </div>
        <label className="flex flex-col my-2 mx-2 text-[12px] text-[#9EA0A5]">
          Name
          <input
            className="border rounded mt-1 py-2 px-2 text-[14px] text-[#858D96]"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Name"
          />
        </label>
        <label className="flex flex-col my-2 mx-2 text-[12px] text-[#9EA0A5]">
          Portfolio Type
          <input
            className="border rounded mt-1 py-2 px-2 text-[14px] text-[#858D96]"
            type="text"
            value={portfolio_type}
            onChange={(e) => setPortfolio_type(e.target.value)}
            placeholder="Enter Portfolio Type"
          />
        </label>
        <label className="flex flex-col my-2 mx-2 text-[12px] text-[#9EA0A5]">
          Image
          <input
            type="file"
            name="image"
            id="image"
            className="block w-full border border-gray-200 shadow-sm rounded text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600
            file:bg-gray-200 file:border-0 file:me-4
            file:py-3 file:px-4
            dark:file:bg-gray-700 dark:file:text-gray-400"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </label>
        <label className="flex flex-col my-2 mx-2 text-[12px] text-[#9EA0A5]">
          Repository Link
          <input
            className="border rounded mt-1 py-2 px-2 text-[14px] text-[#858D96]"
            type="text"
            value={repo_link}
            onChange={(e) => setRepo_link(e.target.value)}
            placeholder="Enter Repository Link"
          />
        </label>
        <button
          className="border border-[#FBB017] text-[#FBB017] leading-[20px] font-bold text-[16px] py-2 my-3 mx-2 rounded"
          type="submit"
        >
          Add Portfolio
        </button>
      </form>
      {/* end form portofolio */}
    </div>
  );
}
