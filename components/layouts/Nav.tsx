'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { navItems } from '@/lib/constants'

const Nav = () => {
    const pathname = usePathname()

    return (
        <nav className='flex gap-8'>
            {navItems.map((item, index) => (
                <Link
                    href={item.href}
                    key={index}
                    className={cn(
                        'capitalize font-semibold hover:text-accent transition-colors duration-300',
                        item.href === pathname && 'text-accent border-b-2 border-accent'
                    )}
                >
                    {item.label}
                </Link>
            ))}
        </nav>
    )
}
export default Nav
