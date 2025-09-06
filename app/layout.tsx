import type React from "react"
import type { Metadata } from "next"
import { Jost } from "next/font/google"
import { JetBrains_Mono } from "next/font/google"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { Header } from "@/components/header"
import "./globals.css"

const jost = Jost({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jost",
  weight: ["300", "400", "500", "600", "700"],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
})

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Cosnux Limited - Software & IT Solutions",
  description:
    "Transform your business with innovative software solutions and comprehensive IT services from Cosnux Limited.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${jost.variable} ${jetbrainsMono.variable} ${inter.variable}`}>
      <head>
        <style>{`
html {
  font-family: ${jost.style.fontFamily};
  --font-sans: ${jost.style.fontFamily};
  --font-mono: ${jetbrainsMono.style.fontFamily};
  --font-inter: ${inter.style.fontFamily};
}
        `}</style>
      </head>
      <body className="font-sans antialiased">
        <Header />
        <main>
          <Suspense fallback={null}>{children}</Suspense>
        </main>
        <Analytics />
      </body>
    </html>
  )
}
