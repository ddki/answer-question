<script setup lang="ts">
import QuestionItem from '../components/question/QuestionItem.vue'
import { getExamData } from '@/data/exam'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const data = ref(getExamData(route.params.id[0]))
console.log('data = ', getExamData(route.params.id[0]))
</script>

<template>
  <QuestionItem
    v-for="question in data?.questions"
    :key="question.number"
    :number="question.number"
    :content="question.content"
    :options="question.options"
    :answer-options="question.answerOptions"
    :analysis="question.analysis"
  />
</template>
