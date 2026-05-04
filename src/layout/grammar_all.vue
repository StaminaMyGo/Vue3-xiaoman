<template>
  <ParentView></ParentView>
  <WatchDemo></WatchDemo>
  <vue3_vbind></vue3_vbind>
  <vue3_computed></vue3_computed>
</template>

<script setup lang="ts">
import vue3_computed from '@/grammar/vue3_computed.vue'
import vue3_vbind from '@/grammar/vue3_vbind.vue'
import WatchDemo from '@/grammar/WatchDemo.vue'
import ParentView from '@/grammar/PropsEmits/ParentView.vue'
</script>

<style scoped></style>
