import { useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";

async function getData(session) {
  if (!session) {
    return null;
  }

  try {
    const res = await fetch(`https://hire-job-backend-rho.vercel.app/profile`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${session.user.accessToken}`,
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      console.error("Failed to fetch data:", res.status, res.statusText);
      return null;
    }

    const data = await res.json();
    console.log("Fetched data:", data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

export default function CardProfileRecruiters() {
  const { data: session } = useSession();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getData(session);
      setData(result);
    };

    fetchData();
  }, [session]);

  return (
    <div className="grid grid-flow-row">
      <div className="col-start-2 col-span-3 mr-24">
        {data && (
          <div className="grid grid-cols-1 h-64">
            <div className="col-start-1 col-span-4 flex flex-col h-auto bg-white rounded ml-20 mx-10 shadow">
              <div className="grid grid-rows-1 grid-flow-col gap-2 justify-center items-center mt-5 mx-5">
                <div className="flex flex-col justify-center items-center">
                  <Image
                    src={data.data.image}
                    alt="logo"
                    width={100}
                    height={100}
                    className="object-contain rounded-md"
                    priority
                  />
                  <p className="flex justify-center my-2 font-semibold text-[22px] text-[#1F2A36]">
                    {data.data.company_name}
                  </p>
                  <p className="flex justify-center my-2 font-normal text-[#1F2A36] text-[14px]">
                    {data.data.company_field}
                  </p>
                  <p className="flex justify-center my-2 font-normal text-[#9EA0A5] text-[14px]">
                    {data.data.residence}
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center w-full gap-3 rounded my-5 mt-10">
                <button className="bg-[#5E50A1] text-white py-2 px-2 font-bold text-[16px] leading-[20px] mx-1 rounded">
                  Simpan
                </button>
                <button className="bg-white box-content mx-1 py-2 px-2 border leading-[20px] font-bold border-[#5E50A1] text-[16px] text-[#5E50A1] rounded">
                  Batal
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
