<template>
  <!-- 整体背景颜色类似图中的浅灰色 -->
  <div class="timeline-container">
    <div v-for="(item, index) in timelineData" :key="item.id" class="timeline-item">
      <!-- 1. 左侧日期 -->
      <div class="timeline-date">{{ item.date }}</div>

      <!-- 2. 中间轴线与节点 -->
      <div class="timeline-axis">
        <div class="axis-dot"></div>
        <!-- 最后一项不显示向下延伸的线 -->
        <div class="axis-line" v-if="index !== timelineData.length - 1"></div>
      </div>

      <!-- 3. 右侧内容框 (气泡) -->
      <div class="timeline-content">
        <div class="content-bubble">
          {{ item.content }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// 定义接口
interface TimelineItem {
  id: number
  date: string
  content: string
}

// 模拟你的页面数据
const timelineData = ref<TimelineItem[]>([
  { id: 1, date: '15日', content: 'java注解基本概念' },
  { id: 2, date: '14日', content: 'jQuery实现按照检测用户输入,实时显示与隐藏表单' },
  { id: 3, date: '14日', content: 'springmvc 文件下载' },
  { id: 4, date: '14日', content: 'Thymeleaf 自定义Dialect' },
  { id: 5, date: '13日', content: 'js复制指定内容到粘贴板' },
  { id: 6, date: '13日', content: 'springmvc错误参数传递' },
])
</script>

<style scoped>
/* 容器基础样式 */
.timeline-container {
  padding: 40px 20px;
  background-color: #f0f2f5; /* 契合图片的灰白背景 */
  font-family: sans-serif;
}

/* 每一行都是 Flex 布局 */
.timeline-item {
  display: flex;
  align-items: stretch; /* 让高度拉伸，保证轴线连贯 */
}

/* 1. 左侧日期区域 */
.timeline-date {
  width: 50px;
  flex-shrink: 0;
  text-align: right;
  padding-right: 15px;
  color: #8c8c8c;
  font-size: 14px;
  /* 微调顶部内边距，使其与右侧气泡文本在同一水平线 */
  padding-top: 10px;
}

/* 2. 中间时间轴区域 */
.timeline-axis {
  position: relative;
  width: 20px;
  display: flex;
  justify-content: center;
}

/* 中间的空心圆点 */
.axis-dot {
  position: absolute;
  top: 13px; /* 调整圆点位置 */
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 2px solid #8576b9; /* 主题紫 */
  background-color: #f0f2f5; /* 和页面背景色一致，形成挖空效果 */
  z-index: 2; /* 确保圆点盖在轴线上 */
}

/* 纵向连线 */
.axis-line {
  position: absolute;
  top: 23px; /* 从圆点下方开始 */
  bottom: -13px; /* 向下延伸至下一个节点 */
  width: 2px;
  background-color: #8576b9;
  z-index: 1;
}

/* 3. 右侧气泡区域 */
.timeline-content {
  flex: 1;
  padding-left: 20px;
  padding-bottom: 25px; /* 控制节点之间的垂直间距 */
}

/* 气泡本体 */
.content-bubble {
  position: relative;
  display: inline-block;
  background-color: #8576b9;
  color: #ffffff;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 14px;
  line-height: 1.5;
  box-shadow: 0 2px 6px rgba(133, 118, 185, 0.2);
}

/* 气泡左侧的小三角：利用 CSS border 绘制 */
.content-bubble::before {
  content: '';
  position: absolute;
  left: -10px; /* 定位到气泡外部左侧 */
  top: 12px; /* 垂直方向微调对齐 */
  /* 画三角形的核心逻辑 */
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-right: 10px solid #8576b9; /* 颜色和气泡背景一致 */
}
</style>
