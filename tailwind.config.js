/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        azure: {
          "100": "#eeffff",
          "200": "#eefffe",
          "300": "#ecffff",
          "400": "#ebfefe",
          "500": "#eafbfb",
          "600": "#e7fcfa",
          "700": "#e7fbfc",
        },
        gray: "rgba(0, 0, 0, 0.8)",
        black: "#000",
        "actionable-item": "#18a0fb",
        white: "#fff",
        mediumblue: "#2d11d7",
      },
      spacing: {},
      fontFamily: {
        "body-p": "Montserrat",
        montaga: "Montaga",
      },
    },
    fontSize: {
      lg: "18px",
      "29xl": "48px",
      "10xl": "29px",
      "19xl": "38px",
      "5xl": "24px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq1000: {
        raw: "screen and (max-width: 1000px)",
      },
      mq975: {
        raw: "screen and (max-width: 975px)",
      },
      mq767: {
        raw: "screen and (max-width: 767px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq725: {
        raw: "screen and (max-width: 725px)",
      },
      mq675: {
        raw: "screen and (max-width: 675px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
