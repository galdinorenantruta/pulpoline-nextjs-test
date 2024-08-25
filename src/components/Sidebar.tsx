import React from "react";
import Image from "next/image";

interface SidebarProps {
  saldoAtual: number;
}

const Sidebar: React.FC<SidebarProps> = ({ saldoAtual }) => {
  return (
    <div className="pace-y-6 w-80">
      {/* Primeiro Card */}
      <div className="bg-white rounded-lg shadow-lg p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold">Hilla Amanda</h3>
          <span
            style={{ background: "#F6BD11" }}
            className=" text-gray-800 text-sm font-semibold px-3 py-1 "
          >
            Saldo: {saldoAtual},00 €
          </span>
        </div>
        <div className="flex mt-4 gap-3">
          <button className=" bg-white text-black border border-black rounded-sm hover:scale-110 p-2">
            Retirar Prêmios
          </button>
          <button
            style={{ background: "#00A9E0" }}
            className="hover:scale-110 text-white rounded-sm p-2"
          >
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
            <div className="mt-4 flex items-center">
              <Image
                src="/aside-icons/16px.svg"
                alt="icon"
                width={24}
                height={24}
              />
              <p className="ml-2 text-gray-700">Mis Datos Personales</p>
            </div>
            <div className=" mt-3 flex items-center">
              <Image
                src="/aside-icons/16px-1.svg"
                alt="icon"
                width={24}
                height={24}
              />
              <p className="ml-2 text-gray-700">Datos Bancarios</p>
            </div>
            <div className="flex items-center mt-3">
              <Image
                src="/aside-icons/16px-2.svg"
                alt="icon"
                width={24}
                height={24}
              />
              <p className="ml-2 text-gray-700">Direcciones</p>
            </div>
            <div className="flex items-center mt-3">
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
            <div className="flex items-center mt-3">
              <Image
                src="/aside-icons/16px-4.svg"
                alt="icon"
                width={24}
                height={24}
              />
              <p className="ml-2 text-gray-700">Mis Apuestas</p>
            </div>
            <div className="flex items-center mt-3">
              <Image
                src="/aside-icons/16px-5.svg"
                alt="icon"
                width={24}
                height={24}
              />
              <p className="ml-2 text-gray-700">Mis Renovaciones</p>
            </div>
            <div className="flex items-center mt-3">
              <Image
                src="/aside-icons/16px-6.svg"
                alt="icon"
                width={24}
                height={24}
              />
              <p className="ml-2 text-gray-700">Mis Movimientos</p>
            </div>
            <div className="flex items-center mt-3">
              <Image
                src="/aside-icons/16px-7.svg"
                alt="icon"
                width={24}
                height={24}
              />
              <p className="ml-2 text-gray-700">Mis Envios</p>
            </div>
          </div>
          {/* Título 3 */}
          <div>
            <h4 className="text-lg font-bold">Ayuda y Contacto</h4>
            <div className="flex items-center mt-3">
              <Image
                src="/aside-icons/16px-8.svg"
                alt="icon"
                width={24}
                height={24}
              />
              <p className="ml-2 text-gray-700">Preguntas frecuentes</p>
            </div>
            <div className="flex items-center mt-3">
              <Image
                src="/aside-icons/16px-9.svg"
                alt="icon"
                width={24}
                height={24}
              />
              <p className="ml-2 text-gray-700">Nuestros Protuctos</p>
            </div>
            <div className="flex items-center mt-3">
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
        <button className=" flex mt-10 pl-20 hover:scale-110 ">
          <Image src="/16pxcerrar.svg" alt="icon" width={20} height={20} />
          <p className="underline text-gray-600 text-sm ml-2  ">
            Cerrar Sessión
          </p>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
