<script setup lang="ts">
import { ref } from 'vue'
import type { VNodeRef } from 'vue'
import { onClickOutside } from '@vueuse/core'

export interface IAddTodoModal {
  visible: boolean
}

const emit = defineEmits<{
  (e: 'on-close'): void
}>()

const formTarget = ref<VNodeRef | null>(null)

onClickOutside(formTarget, () => {
  emit('on-close')
})

const props = defineProps<IAddTodoModal>()
</script>

<template>
  <Teleport to="body"></Teleport>
</template>

<style lang="scss">
.modal {
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(black, 0.5);
}
</style>
