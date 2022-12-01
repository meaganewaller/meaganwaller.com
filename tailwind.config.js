const colors = require('tailwindcss/colors');
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.tsx"
  ],
  darkMode: "class",
  important: true,
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', ...defaultTheme.fontFamily.sans],
        mono: ['IBM Plex Mono', ...defaultTheme.fontFamily.mono],
        serif: ['Prata', ...defaultTheme.fontFamily.serif],
        headings: ['Prata'],
        fancy: ['Prata']
      },
      colors: {
        "onyx": "#3C3C3C",
        "champagne": "#EEE0CB",
        "orange-yellow": "#F4D35E",
        "fiery-rose": "#F56476",
        "tangerine": "#FAA089",
        "bright-orange": "#F85E00",
        "medium-blue": "#391BCF",
        "sky-blue": "#56CBF9",
        "asparagus": "#90A955",
        "june-bud": "#CADE66",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.onyx.700'),
            a: {
              color: theme('colors.onyx.900'),
              '&:hover': {},
              textDecorationColor: theme('colors.teal.500'),
              textUnderlineOffset: '3px',
              textDecorationStyle: 'decoration-solid',
              code: { color: theme('colors.blue.400') },
            },
            blockquote: {
              borderLeftColor: theme('colors.june-bud.500'),
              backgroundColor: theme('colors.champagne.50'),
              color: theme('colors.onyx.700'),
            },
            'h1,h2,h3,h4': {
              color: theme('colors.onyx.900')
            },
            hr: { borderColor: theme('colors.gray.700')},
            strong: { color: theme('colors.gray.700')},
             thead: {
              color: theme('colors.gray.100'),
              borderBottomColor: theme('colors.gray.600')
            },
            tbody: {
              tr: {
                borderBottomColor: theme('colors.gray.700')
              }
            },
            hr: {
              color: theme('colors.gray.200'),
              '&before': { content: '∿∿∿' }
            },
            code: { color: theme('colors.indigo.500') },
            'blockquote p:first-of-type::before': false,
            'blockquote p:last-of-type::after': false,
            pre: {
              backgroundColor: theme('colors.gray.100')
            }
          }
        },
        dark: {
          css: {
            color: theme('colors.slate.300'),
            a: {
              color: theme('colors.slate.50'),
              '&:hover': {
                color: theme('colors.teal.500')
              },
              textDecorationColor: theme('colors.teal.400'),
              textUnderlineOffset: '3px',
              textDecorationStyle: 'decoration-solid',
              code: { color: theme('colors.blue.400') }
            },
            blockquote: {
              borderLeftColor: theme('colors.teal.500'),
              backgroundColor: theme('colors.slate.800'),
              color: theme('colors.gray.400')
            },
            'h1,h2,h3,h4': {
              color: theme('colors.white')
            },
            hr: { borderColor: theme('colors.gray.600') },
            strong: { color: theme('colors.gray.100') },
            thead: {
              color: theme('colors.gray.100'),
              borderBottomColor: theme('colors.gray.600')
            },
            tbody: {
              tr: {
                borderBottomColor: theme('colors.gray.700')
              }
            },
            code: { color: theme('colors.indigo.200') },
            pre: {
              backgroundColor: theme('colors.onyx')
            }
          }
        }
      })
    }
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')]
};
