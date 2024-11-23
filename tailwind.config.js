/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        secondary: "#DB4444",
        secondary2: "#F5F5F5",
        hoverBtn: "#E07575",
        lightGreen: "#00FF66",
        text: "#FAFAFA",
      },
      padding: {
        inline: "0px 135px",
      },
      fontFamily: {
        main: " Inter, 'sans-serif' ",
        secondary: " 'Poppins', sans-serif ",
      },
      fontSize: {
        md: "16px",
      },
      gap: {
        sections: "60px",
        products: "30px",
      },
    },
  },
  plugins: [],
};
