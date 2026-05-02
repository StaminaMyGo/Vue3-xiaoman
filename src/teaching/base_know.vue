<script setup lang="ts">
import { ref } from 'vue'
const arr: number[] = [1, 2, 3, 4, 5]
const str: string = '我是一段文字,v-text属性'
const str_html: string = '<section style="color:red">我是一段文字,v-html属性</section>'
const str_if: string = 'C'
const str_show: boolean = true
const event: string = 'click'
const id: string = '123'

const ma = ref('xiaoman123')
const arr_for: string[] = ['xm', 'dm', 'sm']
const style_1 = {
  color: 'red',
  border: '1px solid #ccc',
}
const xxx = () => {
  console.log('点击了xxx按钮')
}
const parents = () => {
  console.log('父级：点击了xxx按钮')
}
</script>

<template>
  <h1>You did it!</h1>
  <div>
    {{ arr.map((v) => ({ num: v })) }}
  </div>
  <div v-text="str"></div>
  <div v-html="str_html"></div>
  <div v-if="str_if == 'A'">v-if属性-A</div>
  <div v-else-if="str_if == 'B'">v-if属性2-B</div>
  <div v-else>v-if属性3-C</div>
  <div v-show="str_show">v-show属性</div>
  <!-- @=v-on: -->
  <div @click="parents">
    <button @[event].stop="xxx">尽情地点击我</button>
  </div>
  <!-- :=v-bind: -->
  <div :id="id">演示v-bind</div>
  <div :style="style_1">演示v-bind -style</div>
  <!-- 运行一个静态类，一个动态类 -->
  <div class="testc" :class="['testa', 'testb']">演示v-bind -style</div>
  <div>
    <input v-model="ma" type="text" />
    <div>{{ ma }}</div>
  </div>

  <div :key="index" v-for="(item, index) in arr_for">{{ index }}-{{ item }}</div>
  <!-- v-once只渲染一次 -->
  <div v-once>v-once</div>
</template>

<style scoped>
.testa {
  color: red;
}
.testb {
  border: 1px solid #ccc;
}
.testc {
  background-color: aqua;
}
</style>
