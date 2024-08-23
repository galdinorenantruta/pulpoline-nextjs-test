import React from "react";
import Image from "next/image";

const Sidebar = () => {
  return (
    <div className=" space-y-6 w-80">
      {/* Primeiro Card */}
      <div className="bg-white rounded-lg shadow-lg p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold">Hilla Amanda</h3>
          <span className="bg-yellow-300 text-gray-800 text-sm font-semibold px-3 py-1 rounded-full">
            Saldo: 10,00€
          </span>
        </div>
        <div className="mt-4 space-y-2">
          <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
            Retirar Prêmios
          </button>
          <button className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600">
            Recarregar Saldo
          </button>
        </div>
      </div>

      {/* Segundo Card */}
      <div className="bg-white rounded-lg shadow-lg p-4">
        <div className="space-y-4">
          {/* Título 1 */}
          <div>
            <h4 className="text-lg font-bold">Mi Cuenta</h4>
            <div className="flex items-center">
              <Image
                src="/aside-icons/16px.svg"
                alt="icon"
                width={24}
                height={24}
              />
              <p className="ml-2 text-gray-700">Mis Datos Personales</p>
            </div>
            <div className="flex items-center">
              <Image
                src="/aside-icons/16px-1.svg"
                alt="icon"
                width={24}
                height={24}
              />
              <p className="ml-2 text-gray-700">Datos Bancarios</p>
            </div>
            <div className="flex items-center">
              <Image
                src="/aside-icons/16px-2.svg"
                alt="icon"
                width={24}
                height={24}
              />
              <p className="ml-2 text-gray-700">Direcciones</p>
            </div>
            <div className="flex items-center">
              <Image
                src="/aside-icons/16px-3.svg"
                alt="icon"
                width={24}
                height={24}
              />
              <p className="ml-2 text-gray-700">Mis Notificaciones</p>
            </div>
          </div>
          {/* Título 2 */}
          <div>
            <h4 className="text-lg font-bold">Historial</h4>
            <div className="flex items-center">
              <Image
                src="/aside-icons/16px-4.svg"
                alt="icon"
                width={24}
                height={24}
              />
              <p className="ml-2 text-gray-700">Mis Apuestas</p>
            </div>
            <div className="flex items-center">
              <Image
                src="/aside-icons/16px-5.svg"
                alt="icon"
                width={24}
                height={24}
              />
              <p className="ml-2 text-gray-700">Mis Renovaciones</p>
            </div>
            <div className="flex items-center">
              <Image
                src="/aside-icons/16px-6.svg"
                alt="icon"
                width={24}
                height={24}
              />
              <p className="ml-2 text-gray-700">Mis Movimientos</p>
            </div>
            <div className="flex items-center">
              <Image
                src="/aside-icons/16px-7.svg"
                alt="icon"
                width={24}
                height={24}
              />
              <p className="ml-2 text-gray-700">Mis MEnvios</p>
            </div>
          </div>
          {/* Título 3 */}
          <div>
            <h4 className="text-lg font-bold">TAyuda y Contacto</h4>
            <div className="flex items-center">
              <Image
                src="/aside-icons/16px-8.svg"
                alt="icon"
                width={24}
                height={24}
              />
              <p className="ml-2 text-gray-700">Preguntas frecuentes</p>
            </div>
            <div className="flex items-center">
              <Image
                src="/aside-icons/16px-9.svg"
                alt="icon"
                width={24}
                height={24}
              />
              <p className="ml-2 text-gray-700">Nuestros Protuctos</p>
            </div>
            <div className="flex items-center">
              <Image
                src="/aside-icons/16px-10.svg"
                alt="icon"
                width={24}
                height={24}
              />
              <p className="ml-2 text-gray-700">Contacto</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
