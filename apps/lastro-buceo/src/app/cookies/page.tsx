import type { Metadata } from 'next'
import { appConfig } from '../content'

export const metadata: Metadata = {
  title: 'Política de Cookies',
  description: 'Información sobre el uso de cookies en Calculadora Lastrado Buceo, incluyendo cookies de Google AdSense y Analytics.',
  robots: { index: false, follow: false },
}

export default function CookiesPage() {
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
          <h1>Política de Cookies</h1>
          <p className="text-gray-500 text-sm">Última actualización: marzo 2026</p>

          <p>
            En cumplimiento con el artículo 22.2 de la Ley 34/2002 de Servicios de la Sociedad de la
            Información (LSSI) y el RGPD, le informamos sobre el uso de cookies en este sitio web.
          </p>

          <h2>¿Qué son las cookies?</h2>
          <p>
            Las cookies son pequeños archivos de texto que los sitios web almacenan en su dispositivo.
            Permiten que el sitio recuerde información sobre su visita para mejorar la experiencia
            de navegación.
          </p>

          <h2>Cookies que utilizamos</h2>
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="border border-gray-300 bg-gray-50 p-2 text-left">Cookie</th>
                <th className="border border-gray-300 bg-gray-50 p-2 text-left">Tipo</th>
                <th className="border border-gray-300 bg-gray-50 p-2 text-left">Finalidad</th>
                <th className="border border-gray-300 bg-gray-50 p-2 text-left">Duración</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2">cookie_consent</td>
                <td className="border border-gray-300 p-2">Propia / Necesaria</td>
                <td className="border border-gray-300 p-2">Recordar su elección sobre cookies</td>
                <td className="border border-gray-300 p-2">1 año</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">_ga, _gid</td>
                <td className="border border-gray-300 p-2">Terceros / Analítica</td>
                <td className="border border-gray-300 p-2">Google Analytics — estadísticas de uso</td>
                <td className="border border-gray-300 p-2">2 años / 24h</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">DART, IDE</td>
                <td className="border border-gray-300 p-2">Terceros / Publicidad</td>
                <td className="border border-gray-300 p-2">Google AdSense — anuncios personalizados</td>
                <td className="border border-gray-300 p-2">2 años</td>
              </tr>
            </tbody>
          </table>

          <h2>Cómo gestionar las cookies</h2>
          <p>Puede aceptar o rechazar las cookies no esenciales a través del banner que aparece en su primera visita. También puede configurar su navegador para:</p>
          <ul>
            <li><strong>Chrome:</strong> Configuración → Privacidad y seguridad → Cookies</li>
            <li><strong>Firefox:</strong> Opciones → Privacidad y seguridad</li>
            <li><strong>Safari:</strong> Preferencias → Privacidad</li>
          </ul>
          <p>
            Tenga en cuenta que deshabilitar todas las cookies puede afectar al funcionamiento del sitio.
          </p>

          <h2>Publicidad de Google AdSense</h2>
          <p>
            Google AdSense utiliza la cookie DART para mostrar anuncios basados en sus intereses.
            Puede desactivar la publicidad personalizada visitando{' '}
            <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">
              Configuración de anuncios de Google
            </a>{' '}
            o en{' '}
            <a href="https://www.youronlinechoices.com/es/" target="_blank" rel="noopener noreferrer">
              Your Online Choices
            </a>.
          </p>
        </article>

        <div className="mt-6 text-center">
          <a href="/" className="text-sm text-gray-500 hover:text-gray-700">← Volver al inicio</a>
        </div>
      </main>
    </div>
  )
}
