import './globals.css'

export const metadata = {
  title: 'I-Menu UI',
  description: 'Aplicacion de Menu',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
