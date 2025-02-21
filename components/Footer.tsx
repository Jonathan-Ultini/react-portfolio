import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./ui/MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pb-10 mb-[100px] md:mb-5" id="contact">

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Pronto a migliorare la <span className="text-purple">tua</span> presenza digitale?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Contattami oggi e vediamo come posso aiutarti a raggiungere i tuoi obiettivi.
        </p>
        <a href="mailto:jonathanultini@gmail.com">
          <MagicButton
            title="Mettiamoci in contatto!"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2025 Jonathan Ultini
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
              {info.download ? (
                <a href={info.download} download>
                  <img src={info.img} alt="Download CV" width={20} height={20} />
                </a>
              ) : (
                <a href={info.link}><img src={info.img} alt="icons" width={20} height={20} /></a>
              )}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;