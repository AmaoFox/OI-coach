// competition.js
// 管理比赛生成和评分

import { gameState } from "./game.js";
import { renderCompetition } from "./ui.js";

// 生成随机比赛题目
function generateQuestion() {
  return {
    difficulty: Math.floor(Math.random() * 50) + 30, // 难度30-80
    type: "算法", // 简化，只用一类
  };
}

// 运行比赛
export function runCompetition() {
  const question = generateQuestion();
  let results = [];

  gameState.students.forEach((student) => {
    const score = student.compete(question.difficulty);
    results.push(`${student.name} 得分: ${score.toFixed(1)}`);
    // 比赛影响压力和声望
    student.stress = Math.min(100, student.stress + 20);
    gameState.voice += score > 50 ? 10 : -5;
  });

  gameState.coachEnergy = Math.min(100, gameState.coachEnergy + 10); // 比赛后恢复精力
  renderCompetition(results, question.difficulty);
}
