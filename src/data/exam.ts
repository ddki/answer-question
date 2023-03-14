import type { ExamInfo } from "./type"
import pmp1 from "@/assets/json/pmp-1.json"
import pmp2 from "@/assets/json/pmp-2.json"
import pmp3 from "@/assets/json/pmp-3.json"
import pmp4 from "@/assets/json/pmp-4.json"

const data: Array<ExamInfo> = [
  pmp1,
  pmp2,
  pmp3,
  pmp4
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