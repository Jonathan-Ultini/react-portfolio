import { projects } from '@/data' // Importa l'array di progetti dal file data.js o data.ts
import React from 'react'
import { PinContainer } from './ui/3d-pin' // Importa un componente per effetti 3D sui pin dei progetti
import { FaLocationArrow } from 'react-icons/fa' // Importa l'icona di una freccia direzionale

const RecentProjects = () => {
  return (
    <section className='py-20' id='projects'>
      {/* Titolo della sezione "Progetti Recenti" */}
      <h1 className='heading'>
        Una selezione di {''}
        <span className='text-purple'>progetti recenti</span> {/* Evidenzia il testo "progetti recenti" in viola */}
      </h1>

      {/* Contenitore per la griglia dei progetti */}
      <div className='flex flex-wrap items-center justify-center p-4 gap-16 mt-10'>
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className='sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]'
          >
            {/* Contenitore con effetto 3D per il progetto */}
            <PinContainer title={link} href={link}>
              <a href={link}>
                {/* Sezione immagine del progetto */}
                <div className='relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10'>
                  <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]'>
                    <img src="/bg.png" alt="bg-img" /> {/* Immagine di sfondo generica */}
                  </div>
                  <img src={img} alt={title} className='z-10 absolute h-full w-full' />
                  {/* Immagine specifica del progetto, posizionata sopra lo sfondo */}
                </div>

                {/* Titolo del progetto */}
                <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>
                  {title}
                </h1>

                {/* Descrizione breve del progetto */}
                <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2'>
                  {des}
                </p>

                {/* Sezione inferiore con icone e link */}
                <div className="flex items-center justify-between mt-7 mb-3">
                  {/* Lista delle tecnologie utilizzate nel progetto */}
                  <div className="flex items-center">
                    {iconLists.map((icon, index) => (
                      <div
                        key={icon}
                        className='border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center'
                        style={{ transform: `translateX(-${5 * index * 2}px)` }}
                      // Sposta leggermente ogni icona a sinistra per creare un effetto sovrapposto
                      >
                        <img src={icon} alt={icon} className='p-2' />
                      </div>
                    ))}
                  </div>

                  {/* Link per visualizzare il codice o il sito live */}
                  <div className='flex justify-center items-center'>
                    <p className='flex lg:text-xl md:text-xs text-sm text-purple'>
                      {id === 2 ? "controlla il sito live" : "controlla il codice"}
                      {/* da cambiare in base ai progetti che verranno messi */}
                    </p>
                    <FaLocationArrow className='ms-3' color='#CBACF9' /> {/* Icona della freccia */}
                  </div>
                </div>
              </a>
            </PinContainer>
          </div>
        ))}
      </div>
    </section>
  )
}

export default RecentProjects
