import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { LanguageProvider } from "@/components/language-provider"
import { icons } from "lucide-react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Game'Lusive Education - Erasmus+ Project",
  description: "Teaching children through the power of educational games",
  generator: 'Kocatürk Danışmanlık',
  icons: {
    icon: "/opacNoLetters.png",
    apple: "/opacNoLetters.png",
    shortcut: "/opacNoLetters.png",
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
