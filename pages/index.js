import Head from 'next/head'
import { Evidencias } from '../components/Evidencias'
import { Layout } from '../components/Layout'
import { Nosotros } from '../components/Nosotros'
import { Programa } from '../components/Programa'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jardín de niños Bambi</title>
        <meta
          name='description'
          content='El mejor jardín de niños/kinder ubicado en el rosario Azcapotzalco'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout>
        <Evidencias />
        <Nosotros />
        <Programa />
      </Layout>
    </div>
  )
}
