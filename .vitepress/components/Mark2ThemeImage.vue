<script setup lang="ts">
import { computed } from 'vue'
import { useData, withBase } from 'vitepress'

const props = defineProps<{
  darkSrc: string
  lightSrc: string
  alt: string
}>()

const { isDark } = useData()
const src = computed(() => withBase(isDark.value ? props.darkSrc : props.lightSrc))
</script>

<template>
  <img :src="src" :alt="alt" />
</template>
