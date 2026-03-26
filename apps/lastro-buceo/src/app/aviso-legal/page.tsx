import type { Metadata } from 'next'
import { appConfig } from '../content'

export const metadata: Metadata = {
  title: 'Aviso Legal',
  description: 'Aviso legal de Calculadora Lastrado Buceo conforme a la Ley 34/2002 de Servicios de la Sociedad de la Información (LSSI).',
  robots: { index: false, follow: false },
}

export default function AvisoLegalPage() {
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
          <h1>Aviso Legal</h1>
          <p className="text-gray-500 text-sm">En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSI-CE).</p>

          <h2>1. Datos identificativos</h2>
          <p>
            El presente sitio web <strong>Calculadora Lastrado Buceo</strong> es un servicio digital
            de información y herramientas de cálculo para la práctica del buceo deportivo, dirigido
            principalmente a usuarios en España y habla hispana.
          </p>

          <h2>2. Objeto y ámbito de aplicación</h2>
          <p>
            Las presentes condiciones regulan el acceso y uso del sitio web, incluyendo los contenidos
            gratuitos (artículos del blog) y los servicios de pago (acceso a la calculadora profesional).
          </p>

          <h2>3. Propiedad intelectual</h2>
          <p>
            Todos los contenidos de este sitio web —incluyendo textos, gráficos, logotipos, código
            fuente y herramientas de cálculo— son propiedad del titular del sitio o de sus licenciantes,
            y están protegidos por las leyes de propiedad intelectual e industrial.
          </p>
          <p>
            Queda expresamente prohibida la reproducción total o parcial de los contenidos sin
            autorización expresa y por escrito del titular.
          </p>

          <h2>4. Condiciones de uso del servicio</h2>
          <p>
            El acceso a la calculadora profesional requiere el abono de una tarifa única de <strong>4,99€</strong>,
            que otorga acceso de por vida a la herramienta. El pago se realiza a través de PayPal
            y no se establecen suscripciones periódicas.
          </p>
          <p>
            Los cálculos proporcionados por la herramienta son <strong>orientativos</strong> y no
            sustituyen la supervisión de un instructor de buceo certificado. El usuario asume la
            responsabilidad del uso que haga de los resultados.
          </p>

          <h2>5. Exclusión de responsabilidad</h2>
          <p>
            El titular del sitio web no se responsabiliza de los daños o perjuicios derivados del
            uso de las calculadoras, especialmente en actividades de buceo que conllevan riesgos
            inherentes. Consulte siempre con un instructor certificado PADI, SSI o FEDAS.
          </p>

          <h2>6. Publicidad</h2>
          <p>
            Este sitio web puede mostrar publicidad a través de <strong>Google AdSense</strong>.
            La publicidad aparece únicamente en las páginas de contenido gratuito (blog) y no en
            las herramientas de pago. El titular del sitio no es responsable del contenido de
            los anuncios de terceros.
          </p>

          <h2>7. Legislación aplicable y jurisdicción</h2>
          <p>
            Las presentes condiciones se rigen por la legislación española. Para cualquier controversia
            derivada del uso de este sitio web, las partes se someten a los juzgados y tribunales
            españoles, con renuncia expresa a cualquier otro fuero.
          </p>
        </article>

        <div className="mt-6 text-center">
          <a href="/" className="text-sm text-gray-500 hover:text-gray-700">← Volver al inicio</a>
        </div>
      </main>
    </div>
  )
}
