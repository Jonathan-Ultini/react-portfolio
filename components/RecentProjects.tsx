import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/3d-pin'
import { FaLocationArrow } from 'react-icons/fa'

const RecentProjects = () => {
  return (
    <section className='py-20' id='projects'>
      <h1 className='heading'>
        Una selezione di {''}
        <span className='text-purple'>progetti recenti</span>
      </h1>
      <div className='flex flex-wrap items-center justify-center p-4 gap-16 mt-10'>
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div key={id} className='sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]'>
            <PinContainer title={link} href={link}>
              <a href={link}>
                <div className='relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10'>
                  <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]'>
                    <img src="/bg.png" alt="bg-img" />
                  </div>
                  <img src={img} alt={title} className='z-10 absolute h-full w-full' />
                </div>

                <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>
                  {title}
                </h1>

                <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2'>
                  {des}
                </p>

                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {iconLists.map((icon, index) => (
                      <div key={icon} className='border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center' style={{ transform: `translateX(-${5 * index * 2}px)` }}>
                        <img src={icon} alt={icon} className='p-2' />
                      </div>
                    ))}
                  </div>

                  <div className='flex justify-center items-center'>
                    <p className='flex lg:text-xl md:text-xs text-sm text-purple'>
                      {id === 1 ? "controlla il codice" : "controlla il sito live"}
                    </p>
                    <FaLocationArrow className='ms-3' color='#CBACF9' />
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