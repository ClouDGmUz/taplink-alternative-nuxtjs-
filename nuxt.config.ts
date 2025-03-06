// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  
  app: {
    head: {
      // Add CSP meta tag
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
        { name: 'twitter:description', content: 'DEW motor oil - Specializing in manufacturing and selling high-quality automotive oils. Our experts pay special attention to every detail to ensure reliable protection of your car engine. | DEW motor moyi - avtomobillar uchun sifatli moylar ishlab chiqarish va sotishga ixtisoslashgan kompaniya.' },
        { 
          'http-equiv': 'Content-Security-Policy',
          content: "default-src 'self' dew.condoroil.uz; img-src 'self' data:; media-src 'self'"
        }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ]
    }
  },
  vite: {
    server: {
      allowedHosts: [
        'dew.condoroil.uz',  // Add your domain here
        'localhost'
      ],
      hmr: {
        protocol: 'wss',
        host: 'dew.condoroil.uz',
        port: 5173
      }
    }
  },
  nitro: {
    static: true,
    serveStatic: {
      cacheControl: 'public, max-age=31536000'
    }
  },
  experimental: {
    payloadExtraction: true,
    inlineSSRStyles: false
  }
});