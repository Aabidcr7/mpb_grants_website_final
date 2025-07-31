module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        global: {
          1: "var(--global-background1)",
          2: "var(--global-background2)", 
          3: "var(--global-background3)",
          4: "var(--global-background4)",
          5: "var(--global-background5)",
          6: "var(--global-background6)",
          7: "var(--global-background7)",
          8: "var(--global-background8)",
          9: "var(--global-background9)",
          10: "var(--global-background10)",
          11: "var(--global-background11)"
        },
        button: {
          1: "var(--button-background1)"
        },
        edittext: {
          1: "var(--edittext-border1)"
        }
      },
      fontFamily: {
        'plus-jakarta': ['Plus Jakarta Sans', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'be-vietnam': ['Be Vietnam Pro', 'sans-serif']
      },
      maxWidth: {
        '8xl': '90rem',
        '9xl': '100rem'
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem'
      },
      borderRadius: {
        '4xl': '2rem'
      }
    }
  },
  plugins: []
};