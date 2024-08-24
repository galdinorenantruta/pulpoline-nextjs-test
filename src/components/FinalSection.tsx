import React from "react";

interface FinalSectionProps {
  saldoAtual: number;
  setShowNewComponent: React.Dispatch<React.SetStateAction<boolean>>;
}

const FinalSection: React.FC<FinalSectionProps> = ({
  saldoAtual,
  setShowNewComponent,
}) => {
  return (
    <div>
      <h1 className="hidden  sm:block text-xl  font-bold mb-4">
        Gestion de Saldo
      </h1>
      <p>
        Tu saldo ya está añadido y puedes usarlo para realizartus compras.
        ¿Listo para ganar?
      </p>
      <div className="flex">
        <div>
          <p>{saldoAtual}</p>
          <p>Antes</p>
        </div>
        I
      </div>

      <button
        className="w-32 bg-sky-700"
        onClick={() => {
          setShowNewComponent(false);
        }}
      >
        Voltar
      </button>
    </div>
  );
};

export default FinalSection;
