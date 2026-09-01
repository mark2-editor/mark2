<script setup lang="ts">
import { nextTick, onBeforeUnmount, ref } from 'vue'
import { X } from 'lucide-vue-next'

interface LightboxImage {
  src: string
  alt: string
}

withDefaults(defineProps<{ closeLabel?: string }>(), {
  closeLabel: 'Close image'
})

const image = ref<LightboxImage | null>(null)
const closeButton = ref<HTMLButtonElement | null>(null)
let triggerElement: HTMLElement | null = null

function open(src: string, alt: string) {
  triggerElement = document.activeElement instanceof HTMLElement ? document.activeElement : null
  image.value = { src, alt }
  document.body.classList.add('mark2-lightbox-open')
  document.addEventListener('keydown', handleKeydown)
  void nextTick(() => closeButton.value?.focus())
}

function close() {
  if (!image.value) return

  image.value = null
  document.body.classList.remove('mark2-lightbox-open')
  document.removeEventListener('keydown', handleKeydown)

  if (triggerElement?.isConnected) triggerElement.focus()
  triggerElement = null
}

function handleKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') close()
}

defineExpose({ open, close })
onBeforeUnmount(close)
</script>

<template>
  <Transition name="mark2-lightbox">
    <div
      v-if="image"
      class="mark2-lightbox"
      role="dialog"
      aria-modal="true"
      :aria-label="image.alt"
      @click.self="close"
    >
      <button ref="closeButton" type="button" class="mark2-lightbox-close" :aria-label="closeLabel" @click="close">
        <X :size="20" :stroke-width="1.8" aria-hidden="true" />
      </button>
      <img class="mark2-lightbox-image" :src="image.src" :alt="image.alt" @click.stop />
    </div>
  </Transition>
</template>
