// main.js
// 游戏入口和事件绑定

import { initGame, nextDay } from "./game.js";

window.onload = () => {
  initGame();
  document.getElementById("next-day").addEventListener("click", nextDay);
};

// 全局暴露 assignTask 以供UI调用
window.assignTask = assignTask;
