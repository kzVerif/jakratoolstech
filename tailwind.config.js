// tailwind.config.js
module.exports = {
    theme: {
      extend: {
        fontFamily: {
          kanit: ['Kanit', 'sans-serif'],
        }
      },
    },
    darkMode: 'class', // ถ้าใช้ Dark Mode ด้วย
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
      './app/**/*.{js,ts,jsx,tsx}', // ถ้าใช้ app router
    ],
    plugins: [],
  };
  