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
        className="flex h-[60px] items-center justify-between px-4"
      >
        <div className=" flex sm:hidden">
          <Image src="24pxback.svg" alt="relogio" width={30} height={30} />
          <p className="ml-1 mr-1 font-semibold text-xl text-white">
            Gestión de Saldo
          </p>
        </div>
        <div className="hidden sm:flex items-center space-x-4">
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
            <a href="#">
              <Image src="/icon.png" alt="relogio" width={24} height={24} />
            </a>

            <p className=" text-white text-xs text-center">0,00€</p>
          </div>
          <a href="#">
            <Image src="/24px.png" alt="Second Icon" width={26} height={20} />
          </a>
        </div>
      </div>

      {/*  Section Below Navbar */}
      <div
        style={{ background: "#ffffff" }}
        className="h-[90px] hidden sm:flex items-center justify-evenly "
      >
        {items.map((item, index) => (
          <div className="flex flex-col items-center" key={index}>
            <a href="#">
              <Image src="/24px.svg" alt="relogio" width={30} height={30} />
            </a>

            <p className="text-xs text-center">
              EuroMillones <br /> <span className="font-bold">17.000.00 €</span>
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Navbar;
