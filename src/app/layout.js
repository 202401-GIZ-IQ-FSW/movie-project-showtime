import './globals.css'

export const metadata = {
  title: 'ShowTime',
  description: 'Your favorite streaming app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
