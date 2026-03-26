import type { Metadata } from 'next'
import { appConfig } from '../content'

export const metadata: Metadata = {
  title: 'Política de Privacidad',
  description: 'Política de privacidad de Calculadora Lastrado Buceo. Información sobre el tratamiento de datos personales conforme al RGPD.',
  robots: { index: false, follow: false },
}

export default function PrivacidadPage() {
  const { title, accentColor, emoji } = appConfig
  return (
    <div className="min-h-screen bg-gray-50">
      <nav style={{ backgroundColor: accentColor }} className="text-white py-4 shadow-lg">
        <div className="max-w-4xl mx-auto px-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 font-extrabold text-xl">
            <span className="text-2xl">{emoji}</span>
            <span>{title}</span>
          </a>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-4 py-12">
        <article className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 prose prose-gray max-w-none">
          <h1>Política de Privacidad</h1>
          <p className="text-gray-500 text-sm">Última actualización: marzo 2026</p>

          <h2>1. Responsable del tratamiento</h2>
          <p>
            En cumplimiento del Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 de Protección
            de Datos Personales (LOPDGDD), le informamos que el responsable del tratamiento de sus datos
            personales es el titular del sitio web <strong>Calculadora Lastrado Buceo</strong>.
          </p>

          <h2>2. Datos que recopilamos</h2>
          <p>Este sitio web puede recopilar los siguientes datos:</p>
          <ul>
            <li><strong>Datos de navegación:</strong> dirección IP, tipo de navegador, páginas visitadas, tiempo de permanencia. Recopilados automáticamente con fines estadísticos.</li>
            <li><strong>Datos de pago:</strong> en el proceso de compra, el pago se gestiona íntegramente a través de <strong>PayPal</strong>. No almacenamos datos de tarjetas bancarias.</li>
            <li><strong>Cookies:</strong> utilizamos cookies propias y de terceros (Google AdSense, Google Analytics) tal como se describe en nuestra Política de Cookies.</li>
          </ul>

          <h2>3. Finalidad y base jurídica del tratamiento</h2>
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="border border-gray-300 bg-gray-50 p-2 text-left">Finalidad</th>
                <th className="border border-gray-300 bg-gray-50 p-2 text-left">Base jurídica</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2">Gestionar el acceso a la calculadora</td>
                <td className="border border-gray-300 p-2">Ejecución de contrato (art. 6.1.b RGPD)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Análisis de tráfico web (Google Analytics)</td>
                <td className="border border-gray-300 p-2">Consentimiento (art. 6.1.a RGPD)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Publicidad personalizada (Google AdSense)</td>
                <td className="border border-gray-300 p-2">Consentimiento (art. 6.1.a RGPD)</td>
              </tr>
            </tbody>
          </table>

          <h2>4. Google AdSense y publicidad</h2>
          <p>
            Este sitio web utiliza <strong>Google AdSense</strong>, un servicio de publicidad de Google LLC.
            Google AdSense utiliza cookies para mostrar anuncios basados en las visitas anteriores del
            usuario a este u otros sitios web. Puede desactivar la publicidad personalizada en{' '}
            <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">
              Configuración de anuncios de Google
            </a>.
          </p>
          <p>
            Google, como proveedor externo, utiliza cookies para publicar anuncios. El uso de la cookie
            DART por parte de Google le permite publicar anuncios a los usuarios en función de su visita
            a este sitio y otros sitios de Internet.
          </p>

          <h2>5. Derechos del usuario</h2>
          <p>Puede ejercer los siguientes derechos enviando un email a través de nuestra{' '}
            <a href="/contacto">página de contacto</a>:
          </p>
          <ul>
            <li>Derecho de acceso a sus datos personales</li>
            <li>Derecho de rectificación de datos inexactos</li>
            <li>Derecho de supresión ("derecho al olvido")</li>
            <li>Derecho de limitación del tratamiento</li>
            <li>Derecho de portabilidad</li>
            <li>Derecho de oposición</li>
          </ul>
          <p>
            También tiene derecho a presentar una reclamación ante la{' '}
            <strong>Agencia Española de Protección de Datos (AEPD)</strong> en{' '}
            <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">www.aepd.es</a>.
          </p>

          <h2>6. Conservación de datos</h2>
          <p>
            Los datos de acceso a la calculadora se conservan mientras la cuenta esté activa o durante
            el tiempo necesario para cumplir obligaciones legales. Los datos de navegación se conservan
            por un máximo de 26 meses (política de Google Analytics).
          </p>

          <h2>7. Transferencias internacionales</h2>
          <p>
            Google LLC está certificada bajo el EU-US Data Privacy Framework, por lo que las
            transferencias a EE.UU. se realizan con las garantías adecuadas conforme al RGPD.
          </p>
        </article>

        <div className="mt-6 text-center">
          <a href="/" className="text-sm text-gray-500 hover:text-gray-700">← Volver al inicio</a>
        </div>
      </main>
    </div>
  )
}
