import Image from 'next/image'

export function Programa() {
  return (
    <section className='mt-8' id='programa'>
      <div>
        <h1 className='text-center py-8'>
          <span className='border-4 border-black py-2 px-4 text-3xl font-bold text-black'>
            Programa
          </span>
        </h1>
        <h3 className='text-center mt-3 mb-12 text-sm font-semibold text-gray-700'>
          Los aprendizajes esperados señalan de manera sintética conocimientos,
          habilidades, actitudes y valores que todos los alumnos deben alcanzar
          como resultado de las actividades realizadas durante los tres años de
          educación preescolar.
        </h3>
        <article className='grid grid-cols-1 grid-rows-6 md:grid-cols-2 md:grid-rows-2 gap-10'>
          <div className='bg-zinc-50 shadow-2xl'>
            <div className='items-center flex'>
              <div className='mt-4'>
                <Image
                  src='/icons/kinder1.svg'
                  width='200'
                  height='200'
                  alt='kinder1'
                />
              </div>
              <div className='justify-center flex-col'>
                <h2 className='text-center justify-center items-center pb-2 text-xl font-semibold'>
                  Kinder 1
                </h2>
                <p className='text-center text-xs font-semibold text-gray-700'>
                  Adquirirán confianza, seguridad, percepción de si mismos al
                  integrarse en un ambiente socializador desarrollando
                  habilidades de conversación e intercambio de ideas.
                </p>
              </div>
            </div>
          </div>
          <div className='bg-zinc-50 shadow-2xl'>
            <div className='items-center flex'>
              <div className='mt-4'>
                <Image
                  src='/icons/kinder2.svg'
                  width='200'
                  height='200'
                  alt='kinder1'
                />
              </div>
              <div className='justify-center flex-col'>
                <h2 className='text-center justify-center items-center pb-2 text-xl font-semibold'>
                  Kinder 2
                </h2>
                <p className='text-center text-xs font-semibold text-gray-700'>
                  Practica hábitos de prelectura, registra, socializa,
                  clasifica, inventa y resuelve problemas matemáticos. Observa y
                  cuida el medio ambiente y el entorno que lo rodea.
                </p>
              </div>
            </div>
          </div>
          <div className='bg-zinc-50 shadow-2xl'>
            <div className='items-center flex'>
              <div className='mt-4'>
                <Image
                  src='/icons/kinder3.svg'
                  width='200'
                  height='200'
                  alt='kinder3'
                />
              </div>
              <div className='justify-center flex-col'>
                <h2 className='text-center justify-center items-center pb-2 text-xl font-semibold'>
                  Kinder 3
                </h2>
                <p className='text-center text-xs font-semibold text-gray-700'>
                  Resuelven problemas matemáticos y adquieren la capacidad
                  lectora para comprender diversos textos. Entienden la
                  importancia del respeto y la empatía hacia los demás.
                </p>
              </div>
            </div>
          </div>
          <div className='bg-zinc-50 shadow-2xl'>
            <div className='items-center flex'>
              <div className='mt-4'>
                <Image
                  src='/icons/ingles.svg'
                  width='200'
                  height='200'
                  alt='ingles'
                />
              </div>
              <div className='justify-center flex-col'>
                <h2 className='text-center justify-center items-center pb-2 text-xl font-semibold'>
                  Inglés
                </h2>
                <p className='text-center text-xs font-semibold text-gray-700'>
                  El propósito de esta clase es que los estudiantes se
                  sensibilicen y familiaricen con una lengua distinta a la
                  materna. Sus conocimientos adquiridos permiten destacar en el
                  tradicional Spelling Bee
                </p>
              </div>
            </div>
          </div>
          <div className='bg-zinc-50 shadow-2xl'>
            <div className='items-center flex'>
              <div className='mt-4'>
                <Image
                  src='/icons/computer.svg'
                  width='200'
                  height='200'
                  alt='computacion'
                />
              </div>
              <div className='justify-center flex-col'>
                <h2 className='text-center justify-center items-center pb-2 text-xl font-semibold'>
                  Computación
                </h2>
                <p className='text-center text-xs font-semibold text-gray-700'>
                  Los estudiantes aprenderán conceptos básicos de una hoja de
                  cálculo, procesador de textos e inserción de imágenes, para
                  que vean a la computadora como una herramienta para procesar
                  información.
                </p>
              </div>
            </div>
          </div>
          <div className='bg-zinc-50 shadow-2xl'>
            <div className='items-center flex'>
              <div className='mt-4'>
                <Image
                  src='/icons/educacionF.svg'
                  width='200'
                  height='200'
                  alt='educacion fisica'
                />
              </div>
              <div className='justify-center flex-col'>
                <h2 className='text-center justify-center items-center pb-2 text-xl font-semibold'>
                  Educación Fisica
                </h2>
                <p className='text-center text-xs font-semibold text-gray-500 md:pl-10'>
                  La Educación Física es una forma de intervención pedagógica
                  que contribuye a la formación integral de niñas, niños y
                  adolescentes al desarrollar su motricidad e integrar su
                  corporeidad.
                </p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
