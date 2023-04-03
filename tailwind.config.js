const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./layouts/**/*.{tsx,ts}", "./lib/**/*.{tsx,ts}"],
  future: {
    hoverOnlyWhenSupported: true,
  },
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["DM Sans", ...defaultTheme.fontFamily.sans],
      mono: ["IBM Plex Mono", ...defaultTheme.fontFamily.mono],
      serif: ["Prata", ...defaultTheme.fontFamily.serif],
      extra: ["basiic"],
    },
    screens: {
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
    colors: {
      transparent: "transparent",
      current: "currentColor",
      inherit: "inherit",
      primary: {
        DEFAULT: "hsl(var(--color-primary) / <alpha-value>)",
        darker: "hsl(var(--color-primary-darker) / <alpha-value>)",
        dark: "hsl(var(--color-primary-dark) / <alpha-value>)",
        light: "hsl(var(--color-primary-light) / <alpha-value>)",
        lighter: "hsl(var(--color-primary-lighter) / <alpha-value>)",
      },
      accent: {
        DEFAULT: "hsl(var(--color-accent) / <alpha-value>)",
        darker: "hsl(var(--color-accent-darker) / <alpha-value>)",
        dark: "hsl(var(--color-accent-dark) / <alpha-value>)",
        light: "hsl(var(--color-accent-light) / <alpha-value>)",
        lighter: "hsl(var(--color-accent-lighter) / <alpha-value>)",
      },
      black: "hsl(var(--color-black) / <alpha-value>)",
      white: "hsl(var(--color-white) / <alpha-value>)",
      warning: {
        DEFAULT: "hsl(var(--color-warning) / <alpha-value>)",
        darker: "hsl(var(--color-warning-darker) / <alpha-value>)",
        dark: "hsl(var(--color-warning-dark) / <alpha-value>)",
        light: "hsl(var(--color-warning-light) / <alpha-value>)",
        lighter: "hsl(var(--color-warning-lighter) / <alpha-value>)",
      },
      success: {
        DEFAULT: "hsl(var(--color-success) / <alpha-value>)",
        darker: "hsl(var(--color-success-darker) / <alpha-value>)",
        dark: "hsl(var(--color-success-dark) / <alpha-value>)",
        light: "hsl(var(--color-success-light) / <alpha-value>)",
        lighter: "hsl(var(--color-success-lighter) / <alpha-value>)",
      },
      error: {
        DEFAULT: "hsl(var(--color-error) / <alpha-value>)",
        darker: "hsl(var(--color-error-darker) / <alpha-value>)",
        dark: "hsl(var(--color-error-dark) / <alpha-value>)",
        light: "hsl(var(--color-error-light) / <alpha-value>)",
        lighter: "hsl(var(--color-error-lighter) / <alpha-value>)",
      },
      floor: {
        DEFAULT: "hsl(var(--color-floor) / <alpha-value>)",
        darker: "hsl(var(--color-floor-darker) / <alpha-value>)",
        dark: "hsl(var(--color-floor-dark) / <alpha-value>)",
        light: "hsl(var(--color-floor-light) / <alpha-value>)",
        lighter: "hsl(var(--color-floor-lighter) / <alpha-value>)",
      },
      contrast: {
        lower: "hsl(var(--color-contrast-lower) / <alpha-value>)",
        low: "hsl(var(--color-contrast-low) / <alpha-value>)",
        medium: "hsl(var(--color-contrast-medium) / <alpha-value>)",
        high: "hsl(var(--color-contrast-high) / <alpha-value>)",
        higher: "hsl(var(--color-contrast-higher) / <alpha-value>)",
      },
      secondary: {
        DEFAULT: "hsl(var(--color-secondary) / <alpha-value>)",
        darker: "hsl(var(--color-secondary-darker) / <alpha-value>)",
        dark: "hsl(var(--color-secondary-dark) / <alpha-value>)",
        light: "hsl(var(--color-secondary-light) / <alpha-value>)",
        lighter: "hsl(var(--color-secondary-lighter) / <alpha-value>)",
      },
      tertiary: {
        DEFAULT: "hsl(var(--color-tertiary) / <alpha-value>)",
        darker: "hsl(var(--color-tertiary-darker) / <alpha-value>)",
        dark: "hsl(var(--color-tertiary-dark) / <alpha-value>)",
        light: "hsl(var(--color-tertiary-light) / <alpha-value>)",
        lighter: "hsl(var(--color-tertiary-lighter) / <alpha-value>)",
      },
      // background-color: #bacdf8;
    },
    extend: {
      backgroundImage: {
        comingSoon: "url('../public/static/images/seeyasoon.svg')",
        desktopWallpaper: "url('../public/static/images/bg.jpg')",
        desktopWallpaper2:
          "url(\"data:image/svg+xml,%3Csvg width='42' height='44' viewBox='0 0 42 44' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='Page-1' fill='none' fill-rule='evenodd'%3E%3Cg id='brick-wall' fill='%231d44b5' fill-opacity='0.16'%3E%3Cpath d='M0 0h42v44H0V0zm1 1h40v20H1V1zM0 23h20v20H0V23zm22 0h20v20H22V23z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        windowTitleBarButton: "linear-gradient(to bottom right, #9c9c9c, #fff)",
        windowTitleBarButtonActive: "linear-gradient(to bottom right, #444, #aaa)",
        windowTitleBar: "repeating-linear-gradient(#fff, #000 2px)",
      },
      keyframes: {
        bounce: {
          "0%, 100%": { top: "0", transform: "translateY(-10%)" },
        },
        "50%": { top: "-5px" },
      },
      animation: {
        bounce: "bounce 2s infinite",
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
        "extra-tight": "1.1",
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
  plugins: [require("@tailwindcss/aspect-ratio")],
};
