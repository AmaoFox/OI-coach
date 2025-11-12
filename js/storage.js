// storage.js
// 管理游戏数据存储

// 保存游戏
export function saveGame(gameState) {
  localStorage.setItem("oiCoachSim", JSON.stringify(gameState));
}

// 加载游戏
export function loadGame() {
  const saved = localStorage.getItem("oiCoachSim");
  if (saved) {
    const data = JSON.parse(saved);
    gameState.day = data.day;
    gameState.coachEnergy = data.coachEnergy;
    gameState.voice = data.voice;
    gameState.students = data.students.map((s) =>
      Object.assign(new Student(), s)
    );
  }
}
