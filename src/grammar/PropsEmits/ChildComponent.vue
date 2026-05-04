<template>
  <div class="child-box">
    <h3>子组件</h3>
    <button @click="$emit('update-level', userData.level + 1)">提升等级</button>
  </div>
</template>

<script setup lang="ts">
defineProps<{ userData: { name: string; level: number } }>()
defineEmits(['update-level'])
</script>
<style scoped>
.child-box {
  padding: 20px;
  border: 1px solid #646cff;
  border-radius: 8px;
}
</style>
