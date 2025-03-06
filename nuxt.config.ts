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
        {           'http-equiv': 'Content-Security-Policy',
          content: "default-src 'self' dew.condoroil.uz; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; frame-src 'self' https://www.youtube-nocookie.com; media-src 'self' https://www.youtube-nocookie.com; connect-src 'self' ws: wss: https: localhost:*; font-src 'self' data:"
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
        'localhost'
      ],
      hmr: {
        protocol: 'ws',
        host: 'localhost',
        port: 24678,
        clientPort: 24678
      }
    }
  }
});