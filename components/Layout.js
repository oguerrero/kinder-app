import Image from 'next/image'
import { Contacto } from './Contacto'
import { Footer } from './Footer'
import { Galeria } from './Galeria'
import { Header } from './Header'

export function Layout({ children }) {
  return (
    <>
      <Header />
      <div id='home'>
        <Image
          src='/images/aviso.jpg'
          width='2500'
          height='1440'
          layout='responsive'
          alt='aviso clases ciclo 2022-2023'
        />
        {/* <Image
          src='/images/slider1.webp'  
          width='2500'
          height='1440'
          alt='Instalaciones idoneas para el desarrollo de los pequeños'
          layout='responsive'
        />
        <h1 className='hidden md:flex absolute text-5xl truncate bg-black bg-opacity-30 py-6 px-8 rounded-full text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          Ternura y Educación desde 1989
        </h1>
        <h1 className='md:hidden absolute text-xl truncate bg-black bg-opacity-30 py-6 px-8 rounded-full text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-44'>
          Ternura y Educación desde 1989
        </h1> */}
      </div>
      <main className='max-w-sm lg:max-w-3xl m-auto'>{children}</main>
      <Galeria />
      <Contacto />
      <Footer />
    </>
  )
}
