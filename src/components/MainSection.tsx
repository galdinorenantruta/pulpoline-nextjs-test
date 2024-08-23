import React from "react";

const MainSection = () => {
  return (
    <>
      <div className="p-8 bg-gray-100 flex flex-col">
        {/* Título Principal */}
        <h1 className="text-2xl font-bold mb-4">Gestion de Saldo</h1>

        {/* Opções de Saldo e Prêmios */}
        <div className="flex space-x-4 mb-8">
          <button className="border-b-2 border-#006089 font-semibold">
            Recargar Saldo
          </button>
          <button className="text-gray-500 cursor-not-allowed">
            Retirar Prêmios
          </button>
        </div>

        {/* Saldo Principal */}
        <div className="text-center mb-8">
          <h2 className="text-5xl font-bold">10,00 €</h2>
          <p className="text-xl">Tu Saldo</p>
        </div>

        {/* Seleção de Importe */}
        <div className="w-full max-w-xs text-left mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Selecciona e Importe a Anadir
          </label>
          <select className="block w-full p-2 border border-gray-300 rounded-md">
            <option value="">Escolha uma opção</option>
            <option value="10">10 €</option>
            <option value="20">20 €</option>
            <option value="30">30 €</option>
            <option value="40">40 €</option>
            <option value="50">50 €</option>
          </select>
        </div>

        {/* Botões de Seleção */}
        <div className="flex space-x-4 mb-8">
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
            10 €
          </button>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
            20 €
          </button>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
            30 €
          </button>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
            40 €
          </button>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
            50 €
          </button>
        </div>
      </div>

      {/* Seção Método Pago */}
      <div className="p-8 bg-gray-50 flex flex-col">
        <h2 className="text-xl font-semibold mb-4">Método Pago</h2>

        <div className="flex items-center mb-4">
          <input
            type="radio"
            id="tarjeta-bancaria"
            checked
            className="form-checkbox h-4 w-4 text-blue-600"
          />
          <label htmlFor="tarjeta-bancaria" className="ml-2">
            Tarjeta Bancaria
          </label>
        </div>

        <div className="flex items-center mb-4">
          <input
            type="radio"
            id="tarjeta-terminada"
            checked
            className="form-checkbox h-4 w-4 text-blue-600"
          />
          <label htmlFor="tarjeta-terminada" className="ml-2">
            Tarjeta Terminada en 0909
          </label>
        </div>

        <div className="flex items-center mb-4">
          <input
            type="radio"
            id="otra-tarjeta"
            className="form-checkbox h-4 w-4 text-blue-600"
          />
          <label htmlFor="otra-tarjeta" className="ml-2">
            Utilizar Outra Tarjeta
          </label>
        </div>

        <select className="block w-full max-w-xs p-2 border border-gray-300 rounded-md mb-4">
          <option value="sabadel">Sabadel</option>
        </select>
      </div>

      {/* Seção Métodos de Pagamento Adicionais */}
      <div className="p-8 bg-gray-100 flex flex-col">
        <div className="flex items-center mb-4">
          <input
            type="radio"
            id="bizum"
            className="form-checkbox h-4 w-4 text-blue-600"
          />
          <label htmlFor="bizum" className="ml-2">
            Bizum
          </label>
        </div>

        <div className="flex items-center">
          <input
            type="radio"
            id="transferencia"
            className="form-checkbox h-4 w-4 text-blue-600"
          />
          <label htmlFor="transferencia" className="ml-2">
            Transferencia
          </label>
        </div>
      </div>

      {/* Seção Final com Ícone, Texto e Botão */}
      <div className="p-8 bg-gray-50 flex items-center justify-between">
        <div className="flex items-center">
          <div className="h-6 w-6 bg-blue-500 text-white flex items-center justify-center rounded-full mr-4">
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4l2 2m-6-6h6M6 12v6m12-6v6"
              />
            </svg>
          </div>
          <p className="text-lg">Texto de Descrição</p>
        </div>
        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
          Ação
        </button>
      </div>
    </>
  );
};

export default MainSection;
