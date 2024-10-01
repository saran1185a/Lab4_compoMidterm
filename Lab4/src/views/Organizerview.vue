<script setup lang="ts">
import OrganizerCategory from '@/components/OrganizerCategory.vue'
import { ref } from 'vue'
import type { Organizer } from '@/types'

// Sample data
const Organizers = ref<Organizer[]>([
  {
    id: 5928101,
    category: 'animal welfare',
    organizer: 'Kat Laydee'
  },
  {
    id: 4582797,
    category: 'food',
    organizer: 'Fern Pollin'
  },
  {
    id: 8419988,
    category: 'sustainability',
    organizer: 'Carey Wales'
  }
])
</script>

<template>
  <div>
    <h1>Organizer List</h1>
    <div class="organizer-list">
      <OrganizerCategory
        v-for="organizer in Organizers"
        :key="organizer.id"
        :organizer="organizer"
      />
    </div>
  </div>
</template>

<style scoped>
.organizer-list {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
