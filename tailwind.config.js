/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primaryYellow: '#F5C513',
        customeBlue: '#5799EF',
      },
      fontFamily: {
        Roboto: ['Roboto', 'sans'],
        Poppins: ['Poppins', 'Roboto', 'sans'],
      },
    },
    plugins: [],
  },
}
{
  /**
--color-surface-mixed-100: #0d1f3d;
*/
}
