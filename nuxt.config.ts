// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  
  vite: {
    server: {
      allowedHosts: [
        '', // Your Domain Here
        'localhost'
      ]
    }
  },

  // Optional: also set Nuxt's dev server config
  devServer: {
    host: '0.0.0.0',
    port: 3001
  }
})