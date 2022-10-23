import Image from 'next/image'

export function ImagenGaleria({ src, alt }) {
  return (
    <div className='flex flex-wrap w-1/3'>
      <div className='w-full p-1 md:p-2'>
        <Image
          width='750'
          height='750'
          layout='responsive'
          alt={alt}
          className='block object-cover object-center rounded-lg'
          src={src}
        />
      </div>
    </div>
  )
}
