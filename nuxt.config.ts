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
  },
  runtimeConfig: {
    awsAccessKeyId: process.env.AWS_ACCESS_KEY_ID,
    awsSecretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    public: {
      awsRegion: process.env.AWS_REGION,
      awsBucket: process.env.AWS_BUCKET_NAME
    }
  }
})