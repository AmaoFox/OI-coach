function startGame(mode) {
  alert(
    `你选择了 ${
      mode === "simplified" ? "简化模式" : "真实模式"
    }！游戏即将开始...`
  );
  // 这里可以添加更多逻辑，比如跳转页面或加载游戏状态
  // 例如：window.location.href = 'game.html?mode=' + mode;
}
