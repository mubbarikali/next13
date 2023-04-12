import './globals.css'

export const metadata = {
  title: 'Next 13 App',
  description: 'Latest Next App',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
