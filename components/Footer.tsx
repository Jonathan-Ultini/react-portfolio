import { FaLocationArrow } from "react-icons/fa6"; // Importa un'icona di una freccia direzionale

import { socialMedia } from "@/data"; // Importa i dati relativi ai social media
import MagicButton from "./ui/MagicButton"; // Importa un componente personalizzato per il bottone animato

const Footer = () => {
  return (
    <footer className="w-full pb-10 mb-[100px] md:mb-5" id="contact">
      {/* Contenitore principale del footer */}
      <div className="flex flex-col items-center">
        {/* Titolo del footer con evidenziazione di una parola */}
        <h1 className="heading lg:max-w-[45vw]">
          Pronto a migliorare la <span className="text-purple">tua</span> presenza digitale?
        </h1>

        {/* Testo di invito a contattare */}
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Contattami oggi e vediamo come posso aiutarti a raggiungere i tuoi obiettivi.
        </p>

        {/* Bottone che apre la mail per contattare */}
        <a href="mailto:jonathanultini@gmail.com">
          <MagicButton
            title="Mettiamoci in contatto!"
            icon={<FaLocationArrow />} // Icona direzionale accanto al testo
            position="right"
          />
        </a>
      </div>

      {/* Sezione inferiore del footer */}
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        {/* Copyright con nome e anno */}
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2025 Jonathan Ultini
        </p>

        {/* Sezione con le icone dei social media */}
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              {/* Se il social ha un link di download, lo mostra */}
              {info.download ? (
                <a href={info.download} download>
                  <img src={info.img} alt="Download CV" width={20} height={20} />
                </a>
              ) : (
                // Altrimenti, mostra l'icona con il link al social media
                <a href={info.link}>
                  <img src={info.img} alt="icons" width={20} height={20} />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
