/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: false,
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  content: [],

  theme: {
    extend: {
      lineHeight: {
        zero: "0",
      },
      screens: {
        "2xl-max": { max: "1535px" },
        // => @media (max-width: 1535px) { ... }

        "xl-max": { max: "1279px" },
        // => @media (max-width: 1279px) { ... }

        "lg-max": { max: "1023px" },
        // => @media (max-width: 1023px) { ... }

        "md-max": { max: "767px" },
        // => @media (max-width: 767px) { ... }

        "sm-max": { max: "639px" },
        // => @media (max-width: 639px) { ... }
      },
      colors: {
        primary: "var(--primary)",
        black: "var(--black)",
        white: "var(--white)",
        gray: "var(--gray)",
        monestral: "var(--monestral)",
        background: "var(--background)",

        borderColor: "var(--borderColor)",
        input: "var(--input)",

        "primary-500": "var(--primary-500)",
        "primary-600": "var(--primary-600)",
        "primary-700": "var(--primary-700)",

        "success-500": "var(--success-500)",
        "success-600": "var(--success-600)",
        "success-700": "var(--success-700)",

        "warning-600": "var(--warning-600)",
        "warning-700": "var(--warning-700)",
        "warning-800": "var(--warning-800)",

        "danger-600": "var(--danger-600)",
        "danger-700": "var(--danger-700)",
        "danger-800": "var(--danger-800)",

        danger: "var(--danger)",

        textPrimary: "var(--text-primary)",
        textSecondary: "var(--text-secondary)",
        menuPrimary: "var(--bg-menu-primary)",
        menuSecondary: "var(--bg-menu-secondary)",
      },
      fontFamily: {
        bebas: ["var(--ff-bebas)"],
        open: ["var(--ff-open)"],
      },
      backgroundImage: {
        pubg: "url('/src/assets/PUBG.jpeg')",
      },
    },
  },
  plugins: [],
};
