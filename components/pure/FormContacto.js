import { useRef } from 'react'

export function FormContacto() {
  let error = false
  let enviado = false

  const name = useRef('')
  const email = useRef('')
  const subject = useRef('')
  const message = useRef('')
  const honeypot = useRef('')

  const send = async (e) => {
    e.preventDefault()
    const contact = {
      name: name.current.value,
      email: email.current.value,
      subject: subject.current.value,
      honeypot: honeypot.current.value, // if any value received in this field, form submission will be ignored.
      message: message.current.value,
      accessKey: '05ec710e-3538-41e4-a6fc-3c9f68ab5675' // get your access key from https://www.staticforms.xyz
    }
    try {
      const res = await fetch('https://api.staticforms.xyz/submit', {
        method: 'POST',
        body: JSON.stringify(contact),
        headers: { 'Content-Type': 'application/json' }
      })

      const json = await res.json()

      if (json.success) {
        enviado = true
        name.current.value = ''
        email.current.value = ''
        subject.current.value = ''
        message.current.value = ''
        honeypot.current.value = ''
        setInterval(() => {
          enviado = false
        }, 5000)
      } else {
        error = true
        setInterval(() => {
          error = false
        }, 5000)
      }
    } catch (e) {
      error = true
      setInterval(() => {
        error = false
      }, 5000)
    }
  }
  return (
    <>
      <form
        action='https://api.staticforms.xyz/submit'
        method='post'
        className='flex flex-col gap-3 w-full'
        onSubmit={(e) => send(e)}>
        <input
          type='text'
          id='name'
          name='name'
          placeholder='Nombre'
          className='px-6 py-1 italic border border-zinc-300 rounded-xl'
          ref={name}
        />
        <input
          type='email'
          id='email'
          placeholder='email'
          name='email'
          className='px-6 py-1 italic border border-zinc-300 rounded-xl'
          ref={email}
        />
        <input
          type='text'
          id='subject'
          name='subject'
          className='px-6 py-1 italic border border-zinc-300 rounded-xl'
          placeholder='Asunto'
          ref={subject}
        />
        <input
          type='text'
          id='honey'
          name='honeypot'
          className='hidden'
          ref={honeypot}
        />
        <textarea
          id='message'
          name='message'
          rows='6'
          placeholder='Mensaje'
          ref={message}
          className='px-6 py-1 italic border resize-none border-zinc-300 rounded-xl'
        />
        <input
          type='submit'
          className='px-3 py-1 font-semibold text-white border-0 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 cursor-pointer'
          value='Enviar'
        />
      </form>
      {/* TODO: TOASTER OF SEND / ERROR */}
      {/* <div className='toast'>
        <div className='alert alert-info'>
          <div>
            <span>Mensaje enviado.</span>
          </div>
        </div>
      </div>
      <div className='toast'>
        <div className='alert alert-error'>
          <div>
            <span>Ups, parece que hubo un error.</span>
          </div>
        </div>
      </div> */}
    </>
  )
}
