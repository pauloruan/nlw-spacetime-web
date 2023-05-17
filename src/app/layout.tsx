import { Bai_Jamjuree as BaiJamjuree, Roboto_Flex as Roboto } from "next/font/google"
import "./globals.css"

const roboto = Roboto({ subsets: ["latin"], variable: "--font-roboto" })
const baiJamjuree = BaiJamjuree({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-bai-jamjuree",
  preload: true
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
      <body className={`${roboto.variable} ${baiJamjuree.variable}`}>{children}</body>
    </html>
  )
}
