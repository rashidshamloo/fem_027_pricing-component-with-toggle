/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        veryLightGrayishBlue: "hsl(240, 78%, 98%)",
        lightGrayishBlue: "hsl(234, 14%, 74%)",
        grayishBlue: "hsl(233, 13%, 49%)",
        darkGrayishBlue: "hsl(232, 13%, 33%)",
        gradientStart: "hsl(236, 72%, 79%)",
        gradientEnd: "hsl(237, 63%, 64%)",
      },
      backgroundImage: {
        normal: "url('images/bg-top.svg'), url('images/bg-bottom.svg')",
        small: "url('images/bg-top.svg')",
        button:
          "linear-gradient(to bottom right,hsl(236, 72%, 79%) 0%, hsl(237, 63%, 64%) 50%,white 50%, white 100%)",
        buttonHighlighted:
          "linear-gradient(to bottom right,white 0%, white 50%, hsl(236, 72%, 79%) 50%, hsl(237, 63%, 64%) 100%)",
      },
      backgroundSize: {
        s200: "200% 200%",
      },
      backgroundPosition: {
        normalPosition: "top right, bottom left",
        smallPosition: "top -2rem right -12rem",
        btnNormal: "0 0",
        btnHover: "100% 100%",
      },
    },
  },
  plugins: [],
};
