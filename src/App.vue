<script setup lang="ts">
import Search from "./components/Search.vue";
  import { darkTheme, NConfigProvider } from 'naive-ui'

</script>

<template>
  <n-config-provider :theme="darkTheme">

  <main class="main">
      <h1 class="title">Clone Hero Tracklist</h1>
      <Search />
  </main>
  </n-config-provider>
</template>

<style scoped>
.title {
  font-size: 85px;
  padding: 10px;
}
.main{
  margin: auto;
  width: 70%;
  padding: 10px;
}
</style>
