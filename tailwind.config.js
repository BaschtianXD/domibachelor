module.exports = {
  content: ['./dist/**/*.html', './src/**/*.{js,jsx,ts,tsx}', './*.html'],
  plugins: [require('@tailwindcss/forms'), require('tailwindcss-safe-area')],
  variants: {
    extend: {
      opacity: ['disabled']
    }
  }
}
