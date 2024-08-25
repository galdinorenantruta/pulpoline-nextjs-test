import Image from "next/image";
import React from "react";

interface FinalSectionProps {
  saldoAnterior: number;
  saldoAtual: number;
  setShowNewComponent: React.Dispatch<React.SetStateAction<boolean>>;
}

const FinalSection: React.FC<FinalSectionProps> = ({
  saldoAnterior,
  saldoAtual,
  setShowNewComponent,
}) => {
  return (
    <div className="sm:mx-8 mx-0 sm:px-8 px-2   ">
      <div className="flex align-middle">
        <Image width={20} height={20} alt="logo" src="/24pxcorrect.svg" />
        <h1 className="text-xl  font-bold ">¡Saldo Añadido!</h1>
      </div>

      <p className="mt-6">
        Tu saldo ya está añadido y puedes usarlo para realizar tus compras.
        ¿Listo para ganar?
      </p>
      <div className="flex bg-white rounded-md h-20 justify-center items-center gap-4 shadow-lg">
        <div className="text-center">
          <p className="font-bold">{saldoAnterior},00</p>
          <p className="font-semibold">Antes</p>
        </div>
        <div>
          <Image width={20} height={20} alt="logo" src="/24pxarrow.svg" />
        </div>
        <div className="text-center">
          <p className="font-semibold text-green-700 text-xl">
            {saldoAtual},00
          </p>
          <p className="font-bold">Ahora</p>
        </div>
      </div>
      <div className="flex justify-end mt-6 ">
        <button
          className="sm:w-32 w-full  h-10 bg-sky-400  rounded-md sm:mr-3 mr-0 text-white"
          onClick={() => {
            setShowNewComponent(false);
          }}
        >
          Ir A Inicio
        </button>
      </div>
      <div className="flex justify-center items-center mt-8">
        <Image width={800} height={200} alt="logo" src="/Banner.png" />
      </div>
    </div>
  );
};

export default FinalSection;
