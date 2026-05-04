<template>
  <div class="demo-container">
    <h3>watch 侦听器示例</h3>

    <!-- 示例 1: 基本侦听 -->
    <section>
      <h4>1. 基础侦听 (计数器)</h4>
      <p>当前计数: {{ count }}</p>
      <button @click="count++">增加</button>
      <p class="log">{{ countLog }}</p>
    </section>

    <hr />

    <!-- 示例 2: 深度侦听对象 -->
    <section>
      <h4>2. 深度侦听 (对象内部属性)</h4>
      <p>用户名: {{ user.name }}</p>
      <input v-model="user.name" placeholder="修改名字" />
      <p class="log">{{ userLog }}</p>
      <p>年龄: {{ user.info.age }}</p>
      <input v-model="user.info.age" placeholder="修改年龄" />
      <p class="log">{{ ageLog }}</p>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, watch } from 'vue'

// --- 示例 1: 侦听基本类型 ---
const count = ref(0)
const countLog = ref('等待变化...')

// 语法: watch(来源, 回调函数)
watch(count, (newValue, oldValue) => {
  countLog.value = `计数从 ${oldValue} 变为 ${newValue}`
  console.log('执行了副作用操作，例如保存到本地存储')
})

// --- 示例 2: 侦听对象 ---
const user = reactive({
  name: 'Gemini',
  info: {
    age: 18,
  },
})
const userLog = ref('等待输入...')
const ageLog = ref('等待输入年龄...')

// 侦听整个 reactive 对象，默认就是深度侦听
watch(
  user,
  (newVal) => {
    userLog.value = `检测到对象变化，新名字: ${newVal.name}`
  },
  { deep: false },
)
// 2. 专门监听深层嵌套的年龄
// 注意：即使是深层属性，只要用了 getter () => user.info.age，也能精准捕捉
watch(
  () => user.info.age,
  (newAge, oldAge) => {
    ageLog.value = `年龄从 ${oldAge} 岁变到了 ${newAge} 岁`
    console.log('可以单独为年龄执行 API 提交')
  },
)
/**
 * 进阶提示：如果只想侦听对象中的某一个属性
 * 必须使用 getter 函数形式：
 * watch(() => user.name, (newName) => { ... })
 */
</script>

<style scoped>
.demo-container {
  padding: 20px;
  border: 1px solid #646cff;
  border-radius: 8px;
}
.log {
  color: #666;
  font-size: 0.9em;
  background: #f0f0f0;
  padding: 5px;
  margin-top: 10px;
}
button {
  margin-top: 5px;
}
input {
  margin-top: 5px;
  padding: 4px;
}
</style>
