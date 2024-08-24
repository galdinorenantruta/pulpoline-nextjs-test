import MainSection from "@/components/MainSection";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex overflow-y-auto p-4">
      <main className="flex-1 ">
        <MainSection />
      </main>
      <aside className="hidden md:block p-4 mr-5">
        <Sidebar />
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
  );
}
