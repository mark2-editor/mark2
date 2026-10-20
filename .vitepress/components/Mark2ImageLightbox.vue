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
const dialog = ref<HTMLDialogElement | null>(null)
const closeButton = ref<HTMLButtonElement | null>(null)
let triggerElement: HTMLElement | null = null

function open(src: string, alt: string) {
  triggerElement = document.activeElement instanceof HTMLElement ? document.activeElement : null
  image.value = { src, alt }
  document.body.classList.add('mark2-lightbox-open')
  void nextTick(() => {
    dialog.value?.showModal()
    closeButton.value?.focus()
  })
}

function close() {
  if (!image.value) return

  dialog.value?.close()
  image.value = null
  document.body.classList.remove('mark2-lightbox-open')

  if (triggerElement?.isConnected) triggerElement.focus()
  triggerElement = null
}

function keepFocus(event: KeyboardEvent) {
  if (event.key !== 'Tab') return
  event.preventDefault()
  closeButton.value?.focus()
}

defineExpose({ open, close })
onBeforeUnmount(close)
</script>

<template>
  <Transition name="mark2-lightbox">
    <dialog
      v-if="image"
      ref="dialog"
      class="mark2-lightbox"
      :aria-label="image.alt"
      @cancel.prevent="close"
      @keydown="keepFocus"
      @click.self="close"
    >
      <button ref="closeButton" type="button" class="mark2-lightbox-close" :aria-label="closeLabel" @click="close">
        <X :size="20" :stroke-width="1.8" aria-hidden="true" />
      </button>
      <img class="mark2-lightbox-image" :src="image.src" :alt="image.alt" @click.stop />
    </dialog>
  </Transition>
</template>
