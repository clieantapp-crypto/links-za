import type React from "react"
import type { Metadata } from "next"
import { Tajawal } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const tajawal = Tajawal({
  weight: ["400", "500", "700"],
  subsets: ["arabic"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "زين الكويت | Zain Kuwait - روابط حيوية",
  description: "زين الكويت - رائد الاتصالات والابتكار الرقمي في الكويت. جميع روابطنا في مكان واحد.",
  keywords: "زين الكويت, Zain Kuwait, اتصالات, انترنت, باقات, خدمة العملاء",
  generator: "v0.app",
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
    title: "زين الكويت | Zain Kuwait",
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
      <body className={`${tajawal.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
