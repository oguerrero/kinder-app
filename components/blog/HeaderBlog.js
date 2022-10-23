import Link from 'next/link'
import { useState } from 'react'

export function HeaderBlog() {
  const navigation = [
    { name: 'Kinder 1', href: '#evidencias' },
    { name: 'Kinder 2', href: '#nosotros' },
    { name: 'Kinder 3', href: '#programa' }
  ]

  const [listVisibility, setListVisibility] = useState('hidden')

  const toggle = () => {
    listVisibility === 'hidden'
      ? setListVisibility('flex flex-col gap-4')
      : setListVisibility('hidden')
  }

  return (
    <header className='sticky top-0 z-20 transition-all duration-300 bg-white shadow-md shadow-yellow-400'>
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
          </ul>
        </div>

        <a className='text-2xl font-semibold' href='#home'>
          Kinder Bambi
        </a>
        <h1 className='font-semibold text-2xl'>Ingles - Semana 9</h1>
      </div>
      <div className='flex-row items-center hidden gap-4 px-6 py-4 justify-evenly lg:flex '>
        <a
          className='px-3 py-2 text-xl font-semibold rounded-lg hover:bg-yellow-100'
          href='#home'>
          Jardin de niños Bambi
        </a>
        <h1 className='font-semibold text-xl'>Ingles - Semana 9</h1>
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
        </ul>
      </div>
    </header>
  )
}
