import Link from 'next/link'
import { useState } from 'react'

export function Header() {
  const navigation = [
    { name: 'Evidencias de Aprendizaje', href: '#evidencias' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Programa', href: '#programa' },
    { name: 'Galería', href: '#galeria' }
  ]

  const [listVisibility, setListVisibility] = useState('hidden')

  const toggle = () => {
    listVisibility === 'hidden'
      ? setListVisibility('flex flex-col gap-4')
      : setListVisibility('hidden')
  }

  return (
    <header className='sticky top-0 z-20 transition-all duration-300 bg-white shadow-md'>
      <div className='flex flex-row gap-4 px-6 py-4 lg:hidden'>
        <div className='mt-2'>
          <span tabIndex='0' className='cursor-pointer' onClick={toggle}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-5 h-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </span>
          <ul
            tabIndex='0'
            className={`p-4 mt-3 absolute bg-white border border-zinc-200 transition-all shadow-md ease-in-out duration-1000 rounded-2xl ${listVisibility}`}>
            {navigation.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className='px-3 py-2 transition hover:bg-yellow-100 rounded-xl truncate max-w-md'>
                  {item.name}
                </a>
              </li>
            ))}
            <li>
              <Link href='/blog'>
                <a className='px-3 py-2 transition hover:bg-yellow-100 rounded-xl truncate max-w-md'>
                  Blog
                </a>
              </Link>
            </li>
          </ul>
        </div>

        <a className='text-2xl font-semibold' href='#home'>
          Kinder Bambi
        </a>
        <a
          className='px-3 py-1 mx-auto font-semibold text-white border-0 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500'
          href='#contacto'>
          Contacto
        </a>
      </div>
      <div className='flex-row items-center hidden gap-4 px-6 py-4 justify-evenly lg:flex '>
        <a
          className='px-3 py-2 text-xl font-semibold rounded-lg hover:bg-yellow-100'
          href='#home'>
          Jardin de niños Bambi
        </a>
        <ul className='flex gap-6 text-md'>
          {navigation.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className='px-3 py-2 transition hover:bg-yellow-100 rounded-xl'>
                {item.name}
              </a>
            </li>
          ))}
          <li>
            <Link href='/blog'>
              <a className='px-3 py-2 transition hover:bg-yellow-100 rounded-xl truncate max-w-md'>
                Blog
              </a>
            </Link>
          </li>
        </ul>
        <a
          className='px-3 py-1 font-semibold text-white border-0 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500'
          href='#contacto'>
          Contacto
        </a>
      </div>
    </header>
  )
}
