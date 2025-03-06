<template>
  <div class="custom-video-container relative overflow-hidden rounded-lg">
    <div style="padding:56.25% 0 0 0;position:relative;">
      <iframe
        src="https://player.vimeo.com/video/1063133633?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
        style="position:absolute;top:0;left:0;width:100%;height:100%;"
        title="promo"
      />
    </div>
    
    <!-- Custom Controls -->
    <div 
      class="video-controls absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100"
      :class="{ 'opacity-100': !isPlaying || controlsVisible }"
      @mouseenter="showControls"
      @mouseleave="hideControlsDelayed"
    >
      <div class="flex items-center justify-between">
        <button @click.stop="togglePlay" class="text-white p-2 rounded-full hover:bg-white/20 transition-all">
          <svg v-if="isPlaying" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
          </svg>
          <svg v-else class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z"/>
          </svg>
        </button>
        
        <div class="flex-grow mx-3">
          <div class="relative h-1 bg-white/30 rounded-full cursor-pointer" @click.stop="seek">
            <div class="absolute top-0 left-0 h-full bg-white rounded-full" :style="{ width: progress + '%' }"></div>
          </div>
        </div>
        
        <button @click.stop="toggleMute" class="text-white p-2 rounded-full hover:bg-white/20 transition-all">
          <svg v-if="isMuted" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
          </svg>
          <svg v-else class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
          </svg>
        </button>
        
        <button @click.stop="toggleFullscreen" class="text-white p-2 rounded-full hover:bg-white/20 transition-all ml-1">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/>
          </svg>
        </button>
      </div>
    </div>
    
    <!-- Play Button Overlay -->
    <div 
      v-if="!isPlaying" 
      class="absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity duration-300"
      @click="togglePlay"
    >
      <div class="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transform transition-transform duration-300 hover:scale-110">
        <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z"/>
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  src: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: 'video/mp4'
  },
  poster: {
    type: String,
    default: ''
  },
  autoplay: {
    type: Boolean,
    default: false
  }
});

const videoRef = ref(null);
const isPlaying = ref(false);
const isMuted = ref(false);
const progress = ref(0);
const controlsVisible = ref(false);
const controlsTimeout = ref(null);

onMounted(() => {
  if (props.autoplay) {
    play();
  }
  
  document.addEventListener('keydown', handleKeydown);
});

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown);
  if (controlsTimeout.value) {
    clearTimeout(controlsTimeout.value);
  }
});

function togglePlay() {
  if (isPlaying.value) {
    pause();
  } else {
    play();
  }
}

function play() {
  videoRef.value.play();
  isPlaying.value = true;
}

function pause() {
  videoRef.value.pause();
  isPlaying.value = false;
}

function toggleMute() {
  videoRef.value.muted = !videoRef.value.muted;
  isMuted.value = videoRef.value.muted;
}

function updateProgress() {
  const video = videoRef.value;
  if (video.duration) {
    progress.value = (video.currentTime / video.duration) * 100;
  }
}

function seek(event) {
  const video = videoRef.value;
  const rect = event.target.getBoundingClientRect();
  const pos = (event.clientX - rect.left) / rect.width;
  video.currentTime = pos * video.duration;
}

function videoEnded() {
  isPlaying.value = false;
}

function toggleFullscreen() {
  const video = videoRef.value;
  
  if (!document.fullscreenElement) {
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.webkitRequestFullscreen) { /* Safari */
      video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) { /* IE11 */
      video.msRequestFullscreen();
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
      document.msExitFullscreen();
    }
  }
}

function handleKeydown(event) {
  if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') {
    return;
  }
  
  switch (event.key) {
    case ' ':
    case 'k':
      event.preventDefault();
      togglePlay();
      break;
    case 'm':
      toggleMute();
      break;
    case 'f':
      toggleFullscreen();
      break;
    case 'ArrowRight':
      videoRef.value.currentTime += 5;
      break;
    case 'ArrowLeft':
      videoRef.value.currentTime -= 5;
      break;
  }
}

function showControls() {
  controlsVisible.value = true;
  if (controlsTimeout.value) {
    clearTimeout(controlsTimeout.value);
    controlsTimeout.value = null;
  }
}

function hideControlsDelayed() {
  if (isPlaying.value) {
    controlsTimeout.value = setTimeout(() => {
      controlsVisible.value = false;
    }, 2000);
  }
}
</script>

<style scoped>
.custom-video-container:hover .video-controls {
  opacity: 1;
}

.custom-video-container video {
  cursor: pointer;
}
</style>