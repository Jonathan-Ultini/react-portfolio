import React from 'react'
import { Spotlight } from './ui/Spotlight' // Importa il componente Spotlight, che probabilmente crea effetti visivi di luce
import { TextGenerateEffect } from './ui/TextGenerateEffects'; // Importa un effetto di animazione per il testo
import MagicButton from './ui/MagicButton'; // Importa un bottone personalizzato con effetti speciali
import { FaLocationArrow } from 'react-icons/fa'; // Importa un'icona a forma di freccia direzionale

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      {/* Sezione che gestisce gli effetti visivi di luce (Spotlight) */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white" // Effetto luce bianca posizionata in alto a sinistra
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple" // Effetto luce viola posizionato sulla destra
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
        {/* Effetto luce blu posizionato più al centro */}
      </div>

      {/* Background a griglia con effetto maschera */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.05] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Effetto di sfumatura radiale al centro dello sfondo */}
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      {/* Contenitore principale del contenuto della Hero Section */}
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">

          {/* Nome dell'autore */}
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Jonathan Ultini
          </p>

          {/* Testo principale con effetto animato di generazione */}
          <TextGenerateEffect
            className='text-center text-[40px] md:text-5xl lg:text-6xl'
            words='Inizio il mio percorso nello sviluppo web creando esperienze utente fluide e accessibili.'
          />

          {/* Breve descrizione dell'autore */}
          <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
            Ciao! Sono Jonathan, un junior web developer appassionato di sviluppo
          </p>

          {/* Bottone per navigare ai progetti */}
          <a href="#projects">
            <MagicButton
              title="Vedi i miei progetti"
              icon={<FaLocationArrow />} // Icona direzionale accanto al testo
              position='right'
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
