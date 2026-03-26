import type { Metadata } from 'next'
import { appConfig } from '../content'

export const metadata: Metadata = {
  title: 'Sobre Nosotros',
  description: 'Somos buceadores apasionados que creamos la herramienta de cálculo de lastrado más precisa para buceo en España.',
}

export default function SobreNosotrosPage() {
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
          <div className="text-center mb-8">
            <div className="text-7xl mb-4">{emoji}</div>
            <h1 className="text-3xl font-extrabold">Sobre Nosotros</h1>
            <p className="text-gray-500">La historia detrás de la calculadora</p>
          </div>

          <h2>¿Quiénes somos?</h2>
          <p>
            Somos un equipo de buceadores entusiastas con más de una década de experiencia buceando
            en las aguas del Mediterráneo español: desde las Islas Medes en la Costa Brava hasta
            las reservas marinas de Tabarca y Cabo de Palos en Murcia.
          </p>
          <p>
            Durante años usamos fórmulas en hojas de papel, reglas de pulgar heredadas de instructores
            y, a menudo, prueba y error en el agua para ajustar nuestro lastrado. Sabíamos que había
            una forma más precisa de hacerlo, así que la construimos.
          </p>

          <h2>Por qué creamos esta calculadora</h2>
          <p>
            El lastrado incorrecto es uno de los problemas más comunes entre buceadores recreativos en
            España, según los datos de la Federación Española de Actividades Subacuáticas (FEDAS).
            El sobre-lastrado genera fatiga, mayor consumo de aire y — lo más grave — daños en los
            fondos marinos protegidos.
          </p>
          <p>
            Nuestra calculadora tiene en cuenta todas las variables que los buceadores reales necesitan:
            tipo de traje, grosor del neoprene, tipo de agua (Mediterráneo vs Atlántico vs agua dulce),
            cilindro (acero vs aluminio) y peso corporal. No es una fórmula genérica: está calibrada
            para las condiciones reales de buceo en España.
          </p>

          <h2>Nuestro compromiso</h2>
          <ul>
            <li>Contenido técnico <strong>gratuito y de calidad</strong> en el blog</li>
            <li>Herramienta de cálculo profesional a un <strong>precio justo y único (4,99€)</strong></li>
            <li>Sin suscripciones, sin trucos, sin letra pequeña</li>
            <li>Actualización de la calculadora con nuevas variables sin coste adicional</li>
          </ul>

          <h2>Descargo de responsabilidad</h2>
          <p>
            Las calculadoras de lastrado son herramientas de orientación. El ajuste final siempre debe
            realizarse en el agua con supervisión de un instructor certificado, especialmente para
            buceadores en formación. El buceo es una actividad de riesgo — bucear siempre con
            formación adecuada y compañero.
          </p>

          <div
            style={{ borderColor: accentColor }}
            className="mt-8 p-6 border-2 rounded-xl text-center"
          >
            <p className="font-bold text-gray-900 mb-3">
              ¿Tienes preguntas o sugerencias para mejorar la calculadora?
            </p>
            <a
              href="/contacto"
              style={{ backgroundColor: accentColor }}
              className="inline-block text-white font-bold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity"
            >
              Contáctanos
            </a>
          </div>
        </article>

        <div className="mt-6 text-center">
          <a href="/" className="text-sm text-gray-500 hover:text-gray-700">← Volver al inicio</a>
        </div>
      </main>
    </div>
  )
}
