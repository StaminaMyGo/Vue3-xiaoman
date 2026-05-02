<template>
  <!-- 1. bg-white: 背景白色 | p-6: 内边距 | rounded-xl: 大圆角 | shadow-lg: 投影 -->
  <div class="max-w-sm mx-auto bg-red-300 p-6 rounded-xl shadow-lg flex items-center space-x-4">
    <div class="shrink-0">
      <div
        class="h-16 w-12 bg-blue-500 rounded-full flex justify-center items-center text-white font-bold"
      >
        AJ
      </div>
    </div>
    <div>
      <div class="text-xl font-bold text-blue-800">阿杰导师</div>
      <p class="text-gray-500 text-sm">Vue3 + Tailwind 学习中</p>
    </div>
  </div>

  <div class="p-10 flex flex-col md:flex-row">
    <button
      class="px-6 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 active:scale-95 transition-all"
    >
      保存修改
    </button>
    <button
      class="px-6 py-2 border-2 border-indigo-500 text-indigo-500 rounded-lg hover:bg-indigo-50 transition-colors"
    >
      取消
    </button>
  </div>
  <div class="max-w-md mx-auto mt-10 space-y-2">
    <div
      v-for="item in tasks"
      :key="item.name"
      class="flex justify-around items-center p-4 border-l-4 bg-gray-50"
      :class="{
        'border-green-500': item.status === 'done',
        'border-yellow-500': item.status === 'pending',
        'border-gray-300': item.status === 'todo',
      }"
    >
      <span class="font-semibold">{{ item.name }}</span>
      <span
        :class="[
          'px-2 py-1 text-xs rounded-full',
          item.status === 'done' ? 'bg-green-100 text-green-700' : 'bg-gray-200 text-gray-600',
        ]"
        >{{ item.status }}</span
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
const tasks = [
  { name: '编写代码', status: 'done' },
  { name: '由于报错抓狂', status: 'pending' },
  { name: '解决报错并狂喜', status: 'todo' },
]
</script>

<style scoped></style>
