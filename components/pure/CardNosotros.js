import Image from 'next/image'

export function CardNosotros({ title, src, description }) {
  return (
    <div className='bg-zinc-50 rounded-xl shadow-xl py-2 px-1 boder border-zinc-100'>
      <div className='text-center flex flex-col justify-center items-center'>
        <Image width='75' height='75' src={src} alt={title} />
        <h2 className='card-title text-center'>{title}</h2>
        <p className='text-center text-xs font-semibold text-gray-500'>
          {description}
        </p>
      </div>
    </div>
  )
}
