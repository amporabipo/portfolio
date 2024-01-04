import { Outfit } from 'next/font/google'
const outfit = Outfit({ subsets: ['latin'], weight: ['100','200', '300','400','500', '700'] })

export default function ChallengsUno({
  children, 
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={outfit.className}>
        {children}
      </body>
    </html>
  )
}