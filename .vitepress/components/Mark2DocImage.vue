<script setup lang="ts">
import { computed, ref } from 'vue'
import { useData, withBase } from 'vitepress'
import Mark2ImageLightbox from './Mark2ImageLightbox.vue'

const props = withDefaults(defineProps<{
  alt: string
  caption?: string
  darkSrc?: string
  lightSrc?: string
  src?: string
}>(), {
  caption: ''
})

const { isDark, lang } = useData()
const lightbox = ref<InstanceType<typeof Mark2ImageLightbox> | null>(null)
const isZh = computed(() => lang.value === 'zh-CN')

const imageSrc = computed(() => {
  const source = isDark.value
    ? props.darkSrc ?? props.lightSrc ?? props.src
    : props.lightSrc ?? props.darkSrc ?? props.src

  return source ? withBase(source) : ''
})
</script>

<template>
  <figure class="mark2-doc-shot">
    <button type="button" :aria-label="`${isZh ? '放大图片' : 'Enlarge image'}: ${alt}`" @click="lightbox?.open(imageSrc, alt)">
      <img :src="imageSrc" :alt="alt" loading="lazy" />
    </button>
    <figcaption v-if="caption">{{ caption }}</figcaption>
    <Mark2ImageLightbox ref="lightbox" :close-label="isZh ? '关闭图片' : 'Close image'" />
  </figure>
</template>
