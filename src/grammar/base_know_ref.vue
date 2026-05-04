<template>
  <div>Ref:{{ Man }}</div>
  <div>shallowRef:{{ man3 }}</div>
  <button @click="change">修改</button>
</template>

<script setup lang="ts">
import { ref, isRef, shallowRef, reactive } from 'vue'
type M = {
  name: string
}
const Man = ref<M>({ name: 'xiaoman' })
const man2 = { name: 'xiaoman' }
const man3 = shallowRef({ name: 'xiaoman2' })

// ref 深层次 shallowRef浅层次响应，二者不能同时写，不然ref的刷新或影响shallowRef

const change = () => {
  // Man.value.name = 'daman'
  man3.value.name = 'daman3'
  // console.log(Man)
  // console.log(isRef(Man))
  // console.log(isRef(man2))
  console.log(man3)
}
</script>

<style scoped></style>
