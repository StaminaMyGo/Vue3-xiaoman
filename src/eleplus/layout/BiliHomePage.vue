<template>
  这里是Element Plus搭建的页面
  <el-container class="bili-container">
    <!-- 顶部导航栏 -->
    <el-header class="bili-header">
      <div class="logo">Bilibili</div>
      <!-- 输入框组件 -->
      <div class="search-bar">
        <el-input v-model="searchQuery" placeholder="搜索视频、番剧或UP主" clearable> </el-input>
      </div>
      <div class="user-actions">
        <!-- 头像组件 -->
        <el-avatar
          :size="40"
          src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
        ></el-avatar>
        <!-- 按钮组件 -->
        <el-button type="primary" class="upload-btn">投稿</el-button>
      </div>
    </el-header>

    <!-- 主体内容区 -->
    <el-main class="bili-main">
      <!-- el-row & el-col: Element Plus 的 24 分栏网格系统 -->
      <!-- :gutter="20" 表示列与列之间的间距为 20px -->
      <el-row :gutter="20">
        <!-- 响应式布局：xs(手机)占24格全宽，sm(平板)占12格半宽，md占8格(一行3个)，lg占6格(一行4个) -->
        <el-col
          v-for="video in videoList"
          :key="video.id"
          :xs="24"
          :sm="12"
          :md="8"
          :lg="6"
          class="video-col"
        >
          <el-card shadow="hover" class="video-card" :body-style="{ padding: '0px' }">
            <el-image :src="video.cover" class="video-cover" fit="cover"> </el-image>
            <div class="video-info">
              <h3 class="video-title">{{ video.title }}</h3>
              <div class="video-meta">
                <span class="up-name">UP {{ video.author }}</span>
                <span class="view-count">{{ video.views }} 播放</span>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
const searchQuery = ref('')

interface Video {
  id: number
  title: string
  cover: string
  author: string
  views: string
}
const videoList = ref<Video[]>(
  Array.from({ length: 12 }).map((_, index) => ({
    id: index + 1,
    title: `这是一个精彩的视频标题 - 第 ${index + 1} 集`,
    cover: `/images/0721.png`,
    author: '某知名UP主',
    views: (Math.random() * 100).toFixed(1) + '万',
  })),
)
</script>

<style scoped>
.bili-container {
  min-height: 100vh;
  background-color: aquamarine;
}
.bili-header {
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
  padding: 0 24px;
  position: sticky;
  top: 0;
  z-index: 100;
}
.logo {
  font-size: 20px;
  font-weight: bold;
  color: #fb7299;
}

.search-bar {
  width: 400px;
}
.user-actions {
  display: flex;
  align-items: center;
  gap: 16px;
}
.upload-btn {
  background-color: #fb7299;
  /* 消除el自带border */
  border-color: #fc8bab;
}
.upload-btn:hover {
  background-color: #fc8bab;
  border-color: #fc8bab;
}
/* 主体内容与卡片样式 */
.bili-main {
  padding: 20px;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
}
.video-col {
  margin-bottom: 20px;
}

.video-card {
  border-radius: 6px;
  border: none;
  cursor: pointer;
  transition: transform 0.2s;
}

.video-card:hover {
  transform: translateY(-4px);
}

.video-cover {
  width: 100%;
  height: 160px;
  display: block;
}

.video-info {
  padding: 12px;
}

.video-title {
  font-size: 14px;
  margin: 0 0 8px 0;
  line-height: 1.4;
  height: 38px; /* 固定高度，处理标题溢出 */
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.video-meta {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: #9499a0;
}
</style>
