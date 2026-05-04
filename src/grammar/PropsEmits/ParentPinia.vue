<template>
  <div class="box">
    <h2>父组件 (Pinia 重构)</h2>
    <!-- 直接从 store 读数据 -->
    <p>当前用户: {{ userStore.name }} | 等级: {{ userStore.level }}</p>
    <hr />
    <ChildComponent />
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/user'
import ChildComponent from './ChildComponentPinia.vue'

const userStore = useUserStore()
</script>
