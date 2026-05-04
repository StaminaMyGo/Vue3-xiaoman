<template>
  <div class="demo-container">
    <h3>v-bind 指令示例</h3>

    <!-- 1. 基础属性绑定 (简写为 :) -->
    <section>
      <h4>1. 基础属性绑定</h4>
      <img :src="imageInfo.url" :alt="imageInfo.text" :title="imageInfo.text" width="150" />
      <p><a :href="siteUrl" target="_blank">点击跳转到官网</a></p>
    </section>

    <hr />

    <!-- 2. 动态 Class 绑定 -->
    <section>
      <h4>2. 动态 Class 绑定</h4>
      <!-- 对象语法：如果 isActive 为 true，则应用 active 类 -->
      <div class="static-box" :class="{ 'active-box': isActive, 'error-border': hasError }">
        当前状态: {{ isActive ? '激活' : '未激活' }}
      </div>
      <button @click="isActive = !isActive">切换激活状态</button>
    </section>

    <hr />

    <!-- 3. 动态 Style 绑定 -->
    <section>
      <h4>3. 动态 Style 绑定</h4>
      <!-- 直接绑定一个样式对象 -->
      <div :style="dynamicStyle">我可以动态改变颜色和大小</div>
      <button @click="fontSize += 2">变大</button>
      <button @click="fontSize -= 2">变小</button>
    </section>

    <hr />

    <!-- 4. 绑定布尔属性 (如 disabled) -->
    <section>
      <h4>4. 布尔属性绑定</h4>
      <input type="text" :disabled="isButtonDisabled" placeholder="被禁用时长..." />
      <button @click="isButtonDisabled = !isButtonDisabled">
        {{ isButtonDisabled ? '点我启用输入框' : '点我禁用输入框' }}
      </button>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue'

// 1. 响应式对象绑定属性
const imageInfo = reactive({
  url: 'https://vuejs.org/images/logo.png',
  text: 'Vue Logo',
})
const siteUrl = ref('https://cn.vuejs.org/')

// 2. Class 绑定逻辑
const isActive = ref(true)
const hasError = ref(false)

// 3. Style 绑定逻辑
const fontSize = ref(16)
const dynamicStyle = computed(() => ({
  color: isActive.value ? '#42b983' : '#ff6666',
  fontSize: fontSize.value + 'px',
  transition: 'all 0.3s ease',
}))

// 4. 布尔属性逻辑
const isButtonDisabled = ref(false)
</script>

<style scoped>
.demo-container {
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 12px;
}

.static-box {
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #999;
}

/* 动态类样式 */
.active-box {
  background-color: #e8f5e9;
  color: #2e7d32;
  border-color: #2e7d32;
}

.error-border {
  border: 2px solid red;
}

button {
  margin-right: 8px;
  cursor: pointer;
}
</style>
