import Image from "next/image";

export function ContactoInfo() {
  return (
    <div className='grid flex-grow-0 h-max'>
      <ul>
        <li className=''>
          <span>
            <Image width='35' height='35' src='/icons/phone.svg' alt='phone' />
            <a
              href='tel://52364449'
              className='text-lg font-semibold px-2 align-top'>
              Telefono: 52-36-44-49
            </a>
          </span>
        </li>
        <li className=''>
          <a href='https://www.google.com/maps/place/Jardin+de+Ni%C3%B1os+%22Bambi%22/@19.5059206,-99.2096572,15z/data=!4m2!3m1!1s0x0:0xda53c787db74872b?sa=X&ved=2ahUKEwjf4f663OTpAhVRnq0KHfXtCDYQ_BIwCnoECA8QCA'>
            <span className=''>
              <Image width='35' height='35' src='/icons/map.svg' alt='map' />
            </span>
            <p className='inline-block text-lg font-semibold px-2 align-top'>
              Ubicación
            </p>
          </a>
        </li>
        <li className=''>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2438.6134259179003!2d-99.20851387145132!3d19.504839186041618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d202bf2c7c82b7%3A0xda53c787db74872b!2sJardin%20de%20Ni%C3%B1os%20%22Bambi%22!5e0!3m2!1ses-419!2smx!4v1666382873248!5m2!1ses-419!2smx'
            width='400'
            height='300'
            className='border-0 my-4'
            allowFullScreen=''
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          />
        </li>
        <li className=''>
          <a href='kinderbambi2020@gmail.com'>
            <span>
              <Image width='35' height='35' src='/icons/mail.svg' alt='mail' />
            </span>
            <p className='inline-block text-lg font-semibold px-2 align-top'>
              kinderbambi2020@gmail.com
            </p>
          </a>
        </li>
      </ul>
    </div>
  )
}
