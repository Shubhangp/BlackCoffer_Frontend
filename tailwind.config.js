/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        clip: "linear-gradient(180deg, #4285F4 0%, #286DE0 100%)",
        usericon: "url('https://s3-alpha-sig.figma.com/img/203e/bb33/eccd71f34638f7751900105c639d563d?Expires=1695600000&Signature=ecl-h3ALTl0YufiAs5GkP4unDsb3G2~BccJruRiJKllySv983WeKl3P-h-GotWPKb7ueKq8qIRCUHXrV-VQkTgiarPWHKw~xERDOkzd5FNL7pN5e8x2e8o7teO0vF~W9Lf32l0FfI8q1lyDPxU9pmnzUbr4uwj0FqhuwtV5-fsTV-NgMr4DY4Qs3cSY~bJ-2PnRjC28wwfDwT7ohy3BlURY~d7s4bOCQfR6U8-7X24IuHm0~oRueVagEX5My48XtKN5-2zMX~9~omFqBlKK4hF1lq-y5y8HHk9Gl5eeEVKNQBoVPtMq40ZPm-QEi-8b862JDiLnfIXC0diuvU8XYzQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')"
      },
      fontFamily: {
        poppins: "Poppins",
        montserrat: "Montserrat",
        figtree: "Figtree",
        lato: "Lato",
        open: "Open Sans",
      },
      dropShadow: {
        '3Xl' : "3px 4px 11px rgba(98, 98, 98, 0.15)",
      },
    },
  },
  plugins: [],
};