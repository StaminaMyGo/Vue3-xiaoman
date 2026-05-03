<template>
  <div class="flex flex-col items-center gap-4">
    <div ref="chartRef" class="w-full h-100 bg-green-200 rounded-lg shadow-md p-4"></div>
    <button @click="fetchChartData" class="px-4 py-2 bg-blue-500 text-white rounded shadow">
      刷新数据
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, shallowRef } from 'vue'
import echarts from '@/utils/echarts'
import axios from 'axios'
const chartRef = ref<HTMLElement | null>(null)
const myChartApi = shallowRef<any>(null)

const handleResize = () => myChartApi.value?.resize()
const fetchChartData = async () => {
  if (!myChartApi.value) return

  // 显示加载状态
  myChartApi.value.showLoading({
    text: '正在加载数据...',
    color: '#4c9bfd',
    textColor: '#4c9bfd',
  })
  try {
    const response = await axios.get('http://127.0.0.1:4523/m2/7989577-7742984-default/452285031')
    const { categories, values } = response.data.data

    // 将数据填入配置项 categories values都是data参数里的参数
    myChartApi.value.setOption({
      xAxis: { data: categories },
      series: [
        {
          data: values,
        },
      ],
    })
  } catch (error) {
    console.error('数据请求失败:', error)
  } finally {
    myChartApi.value.hideLoading()
  }
}
onMounted(async () => {
  if (chartRef.value) {
    // 初始化实例
    myChartApi.value = echarts.init(chartRef.value)

    // 设置基础配置
    myChartApi.value.setOption({
      title: { text: 'Apifox实时数据示例' },
      tooltip: { trigger: 'axis' },
      xAxis: {
        type: 'category',
        data: [],
      },
      yAxis: {
        name: '销量',
        data: [],
      },
      series: [
        {
          name: '销量',
          type: 'bar',
          data: [],
          itemStyle: { color: '#4c9bfd' },
        },
      ],
    })
    // 2. 异步获取数据
    await fetchChartData()

    // 3. 监听缩放
    window.addEventListener('resize', handleResize)
  }
})

// 在 onMounted 中添加

// 在 onUnmounted 中移除，防止内存泄漏
onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
  // 建议：组件销毁时释放图表实例
  myChartApi.value?.dispose()
})
</script>

<style scoped></style>
