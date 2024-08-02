import { usePathname } from 'next/navigation'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { HambergerMenu } from 'iconsax-react'
import Link from 'next/link'
import { navItems } from '@/lib/constants'
import { cn } from '@/lib/utils'
import { useState } from 'react'

const MobileNav = () => {
    const [open, setOpen] = useState(false)
    const pathname = usePathname()

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger className='flex justify-center items-center'>
                <HambergerMenu className='text-accent' />
            </SheetTrigger>
            <SheetContent className='flex flex-col'>
                <div className='mt-32 mb-40 text-center text-2xl'>
                    <Link href='/'>
                        <h1 className='text-4xl font-semibold'>
                            Code <span className='text-accent'>With</span> Koi
                        </h1>
                    </Link>
                </div>

                <nav className='flex flex-col justify-center items-center gap-8'>
                    {navItems.map((item, index) => (
                        <Link
                            href={item.href}
                            key={index}
                            onClick={() => setOpen(false)}
                            className={cn(
                                'text-xl capitalize font-semibold hover:text-accent transition-colors duration-300',
                                item.href === pathname && 'text-accent border-b-2 border-accent'
                            )}
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>
            </SheetContent>
        </Sheet>
    )
}
export default MobileNav
