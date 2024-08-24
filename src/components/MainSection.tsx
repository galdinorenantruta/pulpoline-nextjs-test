import Image from "next/image";
import React from "react";

const MainSection = () => {
  return (
    <>
      <div className="p-4 sm:p-8flex flex-col relative mr-6 ml-4 ">
        <h1 className="text-xl sm:text-2xl font-bold mb-4">Gestion de Saldo</h1>

        <div className="flex flex-col sm:flex-row sm:space-x-4 mb-8">
          <button
            style={{ borderBottom: "1px solid #006089" }}
            className="font-semibold mb-2 sm:mb-0"
          >
            Recargar Saldo
          </button>
          <button className="text-gray-500 cursor-not-allowed">
            Retirar Prêmios
          </button>
        </div>

        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-5xl font-bold">10,00 €</h2>
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
            key={index}
            className=" w-32 sm:w-36 text-black py-2 px-4 rounded-lg bg-blue-200 hover:bg-blue-600  hover:scale-110 "
          >
            {value}
          </button>
        ))}
      </div>
      <div className="ml-8">
        <h2 className="text-lg sm:text-xl font-semibold mb-4">Método Pago</h2>

        <div
          style={{ border: "1px solid #00A9E0" }}
          className=" sm:p-8 bg-white flex flex-col rounded-md w-9/12"
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

          <div className="relative mb-4">
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

      <div className="p-4 sm:p-8 bg-gray-100 flex flex-col">
        <div className="w-3/4 bg-white flex items-center mb-4 border border-gray-400 h-10 rounded-md p-3">
          <input type="radio" className="form-checkbox h-4 w-4 text-black " />
          <label className="ml-2 font-bold">Bizu</label>
          <Image width={15} height={15} alt="logo" src="/16px_icon.svg" />
          <p className="ml-auto text-sm text-gray-400">Importe Mínimo 10€</p>
        </div>
        <div className="w-3/4 bg-white flex items-center mb-4 border border-gray-400 h-10 rounded-md p-3">
          <input type="radio" className="form-checkbox h-4 w-4 text-black " />
          <label className="ml-2 font-bold">Transferencia</label>
          <Image width={15} height={15} alt="logo" src="/16px_icon.svg" />
          <p className="ml-auto text-sm text-gray-400">No Instántaneo</p>
        </div>
      </div>

      {/* Seção Final com Ícone, Texto e Botão */}
      <div className="p-4 sm:p-8 bg-gray-50 flex flex-col sm:flex-row items-center justify-between">
        <div className="flex items-center mb-4 sm:mb-0">
          <Image width={25} height={25} alt="logo" src="/24pxshield.svg" />
          <p className="text-sm ml-2">
            Todos los pagos en Lotopía son 100% seguros. Web certificada por{" "}
            <br />
            Confianza Online
          </p>
        </div>
        <button className="bg-blue-400 text-white py-2 px-4 rounded-lg hover:scale-110 hover:bg-blue-600">
          Recargar Cuenta
        </button>
      </div>
    </>
  );
};

export default MainSection;
