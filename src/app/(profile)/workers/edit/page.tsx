"use client";

import FooterLayout from "cmp/Footer";
import NavbarAuth from "cmp/NavbarAuth";
import CardProfileWorkers from "cmp/workers/CardProfileWorkers";
import FormBiodata from "cmp/workers/FormBiodata";
import FormExperience from "cmp/workers/FormExperience";
import FormPortofolio from "cmp/workers/FormPortofolio";
import FormSkill from "cmp/workers/FormSkill";
import { useState } from "react";

export default function WorkersPage() {
  const [activeTab] = useState(1);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState("");

  return (
    <main className="flex flex-col relative">
      <NavbarAuth />
      <section className="container bg-[#5E50A1] h-64">
        <section className="grid grid-cols-2 h-full mt-[58px] gap-5">
          <div className="grid grid-flow-row">
            <div className="col-start-2 col-span-3 mr-24">
              <div className="grid grid-cols-1 h-64">
                <CardProfileWorkers />
              </div>
            </div>
          </div>
          <section className="bg-white mr-24 mb-20 grid grid-flow-row gap-2 mx-2 rounded">
            <FormBiodata />
            <FormSkill />
            <FormExperience />
            <FormPortofolio />
          </section>
          <div>
            <FooterLayout />
          </div>
        </section>
      </section>
    </main>
  );
}
