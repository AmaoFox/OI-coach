// ui.js
// 管理UI渲染和交互

import { assignTask } from "./game.js";

// 渲染学生列表
export function renderStudents(students) {
  const container = document.getElementById("students");
  container.innerHTML = "<h2>学生列表</h2>";
  students.forEach((student) => {
    const div = document.createElement("div");
    div.className = "student";
    div.innerHTML = `
      <p>${student.name} | 算法: ${student.algoLevel.toFixed(
      1
    )} | 压力: ${student.stress.toFixed(1)} | 天赋: ${student.talent}</p>
      <p>当前任务: ${student.task || "无"}</p>
      <button onclick="assignTask(${student.id}, 'train')">训练</button>
      <button onclick="assignTask(${student.id}, 'rest')">休息</button>
    `;
    container.appendChild(div);
  });
}

// 渲染日历
export function renderCalendar(day) {
  const container = document.getElementById("calendar");
  container.innerHTML = `<h2>第 ${day} 天</h2><p>教练精力: ${gameState.coachEnergy}</p>`;
}

// 渲染比赛结果
export function renderCompetition(results, difficulty) {
  const container = document.getElementById("competition");
  container.innerHTML = `<h2>比赛结果 (题目难度: ${difficulty})</h2>`;
  results.forEach((result) => {
    const p = document.createElement("p");
    p.textContent = result;
    container.appendChild(p);
  });
}
