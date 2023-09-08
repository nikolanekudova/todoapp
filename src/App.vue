<script setup>
  import MyMenu from "./components/MyMenu.vue"
  import TodoPage from "./components/TodoPage.vue"
</script>

<template>
  <div id="app-wrapper">
    <MyMenu />
    <TodoPage />
  </div>
</template>

<style scoped>
  #app-wrapper {
    display: flex;
    height: 100vh;
  }
</style>
