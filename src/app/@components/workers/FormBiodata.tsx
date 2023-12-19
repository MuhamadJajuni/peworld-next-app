import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import  { db }  from '@/lib/init'; // Adjust the path based on your project structure

const FormBiodata = () => {
  const [formData, setFormData] = useState({
    namaLengkap: '',
    jobDesk: '',
    domisili: '',
    tempatKerja: '',
    deskripsiSingkat: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Save the form data to Firestore
      const biodataCollection = collection(db, 'biodata');
      await addDoc(biodataCollection, formData);

      console.log('Form Data submitted to Firestore:', formData);
      // You can add additional logic here, such as displaying a success message or redirecting the user

      // Clear the form after submission
      setFormData({
        namaLengkap: '',
        jobDesk: '',
        domisili: '',
        tempatKerja: '',
        deskripsiSingkat: '',
      });
    } catch (error) {
      console.error('Error submitting form data to Firestore:', error);
      // Handle the error (display an error message, log it, etc.)
    }
  };

  return (
    <div className="bg-white shadow my-2 gap-2 flex flex-col rounded">
      {/* form data diri */}
      <form className="flex flex-col gap-2 justify-start mx-4" onSubmit={handleSubmit}>
        <div className="mb-2 text-start text-xl">
          <h4 className="font-semibold text-[22px] text-[#1F2A36] leading-[56px]">
            Data Diri
          </h4>
          <hr className="border" />
        </div>
        <label className="flex flex-col my-2 mx-2 text-[12px] text-[#9EA0A5]">
          Nama Lengkap
          <input
            className="border rounded mt-1 py-2 px-2 text-[14px] text-[#858D96]"
            type="text"
            placeholder="Masukan Nama Lengkap"
            name="namaLengkap"
            value={formData.namaLengkap}
            onChange={handleInputChange}
          />
        </label>

        <label className="flex flex-col my-2 mx-2 text-[12px] text-[#9EA0A5]">
          Job Desk
          <input
            className="border rounded mt-1 py-2 px-2 text-[14px] text-[#858D96]"
            type="text"
            placeholder="Masukan Job Desk"
            name="jobDesk"
            value={formData.jobDesk}
            onChange={handleInputChange}
          />
        </label>

        <label className="flex flex-col my-2 mx-2 text-[12px] text-[#9EA0A5]">
          Domisili
          <input
            className="border rounded mt-1 py-2 px-2 text-[14px] text-[#858D96]"
            type="text"
            placeholder="Masukan Domisili"
            name="domisili"
            value={formData.domisili}
            onChange={handleInputChange}
          />
        </label>

        <label className="flex flex-col my-2 mx-2 text-[12px] text-[#9EA0A5]">
          Tempat Kerja
          <input
            className="border rounded mt-1 py-2 px-2 text-[14px] text-[#858D96]"
            type="text"
            placeholder="Masukan Tempat Kerja"
            name="tempatKerja"
            value={formData.tempatKerja}
            onChange={handleInputChange}
          />
        </label>

        <label className="flex flex-col my-2 mx-2 text-[12px] text-[#9EA0A5]">
          Deskripsi Singkat
          <textarea
            className="border rounded mt-1 py-2 px-2 text-[14px] text-[#858D96]"
            placeholder="Masukan Deskripsi"
            name="deskripsiSingkat"
            value={formData.deskripsiSingkat}
            onChange={handleInputChange}
          ></textarea>
        </label>

        <button onClick={handleSubmit} className="bg-[#5E50A1] text-white py-2 px-2 font-bold text-[16px] leading-[20px] rounded" type="submit">
          Simpan
        </button>
      </form>
      {/* end form */}
    </div>
  );
};

export default FormBiodata;
