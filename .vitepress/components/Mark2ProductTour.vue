<script setup lang="ts">
import { computed, ref } from 'vue'
import { useData, withBase } from 'vitepress'
import { Expand, FileText, GitBranch, Sparkles } from 'lucide-vue-next'
import Mark2ImageLightbox from './Mark2ImageLightbox.vue'

const props = defineProps<{ locale?: 'en' | 'zh' }>()
const { isDark } = useData()
const active = ref(0)
const tabs = ref<HTMLButtonElement[]>([])
const lightbox = ref<InstanceType<typeof Mark2ImageLightbox> | null>(null)
const isZh = computed(() => props.locale === 'zh')
const panels = computed(() => [
  { label: isZh.value ? '可视化编辑' : 'Visual editor', icon: FileText, file: 'editor', alt: isZh.value ? 'Mark2 可视化编辑器中的 Markdown 文档' : 'A Markdown document in the Mark2 visual editor', caption: isZh.value ? '可视化编辑与 Markdown 源码模式使用同一份文档。' : 'Visual and source editing use the same Markdown document.' },
  { label: isZh.value ? 'AI 助手' : 'AI assistant', icon: Sparkles, file: 'agent', alt: isZh.value ? 'Mark2 Agent 在文档旁辅助审阅草稿' : 'Mark2 Agent helping review a draft beside the document', caption: isZh.value ? '在文档旁获得改写、总结与翻译帮助。' : 'Rewrite, summarize, and translate with help beside your document.' },
  { label: isZh.value ? 'Git 版本管理' : 'Git workflow', icon: GitBranch, file: 'git', alt: isZh.value ? 'Mark2 Git 面板中的文件变更和提交记录' : 'File changes and commit history in the Mark2 Git panel', caption: isZh.value ? '在 Git 面板中查看文件差异与提交记录。' : 'Review file changes and commit history in the Git panel.' }
])
const panel = computed(() => panels.value[active.value])
const src = computed(() => withBase(`/mark2-${panel.value.file}-${isDark.value ? 'dark' : 'light'}.png`))

function navigate(event: KeyboardEvent) {
  let next = active.value
  if (event.key === 'ArrowRight') next = (next + 1) % panels.value.length
  else if (event.key === 'ArrowLeft') next = (next + panels.value.length - 1) % panels.value.length
  else if (event.key === 'Home') next = 0
  else if (event.key === 'End') next = panels.value.length - 1
  else return
  event.preventDefault()
  active.value = next
  tabs.value[next]?.focus()
}
</script>

<template>
  <div class="mark2-tour">
    <div class="mark2-tour-tabs" role="tablist" :aria-label="isZh ? '探索 Mark2' : 'Explore Mark2'" @keydown="navigate">
      <button v-for="(item, index) in panels" :id="`tour-tab-${index}`" :key="item.file" :ref="(el) => { if (el) tabs[index] = el as HTMLButtonElement }" type="button" role="tab" :aria-selected="active === index" :aria-controls="`tour-panel-${index}`" :tabindex="active === index ? 0 : -1" @click="active = index">
        <component :is="item.icon" :size="16" aria-hidden="true" />{{ item.label }}
      </button>
    </div>
    <div v-for="(item, index) in panels" v-show="active === index" :id="`tour-panel-${index}`" :key="item.file" role="tabpanel" :aria-labelledby="`tour-tab-${index}`" class="mark2-tour-panel">
      <button v-if="active === index" type="button" class="mark2-tour-image" :aria-label="isZh ? '放大产品截图' : 'Enlarge product screenshot'" @click="lightbox?.open(src, panel.alt)">
        <img :src="src" :alt="panel.alt" :width="item.file === 'git' ? 1375 : 1275" :height="item.file === 'git' ? 923 : 851" fetchpriority="high" />
        <span class="mark2-tour-expand"><Expand :size="17" aria-hidden="true" /></span>
      </button>
      <p>{{ item.caption }}</p>
    </div>
    <Mark2ImageLightbox ref="lightbox" :close-label="isZh ? '关闭图片' : 'Close image'" />
  </div>
</template>
