import { Bai_Jamjuree as BaiJamjuree, Roboto_Flex as Roboto } from "next/font/google"
import "./globals.css"

const roboto = Roboto({ subsets: ["latin"], variable: "--font-roboto", preload: true })
const baiJamjuree = BaiJamjuree({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-bai-jamjuree"
})

export const metadata = {
  title: "NLW Spacetime",
  description: "Uma cápsula do tempo construída com React, Next.js, TailwindCSS e TypeScript"
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-br">
      <body className={`${roboto.variable} ${baiJamjuree.variable} bg-gray-900 font-sans text-gray-100`}>{children}</body>
    </html>
  )
}
