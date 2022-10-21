import Image from 'next/image'

export function Nosotros() {
  return (
    <section className='mt-8' id='nosotros'>
      <div>
        <h1 className='text-center pb-3'>
          <span className='border-4 border-black py-2 px-4 text-3xl font-bold text-black'>
            Nosotros
          </span>
        </h1>
        <h3 className='text-center py-8 text-sm font-bold text-gray-700'>
          Ternura y Educación desde 1989
        </h3>
        <article className='grid grid-cols-2 grid-rows-4 md:grid-cols-4 md:grid-rows-2 gap-8'>
          <div className='bg-zinc-50 rounded-xl shadow-xl py-2 px-1'>
            <div className='text-center flex flex-col justify-center items-center'>
              <Image width='75' height='75' src='/icons/us.svg' alt='nosotros' />
              <h2 className='text-center'>Quiénes somos</h2>
              <p className='text-center text-xs font-semibold text-gray-500'>
                Somos una institución que implementa la mejora continua para
                asegurar su calidad educativa.
              </p>
            </div>
          </div>
          <div className='bg-zinc-50 rounded-xl shadow-xl py-2 px-1'>
            <div className='text-center flex flex-col justify-center items-center'>
              <Image
                width='75'
                height='75'
                src='/icons/heart.svg'
                alt='mision'
              />
              <h2 className='card-title text-center'>Misión</h2>
              <p className='text-center text-xs font-semibold text-gray-500'>
                Desarrollar el Intelecto e Inteligencia de nuestros alumnos(as)
                para que a través de su vida logren tomar las mejores
                decisiones.
              </p>
            </div>
          </div>
          <div className='bg-zinc-50 rounded-xl shadow-xl py-2 px-1'>
            <div className='text-center flex flex-col justify-center items-center'>
              <Image
                width='75'
                height='75'
                src='/icons/vision.svg'
                alt='vision'
              />
              <h2 className='card-title text-center'>Visión</h2>
              <p className='text-center text-xs md:font-semibold text-gray-500'>
                Formar niños reflexivos, creativos y autónomos, comprometidos
                con sí mismos, con sus ideales y con la familia.
              </p>
            </div>
          </div>
          <div className='bg-zinc-50 rounded-xl shadow-xl py-2 px-1'>
            <div className='text-center flex flex-col justify-center items-center'>
              <Image
                width='75'
                height='75'
                src='/icons/school.svg'
                alt='instalaciones'
              />
              <h2 className='card-title text-center'>Instalaciones</h2>
              <p className='text-center text-xs font-semibold text-gray-500'>
                Instalaciones impecables y adaptadas para un jardín de niños
                seguro.
              </p>
            </div>
          </div>
          <div className='bg-zinc-50 rounded-xl shadow-xl py-2 px-1'>
            <div className='text-center flex flex-col justify-center items-center'>
              <Image
                width='75'
                height='75'
                src='/icons/personal.svg'
                alt='personal'
              />
              <h2 className='card-title text-center'>Personal</h2>
              <p className='text-center text-xs font-semibold text-gray-500'>
                Profesoras y Licenciadas en Educación Preescolar comprometidas y
                cariñosas
              </p>
            </div>
          </div>
          <div className='bg-zinc-50 rounded-xl shadow-xl py-2 px-1'>
            <div className='text-center flex flex-col justify-center items-center'>
              <Image
                width='75'
                height='75'
                src='/icons/book.svg'
                alt='sistema'
              />
              <h2 className='card-title text-center'>Sistema de Enseñanza</h2>
              <p className='text-center text-xs font-semibold text-gray-500'>
                Los grupos de trabajo son reducidos proporcionando una atención
                personalizada y apoyo psicopedagógico.
              </p>
            </div>
          </div>
          <div className='bg-zinc-50 rounded-xl shadow-xl py-2 px-1'>
            <div className='text-center flex flex-col justify-center items-center'>
              <Image
                width='75'
                height='75'
                src='/icons/academic.svg'
                alt='niveles'
              />
              <h2 className='card-title text-center'>Niveles Educativos</h2>
              <p className='text-center text-xs font-semibold text-gray-500'>
                Impartimos los tres grados de educación preescolar y estamos
                incorporados a la Secretaria de Educación Pública
              </p>
            </div>
          </div>
          <div className='bg-zinc-50 rounded-xl shadow-xl py-2 px-1'>
            <div className='text-center flex flex-col justify-center items-center'>
              <Image
                width='75'
                height='75'
                src='/icons/service.svg'
                alt='servicio'
              />
              <h2 className='card-title text-center'>Servicio</h2>
              <p className='text-center text-xs font-semibold text-gray-500'>
                Contamos con redes sociales para estar en contacto con nuestra comunidad y dar avisos importantes.
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
