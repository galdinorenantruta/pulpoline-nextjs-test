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
    <div className="mx-8 px-8 ">
      <div className="flex align-middle">
        <Image width={20} height={20} alt="logo" src="/24pxcorrect.svg" />
        <h1 className="text-xl  font-bold ">¡Saldo Añadido!</h1>
      </div>

      <p className="mt-6">
        Tu saldo ya está añadido y puedes usarlo para realizartus compras.
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
      <div className="mt-6 items-end">
        <button
          className="w-32 h-10  bg-sky-400 ml-auto rounded-md"
          onClick={() => {
            setShowNewComponent(false);
          }}
        >
          Voltar
        </button>
      </div>
    </div>
  );
};

export default FinalSection;
