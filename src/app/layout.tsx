import { Copyright } from "@/components/Copyright"
import { Hero } from "@/components/Hero"
import { Profile } from "@/components/Profile"
import { SignIn } from "@/components/SignIn"
import { Bai_Jamjuree as BaiJamjuree, Roboto_Flex as Roboto } from "next/font/google"
import { cookies } from "next/headers"
import "./globals.css"

const roboto = Roboto({ subsets: ["latin"], variable: "--font-roboto" })
const baiJamjuree = BaiJamjuree({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-bai-jamjuree"
})

export const metadata = {
  title: "NLW Spacetime",
  description:
    "Uma cápsula do tempo construída com React, Next.js, TailwindCSS e TypeScript"
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  const isAuthenticated = cookies().has("token")
  return (
    <html lang="pt-br">
      <body
        className={`${roboto.variable} ${baiJamjuree.variable} bg-gray-900 font-sans text-gray-100`}
      >
        <main className="grid min-h-screen grid-cols-2 ">
          <div className="flex flex-col justify-between items-start overflow-hidden px-28 py-16 relative border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover">
            <div className="absolute right-0 top-1/2 h-[288px] w-[526px] bg-purple-700 opacity-50 -translate-y-1/2 translate-x-1/2 rounded-full blur-full" />
            <div className="absolute right-2 top-0 bottom-0 w-2 bg-stripes" />
            {isAuthenticated ? <Profile /> : <SignIn />}
            <Hero />
            <Copyright />
          </div>
          <div className="flex flex-col max-h-screen overflow-y-scroll bg-[url(../assets/bg-stars.svg)] bg-cover">
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
