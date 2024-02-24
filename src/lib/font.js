import { Poppins } from "next/font/google"
import localFont from "next/font/local"

export const fontPopins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700', '800', '900'],
    variable: '--font-poppins'
})

export const fontTheBoldFont = localFont({
    src: "../../public/font/theboldfont.woff2",
    variable: '--font-theboldfont',
    display: "swap"
})