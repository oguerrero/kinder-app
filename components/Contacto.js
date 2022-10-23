import { ContactoInfo } from './pure/ContactoInfo'
import { FormContacto } from './pure/FormContacto'

export function Contacto() {
  return (
    <section
      className='max-w-sm m-auto my-8 lg:max-w-3xl scroll-m-20'
      id='contacto'>
      <h1 className='pt-4 pb-8 text-center'>
        <span className='px-4 py-2 text-3xl font-bold text-black border-4 border-black'>
          Contacto
        </span>
      </h1>
      <article className='flex flex-col gap-8 lg:flex-row'>
        <ContactoInfo />
        <FormContacto />
      </article>
    </section>
  )
}
