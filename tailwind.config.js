  // tailwind.config.js
  module.exports = {
    content: [
      './components/**/*.{vue,js}',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './plugins/**/*.{js,ts}',
      './nuxt.config.{js,ts}',
      './node_modules/flowbite/**/*.js'
    ],
     darkMode: false, // or 'media' or 'class'
     theme: {
       extend: {
        container: {
            screens: {
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1536px',
          }
       }
       },
     },
     variants: {
       extend: {},
     },
     plugins: [
      require('flowbite/plugin')
  ]
   }