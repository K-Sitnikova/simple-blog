export default defineNuxtConfig({
  devtools: { enabled: false },
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
