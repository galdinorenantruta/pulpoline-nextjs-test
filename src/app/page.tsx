import MainSection from "@/components/MainSection";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex overflow-y-auto">
      <main className="flex-1 p-4">
        <MainSection />
      </main>
      <aside className="hidden sm:block sm:w-1/4 p-4">
        <Sidebar />
      </aside>
    </div>
  );
}
