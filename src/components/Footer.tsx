import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer
      className="hidden sm:block bg-black text-white py-6 px-10"
      style={{ minHeight: "420px" }}
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between h-full gap-2">
        {/* Primeira Seção: Imagem */}
        <div className="flex items-center px-5 py-3 flex-shrink mr-4">
          <a href="/">
            <Image width={180} height={80} src="/Group.svg" alt="Logo" />
          </a>
        </div>

        {/* Segunda Seção: Links */}
        <div className="flex flex-col text-left flex-grow flex-shrink ml-6 pl-4">
          <h3 className="text-lg font-bold mb-4">Links de Interés</h3>
          <div className="flex">
            <div className="flex flex-col">
              <a href="#" className="mb-2 underline text-sm">
                Quienes Somos
              </a>
              <a href="#" className="mb-2 underline text-sm">
                Perguntas frecuentes
              </a>
              <a href="#" className="mb-2 underline text-sm">
                Premios repartidos
              </a>
            </div>
            <div className="flex flex-col pl-6 ml-6">
              <a href="#" className="mb-2 underline text-sm">
                Ayuda
              </a>
              <a href="#" className="mb-2 underline text-sm">
                Blog
              </a>
              <a href="#" className="mb-2 underline text-sm">
                Mapa Web
              </a>
            </div>
          </div>
          <div className="flex flex-col">
            <h3 className="text-lg font-bold mb-4 my-6">Otros Links</h3>
            <a href="#" className="underline mb-2 text-sm">
              Comprar Loteria de Navidad
            </a>
            <a href="#" className="underline mb-2 text-sm">
              Comprar Loteria del Niño
            </a>
            <a href="#" className="underline mb-2 text-sm">
              Loteria de Navidad Para Empresas
            </a>
            <a href="#" className="underline mb-2 text-sm">
              Bote XX Millones Euromillones
            </a>
            <a href="#" className="underline mb-2 text-sm">
              Loteria Sorteo Especial
            </a>
            <a href="#" className="underline mb-2 text-sm">
              Loteria Jueves y Sábado
            </a>
          </div>
        </div>

        {/* Terceira Seção: Links */}
        <div className="flex flex-col text-left flex-grow flex-shrink">
          <div>
            <h3 className="text-lg font-bold mb-4">Confianza y Seguridad</h3>
            <p className="mb-2">Selos de Confianza</p>
            <div className="flex gap-4">
              <a href="#">
                <Image
                  width={100}
                  height={28}
                  alt="confianza logo"
                  src="/footer-images/24pxconfianza.svg"
                />
              </a>
              <a href="#">
                <Image
                  width={67}
                  height={28}
                  alt="logo"
                  src="/footer-images/24pxjuego.svg"
                />
              </a>
            </div>
            <div className="mt-6">
              <p className="mb-2">Métodos de Pago</p>
              <div className="flex flex-col">
                <div className="flex gap-4 flex-wrap">
                  <a href="#">
                    <Image
                      width={41}
                      height={28}
                      alt="logo"
                      src="/footer-images/cards/24px.svg"
                    />
                  </a>
                  <a href="#">
                    <Image
                      width={41}
                      height={28}
                      alt="logo"
                      src="/footer-images/cards/24px-1.svg"
                    />
                  </a>
                  <a href="#">
                    <Image
                      width={41}
                      height={28}
                      alt="logo"
                      src="/footer-images/cards/24px-2.svg"
                    />
                  </a>
                  <a href="#">
                    <Image
                      width={36}
                      height={28}
                      alt="logo"
                      src="/footer-images/cards/24px-9.svg"
                    />
                  </a>
                  <a href="#">
                    <Image
                      width={51}
                      height={38}
                      alt="logo"
                      src="/footer-images/cards/24px-8.svg"
                    />
                  </a>
                  <a href="#">
                    <Image
                      width={51}
                      height={38}
                      alt="logo"
                      src="/footer-images/cards/24px-3.svg"
                    />
                  </a>
                </div>
                <div className="flex gap-4 flex-wrap">
                  <a href="#">
                    <Image
                      width={41}
                      height={28}
                      alt="logo"
                      src="/footer-images/cards/24px-4.svg"
                    />
                  </a>
                  <a href="#">
                    <Image
                      width={41}
                      height={28}
                      alt="logo"
                      src="/footer-images/cards/24px-5.svg"
                    />
                  </a>
                  <a href="#">
                    <Image
                      width={51}
                      height={38}
                      alt="logo"
                      src="/footer-images/cards/24px-6.svg"
                    />
                  </a>
                  <a href="#">
                    <Image
                      width={41}
                      height={28}
                      alt="logo"
                      src="/footer-images/cards/24px-7.svg"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quarta Seção: Links */}
        <div className="flex flex-col text-left flex-grow ml-6 pl-4">
          <h3 className="text-lg font-bold mb-4">Textos Legales</h3>
          <div className="flex">
            <div className="flex flex-col">
              <a href="#" className="mb-2 underline text-sm">
                Condiciones Generales
              </a>
              <a href="#" className="mb-2 underline text-sm">
                Politica de Privacidad
              </a>
              <a href="#" className="mb-2 underline text-sm">
                Politica de Cookies
              </a>
            </div>
          </div>
          <div className="flex flex-col">
            <h3 className="text-lg font-bold mb-4 my-6">Contacto</h3>
            <a
              href="mailto:hello@devtalenty.com"
              className="underline mb-2 text-sm"
            >
              hello@devtalenty.com
            </a>
            <a href="tel:+506124356789" className="underline mb-2 text-sm">
              +506 124 356 789
            </a>
            <a href="#" className="underline mb-2 text-sm">
              Chat
            </a>
            <p className="mb-2 text-sm">De lunes a viernes de 9:00h a 19:00h</p>
            <div className="flex items-center">
              <p className="mb-2 text-sm">Seguiemos en:</p>
              <a href="#">
                <Image
                  className="ml-3"
                  width={20}
                  height={20}
                  alt="logo"
                  src="/footer-images/face.svg"
                />
              </a>
              <a href="#">
                <Image
                  className="ml-3"
                  width={20}
                  height={20}
                  alt="logo"
                  src="/footer-images/insta.svg"
                />
              </a>
              <a href="#">
                <Image
                  className="ml-3"
                  width={20}
                  height={20}
                  alt="logo"
                  src="/footer-images/twiter.svg"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
