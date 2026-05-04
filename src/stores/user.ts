import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  // 状态 (State)
  const name = ref('张三')
  const level = ref(1)

  // 动作 (Actions) - 相当于 methods，支持异步
  function incrementLevel() {
    level.value++
  }

  return { name, level, incrementLevel }
})
