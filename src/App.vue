<template>
  <div>这里是App.vue</div>
  <TimeLine></TimeLine>
  <BiliHomePage></BiliHomePage>
  <hr />
  <!-- <MyChartApi></MyChartApi> -->
  <!-- <hr />
  <MyChart></MyChart>
  <hr />
  <UserCard></UserCard>
  <hr />
  <DigitalClock></DigitalClock>
  <hr />
  <base_know_ref></base_know_ref>
  <hr />
  <base_know></base_know> -->
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import base_know from './teaching/base_know.vue'
import base_know_ref from './teaching/base_know_ref.vue'
import DigitalClock from './components/DigitalClock.vue'
import UserCard from './components/UserCard.vue'
import MyChart from './components/MyChart.vue'
import MyChartApi from './components/MyChartApi.vue'
import BiliHomePage from './eleplus/layout/BiliHomePage.vue'
import TimeLine from './components/TimeLine.vue'
</script>
html, body { margin: 0; padding: 0; font-family: 'Helvetica Neue', Helvetica, 'PingFang SC',
'Hiragino Sans GB', 'Microsoft YaHei', '微软雅黑', Arial, sans-serif; }
<style scoped></style>
