import { useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";

import defaultProfileImage from "img/NialHoran.svg";

export default function CardProfileWorkers() {
  const { data: session } = useSession();
  const [profileData, setProfileData] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [tempImageUrl, setTempImageUrl] = useState(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        if (!session) {
          return;
        }
        const response = await fetch(
          "https://hire-job-backend-rho.vercel.app/profile",
          {
            headers: {
              Authorization: `Bearer ${session.user.accessToken}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        setProfileData(data.data);
        setTempImageUrl(null);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchProfileData();
  }, [session]);

  const handleFileChange = (event) => {
    setImageFile(event.target.files[0]);
    setTempImageUrl(URL.createObjectURL(event.target.files[0]));
  };

  const handleUpdateImage = async (event) => {
    event.preventDefault();

    try {
      if (!session || !profileData || !imageFile) {
        return;
      }

      const userId = profileData.id;

      const formData = new FormData();
      formData.append("image", imageFile);

      const response = await fetch(
        `https://hire-job-backend-rho.vercel.app/worker/profile/update-image/${userId}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${session.user.accessToken}`,
          },
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update image");
      }

      console.log("Image updated successfully");
      fetchProfileData();
      window.location.reload();
    } catch (error) {
      console.error("Error updating image:", error.message);
    }
  };

  if (!profileData) {
    return <p>Loading...</p>;
  }

  const { name, jobdesk, job_type, residence, image } = profileData;

  return (
    <div className="col-start-1 col-span-4 flex flex-col">
      <div className="grid grid-flow-row">
        <div className="grid grid-rows-1 grid-flow-col gap-1 justify-center h-auto bg-white rounded items-center ml-20 mx-10 shadow">
          <div className="flex flex-col justify-center items-center my-5 py-7">
            <Image
              src={tempImageUrl || image || defaultProfileImage}
              alt="Profile Image"
              width={125}
              height={125}
              className="object-contain rounded-full"
              priority
            />
            <form
              className="flex flex-col justify-center items-center"
              onSubmit={handleUpdateImage}
            >
              <label className="flex justify-center">
                <input
                  type="file"
                  onChange={handleFileChange}
                  accept="image/*"
                />
              </label>
              <button
                type="submit"
                className="flex justify-center items-center my-3 px-4 py-2 bg-white text-purple-400 rounded-md"
              >
                Update Image
              </button>
            </form>
            <p className="flex justify-center pt-5 my-5 font-openSans font-semibold text-[22px] leading-[56px] text-[#1F2A36] ">
              {name}
            </p>
            <p className="flex justify-center my-2 font-openSans font-normal text-[14px] leading-[24px] text-[#1F2A36] ">
              {jobdesk}
            </p>
            <p className="flex justify-center my-2 font-openSans font-normal text-[14px] leading-[20px] text-[#9EA0A5]">
              {residence}
            </p>
            <p className="flex justify-center my-2 font-openSans font-normal text-[14px] leading-[20px] text-[#9EA0A5]">
              {job_type}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
