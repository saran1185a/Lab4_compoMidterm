<script setup lang="ts">
import { toRefs } from 'vue'
import { type Event } from '@/types'
import { useMessageStore } from '@/stores/message';
import { useRouter } from 'vue-router';

const props = defineProps<{
  event: Event
  id: String
}>()

const { event } = toRefs(props)
const router = useRouter()
const store = useMessageStore()
const edit = () => {

  store.updateMessage('You are successfully registered for ' + props.event.title)
setTimeout(() => {
  store.resetMessage()
}, 3000)
router.push({ name: 'event-detail-view', params: { id: props.event.id } })
}
</script>

<template>
 <div>
  <p>Edit event here</p>
  <button @click="edit">REGISTER</button>

</div>
</template>