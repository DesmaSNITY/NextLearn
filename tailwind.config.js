/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: '#F8FAFC', // Clean white-blue
  			foreground: '#1E293B', // Cool dark gray
  			card: {
  				DEFAULT: '#FFFFFF', // Pure white
  				foreground: '#334155' // Medium gray
  			},
  			popover: {
  				DEFAULT: '#FFFFFF', // Pure white
  				foreground: '#334155' // Medium gray
  			},
  			primary: {
  				DEFAULT: '#3B82F6', // Bright blue
  				foreground: '#FFFFFF'
  			},
  			secondary: {
  				DEFAULT: '#E0E7FF', // Light blue
  				foreground: '#3730A3'
  			},
  			muted: {
  				DEFAULT: '#F1F5F9', // Very light gray
  				foreground: '#64748B' // Cool gray
  			},
  			accent: {
  				DEFAULT: '#06B6D4', // Cyan accent
  				foreground: '#FFFFFF'
  			},
  			destructive: {
  				DEFAULT: '#EF4444', // Bright red
  				foreground: '#FFFFFF'
  			},
  			border: '#E2E8F0', // Light border
  			input: '#F1F5F9', // Light input bg
  			ring: '#3B82F6', // Blue ring
  			chart: {
  				'1': '#3B82F6', // Blue
  				'2': '#06B6D4', // Cyan
  				'3': '#8B5CF6', // Purple
  				'4': '#F59E0B', // Amber
  				'5': '#10B981'  // Emerald
  			},
  			// Playful cool color palette
  			cool: {
  				// Blues
  				'sky-50': '#F0F9FF',
  				'sky-100': '#E0F2FE',
  				'sky-200': '#BAE6FD',
  				'sky-300': '#7DD3FC',
  				'sky-400': '#38BDF8',
  				'sky-500': '#0EA5E9',
  				'sky-600': '#0284C7',
  				
  				// Cyans
  				'cyan-50': '#ECFEFF',
  				'cyan-100': '#CFFAFE',
  				'cyan-200': '#A5F3FC',
  				'cyan-300': '#67E8F9',
  				'cyan-400': '#22D3EE',
  				'cyan-500': '#06B6D4',
  				'cyan-600': '#0891B2',
  				
  				// Purples
  				'purple-50': '#FAF5FF',
  				'purple-100': '#F3E8FF',
  				'purple-200': '#E9D5FF',
  				'purple-300': '#D8B4FE',
  				'purple-400': '#C084FC',
  				'purple-500': '#A855F7',
  				'purple-600': '#9333EA',
  				
  				// Greens
  				'mint-50': '#F0FDF4',
  				'mint-100': '#DCFCE7',
  				'mint-200': '#BBF7D0',
  				'mint-300': '#86EFAC',
  				'mint-400': '#4ADE80',
  				'mint-500': '#22C55E',
  				'mint-600': '#16A34A',
  				
  				// Playful accents
  				'coral': '#FF6B6B',
  				'coral-light': '#FFE0E0',
  				'peach': '#FFB347',
  				'peach-light': '#FFF0E6',
  				'lavender': '#B19CD9',
  				'lavender-light': '#F0EBFF',
  				'mint': '#98FB98',
  				'mint-light': '#F0FFF0',
  				
  				// Neutrals
  				'gray-50': '#F8FAFC',
  				'gray-100': '#F1F5F9',
  				'gray-200': '#E2E8F0',
  				'gray-300': '#CBD5E1',
  				'gray-400': '#94A3B8',
  				'gray-500': '#64748B',
  				'gray-600': '#475569'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)',
  			'xl': '1rem',
  			'2xl': '1.5rem',
  			'3xl': '2rem'
  		},
  		// Light playful gradients
  		backgroundImage: {
  			'cool-gradient': 'linear-gradient(135deg, #3B82F6, #06B6D4)',
  			'sky-gradient': 'linear-gradient(135deg, #E0F2FE, #BAE6FD)',
  			'purple-gradient': 'linear-gradient(135deg, #F3E8FF, #E9D5FF)',
  			'mint-gradient': 'linear-gradient(135deg, #DCFCE7, #BBF7D0)',
  			'playful-gradient': 'linear-gradient(135deg, #3B82F6, #A855F7, #06B6D4)',
  			'soft-gradient': 'linear-gradient(135deg, #F0F9FF, #FAF5FF, #ECFEFF)',
  			'coral-gradient': 'linear-gradient(135deg, #FFE0E0, #FFF0E6)',
  			'cool-radial': 'radial-gradient(circle, rgba(59,130,246,0.1) 0%, rgba(6,182,212,0.05) 100%)',
  			'bubble-pattern': 'radial-gradient(circle at 20% 50%, rgba(59,130,246,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(168,85,247,0.1) 0%, transparent 50%), radial-gradient(circle at 40% 80%, rgba(6,182,212,0.1) 0%, transparent 50%)'
  		},
  		// Playful animations
  		animation: {
  			'bounce-gentle': 'bounce-gentle 2s infinite',
  			'float': 'float 3s ease-in-out infinite',
  			'wiggle': 'wiggle 1s ease-in-out infinite',
  			'pulse-soft': 'pulse-soft 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
  			'slide-up': 'slide-up 0.5s ease-out',
  			'fade-in': 'fade-in 0.6s ease-out',
  			'scale-in': 'scale-in 0.3s ease-out',
  			'shimmer': 'shimmer 2s linear infinite'
  		},
  		keyframes: {
  			'bounce-gentle': {
  				'0%, 100%': {
  					transform: 'translateY(0)',
  					animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)'
  				},
  				'50%': {
  					transform: 'translateY(-5px)',
  					animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'
  				}
  			},
  			'float': {
  				'0%, 100%': { transform: 'translateY(0px)' },
  				'50%': { transform: 'translateY(-10px)' }
  			},
  			'wiggle': {
  				'0%, 100%': { transform: 'rotate(-3deg)' },
  				'50%': { transform: 'rotate(3deg)' }
  			},
  			'pulse-soft': {
  				'0%, 100%': {
  					opacity: '1',
  					transform: 'scale(1)'
  				},
  				'50%': {
  					opacity: '0.9',
  					transform: 'scale(1.03)'
  				}
  			},
  			'slide-up': {
  				'from': {
  					opacity: '0',
  					transform: 'translateY(20px)'
  				},
  				'to': {
  					opacity: '1',
  					transform: 'translateY(0)'
  				}
  			},
  			'fade-in': {
  				'from': { opacity: '0' },
  				'to': { opacity: '1' }
  			},
  			'scale-in': {
  				'from': {
  					opacity: '0',
  					transform: 'scale(0.9)'
  				},
  				'to': {
  					opacity: '1',
  					transform: 'scale(1)'
  				}
  			},
  			'shimmer': {
  				'from': {
  					backgroundPosition: '-200px 0'
  				},
  				'to': {
  					backgroundPosition: 'calc(200px + 100%) 0'
  				}
  			}
  		},
  		// Additional playful styling
  		boxShadow: {
  			'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
  			'playful': '0 4px 20px -2px rgba(59, 130, 246, 0.15)',
  			'cool': '0 4px 20px -2px rgba(6, 182, 212, 0.15)',
  			'purple': '0 4px 20px -2px rgba(168, 85, 247, 0.15)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};