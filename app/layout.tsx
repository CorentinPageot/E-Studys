import type { Metadata } from "next";
import "./globals.css";
import localFont from '@next/font/local';

const openDys = localFont({
  src: [
    {
      path: '../public/fonts/OpenDyslexic-Regular.otf',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../public/fonts/OpenDyslexic-Italic.otf',
      weight: '400',
      style: 'italic'
    },
    {
      path: '../public/fonts/OpenDyslexic-Bold.otf',
      weight: '700',
      style: 'normal'
    },
    {
      path: '../public/fonts/OpenDyslexic-BoldItalic.otf',
      weight: '700',
      style: 'italic'
    }
  ],
  variable: '--font-dyslexic'
})

export const metadata: Metadata = {
    title: "E-Studys",
    description: "Une éducation adaptée à tous les dys.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="h-full">
            <body className={`${openDys.variable} font-sans h-full`}>
                {children}
            </body>
        </html>
    );
}