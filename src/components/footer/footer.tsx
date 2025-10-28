import type { JSX } from "react";
import { FacebookIcon } from "./facebookicon";
import { XIcon } from "./x-icon";
import { InstagramIcon } from "./instagram-icon";

interface ContactInformation {
  text: string;
  iconUrl: string;
  alt: string;
}

const contactInformation: ContactInformation[] = [
  {
    text: "Santiago, Chile",
    iconUrl: "/images/icon-location.svg",
    alt: "Ubicación",
  },
  {
    text: "+56 9 9999 9999",
    iconUrl: "/images/icon-phone.svg",
    alt: "Teléfono",
  },
  {
    text: "contacto@conectatech.cl",
    iconUrl: "/images/icon-email.svg",
    alt: "Correo electrónico",
  },
];

interface Media {
  link: string;
  text: string;
  icon: JSX.Element;
}

const medias: Media[] = [
  {
    link: "https://facebook.com",
    text: "Facebook",
    icon: <FacebookIcon />,
  },
  {
    link: "https://x.com",
    text: "X",
    icon: <XIcon />,
  },
  {
    link: "https://instagram.com",
    text: "Instagram",
    icon: <InstagramIcon />,
  },
];

export const Footer = () => {
  return (
    <footer className="w-full bg-[#0B1522] text-gray-300 py-16 px-6 mt-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Columna 1 - Logo y descripción */}
        <div>
          <img src="/images/logo-img.svg" alt="Conectatech logo" className="w-40 mb-4" />
          <p className="text-sm leading-relaxed">
            En <span className="font-semibold text-white">Conectatech</span> impulsamos la
            Transformación Digital del Estado, acompañando a las instituciones públicas en su
            modernización mediante soluciones tecnológicas seguras, eficientes y centradas en las personas.
          </p>
        </div>

        {/* Columna 2 - Contacto */}
        <div>
          <h3 className="font-semibold text-white text-lg mb-4">Contacto</h3>
          <ul className="space-y-3">
            {contactInformation.map((item) => (
              <li key={item.alt} className="flex items-center gap-3">
                <img src={item.iconUrl} alt={item.alt} className="w-5 h-5" />
                <span className="text-sm">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Columna 3 - Misión, visión y redes */}
        <div>
          <h3 className="font-semibold text-white text-lg mb-4">Misión y Visión</h3>
          <p className="text-sm leading-relaxed mb-6">
            Nuestra misión es fortalecer la gestión pública digital en Chile, promoviendo eficiencia,
            transparencia e innovación. Nuestra visión es un Estado completamente digital al servicio de la ciudadanía.
          </p>

          <h3 className="font-semibold text-white text-lg mb-3">Síguenos</h3>
          <div className="flex gap-4">
            {medias.map((media) => (
              <a
                key={media.text}
                href={media.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 border border-gray-500 rounded-full size-[36px] flex items-center justify-center transition"
              >
                {media.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="text-center text-xs text-gray-500 mt-10 border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} Conectatech. Todos los derechos reservados.
      </div>
    </footer>
  );
};

