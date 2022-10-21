import Link from 'next/link'

export function Header() {
  const navigation = [
    { name: 'Evidencias de Aprendizaje', href: '#' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Programa', href: '#programa' },
    { name: 'Galería', href: '#galeria' },
    { name: 'Blog', href: '#blog' }
  ]

  return (
    <header className='sticky top-0 z-20 transition-all duration-300 bg-white shadow-md shadow-yellow-400'>
      <div className='flex flex-row gap-4 px-6 py-4 lg:hidden'>
        <div className='mt-2'>
          <span tabindex='0' className='cursor-pointer'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-5 h-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </span>
          <ul
            tabindex='0'
            className='hidden p-2 mt-3 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52'>
            {navigation.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className='font-medium text-gray-500 hover:text-gray-900'>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <a className='text-2xl font-semibold' href='#home'>
          Kinder Bambi
        </a>
      </div>
      <div className='flex-row justify-evenly gap-4 hidden px-6 py-4 lg:flex items-center '>
        <a
          className='text-xl font-semibold hover:bg-yellow-100 px-3 py-2 rounded-lg'
          href='#home'>
          Jardin de niños Bambi
        </a>
        <ul className='flex gap-6 text-md'>
        {navigation.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className='hover:bg-yellow-100 px-3 py-2 rounded-xl transition'>
                  {item.name}
                </a>
              </li>
            ))}
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
