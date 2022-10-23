import { CardNosotros } from './pure/CardNosotros'

export function Nosotros() {
  const cards = [
    {
      title: 'Quiénes somos',
      src: '/icons/us.svg',
      description:
        'Somos una institución que implementa la mejora continua para asegurar su calidad educativa.'
    },
    {
      title: 'Misión',
      src: '/icons/heart.svg',
      description:
        'Desarrollar el Intelecto e Inteligencia de nuestros alumnos(as) para que a través de su vida logren tomar las mejores decisiones.'
    },
    {
      title: 'Visión',
      src: '/icons/vision.svg',
      description:
        'Formar niños reflexivos, creativos y autónomos, comprometidos con sí mismos, con sus ideales y con la familia.'
    },
    {
      title: 'Instalaciones',
      src: '/icons/school.svg',
      description:
        'Instalaciones impecables y adaptadas para un jardín de niños seguro.'
    },
    {
      title: 'Personal',
      src: '/icons/personal.svg',
      description:
        'Profesoras y Licenciadas en Educación Preescolar comprometidas y cariñosas'
    },
    {
      title: 'Sistema de Enseñanza',
      src: '/icons/book.svg',
      description:
        'Los grupos de trabajo son reducidos proporcionando una atención personalizada y apoyo psicopedagógico.'
    },
    {
      title: 'Niveles Educativos',
      src: '/icons/academic.svg',
      description:
        'Impartimos los tres grados de educación preescolar y estamos incorporados a la Secretaria de Educación Pública'
    },
    {
      title: 'Servicio',
      src: '/icons/service.svg',
      description:
        'Contamos con redes sociales para estar en contacto con nuestra comunidad y dar avisos importantes.'
    }
  ]

  return (
    <section className='mt-8 scroll-m-24' id='nosotros'>
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
          {cards.map((card) => {
            return (
              <CardNosotros
                key={card.title}
                title={card.title}
                src={card.src}
                description={card.description}
              />
            )
          })}
        </article>
      </div>
    </section>
  )
}
