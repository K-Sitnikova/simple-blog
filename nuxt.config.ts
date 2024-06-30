export default defineNuxtConfig({
  devtools: { enabled: false },
    modules:[
        '@pinia/nuxt',
    ],
  postcss: {
      plugins: {
        'postcss-nested': {}
      },
  },
    css: ['assets/style/index.css'],
    router: {
        options: {
            scrollBehaviorType: 'smooth'
        }
    }
})
