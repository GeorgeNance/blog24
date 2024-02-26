<template>
	<div class="gallery grid grid-cols-1 md:grid-cols-3 gap-4">
		<div v-for="(image, index) in images" :key="index"
			 class="item cursor-pointer flex justify-center content-center flex-col" @click="openLightbox(index)" v-motion
			 :initial="{ opacity: 0, y: 100 }" :enter="{ opacity: 1, y: 0, scale: 1 }" :hovered="{ scale: 1.05 }">
			<nuxt-img :src="image.src" :alt="image.alt" placeholder
					  class="object-cover h-48 w-auto mx-auto hover:ring ring-slate-400 rounded" loading="lazy" />
			<!-- <p class="caption mt-2 text-center">{{ image.caption }}</p> -->
		</div>
	</div>

	<div v-if="lightbox.open" class="lightbox fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50"
		 @click="closeLightbox">
		<!-- Exit Button -->
		<button class="absolute top-2 right-2 text-gray-400 hover:text-white text-4xl cursor-pointer z-[100] "
				@click="closeLightbox">
			&times;
		</button>
		<div class="lightbox-content py-12" v-motion :initial="{ opacity: 0, scale: 0 }"
			 :visible-once="{ opacity: 1, scale: 0, scale: 1 }">
			<swiper :auto-height="true" :keyboard="{ enabled: true, onlyInViewport: true }" :initial-slide="lightbox.index"
					:slides-per-view="1">
				<swiper-slide v-for="(image, index) in images" :key="`slide-${index}`">
					<img :src="image.src" loading="lazy" :alt="image.alt" class="max-w-full max-h-full object-contain">
					<p class="caption -mt-4 text-white text-center">{{ image.caption }}</p>
				</swiper-slide>
			</swiper>
		</div>
	</div>
</template>
  
<script setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css'; // Ensure Swiper's CSS is imported


const images = ref([
	// Populate with your images
	{ src: '/img/gallery/goodbye-love.webp', alt: 'Image 1', caption: 'Goodbye Love - Created with SDXL' },
	{ src: '/img/gallery/goodbye-love.webp', alt: 'Image 2', caption: 'Caption 2' },
	// Add more images as needed
]);

const lightbox = ref({
	open: false,
	index: 0
});

function openLightbox(index) {
	lightbox.value.open = true;
	lightbox.value.index = index;
}

function closeLightbox(event) {
	lightbox.value.open = false;

}

function navigateLightbox(direction) {
	const nextIndex = lightbox.value.index + direction;
	if (nextIndex >= 0 && nextIndex < images.value.length) {
		lightbox.value.index = nextIndex;
	}
}

// Keyboard navigation
function handleKeydown(event) {
	if (!lightbox.value.open) return;
	if (event.key === 'ArrowRight') {
		navigateLightbox(1);
	} else if (event.key === 'ArrowLeft') {
		navigateLightbox(-1);
	}
}

onMounted(() => {
	window.addEventListener('keydown', handleKeydown);
});

onUnmounted(() => {
	window.removeEventListener('keydown', handleKeydown);
});
</script>

<style scoped>
.gallery {
	/* Adjusted for a simple grid layout */
	display: grid;
	grid-template-rows: repeat(auto-fill, minmax(250px, 1fr));
	gap: 1rem;
}

@media (max-width: 768px) {
	.gallery {
		grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
	}
}



.lightbox-content {
	max-width: 100vw;
	/* Adjust based on desired maximum width */
	height: 100vh;
	/* Adjust based on desired maximum height */
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: relative;

}

.swiper {
	width: 100%;
	/* Ensure Swiper fills the container */
	height: 100%;
	/* Ditto */
}

.swiper-slide {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100%;
	/* Ensure slide height is set */
}

/* Allow passthrough if not on the caption or image */
.lightbox-content .swiper-slide img,
.lightbox-content .caption {
	pointer-events: none;
}
</style>
