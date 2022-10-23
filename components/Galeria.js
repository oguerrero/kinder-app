import { ImagenGaleria } from './pure/ImagenGaleria'

export function Galeria() {
  const images = [
    { src: '/images/sombrero.webp', alt: 'galeria niño con sombrero' },
    { src: '/images/guardia.webp', alt: 'galeria niño guardia' },
    { src: '/images/pastorela.webp', alt: 'galeria pastorela' },
    { src: '/images/maestra.webp', alt: 'galeria maestra' },
    { src: '/images/tambores.webp', alt: 'galeria tambores' },
    { src: '/images/biblioteca.webp', alt: 'galeria biblioteca' },
    { src: '/images/pesebre.webp', alt: 'galeria pesebre' },
    { src: '/images/pelota.webp', alt: 'galeria pelota' },
    { src: '/images/baile.webp', alt: 'galeria baile' },
    { src: '/images/libro.webp', alt: 'galeria libro' },
    { src: '/images/material.webp', alt: 'galeria material' },
    { src: '/images/boliche.webp', alt: 'galeria boliche' },
    { src: '/images/equilibrio.webp', alt: 'galeria equilibrio' },
    { src: '/images/colchonetas.webp', alt: 'galeria colchonetas' },
    { src: '/images/reyes.webp', alt: 'galeria reyes magos niños' }
  ]

  return (
    <section className='overflow-hidden text-gray-700 scroll-m-20' id='galeria'>
      <div>
        <h1 className='pt-10 text-center pb-10 md:pb-0'>
          <span className='border-4 border-black py-2 px-4 text-3xl font-bold text-black'>
            Galería
          </span>
        </h1>
        <div className='container px-5 py-2 mx-auto lg:pt-12 lg:px-32'>
          <div className='flex flex-wrap -m-1 md:-m-2'>
            {images.map((image) => {
              return (
                <ImagenGaleria
                  key={image.alt}
                  src={image.src}
                  alt={image.alt}
                />
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
