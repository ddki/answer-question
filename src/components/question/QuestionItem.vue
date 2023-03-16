<script setup lang="ts">
import { reactive, ref, type Ref } from 'vue'

const props = defineProps<{
  number: number
  content: string
  options: Array<{
    value: string
    content: string
  }>
  answerOptions: Array<string>
  analysis: string
}>()

const emit = defineEmits(['countCorrect'])

const selectOptions: Ref<Array<string>> = ref([])
const state = reactive({
  showAnalysis: false
})

console.log(props.analysis)
const change = () => {
  if (props.answerOptions.length > 1) {
    if (props.answerOptions.length === selectOptions.value.length) {
      const answer = selectOptions.value.filter((answerItem) =>
        props.answerOptions.includes(answerItem)
      )
      console.log('多选', props.answerOptions, answer)
      if (props.answerOptions.length != answer.length) {
        state.showAnalysis = true
      } else {
        if (state.showAnalysis === false) {
          emit('countCorrect', 1)
        }
      }
    }
  } else {
    const selectValue: string = selectOptions.value[0]
    const answer = props.answerOptions.filter((answer) => selectValue === answer)
    console.log('单选', props.answerOptions, answer)
    if (props.answerOptions.length != answer.length) {
      state.showAnalysis = true
    } else {
      if (state.showAnalysis === false) {
        emit('countCorrect', 1)
      }
    }
  }
}
</script>

<template>
  <div class="question">
    <p class="question_title">
      <span class="question_number"> {{ number }}. </span>
      <span v-html="content"></span>
    </p>
    <el-checkbox-group
      v-model="selectOptions"
      :max="answerOptions.length"
      @change="change"
      v-if="answerOptions.length > 1"
    >
      <el-checkbox v-for="option in options" :key="option" :label="option.value">
        <template #default>
          <span>{{ option.value }}. </span><span v-html="option.content"></span>
        </template>
      </el-checkbox>
    </el-checkbox-group>
    <el-radio-group v-model="selectOptions" @change="change" v-else>
      <el-radio v-for="option in options" :key="option" :label="option.value">
        <template #default>
          <span>{{ option.value }}. </span><span v-html="option.content"></span>
        </template>
      </el-radio>
    </el-radio-group>
    <div class="question_analysis" v-show="state.showAnalysis">
      <p class="question_answerOptions">正确答案：{{ answerOptions.toString() }}</p>
      <p class="question_analysis_content" v-html="analysis"></p>
    </div>
  </div>
</template>

<style scoped>
.question {
  padding: 2rem;
  border-bottom: 0.05rem solid #232327;
}
.question_title {
  font-size: 1.2rem;
}
.question_number {
  margin-right: 0.5rem;
}

.question_analysis {
  padding: 1rem 2rem;
}
</style>
