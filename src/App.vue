<template>
  <div>这里是App.vue</div>
  <UserCard></UserCard>
  <hr />
  <DigitalClock></DigitalClock>
  <hr />
  <base_know_ref></base_know_ref>
  <hr />
  <base_know></base_know>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import base_know from './teaching/base_know.vue'
import base_know_ref from './teaching/base_know_ref.vue'
import DigitalClock from './components/DigitalClock.vue'
import UserCard from './components/UserCard.vue'
</script>

<style scoped></style>
