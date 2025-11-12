// student.js
// 管理学生数据和状态更新

// 学生类
class Student {
  constructor(id, name, algoLevel, stress, talent) {
    this.id = id; // 唯一ID
    this.name = name; // 学生姓名
    this.algoLevel = algoLevel; // 算法水平 (0-100)
    this.stress = stress; // 压力 (0-100)
    this.talent = talent; // 天赋 (0.5-1.5，影响学习效率)
    this.task = null; // 当前任务 ('train', 'rest', null)
  }

  // 每日状态更新
  updateDaily() {
    if (this.task === "train") {
      // 训练：提升算法水平，增加压力
      this.algoLevel = Math.min(100, this.algoLevel + this.talent * 2);
      this.stress = Math.min(100, this.stress + 10);
    } else if (this.task === "rest") {
      // 休息：降低压力
      this.stress = Math.max(0, this.stress - 20);
    }
    // 高压力降低效率
    if (this.stress > 80) {
      this.algoLevel = Math.max(0, this.algoLevel - 1);
      return `${this.name} 压力过高，训练效率下降！`;
    }
    return null;
  }

  // 参加比赛的表现
  compete(difficulty) {
    // 简单评分：算法水平 - 压力影响 vs 题目难度
    const performance = this.algoLevel * (1 - this.stress / 200) - difficulty;
    return Math.max(0, performance);
  }
}

// 初始化学生
export function initStudents() {
  return [
    new Student(1, "张三", 20, 30, 1.0),
    new Student(2, "李四", 25, 20, 1.2),
    new Student(3, "王五", 15, 40, 0.8),
  ];
}

export { Student };
