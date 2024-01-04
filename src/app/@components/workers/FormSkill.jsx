import { useSession } from "next-auth/react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function FormSkill() {
  const [name, setName] = useState("");
  const { data: session } = useSession();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!session) {
      console.error("User not authenticated");
      return;
    }

    try {
      setIsSubmitting(true);

      const res = await fetch("https://hire-job-backend-rho.vercel.app/skill", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session.user.accessToken}`,
        },
        body: JSON.stringify({
          name,
        }),
      });

      if (res.ok) {
        e.target.reset();
        setName("");
        toast.success("Data has been submitted successfully");
      } else if (res.status === 400) {
        toast.error("Something went wrong");
      } else {
        toast.error("Error");
      }
    } catch (error) {
      console.error("Error submitting data:", error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white shadow my-2 gap-2 flex flex-col rounded">
      <form
        className="flex flex-col gap-2 my-2 justify-start mx-4"
        onSubmit={handleSubmit}
      >
        <div className="mb-2 text-start text-xl">
          <h4 className="font-semibold text-[22px] text-[#1F2A36] leading-[56px]">
            SKILL
          </h4>
          <hr className="border" />
        </div>
        <div className="grid grid-cols-3 roun">
          <div className="col-span-2">
            <label className="flex flex-col my-2 mx-2 text-[12px] text-[#9EA0A5]">
              <input
                className="border rounded mt-1 py-2 px-2 text-[14px] text-[#858D96]"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Masukan Skill"
              />
            </label>
          </div>
          <div className="flex justify-end">
            <button
              className="bg-[#FBB017] text-white font-bold w-full text-[14px] leading-[19px] my-2 mx-1 rounded"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Menyimpan..." : "Simpan"}
            </button>
          </div>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}
