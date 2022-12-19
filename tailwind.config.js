const { fontFamily } = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ["./pages/**/*.tsx", "./layouts/**/*.tsx", "./components/**/*.tsx", "./lib/**/*.tsx"],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '320px',
      md: '640px',
      lg: '1024px',
      xl: '1500px',
    },
    extend: {
      backgroundSize: {
        'vert-dotted': '1px 8px',
        'dotted': '8px 1px',
      },
      backgroundColor: {
        primary: 'var(--color-bg-primary)',
        secondary: 'var(--color-bg-secondary)',
        tertiary: 'var(--color-bg-tertiary)',
        orange: 'var(--color-orange-primary)',
      },
      textColor: {
        primary: 'var(--color-text-primary)',
        secondary: 'var(--color-text-secondary)',
        orange: 'var(--color-orange-primary)',
      },
      borderColor: {
        primary: 'var(--color-border-primary)',
      },
      order: {
        initial: 'initial',
      },
      zIndex: {
        '-10': '-10',
      },
      gridTemplateRows: {
        'max-content': 'max-content',
      },
      spacing: {
        '5vw': '5vw',
        '8vw': '8vw',
        '10vw': '10vw',
      },
      maxWidth: {
        '8xl': '96rem',
      },
      maxHeight: {
        '50vh': '50vh',
        '75vh': '75vh',
      },
      rotate: {
        '-135': '-135deg',
        '135': '135deg',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'slate': {  
          DEFAULT: '#64748B',  
          '50': '#CCD2DA',  
          '100': '#C0C8D2',  
          '200': '#A9B3C1',  
          '300': '#919EB0',  
          '400': '#79899F',  
          '500': '#64748B',  
          '600': '#4D596A',  
          '700': '#353E4A',  
          '800': '#1E2229',  
          '900': '#060708'
        },
        'gray': {  
          DEFAULT: '#6B7080',  
          '50': '#CDCFD5',  
          '100': '#C2C4CC',  
          '200': '#ACAFBA',  
          '300': '#969AA7',  
          '400': '#7F8494',  
          '500': '#6B7080',  
          '600': '#515561',  
          '700': '#383B43',  
          '800': '#1E2024',  
          '900': '#050506'
        },
        'zinc': {  
          DEFAULT: '#3C3C3C',  
          '50': '#D5D5D5',  
          '100': '#CBCBCB',  
          '200': '#B6B6B6',  
          '300': '#A2A2A2',  
          '400': '#8E8E8E',  
          '500': '#797979',  
          '600': '#656565',  
          '700': '#505050',  
          '800': '#3C3C3C',  
          '900': '#202020'
        },
        'orange': {
          DEFAULT: '#FF8133',
          '50': '#FFF2EB',
          '100': '#FFE6D6',
          '200': '#FFCDAD',
          '300': '#FFB385',
          '400': '#FF9A5C',
          '500': '#FF8133',
          '600': '#FA6000',
          '700': '#C24A00',
          '800': '#8A3500',
          '900': '#521F00'
        },
        'yellow': {
          DEFAULT: '#F4D35E',
          '50': '#FFFFFF',
          '100': '#FEFDF7',
          '200': '#FCF2D1',
          '300': '#F9E8AA',
          '400': '#F7DD84',
          '500': '#F4D35E',
          '600': '#F0C529',
          '700': '#D3A80E',
          '800': '#9F7E0B',
          '900': '#6A5507'
        },
        'yellow-green': {
          DEFAULT: '#CADE66',
          '50': '#FEFFFD',
          '100': '#F9FBEC',
          '200': '#EDF4CB',
          '300': '#E1ECA9',
          '400': '#D6E588',
          '500': '#CADE66',
          '600': '#BAD438',
          '700': '#97AE26',
          '800': '#6F801C',
          '900': '#475212'
        },
        'rose': {
          DEFAULT: '#F88C99',
          '50': '#FFFFFF',
          '100': '#FFFFFF',
          '200': '#FFFFFF',
          '300': '#FDD9DD',
          '400': '#FAB2BB',
          '500': '#F88C99',
          '600': '#F4576B',
          '700': '#F1233C',
          '800': '#CE0D25',
          '900': '#990A1C'
        },
        'green': {
          DEFAULT: '#90A955',
          '50': '#E0E7CF',
          '100': '#D7E0C1',
          '200': '#C5D2A6',
          '300': '#B3C58B',
          '400': '#A2B770',
          '500': '#90A955',
          '600': '#708442',
          '700': '#505E2F',
          '800': '#31391D',
          '900': '#11140A'
        },
        'sky': {
          DEFAULT: '#56CBF9',
          '50': '#FFFFFF',
          '100': '#F4FBFF',
          '200': '#CCEFFD',
          '300': '#A5E3FC',
          '400': '#7DD7FA',
          '500': '#56CBF9',
          '600': '#20BAF7',
          '700': '#089DD7',
          '800': '#0675A1',
          '900': '#044E6B'
        },
        'blue': {
          DEFAULT: '#391BCF',
          '50': '#F7F5FE',
          '100': '#E7E3FB',
          '200': '#C9BFF7',
          '300': '#AA9BF2',
          '400': '#8B77ED',
          '500': '#6C53E9',
          '600': '#4D2FE4',
          '700': '#391BCF',
          '800': '#2B159D',
          '900': '#1E0E6C'
        },
        'amber': {
          DEFAULT: '#EEE0CB',
          '50': '#FDFBF9',
          '100': '#F8F2EA',
          '200': '#EEE0CB',
          '300': '#E0C7A1',
          '400': '#D2AE76',
          '500': '#C5944C',
          '600': '#A37735',
          '700': '#795828',
          '800': '#4F391A',
          '900': '#241B0C'
        },
        'purple': {
          DEFAULT: '#A14EBF',
          '50': '#FFFFFF',
          '100': '#FFFFFF',
          '200': '#F1E4F5',
          '300': '#E1C6EA',
          '400': '#D1A8E0',
          '500': '#C18AD5',
          '600': '#B16CCA',
          '700': '#A14EBF',
          '800': '#82399C',
          '900': '#602A73'
        },
      },
      fontFamily: {
        sans: ['DM Sans', ...fontFamily.sans],
        serif: ["Prata", ...fontFamily.serif],
        mono: ["IBM Plex Mono", ...fontFamily.mono],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.gray.800"),
            a: {
              color: theme("colors.purple.600"),
            },
            code: {
              color: theme("colors.pink.500"),
              fontWeight: "normal",
            },
            "code::before": {
              content: '""',
            },
            "code::after": {
              content: '""',
            },
            "blockquote p:first-of-type::before": false,
            "blockquote p:last-of-type::after": false,
          },
        },
        dark: {
          css: {
            color: theme("colors.gray.300"),
            a: {
              color: theme("colors.indigo.400"),
            },
            blockquote: {
              borderLeftColor: theme("colors.gray.700"),
              color: theme("colors.gray.300"),
            },
            "h1,h2,h3,h4": {
              color: theme("colors.gray.100"),
            },
            hr: { borderColor: theme("colors.gray.700") },
            ol: {
              li: {
                "&:before": { color: theme("colors.gray.500") },
              },
            },
            ul: {
              li: {
                "&:before": { backgroundColor: theme("colors.gray.500") },
              },
            },
            strong: { color: theme("colors.gray.300") },
            thead: {
              color: theme("colors.gray.100"),
            },
            tbody: {
              tr: {
                borderBottomColor: theme("colors.gray.700"),
              },
            },
          },
        },
      })
    },
  },
  variants: {
    extend: {
      opacity: ['group-focus'],
    },
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    typography: ['dark'],
  },
  plugins: [
    plugin(function({ addVariant }) {
      addVariant('not-last', '&:not(:last-child)')
    }),
    require('@tailwindcss/typography'), 
    require('@tailwindcss/aspect-ratio'), 
    require('@tailwindcss/line-clamp') 
  ],
}
