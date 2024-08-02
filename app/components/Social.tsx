import { socials } from '@/lib/constants'
import Link from 'next/link'

const Social = ({
    containerStyles,
    iconStyles
}: {
    containerStyles?: string;
    iconStyles?: string;
}) => {
    return (
        <div className={containerStyles}>
            {socials.map((social, index) => (
                <Link
                    key={index}
                    href={social.href}
                    className={iconStyles}
                >
                    {social.icon}
                </Link>
            ))}
        </div>
    )
}
export default Social
