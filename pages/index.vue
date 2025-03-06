<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-8 px-4">
    <div class="max-w-md mx-auto space-y-8" v-cloak>
      <!-- Profile Header -->
      <div class="text-center">
        <img src="/images/header.jpg" alt="Profil" class="w-32 h-32 rounded-full mx-auto mb-4 shadow-xl ring-4 ring-white/90 ring-offset-4 ring-offset-blue-100 transition-all duration-300 hover:ring-offset-purple-200">
        <h1 class="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">DEW</h1>
        <p class="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">DEW motor oil — avtomobillar uchun sifatli moylar ishlab chiqarish va sotishga ixtisoslashgan kompaniya. Mutaxassislarimiz avtomobilingiz dvigatelining ishonchli himoyasini taʼminlash uchun har bir detalga alohida eʼtibor qaratmoqda.</p>
      </div>

      <!-- Expertise Section -->
      <!-- <div class="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border-2 border-purple-100">
        <h2 class="text-2xl font-semibold text-blue-900 mb-4">Bizni Nima Uchun Tanlash Kerak</h2>
        <div class="grid grid-cols-2 gap-4">
          <div class="flex flex-col items-center p-3 bg-white/50 rounded-lg">
            <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2">
              <svg class="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            </div>
            <h3 class="font-medium text-blue-900">Sifat</h3>
            <p class="text-sm text-center text-gray-600 mt-1">Premium darajadagi moylar</p>
          </div>
          <div class="flex flex-col items-center p-3 bg-white/50 rounded-lg">
            <div class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-2">
              <svg class="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"/>
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h3 class="font-medium text-blue-900">Eng Yaxshi Narx</h3>
            <p class="text-sm text-center text-gray-600 mt-1">Raqobatbardosh narxlar</p>
          </div>
        </div>
      </div> -->

      <!-- Social Links -->
      <div class="space-y-4">
        <a href="https://t.me/avtomobil_moylari" target="_blank" 
           class="flex items-center bg-white/90 backdrop-blur-sm text-blue-900 p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:bg-white border-2 border-blue-100 hover:border-blue-200">
          <svg class="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.14-.26.258-.428.258l.213-3.053 5.56-5.022c.24-.213-.054-.334-.373-.121L8.32 13.84 5.5 13c-.64-.203-.658-.64.135-.954l10.7-4.12c.53-.23 1.001.14.794.785z"/>
          </svg>
          Telegram Kanal
        </a>

        <a href="https://instagram.com/condoroiluz1" target="_blank" 
           class="flex items-center bg-white/90 backdrop-blur-sm text-pink-900 p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:bg-white border-2 border-pink-100 hover:border-pink-200">
          <svg class="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.073-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
          </svg>
          Instagram Profili
        </a>

        <button @click="openGallery" 
           class="flex items-center w-full bg-white/90 backdrop-blur-sm text-indigo-900 p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:bg-white border-2 border-indigo-100 hover:border-indigo-200">
          <svg class="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
            <path d="M4 5h13v7h2V5c0-1.103-.897-2 2-2H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h8v-2H4V5z"/>
            <path d="M8 11l-3 4h11l-4-6-3 4z"/>
            <path d="M19 14h-2v3h-3v2h3v3h2v-3h3v-2h-3z"/>
          </svg>
          Rasmlarni Ko'rish
        </button>
      </div>

      <!-- Media Section -->
      <div class="space-y-4 animate-on-scroll">
        <div class="bg-white/90 backdrop-blur-sm rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-4">
          <CustomVideoPlayer
            src="/video/promo.mp4"
            poster="/images/video-preview.jpg"
          />
        </div>
      </div>
    </div>

    <!-- Gallery Lightbox -->
    <div v-if="galleryOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-black/90 transition-opacity duration-300" @click="closeGallery">
      <div class="relative max-w-4xl mx-auto p-4">
        <img :src="images[currentImageIndex]" class="max-h-[90vh] w-auto rounded-lg shadow-2xl transform transition-transform duration-300" :class="{'scale-100': galleryOpen, 'scale-95': !galleryOpen}">
        <button class="absolute top-4 right-4 text-white/80 hover:text-white transition-colors" @click="closeGallery">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <div class="absolute inset-x-0 bottom-4 flex justify-center space-x-2">
          <button 
            v-for="(_, index) in images" 
            :key="index"
            @click.stop="currentImageIndex = index"
            class="w-2 h-2 rounded-full transition-all duration-300"
            :class="index === currentImageIndex ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/80'"
          ></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const galleryOpen = ref(false);
const currentImageIndex = ref(0);
const images = [
  '/images/gallery1.jpg',
  '/images/gallery2.jpg',
  '/images/gallery3.jpg',
  '/images/gallery4.jpg',
  '/images/gallery5.jpg',
  '/images/gallery6.jpg',
  '/images/gallery7.jpg',
  '/images/gallery8.jpg',
  '/images/gallery9.jpg',
  '/images/gallery10.jpg',
  '/images/gallery11.jpg',
  '/images/gallery12.jpg',
  '/images/gallery13.jpg',
  '/images/gallery14.jpg',
  '/images/gallery15.jpg',
  '/images/gallery16.jpg',
  '/images/gallery17.jpg',
  '/images/gallery18.jpg',
  '/images/gallery19.jpg',
  '/images/gallery20.jpg',
  '/images/gallery21.jpg',
];

function openGallery() {
  currentImageIndex.value = 0;
  galleryOpen.value = true;
  document.body.style.overflow = 'hidden';
}

function closeGallery() {
  galleryOpen.value = false;
  document.body.style.overflow = '';
}

onMounted(() => {
  // Add reveal animation to sections
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
});
</script>

<style scoped>
.animate-on-scroll {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease-out;
}

.animate-on-scroll.show {
  opacity: 1;
  transform: translateY(0);
}

[v-cloak] {
  display: none;
}

.scale-enter-active,
.scale-leave-active {
  transition: all 0.3s ease;
}

.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>