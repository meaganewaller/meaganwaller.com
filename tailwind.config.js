const { fontFamily } = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      transitionProperty: {
        width: "width",
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
      fontFamily: {
        sans: ["dm-sans", ...fontFamily.sans],
        mono: ["ibm-plex-mono", ...fontFamily.mono],
        serif: ["prata", ...fontFamily.serif],
      },
      stroke: (theme) => ({
        "orange-yellow": theme("#F4D35E"),
      }),
      screens: {
        portrait: { raw: "(orientation: portrait)" },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            blockquote: {
              borderLeft: `5px solid ${theme("colors.fiery-rose")}`,
            },
          },
        },
        light: {
          css: {
            color: theme("colors.gray.400"),
            '[class~="lead"]': {
              color: theme("colors.gray.300"),
            },
            a: {
              color: theme("colors.white"),
            },
            strong: {
              color: theme("colors.white"),
            },
            "ol > li::before": {
              color: theme("colors.gray.400"),
            },
            "ul > li::before": {
              backgroundColor: theme("colors.gray.600"),
            },
            hr: {
              borderColor: theme("colors.gray.200"),
            },
            blockquote: {
              borderLeft: `5px solid ${theme("colors.fiery-rose")}`,
            },
            h1: {
              color: theme("colors.white"),
            },
            h2: {
              color: theme("colors.white"),
            },
            h3: {
              color: theme("colors.white"),
            },
            h4: {
              color: theme("colors.white"),
            },
            "figure figcaption": {
              color: theme("colors.gray.400"),
            },
            code: {
              color: theme("colors.white"),
            },
            "a code": {
              color: theme("colors.white"),
            },
            pre: {
              color: theme("colors.gray.200"),
              backgroundColor: "#161B22",
            },
            thead: {
              color: theme("colors.white"),
              borderBottomColor: theme("colors.gray.400"),
            },
            "tbody tr": {
              borderBottomColor: theme("colors.gray.600"),
            },
          },
        },
      }),
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),
    plugin(function ({ addVariant, e, postcss }) {
      addVariant("firefox", ({ container, separator }) => {
        const isFirefoxRule = postcss.atRule({
          name: "-moz-document",
          params: "url-prefix()",
        });
        isFirefoxRule.append(container.nodes);
        container.append(isFirefoxRule);
        isFirefoxRule.walkRules((rule) => {
          rule.selector = `.${e(
`firefox${separator}${rule.selector.slice(1)}`
)}`;
        });
      });
    }),
  ],
};
