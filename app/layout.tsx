import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AgroAlerta Honduras — Sistema de Gestión y Monitoreo Agrícola',
  description:
    'Plataforma web con dashboard interactivo que consolida alertas climáticas locales, mapas de riesgo de plagas comunitarias y datos de suelo simplificados para proteger los cultivos de los pequeños agricultores de Honduras.',
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className="antialiased m-0 p-0 overflow-hidden">
        {children}
      </body>
    </html>
  )
}
