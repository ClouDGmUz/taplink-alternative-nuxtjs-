<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-8 px-4">
    <div class="max-w-md mx-auto space-y-8" v-cloak>
      <!-- Profile Header -->
      <div class="text-center">
        <img src="https://i.ibb.co/Pvhdhd5w/header.png" alt="Profil" class="w-32 h-32 rounded-full mx-auto mb-4 shadow-xl ring-4 ring-white/90 ring-offset-4 ring-offset-blue-100 transition-all duration-300 hover:ring-offset-purple-200">
        <h1 class="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">DEW</h1>
        <p class="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">DEW motor oil — avtomobillar uchun sifatli moylar ishlab chiqarish va sotishga ixtisoslashgan kompaniya. Mutaxassislarimiz avtomobilingiz dvigatelining ishonchli himoyasini taʼminlash uchun har bir detalga alohida eʼtibor qaratmoqda.</p>
      </div>

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
          <iframe width="100%" height="315" class="rounded-lg" src="https://www.youtube-nocookie.com/embed/jYEYyLvR6qU?si=mpL8dHEU54obaD-b" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
    </div>

    <!-- Gallery Lightbox -->
    <div v-if="galleryOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-black/90 transition-opacity duration-300" @click="closeGallery">
      <div class="relative max-w-4xl mx-auto p-4">
        <div class="relative h-full" 
     @touchstart="handleTouchStart" 
     @touchend="handleTouchEnd">
  <img 
    :src="images[currentImageIndex]" 
    class="max-h-[90vh] w-auto rounded-lg shadow-2xl transform transition-all duration-300"
    :class="{
      'opacity-0 scale-95': isTransitioning,
      'opacity-100 scale-100': !isTransitioning
    }"
    loading="lazy"
  >
  <button 
    @click.stop="prevImage"
    class="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-3 rounded-full transition-all"
  >
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
    </svg>
  </button>
  <button 
    @click.stop="nextImage"
    class="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-3 rounded-full transition-all"
  >
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
    </svg>
  </button>
</div>
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
const touchStartX = ref(0);
const isTransitioning = ref(false);

// Local image paths
const images = [
  'https://i.ibb.co/HLTQDL12/gallery1.jpg',
  'https://i.ibb.co/Qv3pZ2v7/gallery2.jpg',
  'https://i.ibb.co/3KsnQQ6/gallery3.jpg',
  'https://i.ibb.co/mCmb5Gny/gallery4.jpg',
  'https://i.ibb.co/1fzj1jj0/gallery5.jpg',
  'https://i.ibb.co/bMHBPH1y/gallery6.jpg',
  'https://i.ibb.co/KxFqB6yj/gallery7.jpg',
  'https://i.ibb.co/PzPDtsVn/gallery8.jpg',
  'https://i.ibb.co/vx4qbNLZ/gallery9.jpg',
  'https://i.ibb.co/S7VvL7pt/gallery10.jpg',
  'https://i.ibb.co/rGMSszNm/gallery11.jpg',
  'https://i.ibb.co/jkBy02vW/gallery12.jpg',
  'https://i.ibb.co/9kkdW7Z1/gallery13.jpg',
  'https://i.ibb.co/zWb0DbQR/gallery14.jpg',
  'https://i.ibb.co/6Jnh7vZJ/gallery15.jpg',
  'https://i.ibb.co/zVS95M3r/gallery16.jpg',
  'https://i.ibb.co/TBR3G8vf/gallery17.jpg',
  'https://i.ibb.co/39L93tJH/gallery18.jpg',
  'https://i.ibb.co/0RXpTz0K/gallery19.jpg',
  'https://i.ibb.co/R4TkN8W5/gallery20.jpg',
  'https://i.ibb.co/JwfMf2wH/gallery21.jpg'
];

function openGallery() {
  galleryOpen.value = true;
  window.addEventListener('keydown', handleKeydown);
}

function closeGallery() {
  galleryOpen.value = false;
  window.removeEventListener('keydown', handleKeydown);
}

function nextImage() {
  if (!isTransitioning.value) {
    isTransitioning.value = true;
    currentImageIndex.value = (currentImageIndex.value + 1) % images.length;
    setTimeout(() => isTransitioning.value = false, 300);
  }
}

function prevImage() {
  if (!isTransitioning.value) {
    isTransitioning.value = true;
    currentImageIndex.value = (currentImageIndex.value - 1 + images.length) % images.length;
    setTimeout(() => isTransitioning.value = false, 300);
  }
}

function handleKeydown(event) {
  switch(event.key) {
    case 'ArrowRight':
      nextImage();
      break;
    case 'ArrowLeft':
      prevImage();
      break;
    case 'Escape':
      closeGallery();
      break;
  }
}

function handleTouchStart(event) {
  touchStartX.value = event.touches[0].clientX;
}

function handleTouchEnd(event) {
  const deltaX = event.changedTouches[0].clientX - touchStartX.value;
  if (Math.abs(deltaX) > 50) {
    deltaX > 0 ? prevImage() : nextImage();
  }
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

/* Smooth transitions for slider */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

@media (max-width: 640px) {
  .absolute.left-4, .absolute.right-4 {
    padding: 0.5rem;
    transform: translateY(-50%) scale(0.8);
  }
}
</style>