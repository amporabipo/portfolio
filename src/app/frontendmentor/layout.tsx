import { Barlow } from 'next/font/google'
const barlow = Barlow({ subsets: ['latin'], weight: ['100','200', '300','400','500'] })

export default function FrontendChallenge({
  children, 
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={barlow.className}>
        {children}
      </body>
    </html>
  )
}