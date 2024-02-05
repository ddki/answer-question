interface Question {
  number: number;
  content: string;
  options: Array<Option>;
  answerOptions: Array<string>;
  analysis: string;
}

interface Option {
  value: string;
  content: string;
} 

interface ExamInfo {
  id: number;
  name: string;
  questions: Array<Question>;
}

export type { Question, Option, ExamInfo }