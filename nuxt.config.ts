// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  
  app: {
    head: {
      title: 'DEW Motor Oil - Premium Quality Engine Oils | DEW Motor Moyi',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'DEW motor oil - Specializing in manufacturing and selling high-quality automotive oils. Our experts pay special attention to every detail to ensure reliable protection of your car engine. | DEW motor moyi - avtomobillar uchun sifatli moylar ishlab chiqarish va sotishga ixtisoslashgan kompaniya.' },
        { name: 'format-detection', content: 'telephone=no' },
        { property: 'og:title', content: 'DEW Motor Oil - Premium Quality Engine Oils | DEW Motor Moyi' },
        { property: 'og:description', content: 'DEW motor oil - Specializing in manufacturing and selling high-quality automotive oils. Our experts pay special attention to every detail to ensure reliable protection of your car engine. | DEW motor moyi - avtomobillar uchun sifatli moylar ishlab chiqarish va sotishga ixtisoslashgan kompaniya.' },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'DEW Motor Oil - Premium Quality Engine Oils | DEW Motor Moyi' },
        { name: 'twitter:description', content: 'DEW motor oil - Specializing in manufacturing and selling high-quality automotive oils. Our experts pay special attention to every detail to ensure reliable protection of your car engine. | DEW motor moyi - avtomobillar uchun sifatli moylar ishlab chiqarish va sotishga ixtisoslashgan kompaniya.' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        // Add this line to fix preload warning
        { rel: 'preload', href: '/_nuxt/builds/meta/dev.json', as: 'fetch', crossorigin: 'anonymous' }
      ]
    }
  },

  vite: {
    server: {
      hmr: {
        protocol: 'wss',
        host: '', // Replace with your server's hostname
        port: 5173
      }
    }
  },

  // Optional: also set Nuxt's dev server config
  devServer: {
    host: '0.0.0.0',
    port: 5173
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