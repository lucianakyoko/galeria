import Link from "next/link";
import { Plus } from "@phosphor-icons/react/dist/ssr";
import { Inter } from "next/font/google";

const interFont = Inter({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-poppins',
})

export function Navbar() {
  return (
    <nav className="flex justify-between py-6 md:py-7 xl:py-8">
      <Link href={'/'} className={`
        ${interFont.variable} antialiased
        text-[16px] font-bold text-[#161616] hover:text-black
        md:text-[18px]
      `}>
        gale.<span>ria</span>
      </Link>

      <Link href={'/upload'}>
        <div 
          className={`
            bg-[#1D5BC0] hover:bg-[#184EA4]
            p-2 rounded-[12px]
          `}
        >
          <Plus size={24} color="#FFF"/>
        </div>
      </Link>
    </nav>
  )
}