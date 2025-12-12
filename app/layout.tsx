import type React from "react"
import type { Metadata } from "next"
import "./globals.css"


export const metadata: Metadata = {
  title: "   الاتصالات والابتكار الرقمي في الكويت ",
  description: " - رائد الاتصالات والابتكار الرقمي في الكويت. جميع روابطنا في مكان واحد.",
  keywords: " اتصالات, انترنت, باقات, خدمة العملاء",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: " | ",
    description: "رائد الاتصالات والابتكار الرقمي في الكويت",
    type: "website",
    locale: "ar_KW",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body >
        {children}
      </body>
    </html>
  )
}
