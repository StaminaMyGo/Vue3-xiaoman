<template>
  <div class="box">
    <h2>父组件 (持有状态)</h2>
    <p>当前用户: {{ user.name }} | 等级: {{ user.level }}</p>
    <hr />
    <!-- 通过 props 传递数据，通过 emit 监听子组件的修改事件 -->
    <ChildComponent :user-data="user" @update-level="handleUpdate" />
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import ChildComponent from './ChildComponent.vue'

const user = reactive({
  name: '张三',
  level: 1,
})

const handleUpdate = (newLevel: number) => {
  user.level = newLevel
}
</script>
<style scoped>
.box {
  padding: 20px;
  border: 1px solid #646cff;
  border-radius: 8px;
}
</style>
