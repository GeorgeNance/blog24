<template>
  <div>
    <canvas ref="skyCanvas" class="absolute inset-0 w-full h-full z-0"></canvas>
    <div class="relative z-10">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const skyCanvas = ref(null);
const stars = [];
const starCount = 800;
const shootingStars = [];
let lastShootingStarTime = 0;
const shootingStarInterval = 3000; // Adjust as needed

onMounted(() => {
  initStars();
  requestAnimationFrame(loop);
});



function initStars() {
  for (let i = 0; i < starCount; i++) {
    stars.push({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      radius: Math.random() * 1.2,
      opacity: Math.random() * 0.5 + 0.5,
      targetOpacity: Math.random(),
      opacityStep: 0.01,
    });
  }
}

function createShootingStar() {
  // Start from the top right, random position along the right edge or the top
  const startX = Math.random() < 0.5 ? window.innerWidth : Math.random() * window.innerWidth;
  const startY = Math.random() < 0.5 ? 0 : Math.random() * window.innerHeight * 0.5; // Start from the top to middle
  
  shootingStars.push({
    x: startX,
    y: startY,
    length: Math.random() * 100 + 10, // Longer for dramatic effect
    speed: Math.random() * 20 + 100, // Faster for a quick streak across the sky
    opacity: 1, // Start fully visible
    angle: Math.atan2(window.innerHeight - startY, 0 - startX), // Calculate angle towards bottom left
  });
}

function updateShootingStars(deltaTime) {
  shootingStars.forEach((star, index) => {
    // Update position based on angle and speed
    star.x += Math.cos(star.angle) * star.speed * deltaTime;
    star.y += Math.sin(star.angle) * star.speed * deltaTime;
    
    star.opacity -= 0.025; // Quick fade out
    if (star.opacity <= 0 || star.x < 0 || star.y > window.innerHeight) {
      shootingStars.splice(index, 1); // Remove when faded or out of bounds
    }
  });

  const now = performance.now();
  if (now - lastShootingStarTime > shootingStarInterval) {
    lastShootingStarTime = now;
    createShootingStar();
  }
}

let lastFrameTime = 0;
function loop(timestamp) {
  const deltaTime = (timestamp - lastFrameTime) / 1000; // Time in seconds since the last frame
  lastFrameTime = timestamp;

  const canvas = skyCanvas.value;
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw stars
  stars.forEach(star => {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
    ctx.fill();
  });

  // Update and draw shooting stars
  updateShootingStars(deltaTime);
  shootingStars.forEach(star => {
    ctx.beginPath();
    ctx.moveTo(star.x, star.y);
    // Use the length and angle to determine the end point
    const endX = star.x + Math.cos(star.angle) * star.length;
    const endY = star.y + Math.sin(star.angle) * star.length;
    ctx.lineTo(endX, endY);
    ctx.strokeStyle = `rgba(255, 255, 255, ${star.opacity})`;
    ctx.lineWidth = 2;
    ctx.stroke();
  });

  requestAnimationFrame(loop);
}
</script>

<style>
/* Your existing styles */
</style>
