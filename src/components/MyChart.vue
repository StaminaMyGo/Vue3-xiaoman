<template>
  <!-- 建议将背景色改为更淡的颜色，以便看清图表内容 -->
  <div ref="chartRef" class="w-full h-100 bg-gray-50 rounded-lg shadow-md p-4"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import echarts from '@/utils/echarts'

const chartRef = ref<HTMLElement | null>(null)
let myChart: any = null

onMounted(() => {
  if (chartRef.value) {
    myChart = echarts.init(chartRef.value)

    // 设置配置项
    myChart.setOption({
      title: { text: '多品类销量堆叠统计' },
      // 提示框配置：axis 指示器可以显示该轴上所有堆叠数据的总和
      tooltip: {
        trigger: 'axis',
        axisPointer: { type: 'shadow' },
      },
      // 图例：方便控制显示/隐藏某个系列
      legend: {
        data: ['线上渠道', '线下门店'],
        top: '5%',
        right: '1%',
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '0%',
        containLabel: true,
      },
      xAxis: {
        type: 'category',
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          name: '线上渠道',
          type: 'bar',
          stack: 'total', // 核心参数：只要这个字符串一致，就会堆叠
          emphasis: { focus: 'series' }, // 鼠标悬停高亮当前系列
          data: [120, 132, 101, 134, 90, 230, 210],
        },
        {
          name: '线下门店',
          type: 'bar',
          stack: 'total', // 核心参数：与上面一致
          emphasis: { focus: 'series' },
          data: [220, 182, 191, 234, 290, 330, 310],
        },
      ],
    })

    // 响应式：监听窗口大小变化
    window.addEventListener('resize', handleResize)
  }
})

// 养成良好习惯：组件销毁时移除监听并销毁图表实例
const handleResize = () => myChart?.resize()
onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
  myChart?.dispose()
})
</script>
