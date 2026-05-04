<template>
  <div class="child-box">
    <h3>子组件 (Pinia 重构)</h3>
    <!-- 跨级直接修改状态，不再需要 emit -->
    <button @click="userStore.incrementLevel">提升等级</button>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/user'
const userStore = useUserStore()
</script>
