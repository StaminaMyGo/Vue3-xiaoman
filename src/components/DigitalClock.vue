<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

// 存储当前时间的响应式变量
const currentTime = ref(new Date())
let timer: number | undefined

// 更新时间的函数
const updateTime = () => {
  currentTime.value = new Date()
}

// 格式化时间，确保显示两位数（例如 09:05:01）
const formatNumber = (num: number) => num.toString().padStart(2, '0')

onMounted(() => {
  // 每秒更新一次
  timer = window.setInterval(updateTime, 1000)
})

onUnmounted(() => {
  // 组件销毁时清除定时器，防止内存泄漏
  if (timer) clearInterval(timer)
})
</script>

<template>
  <!-- 外层容器：使用 Flex 居中，背景色，圆角和阴影 -->
  <div
    class="flex items-center justify-center p-8 bg-gray-900 rounded-3xl shadow-2xl border-4 border-gray-800 w-fit mx-auto"
  >
    <div class="flex space-x-4 text-6xl md:text-8xl font-mono font-bold tracking-tighter">
      <!-- 小时 -->
      <div class="flex flex-col items-center">
        <span class="text-blue-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">
          {{ formatNumber(currentTime.getHours()) }}
        </span>
        <span class="text-xs uppercase text-gray-500 mt-2">Hours</span>
      </div>

      <!-- 分隔符 -->
      <span class="text-gray-600 animate-pulse">:</span>

      <!-- 分钟 -->
      <div class="flex flex-col items-center">
        <span class="text-emerald-500 drop-shadow-[0_0_15px_rgba(16,185,129,0.5)]">
          {{ formatNumber(currentTime.getMinutes()) }}
        </span>
        <span class="text-xs uppercase text-gray-500 mt-2">Minutes</span>
      </div>

      <!-- 分隔符 -->
      <span class="text-gray-600 animate-pulse">:</span>

      <!-- 秒 -->
      <div class="flex flex-col items-center">
        <span class="text-rose-500 drop-shadow-[0_0_15px_rgba(244,63,94,0.5)]">
          {{ formatNumber(currentTime.getSeconds()) }}
        </span>
        <span class="text-xs uppercase text-gray-500 mt-2">Seconds</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 这里不需要写任何 CSS，全部由 Tailwind 类完成 */
</style>
