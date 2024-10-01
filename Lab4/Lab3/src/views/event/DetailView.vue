<script setup lang="ts">
import { ref, onMounted, defineProps, toRefs } from 'vue'
import { type Event } from '@/types'

// Initialize event as a partial type or with default values to avoid null
const props = defineProps<{
  event: Event
  id: String
}>()

const { event } = toRefs(props)
</script>

<template>
   <p>Edit event here</p>
  </template>