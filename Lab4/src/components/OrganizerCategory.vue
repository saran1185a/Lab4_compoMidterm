<script setup lang="ts">
import type { Organizer } from '@/types'

defineProps<{
  organizer: Organizer
}>()
</script>
<template>
  <div class="organizer-card">
    <p class="category">{{ organizer.category }}</p>
    <p class="organizer-name">{{ organizer.organizer }}</p>
  </div>
</template>

<style scoped>
.organizer-card {
  padding: 20px; /* Same padding as event card */
  width: 250px; /* Same width as event card */
  cursor: pointer; /* Same cursor style */
  border: 1px solid #39495c; /* Same border as event card */
  margin-bottom: 18px; /* Same margin as event card */
}

.organizer-card:hover {
  transform: scale(1.01); /* Same hover effect */
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2); /* Same box shadow on hover */
}

.category,
.organizer-name {
  font-size: 16px; /* Same font size */
  text-align: left; /* Same text alignment */
}
</style>
