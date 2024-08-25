"use client";
import MainSection from "@/components/MainSection";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [saldoAtual, setSaldoAtual] = useState<number>(10);

  return (
    <>
      <Navbar saldoAtual={saldoAtual} />
      <div className="flex overflow-y-auto p-2 sm:p-8">
        <main className="flex-1 mt-10 sm:mt-0">
          <MainSection onSaldoAtualChange={setSaldoAtual} />
        </main>
        <aside className="hidden md:block p-4 mr-5">
          <Sidebar saldoAtual={saldoAtual} />
        </aside>

        <Image
          className="hidden  md:block absolute right-0 top-[-25px] rotate-90 z-[-1] "
          width={480}
          height={500}
          alt="logo"
          src="/logo02circle.svg"
        />
        <Image
          className="hidden md:block absolute right-[-20px] bottom-[-205px] z-[-1]"
          width={480}
          height={500}
          alt="logo"
          src="/logo02circle.svg"
        />
      </div>
    </>
  );
}
