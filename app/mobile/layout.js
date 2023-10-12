import MainBar from "../components/mobile/MainBar"

export const metadata = {
  title: 'Mobile',
  description: 'Aplicacion de Menu',
}

export default function MobileLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainBar />
          {children}
        </body>
    </html>
  )
}
