import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import './globals.css'
import React from 'react'
import Header from '@/components/layouts/Header'
import PageTransition from '@/components/layouts/PageTransition'
import { cn } from '@/lib/utils'
import StairTransition from '@/components/layouts/StairTransition'

const jetBrainsMono = JetBrains_Mono({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
    variable: '--font-jetbrains-mono'
})

export const metadata: Metadata = {
    title: 'Portfolio | Huynh Van Huu An',
    description: 'My personal portfolio'
}

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en' className='dark'>
            <body className={cn(
                jetBrainsMono.variable,
                'bg-background'
            )}>
                <Header />
                <StairTransition />
                <PageTransition>
                    {children}
                </PageTransition>
            </body>
        </html>
    )
}
