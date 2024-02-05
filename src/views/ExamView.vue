<script setup lang="ts">
import QuestionItem from '../components/question/QuestionItem.vue'
import { getExamData } from '@/data/exam'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const data = ref(getExamData(route.params.id[0]))
console.log('data = ', getExamData(route.params.id[0]))

const correctNum = ref(0)

const countCorrect = (num: number) => {
  if (correctNum.value < 1 && num < 0) {
    correctNum.value += 0
  } else {
    correctNum.value += num
  }
}
</script>

<template>
  <div class="question_box">
    <p>分数：{{ correctNum }}</p>
    <QuestionItem
      v-for="question in data?.questions"
      :key="question.number"
      :number="question.number"
      :content="question.content"
      :options="question.options"
      :answer-options="question.answerOptions"
      :analysis="question.analysis"
      @count-correct="countCorrect"
    />
  </div>
</template>

<style scoped>
.question_box {
  width: 100%;
}
</style>
