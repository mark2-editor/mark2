import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import Mark2DocImage from '../components/Mark2DocImage.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('Mark2DocImage', Mark2DocImage)
  }
} satisfies Theme
