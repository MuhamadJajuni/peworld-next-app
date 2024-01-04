import defaultProfileImage from "img/NialHoran.svg";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Audio, Vortex } from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CardProfileWorkers() {
  const { data: session } = useSession();
  const { push } = useRouter();
  const [profileData, setProfileData] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [tempImageUrl, setTempImageUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

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
          throw new Error("Failed to Fetch Data");
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
      setIsLoading(true);

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

      if (response.ok) {
        setIsLoading(false);
        push("/workers/edit");
        toast.success("Foto Update Succes");
      } else if (response.status === 400 || 500) {
        setError("Kesalahan Update Foto");
        setIsLoading(false);
        toast.error("Gagal Update Foto");
      } else {
        setIsLoading(false);
        toast.error("Gagal Submit, Pastikan Foto Sesuai");
      }

      console.log("Image updated successfully");
      fetchProfileData();
      window.location.reload();
    } catch (error) {
      console.error("Error updating image:", error.message);
      setIsLoading(false);
    }
  };

  if (isLoading || !profileData) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Vortex
          height={120}
          width={120}
          radius={9}
          color="green"
          ariaLabel="three-dots-loading"
          wrapperStyle={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          wrapperClass="loading-wrapper"
        />
      </div>
    );
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
                disabled={isLoading}
              >
                {isLoading ? (
                  <Audio
                    height={20}
                    width={20}
                    radius={9}
                    color="blue"
                    ariaLabel="three-dots-loading"
                  />
                ) : (
                  "Update Image"
                )}
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
      <ToastContainer />
    </div>
  );
}
