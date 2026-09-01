<script setup lang="ts">
import { computed } from 'vue'
import { useData, withBase } from 'vitepress'

const props = withDefaults(defineProps<{
  alt: string
  caption?: string
  darkSrc?: string
  lightSrc?: string
  src?: string
}>(), {
  caption: ''
})

const { isDark } = useData()

const imageSrc = computed(() => {
  const source = isDark.value
    ? props.darkSrc ?? props.lightSrc ?? props.src
    : props.lightSrc ?? props.darkSrc ?? props.src

  return source ? withBase(source) : ''
})
</script>

<template>
  <figure class="mark2-doc-shot">
    <img :src="imageSrc" :alt="alt" loading="lazy" />
    <figcaption v-if="caption">{{ caption }}</figcaption>
  </figure>
</template>
