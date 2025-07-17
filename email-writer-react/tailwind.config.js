export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
    deepblue: '#050446',
    darkpurple: '#0f0120',
    royalblue: '#02277e',
    accentpink: '#ec4899', // Tailwind's pink-400
    accentblue: '#60a5fa', // Tailwind's blue-400
  },
      fontFamily: {
        serif: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
}