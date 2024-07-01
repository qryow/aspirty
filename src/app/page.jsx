"use client";
import { Navbar } from "@/components/widgets/navbar";
import { ReturnTo } from "@/components/features/returnTo";
import { UserProfile } from "@/components/widgets/profile";
import { useState } from "react";
import { PersonalInfo } from "@/components/widgets/personal-info";
import { LoadEmployees } from "@/components/widgets/load-employees";
import { Statistic } from "@/components/widgets/statistic";
import { VacationHistory } from "@/components/widgets/vacation-history";

export default function Home() {
  const [toggle, setToggle] = useState("main");

  return (
    <>
      <div className="container-component">
        <Navbar />
        <ReturnTo />
        <UserProfile toggle={toggle} setToggle={setToggle} />
        {toggle == "main" ? (
          <div className="main__info-wrapper">
            <PersonalInfo />
            <LoadEmployees />
          </div>
        ) : (
          <div className="main__info-wrapper">
            <Statistic />
            <VacationHistory />
          </div>
        )}
      </div>
    </>
  );
}
