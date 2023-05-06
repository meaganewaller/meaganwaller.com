const colors = require('tailwindcss/colors');
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./layouts/**/*.{tsx,ts}",
    "./lib/**/*.{tsx,ts}"
  ],
  darkMode: 'class',
  important: true,
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      inherit: "inherit",
      white: colors.white,
      black: colors.black,
      'carnation-pink': {
        '50': '#fef1f5',
        '100': '#fee5ed',
        '200': '#feccdd',
        '300': '#ffadc7',
        '400': '#fe6894',
        '500': '#f83c6e',
        '600': '#e81a47',
        '700': '#ca0c30',
        '800': '#a70d28',
        '900': '#8b1025',
        '950': '#550210',
      },
      'peach-orange': {
        '50': '#fff5ed',
        '100': '#ffe8d5',
        '200': '#ffc499',
        '300': '#ffaa72',
        '400': '#fd7c3a',
        '500': '#fc5813',
        '600': '#ed3d09',
        '700': '#c42b0a',
        '800': '#9c2310',
        '900': '#7d2011',
        '950': '#440d06',
      },
      'buttermilk': {
        '50': '#fefbe8',
        '100': '#fff5ad',
        '200': '#ffed88',
        '300': '#ffdb44',
        '400': '#fec511',
        '500': '#eeac04',
        '600': '#cd8301',
        '700': '#a45c04',
        '800': '#87480c',
        '900': '#733b10',
        '950': '#431e05',
      },
      'reef': {
        '50': '#f4ffe5',
        '100': '#e4ffc8',
        '200': '#d5ffad',
        '300': '#a6fb5b',
        '400': '#85f229',
        '500': '#64d80a',
        '600': '#4bad03',
        '700': '#3a8308',
        '800': '#31670d',
        '900': '#2a5710',
        '950': '#123102',
      },

      'anakiwa': {
        '50': '#f0f9ff',
        '100': '#dff2ff',
        '200': '#ade2ff',
        '300': '#79d3ff',
        '400': '#32bdfe',
        '500': '#07a5f0',
        '600': '#0084cd',
        '700': '#0068a6',
        '800': '#035989',
        '900': '#094a71',
        '950': '#062e4b',
      },
      'melrose': {
        '50': '#f3f3ff',
        '100': '#eae9fe',
        '200': '#d7d5ff',
        '300': '#aea9fe',
        '400': '#9589fc',
        '500': '#725af8',
        '600': '#5f37f0',
        '700': '#5125dc',
        '800': '#431fb8',
        '900': '#391b97',
        '950': '#210f66',
      },
      'mauve': {
        '50': '#faf5ff',
        '100': '#f3e9fe',
        '200': '#e9d6fe',
        '300': '#d6b1fc',
        '400': '#c187f9',
        '500': '#a959f3',
        '600': '#9437e6',
        '700': '#7f26ca',
        '800': '#6c24a5',
        '900': '#591f84',
        '950': '#3c0962',
      },
      primary: {
        DEFAULT: "rgb(var(--color-primary) / <alpha-value>)",
        darkest: "rgb(var(--color-primary-darkest) / <alpha-value>)",
        darker: "rgb(var(--color-primary-darker) / <alpha-value>)",
        dark: "rgb(var(--color-primary-dark) / <alpha-value>)",
        light: "rgb(var(--color-primary-light) / <alpha-value>)",
        lighter: "rgb(var(--color-primary-lighter) / <alpha-value>)",
        lightest: "rgb(var(--color-primary-lightest) / <alpha-value>)",
      },
      secondary: {
        DEFAULT: "rgb(var(--color-secondary) / <alpha-value>)",
        darkest: "rgb(var(--color-secondary-darkest) / <alpha-value>)",
        darker: "rgb(var(--color-secondary-darker) / <alpha-value>)",
        dark: "rgb(var(--color-secondary-dark) / <alpha-value>)",
        light: "rgb(var(--color-secondary-light) / <alpha-value>)",
        lighter: "rgb(var(--color-secondary-lighter) / <alpha-value>)",
      },
      tertiary: {
        DEFAULT: "rgb(var(--color-tertiary) / <alpha-value>)",
        darkest: "rgb(var(--color-tertiary-darkest) / <alpha-value>)",
        darker: "rgb(var(--color-tertiary-darker) / <alpha-value>)",
        dark: "rgb(var(--color-tertiary-dark) / <alpha-value>)",
        light: "rgb(var(--color-tertiary-light) / <alpha-value>)",
        lighter: "rgb(var(--color-tertiary-lighter) / <alpha-value>)",
      },
      accentFirst: {
        DEFAULT: "rgb(var(--color-accent-first) / <alpha-value>)",
        darkest: "rgb(var(--color-accent-first-darkest) / <alpha-value>)",
        darker: "rgb(var(--color-accent-first-darker) / <alpha-value>)",
        dark: "rgb(var(--color-accent-first-dark) / <alpha-value>)",
        light: "rgb(var(--color-accent-first-light) / <alpha-value>)",
        lighter: "rgb(var(--color-accent-first-lighter) / <alpha-value>)",
      },
      accentSecond: {
        DEFAULT: "rgb(var(--color-accent-second) / <alpha-value>)",
        darkest: "rgb(var(--color-accent-second-darkest) / <alpha-value>)",
        darker: "rgb(var(--color-accent-second-darker) / <alpha-value>)",
        dark: "rgb(var(--color-accent-second-dark) / <alpha-value>)",
        light: "rgb(var(--color-accent-second-light) / <alpha-value>)",
        lighter: "rgb(var(--color-accent-second-lighter) / <alpha-value>)",
      },
      accentThird: {
        DEFAULT: "rgb(var(--color-accent-third) / <alpha-value>)",
        darkest: "rgb(var(--color-accent-third-darkest) / <alpha-value>)",
        darker: "rgb(var(--color-accent-third-darker) / <alpha-value>)",
        dark: "rgb(var(--color-accent-third-dark) / <alpha-value>)",
        light: "rgb(var(--color-accent-third-light) / <alpha-value>)",
        lighter: "rgb(var(--color-accent-third-lighter) / <alpha-value>)",
      },
      accentFourth: {
        DEFAULT: "rgb(var(--color-accent-fourth) / <alpha-value>)",
        darkest: "rgb(var(--color-accent-fourth-darkest) / <alpha-value>)",
        darker: "rgb(var(--color-accent-fourth-darker) / <alpha-value>)",
        dark: "rgb(var(--color-accent-fourth-dark) / <alpha-value>)",
        light: "rgb(var(--color-accent-fourth-light) / <alpha-value>)",
        lighter: "rgb(var(--color-accent-fourth-lighter) / <alpha-value>)",
      },
      accentFifth: {
        DEFAULT: "rgb(var(--color-accent-fourth) / <alpha-value>)",
        darkest: "rgb(var(--color-accent-fourth-darkest) / <alpha-value>)",
        darker: "rgb(var(--color-accent-fourth-darker) / <alpha-value>)",
        dark: "rgb(var(--color-accent-fourth-dark) / <alpha-value>)",
        light: "rgb(var(--color-accent-fourth-light) / <alpha-value>)",
        lighter: "rgb(var(--color-accent-fourth-lighter) / <alpha-value>)",
      },
    },
    screens: {
      print: { raw: "print" },
      xsm: "500px",
      xs: "320px",
      "xs-max": { max: "320px" },
      sm: "576px",
      "sm-max": { max: "576px" },
      md: "768px",
      "md-max": { max: "768px" },
      lg: "992px",
      "lg-max": { max: "992px" },
      xl: "1200px",
      "xl-max": { max: "1200px" },
      "2xl": "1400px",
      "2xl-max": { max: "1320px" },
    },
    extend: {
      fontFamily: {
        sans: ["DM Sans", ...defaultTheme.fontFamily.sans],
        mono: ["IBM Plex Mono", ...defaultTheme.fontFamily.mono],
        serif: ["Prata", ...defaultTheme.fontFamily.serif],
        extra: ["basiic"],
      },
      fontSize: {
        sm2: "0.69rem", // 15px label
        sm: "0.7rem",
        base: "0.75rem", // 16px base
        md: "1.0625rem", // 17px body
        lg: "1.125rem", // 18px heading
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.85rem",
        "4xl": "2.25rem",
        "5xl": "2.65rem",
      },
      typography: (theme) => ({
      DEFAULT: {
          css: {
            color: theme('colors.secondary.darkest'),
            a: {
              color: theme('colors.secondary'),
              '&:hover': {
                color: theme('colors.primary')
              },
              textDecorationColor: theme('colors.primary.light'),
              textUnderlineOffset: '3px',
              textDecorationStyle: 'decoration-solid',
              code: { color: theme('colors.tertiary.light') }
            },
            blockquote: {
              borderLeftColor: theme('colors.primary'),
              backgroundColor: theme('colors.primary.lightest'),
              color: theme('colors.primary.darkest'),
            },
            'h1,h2,h3,h4': {
              color: theme('colors.tertiary')
            },
            hr: { borderColor: theme('colors.secondary.dark') },
            strong: { color: theme('colors.secondary.lightest') },
            thead: {
              color: theme('colors.accentFirst.light'),
              borderBottomColor: theme('colors.accentFirst.dark')
            },
            tbody: {
              tr: {
                borderBottomColor: theme('colors.accentFirst.darker')
              }
            },
            code: { color: theme('colors.accentThird.light') },
            pre: {
              backgroundColor: theme('colors.secondary.darkest')
            }
          }
        }
      }),
      backgroundImage: {
        stars: "url('../public/static/images/bg/celesestrellas.gif')",
        comingSoon: "url('../public/static/images/seeyasoon.svg')",
        desktopWallpaper: "url('../public/static/images/bg.jpg')",
        desktopWallpaper2:
          "url('../public/static/images/bg/fondo_purplestars.gif')",
        postWallpaper: "url('../public/static/images/bg/post.gif')",
        windowTitleBarButton: "linear-gradient(to bottom right, #9c9c9c, #fff)",
        windowTitleBarButtonActive: "linear-gradient(to bottom right, #444, #aaa)",
        windowTitleBar: "repeating-linear-gradient(#fff, #000 2px)",
      },
      keyframes: {
        bounce: {
          "0%, 100%": { top: "0", transform: "translateY(-10%)" },
          "50%": { top: "-5px" },
        },
        glow: {
          "0%": {
            transform: "scale(1.01)", opacity: "0.1",
          },
          "25%": {
            transform: "scale(1.03)", opacity: "0.3",
          },
          "50%": {
            transform: "scale(1.05)", opacity: "0.5",
          },
          "75%": {
            transform: "scale(1.07)", opacity: "0.7",
          },
          "100%": {
            transform: "scale(1.09)", opacity: "1",
          },
        },
      },
      animation: {
        bounce: "bounce 2s infinite",
        glow: "glow 1.2s linear forward"
      },
      listStyleType: {
        flower: '"✿ "',
      },
      zIndex: {
        1: "1",
        2: "2",
        3: "3",
        5: "5",
        15: "15",
      },
      borderRadius: {
        inherit: "inherit",
      },
      lineHeight: {
        snugish: "1.25",
        normal: "1.34",
        "extra-tight": "1.1",
      },
      maxWidth: {
        letter: "72rem",
      },
      height: {
        letter: "86.9375rem",
        "letter-col": "71.625rem",
        "letter-col-full": "77.9375rem",
      },
      spacing: {
        0.5: "2px", // 2px
        1.5: "0.375rem", // 6px
        1.6: "0.4375rem", // 7px
        2.1: "0.5625rem", // 9px
        2.5: "10px", // 10px
        3.2: "0.8125rem", // 16px
        4.5: "1.125rem", // 8px
        11: "2.75rem", // 44px (once)
      },
      transitionTimingFunction: {
        "out-back": "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
      boxShadow: {
        "inner-xs": "inset 0 0 0.5px 1px hsla(0, 0%, 100%, 0.075), 0 0.1px 0.3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.12)",
        "inner-2xs":
          "inset 0 0 0.5px 1px hsla(0, 0%, 100%, 0.075), 0 0.1px 0.3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.12), 0 0.1px 0.3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.12)",
        "inner-sm":
          "inset 0 0 0.5px 1px hsla(0, 0%, 100%, 0.075), 0 0.3px 0.4px rgba(0, 0, 0, 0.025), 0 0.9px 1.5px rgba(0, 0, 0, 0.05), 0 3.5px 6px rgba(0, 0, 0, 0.1)",
        "inner-md":
          "inset 0 0 0.5px 1px hsla(0, 0%, 100%, 0.075), 0 0.9px 1.5px rgba(0, 0, 0, 0.03), 0 3.1px 5.5px rgba(0, 0, 0, 0.08), 0 14px 25px rgba(0, 0, 0, 0.12)",
        "inner-lg":
          "inset 0 0 0.5px 1px hsla(0, 0%, 100%, 0.075), 0 1.2px 1.9px -1px rgba(0, 0, 0, 0.014), 0 3.3px 5.3px -1px rgba(0, 0, 0, 0.038), 0 8.5px 12.7px -1px rgba(0, 0, 0, 0.085), 0 30px 42px -1px rgba(0, 0, 0, 0.15)",
        "inner-top-xs": "inset 0 1px 0.5px hsla(0, 0%, 100%, 0.075), 0 0.1px 0.3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.12)",
        "inner-top-sm":
          "inset 0 1px 0.5px hsla(0, 0%, 100%, 0.075), 0 0.3px 0.4px rgba(0, 0, 0, 0.025), 0 0.9px 1.5px rgba(0, 0, 0, 0.05), 0 3.5px 6px rgba(0, 0, 0, 0.1)",
        "inner-top-md":
          "inset 0 1px 0.5px hsla(0, 0%, 100%, 0.075), 0 0.9px 1.5px rgba(0, 0, 0, 0.03), 0 3.1px 5.5px rgba(0, 0, 0, 0.08), 0 14px 25px rgba(0, 0, 0, 0.12)",
        "inner-top-lg":
          "inset 0 1px 0.5px hsla(0, 0%, 100%, 0.075), 0 1.2px 1.9px -1px rgba(0, 0, 0, 0.014), 0 3.3px 5.3px -1px rgba(0, 0, 0, 0.038), 0 8.5px 12.7px -1px rgba(0, 0, 0, 0.085), 0 30px 42px -1px rgba(0, 0, 0, 0.15)",
        "glowing":
          "0 0 5px var(--main), 0 0 20px var(--main), 0 0 40px var(--main), 0 0 80px var(--main)",
      },
      opacity: {
        7: ".07",
        8: ".08",
        9: ".09",
        12: ".12",
        15: ".15",
        35: ".35",
        65: ".65",
        85: ".85",
        98: ".98",
      },
      borderWidth: {
        3: "3px",
      },
      outlineWidth: {
        3: "3px",
      },
      gridTemplateRows: {
        window: "21px auto 4px",
      },
      gridTemplateColumns: {
        window: "4px auto 4px",
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
  ],
};
