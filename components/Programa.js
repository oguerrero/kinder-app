import { CardPrograma } from './pure/CardPrograma'

export function Programa() {
  const cards = [
    {
      src: '/icons/kinder1.svg',
      title: 'Kinder 1',
      description:
        'Adquirirán confianza, seguridad, percepción de si mismos al integrarse en un ambiente socializador desarrollando habilidades de conversación e intercambio de ideas.'
    },
    {
      src: '/icons/kinder2.svg',
      title: 'Kinder 2',
      description:
        'Practica hábitos de prelectura, registra, socializa, clasifica, inventa y resuelve problemas matemáticos. Observa y cuida el medio ambiente y el entorno que lo rodea.'
    },
    {
      src: '/icons/kinder3.svg',
      title: 'Kinder 3',
      description:
        'Resuelven problemas matemáticos y adquieren la capacidad lectora para comprender diversos textos. Entienden la importancia del respeto y la empatía hacia los demás.'
    },
    {
      src: '/icons/ingles.svg',
      title: 'Inglés',
      description:
        'El propósito de esta clase es que los estudiantes se sensibilicen y familiaricen con una lengua distinta a la materna. Sus conocimientos adquiridos permiten destacar en el tradicional Spelling Bee'
    },
    {
      src: '/icons/computer.svg',
      title: 'Computación',
      description:
        'Los estudiantes aprenderán conceptos básicos de una hoja de cálculo, procesador de textos e inserción de imágenes, para que vean a la computadora como una herramienta para procesar información.'
    },
    {
      src: '/icons/educacionF.svg',
      title: 'Educación Fisica',
      description:
        'La Educación Física es una forma de intervención pedagógica que contribuye a la formación integral de niñas, niños y adolescentes al desarrollar su motricidad e integrar su corporeidad.'
    }
  ]

  return (
    <section className='mt-8 scroll-m-20' id='programa'>
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
          {cards.map((card) => {
            return (
              <CardPrograma
                key={card.title}
                src={card.src}
                title={card.title}
                description={card.description}
              />
            )
          })}
        </article>
      </div>
    </section>
  )
}
