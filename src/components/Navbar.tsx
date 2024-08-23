import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const items = Array.from({ length: 10 });
  return (
    <>
      {/* Navbar Section */}
      <div
        style={{ background: "#00A9E0" }}
        className="h-[60px] flex items-center justify-between px-4"
      >
        <div className="flex items-center space-x-4">
          <p className="text-slate-300 ml-1 mr-1 text-2xl">|</p>
          <Link href="#home" className="text-white hover:text-gray-200">
            Inicio
          </Link>
          <Link href="#about" className="text-white hover:text-gray-200">
            Resultados y Botes
          </Link>
          <Link href="#services" className="text-white hover:text-gray-200">
            Quiénes Somos
          </Link>
          <Link href="#contact" className="text-white hover:text-gray-200">
            Ayuda
          </Link>
        </div>
        <div className="flex space-x-4">
          <div className="flex flex-col items-center">
            <Image src="/icon.png" alt="relogio" width={24} height={24} />
            <p className=" text-white text-xs text-center">0,00€</p>
          </div>
          <Image src="/24px.png" alt="Second Icon" width={26} height={20} />
        </div>
      </div>

      {/*  Section Below Navbar */}
      <div
        style={{ background: "#ffffff" }}
        className="h-[90px] flex items-center justify-evenly "
      >
        {items.map((item, index) => (
          <div className="flex flex-col items-center" key={index}>
            <Image src="/24px.svg" alt="relogio" width={30} height={30} />
            <p className="text-xs text-center">
              EuroMillones <br /> <p className="font-bold">17.000.00 €</p>
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Navbar;
