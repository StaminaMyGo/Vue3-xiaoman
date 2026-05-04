<template>
  <div class="demo-container">
    <h3>这里是计算属性示例</h3>

    <!-- 输入框绑定原始数据 -->
    <div class="input-group">
      <label>输入文字: </label>
      <input v-model="message" placeholder="请输入内容..." />
    </div>

    <hr />

    <div class="result-display">
      <p><strong>原始字符串:</strong> {{ message }}</p>
      <!-- 使用计算属性 -->
      <p>
        <strong>计算后反转字符串:</strong> <span class="highlight">{{ reversedMessage }}</span>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

// 1. 定义响应式原始数据
const message = ref<string>('RUNOOB!!')

// 2. 定义计算属性
// 当 message 改变时，reversedMessage 会自动更新并缓存结果
const reversedMessage = computed(() => {
  return message.value.split('').reverse().join('')
})
</script>

<style scoped>
.demo-container {
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  max-width: 400px;
  background-color: #f9f9f9;
}

.input-group {
  margin-bottom: 15px;
}

input {
  padding: 5px 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

.highlight {
  color: #42b983;
  font-weight: bold;
}

hr {
  border: 0;
  border-top: 1px solid #eee;
  margin: 15px 0;
}
</style>
