import Image from 'next/image'

export function CardPrograma({ src, title, description }) {
  return (
    <div className='bg-zinc-50 shadow-2xl border border-zinc-100'>
      <div className='items-center flex'>
        <div className='mt-4'>
          <Image src={src} width='200' height='200' alt={title} />
        </div>
        <div className='justify-center flex-col'>
          <h2 className='text-center justify-center items-center pb-2 text-xl font-semibold'>
            {title}
          </h2>
          <p className='text-center text-xs font-semibold text-gray-700'>
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}
