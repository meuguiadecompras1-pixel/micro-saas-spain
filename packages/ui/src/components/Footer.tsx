import React from 'react'

interface FooterProps {
  title: string
  tagline: string
}

export function Footer({ title, tagline }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="font-semibold text-white text-lg">{title}</p>
        <p className="mt-2 text-sm">{tagline}</p>
        <p className="mt-6 text-xs">© {new Date().getFullYear()} {title}. Todos los derechos reservados.</p>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-4 text-xs">
          <a href="/sobre-nosotros" className="hover:text-white transition-colors">Sobre Nosotros</a>
          <a href="/contacto" className="hover:text-white transition-colors">Contacto</a>
          <a href="/privacidad" className="hover:text-white transition-colors">Privacidad</a>
          <a href="/cookies" className="hover:text-white transition-colors">Cookies</a>
          <a href="/aviso-legal" className="hover:text-white transition-colors">Aviso Legal</a>
        </div>
      </div>
    </footer>
  )
}
