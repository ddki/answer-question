import type { ExamInfo } from "./type"

const data: Array<ExamInfo> = [
  {
    id: 1,
    name: 'PMP冲刺模拟试题（一）',
    questions: [
      {
        number: 1,
        content: '测试',
        answerOptions: ['C'],
        analysis: '我是解析',
        options: [
          {
            value: 'A',
            content: '选项A'
          },
          {
            value: 'B',
            content: '选项B'
          },
          {
            value: 'C',
            content: '选项C'
          },
          {
            value: 'D',
            content: '选项D'
          }
        ]
      },
      {
        number: 2,
        content: '测试2',
        answerOptions: ['A', 'C'],
        analysis: '我是解析',
        options: [
          {
            value: 'A',
            content: '选项A'
          },
          {
            value: 'B',
            content: '选项B'
          },
          {
            value: 'C',
            content: '选项C'
          },
          {
            value: 'D',
            content: '选项D'
          }
        ]
      }
    ]
  },
  {
    id: 2,
    name: 'PMP冲刺模拟试题（二）',
    questions: []
  },
  {
    id: 3,
    name: 'PMP冲刺模拟试题（三）',
    questions: []
  }
]

const getExamData = (id: string) => {
  return data.find(item => item.id.toString() === id)
}

const getExamRoutes = () => {
  return data.map(item => {
    return {
      id: item.id,
      name: item.name
    }
  })
}

export { getExamData, getExamRoutes }