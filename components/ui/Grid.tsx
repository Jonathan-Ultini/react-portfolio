import React from 'react'
import { BentoGrid, BentoGridItem } from './BentoGrid'
import { gridItems } from '@/data'

// Componente che crea la sezione con la griglia
const Grid = () => {
  return (
    <section id='about'>
      {/* Griglia principale con padding */}
      <BentoGrid className="w-full py-20">
        {/* Mappa gli elementi della griglia */}
        {gridItems.map(({ id, title, description, className, img, imgClassName, titleClassName, spareImg }) => (
          <BentoGridItem
            id={id}
            key={id}
            title={title}
            description={description}
            className={className}
            img={img}
            imgClassName={imgClassName}
            titleClassName={titleClassName}
            spareImg={spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  )
}

export default Grid
