const { fontFamily } = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ["./pages/**/*.tsx", "./layouts/**/*.tsx", "./components/**/*.tsx", "./lib/**/*.tsx"],
  darkMode: 'class',
  theme: {
    screens: {
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
      zIndex: {
        '-10': '-10',
      },
      fontSize: {
        xl: '1.375rem',
        '2xl': '1.5625rem',
        '3xl': '1.875rem',
        '4xl': '2.5rem',
        '5xl': '3.125rem',
        '6xl': '3.75rem',
        '7xl': '4.375rem',
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
        135: '135deg',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'mirage': {
          'DEFAULT': '#111827',
          '50': '#f3f3f4', 
          '100': '#e7e8e9', 
          '200': '#c4c5c9', 
          '300': '#a0a3a9', 
          '400': '#585d68', 
          '500': '#111827', 
          '600': '#0f1623', 
          '700': '#0d121d', 
          '800': '#0a0e17', 
          '900': '#080c13'
        },
        'medium-purple': {
          DEFAULT: '#9059D4',
          '50': '#F2EBFA',
          '100': '#E7DBF6',
          '200': '#D1BAED',
          '300': '#BB9AE5',
          '400': '#A679DC',
          '500': '#9059D4',
          '600': '#7332C3',
          '700': '#592796',
          '800': '#3E1B69',
          '900': '#24103D'
        },
        'masala': {
          '50': '#f5f5f5', 
          '100': '#ececec', 
          '200': '#cecece', 
          '300': '#b1b1b1', 
          '400': '#777777', 
          '500': '#3c3c3c', 
          '600': '#363636', 
          '700': '#2d2d2d', 
          '800': '#242424', 
          '900': '#1d1d1d',
        },
        'yellow-green': {
          '50': '#fcfdf7', 
          '100': '#fafcf0', 
          '200': '#f2f7d9', 
          '300': '#eaf2c2', 
          '400': '#dae894', 
          '500': '#cade66', 
          '600': '#b6c85c', 
          '700': '#98a74d', 
          '800': '#79853d', 
          '900': '#636d32',
        },
        'neutral': {
          '50': '#fefdfc', 
          '100': '#fdfcfa', 
          '200': '#fbf7f2', 
          '300': '#f8f3ea', 
          '400': '#f3e9db', 
          '500': '#eee0cb', 
          '600': '#d6cab7', 
          '700': '#b3a898', 
          '800': '#8f867a', 
          '900': '#756e63',
        },
        'goldenrod': {
          '50': '#fefdf7', 
          '100': '#fefbef', 
          '200': '#fcf4d7', 
          '300': '#fbedbf', 
          '400': '#f7e08e', 
          '500': '#f4d35e', 
          '600': '#dcbe55', 
          '700': '#b79e47', 
          '800': '#927f38', 
          '900': '#78672e',
        },
        'mandy': {
          '50': '#fff7f8', 
          '100': '#fef0f1', 
          '200': '#fdd8dd', 
          '300': '#fbc1c8', 
          '400': '#f8939f', 
          '500': '#f56476', 
          '600': '#dd5a6a', 
          '700': '#b84b59', 
          '800': '#933c47', 
          '900': '#78313a',
        },
        'orange': {
          '50': '#fff7f2', 
          '100': '#feefe6', 
          '200': '#fdd7bf', 
          '300': '#fcbf99', 
          '400': '#fa8e4d', 
          '500': '#f85e00', 
          '600': '#df5500', 
          '700': '#ba4700', 
          '800': '#953800', 
          '900': '#7a2e00',
        },
        'blue': {
          '50': '#f5f4fd', 
          '100': '#ebe8fa', 
          '200': '#cec6f3', 
          '300': '#b0a4ec', 
          '400': '#745fdd', 
          '500': '#391bcf', 
          '600': '#3318ba', 
          '700': '#2b149b', 
          '800': '#22107c', 
          '900': '#1c0d65',
        },
        'malibu': {
          '50': '#f7fcff', 
          '100': '#eefafe', 
          '200': '#d5f2fe', 
          '300': '#bbeafd', 
          '400': '#89dbfb', 
          '500': '#56cbf9', 
          '600': '#4db7e0', 
          '700': '#4198bb', 
          '800': '#347a95', 
          '900': '#2a637a',
        },
        'cucumber': {
          '50': '#f9fbf7', 
          '100': '#f4f6ee', 
          '200': '#e3ead5', 
          '300': '#d3ddbb', 
          '400': '#b1c388', 
          '500': '#90a955', 
          '600': '#82984d', 
          '700': '#6c7f40', 
          '800': '#566533', 
          '900': '#47532a',
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
              color: theme("colors.indigo.600"),
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
    require('@tailwindcss/line-clamp') ],
}
