/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  darkMode: ['selector', '[data-theme="dark"]', 'class'],
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
  prefix: '',
  safelist: [
    'lg:col-span-4',
    'lg:col-span-6',
    'lg:col-span-8',
    'lg:col-span-12',
    'border-border',
    'bg-card',
    'border-error',
    'bg-error/30',
    'border-success',
    'bg-success/30',
    'border-warning',
    'bg-warning/30',
  ],
  theme: {
  	container: {
  		center: true,
  		screens: {
  			'2xl': '86rem',
  			lg: '64rem',
  			md: '48rem',
  			sm: '40rem',
  			xl: '80rem'
  		}
  	},
  	extend: {
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			'slide-slow': 'slide 60s linear infinite',
  			'infinite-scroll': 'infinite-scroll 25s linear infinite alternate'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			background: 'hsl(var(--background))',
  			backgroundAlt: 'hsl(var(--background-alt))',
  			border: 'hsl(var(--border))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			foreground: 'hsl(var(--foreground))',
  			input: 'hsl(var(--input))',
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			ring: 'hsl(var(--ring))',
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			success: 'hsl(var(--success))',
  			error: 'hsl(var(--error))',
  			warning: 'hsl(var(--warning))',
  			lila: {
  				'50': 'var(--color-lila-50)',
  				'100': 'var(--color-lila-100)',
  				'200': 'var(--color-lila-200)',
  				'300': 'var(--color-lila-300)',
  				'400': 'var(--color-lila-400)',
  				'500': 'var(--color-lila-500)',
  				'600': 'var(--color-lila-600)',
  				'700': 'var(--color-lila-700)',
  				'800': 'var(--color-lila-800)',
  				'900': 'var(--color-lila-900)'
  			},
  			brutal: {
  				yellow: {
  					'50': 'var(--color-yellow-50)',
  					'100': 'var(--color-yellow-100)',
  					'200': 'var(--color-yellow-200)',
  					'300': 'var(--color-yellow-300)',
  					'400': 'var(--color-yellow-400)',
  					'500': 'var(--color-yellow-500)',
  					'600': 'var(--color-yellow-600)',
  					'700': 'var(--color-yellow-700)',
  					'800': 'var(--color-yellow-800)',
  					'900': 'var(--color-yellow-900)'
  				},
  				green: {
  					'50': 'var(--color-green-50)',
  					'100': 'var(--color-green-100)',
  					'200': 'var(--color-green-200)',
  					'300': 'var(--color-green-300)',
  					'400': 'var(--color-green-400)',
  					'500': 'var(--color-green-500)',
  					'600': 'var(--color-green-600)',
  					'700': 'var(--color-green-700)',
  					'800': 'var(--color-green-800)',
  					'900': 'var(--color-green-900)'
  				},
  				red: {
  					'50': 'var(--color-red-50)',
  					'100': 'var(--color-red-100)',
  					'200': 'var(--color-red-200)',
  					'300': 'var(--color-red-300)',
  					'400': 'var(--color-red-400)',
  					'500': 'var(--color-red-500)',
  					'600': 'var(--color-red-600)',
  					'700': 'var(--color-red-700)',
  					'800': 'var(--color-red-800)',
  					'900': 'var(--color-red-900)'
  				},
  				white: 'var(--color-brutal-white)'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		fontFamily: {
  			mono: [
  				'var(--font-geist-mono)'
  			],
  			sans: [
  				'var(--font-geist-sans)'
  			],
  			brutal: [
  				'bricolage-groteque'
  			]
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},
  			'infinite-scroll': {
  				from: {
  					transform: 'translateX(0)'
  				},
  				to: {
  					transform: 'translateX(-100%)'
  				}
  			}
  		},
  		shadow: {
  			DEFAULT: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
  			md: '0 0 20px 0 rgba(0, 0, 0, 0.1)',
  			lg: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
  			xl: '0 0 40px 0 rgba(0, 0, 0, 0.1)',
  			custom: '0px 5px black'
  		},
  		boxShadow: {
  			DEFAULT: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
  			md: '0 0 20px 0 rgba(0, 0, 0, 0.1)',
  			lg: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
  			xl: '0 0 40px 0 rgba(0, 0, 0, 0.1)',
  			custom: '0px 5px black'
  		},
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': 'var(--text)',
            '--tw-prose-headings': 'var(--text)',
            h1: {
              fontSize: '4rem',
              fontWeight: 'normal',
              marginBottom: '0.25em',
            },
          },
        },
      }),
  	}
  },
}
