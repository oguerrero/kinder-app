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
          src='/images/slider1.webp'
          width='2500'
          height='1440'
          alt='Instalaciones idoneas para el desarrollo de los pequeños'
          layout='responsive'
        />
      </div>
      <main className='max-w-sm lg:max-w-3xl m-auto'>{children}</main>
      <Galeria />
      <Contacto />
      <Footer />
    </>
  )
}
