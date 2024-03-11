import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";
import { fontPopins, fontTheBoldFont } from "@/lib/font";
import { NextAuthProvider } from "@/components/auth/providers/nextAuthProvider";
import { siteConfig } from "@/constants/siteConfig";

const url = 'https://algo-arena-nine.vercel.app/'
const title = siteConfig.title
const description = siteConfig.description
const icons = siteConfig.icons
export const metadata = {
  metadataBase: new URL(url),
  title: {
    default: title,
    template: `%s | ${title}`,
  },
  description: description,
  icons: icons,
  openGraph: {
    title: title,
    description: description,
    url: url,
    siteName: title,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: title
      }
    ],
    locale: 'en',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: title,
    description: description,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: title
      }
    ],
    creator: '@msckiit',
    creatorId: '1226001395263791104'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-popins antialiased",
          fontPopins.variable,
          fontTheBoldFont.variable
        )}
      >
        <NextAuthProvider>{children}</NextAuthProvider>
        <Toaster position="bottom-center" richColors />
      </body>
    </html>
  );
}
