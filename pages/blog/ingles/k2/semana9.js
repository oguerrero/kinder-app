import Image from 'next/image'
import { HeaderBlog } from '../../../../components/blog/HeaderBlog'

export default function Semana9() {
  return (
    <>
      <HeaderBlog />
      <div className='bg-slate-200 w-screen h-full'>
        <div className='py-8'>
          <main className='max-w-md lg:max-w-5xl m-auto'>
            <section className='bg-white px-8 py-4 rounded-3xl'>
              <Image
                alt=''
                width='500'
                height='200'
                layout='responsive'
                src='/blog/blog-ingles-semana9.jpg'
              />
              <h1 className='text-3xl font-bold text-orange-600 my-2'>
                Semana 9 (Del 24 al 28 de Octubre)
              </h1>
              <h2 className='text-3xl font-bold text-cyan-700 my-2'>
                DESCARGABLE: ACTIVIDADES DE LA SEMANA
              </h2>
              <div className='divide-y-4 divide-indigo-900'>
                <h2 className='text-2xl font-semibold text-red-600 my-2 '>
                  Ve los siguientes videos de la semana:
                </h2>
                <div className='mb-4'>
                  <p className='text-xl justify-center font-semibold text-center'>
                    Try to make some of the easy movements shown in the video.
                    The goal is to feel the rythm of the music and control your
                    body. Try it as many times as necessary… you can do it !!
                  </p>
                  <iframe
                    allowfullscreen=''
                    className='w-full aspect-video'
                    src='https://www.youtube.com/embed/6R0v0ovq1hs'
                    youtube-src-id='6R0v0ovq1hs'></iframe>
                </div>
                <div className=''></div>
              </div>
              <div className='flex gap-4 flex-col w-full mt-8 text-center'>
                <iframe
                  allowfullscreen=''
                  className='w-full aspect-video'
                  src='https://www.youtube.com/embed/wboCEkpPS34'
                  youtube-src-id='wboCEkpPS34'></iframe>
                <iframe
                  allowfullscreen=''
                  className='w-full aspect-video'
                  src='https://www.youtube.com/embed/hfMAGSF4TsU'
                  youtube-src-id='hfMAGSF4TsU'></iframe>

                <div className='divide-y-4 divide-indigo-900'>
                  <div></div>
                  <div></div>
                </div>

                <h2 className='text-3xl font-bold text-orange-600'>
                  Manualidad de la Semana
                </h2>
                <p>
                  INSTRUCCIONES:El video de MANUALIDADES que se muestra es para
                  seguir desarrollando las destrezas manuales de los
                  alumnos(as), para desarrollar su imaginación y desarrollar su
                  innovación. Se cambia cada mes para que ustedes elijan el día
                  y la hora para desarrollar la creatividad de su hijo(a) . Se
                  sugiere mandar una evidencia de ser posible al finalizar el
                  mes.
                </p>
                <iframe
                  allowfullscreen=''
                  className='w-full aspect-video'
                  src='https://www.youtube.com/embed/QhAWcuAzWTw'
                  youtube-src-id='QhAWcuAzWTw'></iframe>
                <iframe
                  allowfullscreen=''
                  className='w-full aspect-video'
                  src='https://www.youtube.com/embed/D5ZaiRrX9_A'
                  youtube-src-id='D5ZaiRrX9_A'></iframe>
                <div className='divide-y-4 divide-indigo-900'>
                  <div></div>
                  <div></div>
                </div>
                <h2 className='text-3xl font-bold text-orange-600'>
                  Actividades de la semana
                </h2>
                <h3 className='text-xl font-semibold'>Lunes 24 de Octubre</h3>
                <iframe
                  allowfullscreen=''
                  className='w-full aspect-video'
                  src='https://www.youtube.com/embed/vLaqMmDNh2c'
                  youtube-src-id='vLaqMmDNh2c'></iframe>

                <div className='divide-y-4 divide-indigo-900'>
                  <div></div>
                  <div></div>
                </div>
                <h3 className='text-xl font-semibold'>Martes 25 de Octubre</h3>
                <iframe
                  allowfullscreen=''
                  className='w-full aspect-video'
                  src='https://www.youtube.com/embed/pFojcAi02n8'
                  youtube-src-id='pFojcAi02n8'></iframe>

                <div className='divide-y-4 divide-indigo-900'>
                  <div></div>
                  <div></div>
                </div>
                <h3 className='text-xl font-semibold'>Miércoles 26 de Octubre</h3>
                <iframe
                  allowfullscreen=''
                  className='w-full aspect-video'
                  src='https://www.youtube.com/embed/YxF1vOrlAmk'
                  youtube-src-id='YxF1vOrlAmk'></iframe>
                <h3 className='text-xl font-semibold'>Jueves 27 de Octubre</h3>

                <div className='divide-y-4 divide-indigo-900'>
                  <div></div>
                  <div></div>
                </div>
                <iframe
                  allowFullScreen=''
                  className='w-full aspect-video'
                  src='https://www.youtube.com/embed/VIeFfd7eVCU'
                  youtube-src-id='VIeFfd7eVCU'></iframe>

                <div className='divide-y-4 divide-indigo-900'>
                  <div></div>
                  <div></div>
                </div>
                <h3 className='text-xl font-semibold'>Viernes 28 de Octubre</h3>
                <p>Suspensión de actividades por Junta de Consejo Técnico</p>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  )
}
