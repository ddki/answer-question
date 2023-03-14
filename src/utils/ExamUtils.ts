import type { ExamInfo } from "@/data/type";

const pmp1 = require("@/assets/json/source/pmp-1.json");
const pmp2 = require("@/assets/json/source/pmp-2.json");
const pmp3 = require("@/assets/json/source/pmp-3.json");
const pmp4 = require("@/assets/json/source/pmp-4.json");

function transform(source: JSON): ExamInfo {
  console.log('开始转换 json = ', source)
  const result: ExamInfo = {
    id: 0,
    name: "",
    questions: []
  };
  console.log('转换结束')
  return result
}

transform(pmp1)

transform(pmp2)

transform(pmp3)

transform(pmp4)