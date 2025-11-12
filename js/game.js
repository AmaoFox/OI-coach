// game.js
// 管理游戏核心循环和教练状态

import { initStudents, Student } from "./student.js";
import { renderStudents, renderCalendar } from "./ui.js";
import { saveGame } from "./storage.js";

// 游戏状态
let gameState = {
  day: 1, // 当前天数
  coachEnergy: 100, // 教练精力 (0-100)
  students: [], // 学生列表
  voice: 0, // 教练声望
};

// 初始化游戏
export function initGame() {
  gameState.students = initStudents();
  loadGame(); // 尝试加载存档
  renderStudents(gameState.students);
  renderCalendar(gameState.day);
}

// 推进一天
export function nextDay() {
  if (gameState.coachEnergy < 10) {
    alert("教练精力不足，无法推进！");
    return;
  }
  gameState.day += 1;
  gameState.coachEnergy = Math.max(0, gameState.coachEnergy - 10); // 每日消耗精力
  let events = [];

  // 更新每个学生状态
  gameState.students.forEach((student) => {
    const event = student.updateDaily();
    if (event) events.push(event);
  });

  // 每月最后一天触发比赛
  if (gameState.day % 30 === 0) {
    runCompetition();
  }

  // 渲染UI
  renderStudents(gameState.students);
  renderCalendar(gameState.day);
  saveGame(gameState);

  // 显示事件
  if (events.length > 0) {
    alert(events.join("\n"));
  }
}

// 为学生分配任务
export function assignTask(studentId, task) {
  if (gameState.coachEnergy < 5) {
    alert("教练精力不足，无法分配任务！");
    return;
  }
  const student = gameState.students.find((s) => s.id === studentId);
  if (student) {
    student.task = task;
    gameState.coachEnergy -= 5; // 分配任务消耗精力
    renderStudents(gameState.students);
    saveGame(gameState);
  }
}

export { gameState };
