module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // textColor: "#101010",
        // activeText: "#D6230A",
        // gradientBg: "rgba(116, 249, 105,0.4)",
        // whiteAlpha: "rgba(255,255,255,0.2)",
        // cardColor: "#f5f5f5",
        // cartBg: "#282a2c",
        // cartItem: "#2e3033",
        // cartTotal: "#343739",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
}