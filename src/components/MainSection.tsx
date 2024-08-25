"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import FinalSection from "./FinalSection";

interface MainSectionProps {
  onSaldoAtualChange: (saldoAtual: number) => void;
}

const MainSection: React.FC<MainSectionProps> = ({ onSaldoAtualChange }) => {
  const [saldoAtual, setSaldoAtual] = useState<number>(10);
  const [valorSelecionado, setValorSelecionado] = useState<string | null>(null);
  const [showNewComponent, setShowNewComponent] = useState(false);
  const [saldoAnterior, setSaldoAnterior] = useState<number>(10);

  useEffect(() => {
    onSaldoAtualChange(saldoAtual); // Passa o saldoAtual para o componente pai
  }, [saldoAtual, onSaldoAtualChange]);

  const handleValueClick = (value: string) => {
    setValorSelecionado(value); // Atualiza o valor selecionado
  };

  const handleRecharge = () => {
    if (valorSelecionado !== null) {
      setSaldoAnterior(saldoAtual);
      setSaldoAtual(saldoAtual + parseFloat(valorSelecionado));
      setValorSelecionado(null);
      setShowNewComponent(true);
    }
  };

  if (showNewComponent) {
    return (
      <FinalSection
        saldoAtual={saldoAtual}
        setShowNewComponent={setShowNewComponent}
        saldoAnterior={saldoAnterior}
      />
    );
  }
  return (
    <>
      <div className="p-0 sm:px-4 mt-[-40px] flex flex-col relative mr-6 ml-4 sm:mr-0 sm:ml-0  sm:mt-0 ">
        <h1 className="hidden  sm:block text-xl  font-bold mb-4">
          Gestion de Saldo
        </h1>

        <div className="flex flex-row space-x-4 mb-8 items-center">
          <button
            style={{ borderBottom: "1px solid #006089" }}
            className="font-semibold mb-2 "
          >
            Recargar Saldo
          </button>
          <button className="text-gray-500 cursor-not-allowed">
            Retirar Prêmios
          </button>
        </div>

        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-5xl font-bold">{saldoAtual},00 €</h2>
          <p className="text-lg sm:text-xl">Tu Saldo</p>
        </div>

        <div className="w-full max-w-md sm:max-w-xl text-left mb-4">
          <label className="block text-sm font-bold mb-2">
            Selecciona e Importe a Anadir:
          </label>
          <input
            type="text"
            placeholder="Importe (€)"
            className="block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <p className="text-sm">Importe Mínimo 1€</p>
      </div>
      {/* Buttons */}
      <div className="flex flex-wrap gap-4 mb-8 ml-8">
        {["5 €", "10 €", "20 €", "50 €", "100 €"].map((value, index) => (
          <button
            onClick={() => handleValueClick(value)}
            key={index}
            className={`w-16 sm:w-32 text-black py-2 px-4 rounded-md
              ${
                valorSelecionado === value
                  ? "bg-cyan-800 scale-110 text-white"
                  : "bg-blue-200 hover:bg-cyan-800 hover:scale-110"
              }`}
          >
            {value}
          </button>
        ))}
      </div>

      <div className="ml-0 sm:ml-8">
        <h2 className="text-lg sm:text-xl font-semibold mb-4">Método Pago</h2>

        <div
          style={{ border: "1px solid #00A9E0" }}
          className=" p-0 sm:p-8 bg-white flex flex-col rounded-md sm:w-9/12"
        >
          <div className="flex items-center mb-4">
            <input
              type="radio"
              checked={true}
              className="form-checkbox h-4 w-4 text-black"
            />
            <p>Tarjeta Bancária</p>
            <Image width={15} height={15} alt="logo" src="/16px_icon.svg" />
            <p className="ml-auto text-sm text-gray-400">Instántaneo</p>
          </div>
          <div className="flex items-center mb-4 ml-2">
            <input
              type="radio"
              checked={true}
              className="form-checkbox h-4 w-4 text-black"
            />
            <p>Tarjeta Terminada en 0909</p>
          </div>
          <div className="flex items-center mb-4 ml-2">
            <input type="radio" className="form-checkbox h-4 w-4 text-black" />
            <p>Utilizar Otra Tarjeta</p>
          </div>

          <div className="hidden sm:block relative mb-4">
            <label
              style={{ fontSize: "12px" }}
              htmlFor="select"
              className="block mb-2 absolute font-semibold top-0 left-2 transform -translate-y-1/2 px-1 bg-white"
            >
              Elige TPV
            </label>
            <select
              id="select"
              className="block w-full max-w-xlg p-2 border border-black rounded-md pt-6"
            >
              <option value="sabadel">Sabadel</option>
            </select>
          </div>
        </div>
      </div>

      <div className="p-0 pt-4 sm:p-8 bg-gray-100 flex flex-col">
        <div className="w-3/4 bg-white flex items-center mb-4 border border-gray-400 h-10 rounded-md p-3">
          <input type="radio" className="form-checkbox h-4 w-4 text-black " />
          <label className="ml-2 font-bold">Bizu</label>
          <Image
            className="hidden lg:flex"
            width={15}
            height={15}
            alt="logo"
            src="/16px_icon.svg"
          />
          <p className="hidden lg:flex ml-auto text-sm text-gray-400">
            Importe Mínimo 10€
          </p>
        </div>
        <div className="w-3/4 bg-white flex items-center mb-4 border border-gray-400 h-10 rounded-md p-3">
          <input type="radio" className="form-checkbox h-4 w-4 text-black " />
          <label className="ml-2 font-bold">Transferencia</label>
          <Image
            className="hidden lg:flex"
            width={15}
            height={15}
            alt="logo"
            src="/16px_icon.svg"
          />
          <p className="hidden lg:flex ml-auto text-sm text-gray-400">
            No Instántaneo
          </p>
        </div>
      </div>

      {/* Seção Final com Ícone, Texto e Botão */}
      <div className="p-0 pt-4 sm:p-8 bg-gray-50 flex flex-col sm:flex-row items-center justify-between">
        <button
          onClick={handleRecharge}
          className={`w-full sm:w-48 py-2 px-4 rounded-md mb-4 sm:mb-0 order-1 sm:order-2 ${
            valorSelecionado
              ? "bg-sky-600 text-white"
              : "bg-blue-400  text-gray-300"
          } hover:text-white hover:scale-110 hover:bg-sky-600 `}
        >
          Recargar Cuenta
        </button>
        <div className="flex items-center order-2 sm:order-1">
          <Image width={25} height={25} alt="logo" src="/24pxshield.svg" />
          <p className="text-sm ml-2">
            Todos los pagos en Lotopía son 100% seguros. Web certificada por{" "}
            <br />
            Confianza Online
          </p>
        </div>
      </div>
    </>
  );
};

export default MainSection;
