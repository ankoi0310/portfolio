'use client'

import Link from 'next/link'
import Nav from '@/components/layouts/Nav'
import { HireMeButton } from '@/components/shared'
import MobileNav from '@/components/layouts/MobileNav'

const Header = () => {
    return (
        <header className='py-8 md:py-12 text-white'>
            <div className='container mx-auto flex justify-between items-center'>
                {/* logo */}
                <Link href='/'>
                    <h1 className='text-2xl md:text-3xl lg:text-4xl font-semibold'>
                        Code <span className='text-accent'>With</span> Koi
                    </h1>
                </Link>

                {/* desktop nav and hire me button */}
                <div className='hidden lg:flex items-center gap-8'>
                    <Nav />
                    <Link href={'/contact'}>
                        <HireMeButton />
                    </Link>
                </div>

                {/* mobile nav */}
                <div className='lg:hidden'>
                    <MobileNav />
                </div>
            </div>
        </header>
    )
}
export default Header
