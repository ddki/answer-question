<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from 'vue-router'
import { getExamRoutes } from '@/data/exam'
const route = useRoute()
const exams = getExamRoutes()
</script>

<template>
  <header>
    <nav>
      <RouterLink
        :to="{ name: 'exam', params: { id: exam.id } }"
        v-for="exam in exams"
        :key="exam.id"
        >{{ exam.name }}</RouterLink
      >
    </nav>
  </header>
  <main>
    <RouterView :key="route.fullPath" />
  </main>
</template>

<style scoped>
header {
  width: 100%;
  height: 5rem;
  font-size: 1.5rem;
  align-content: center;
  box-shadow: 2px 2px 4px #232327;
}
nav {
  padding: 0 2rem;
  display: flex;
  flex-direction: row;
  height: 100%;
  align-self: center;
  align-content: center;
  justify-content: space-between;
}
nav a {
  align-self: center;
  display: inline-flex;
}

main {
  margin-top: 2rem;
  width: 100%;
  box-shadow: 2px 2px 4px #232327;
}
</style>
