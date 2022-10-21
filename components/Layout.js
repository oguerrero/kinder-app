import Image from 'next/image'
import { Footer } from './Footer'
import { Header } from './Header'

export function Layout({ children }) {
  return (
    <>
      <Header />
      <Image
        src='/images/slider1.webp'
        width='2500'
        height='1440'
        alt='Instalaciones idoneas para el desarrollo de los pequeños'
        layout='responsive'
      />
      <main className='max-w-sm lg:max-w-3xl m-auto'>{children}</main>
      <Footer />
    </>
  )
}
