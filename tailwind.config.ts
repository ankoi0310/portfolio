import type { Config } from 'tailwindcss'
import { default as flattenColorPalette } from 'tailwindcss/lib/util/flattenColorPalette'

const config = {
    darkMode: ['class'],
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}'
    ],
    prefix: '',
    theme: {
        container: {
            center: true,
            padding: '16px'
        },
        screens: {
            xs: '375px',
            sm: '640px',
            md: '768px',
            lg: '960px',
            xl: '1280px'
        },
        fontFamily: {
            primary: 'var(--font-jetbrains-mono)'
        },
        extend: {
            colors: {
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))'
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))'
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))'
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))'
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))'
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))'
                },
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))'
                }
            },
            dropShadow: {
                accent: '0 0 0.5rem hsl(var(--accent))'
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' }
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' }
                },
                scroll: {
                    to: {
                        transform: 'translate(calc(-50% - 0.5rem))'
                    }
                },
                aurora: {
                    from: {
                        backgroundPosition: '50% 50%, 50% 50%'
                    },
                    to: {
                        backgroundPosition: '350% 50%, 350% 50%'
                    }
                },
                spotlight: {
                    '0%': {
                        opacity: '0',
                        transform: 'translate(-72%, -62%) scale(0.5)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translate(-50%, -40%) scale(1)'
                    }
                }
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
                scroll:
                    'scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite',
                aurora: 'aurora 60s linear infinite',
                spotlight: 'spotlight 2s ease .75s 1 forwards'
            }
        }
    },
    plugins: [require('tailwindcss-animate'), addVariablesForColors]
} satisfies Config

function addVariablesForColors({ addBase, theme }: any) {
    let allColors = flattenColorPalette(theme('colors'))
    let newVars = Object.fromEntries(
        Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
    )

    addBase({
        ':root': newVars
    })
}

export default config
