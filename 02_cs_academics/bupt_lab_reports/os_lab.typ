#import "../../00_core_engine/bupt_report_core.typ": bupt-report

#show: bupt-report.with(
  course: "操作系统",
  exp-name: "进程管理与内存分配实现",
  author: "您的姓名",
  student-id: "您的学号"
)

= 实验目的
深入理解 Linux 内核结构，掌握进程调度逻辑。

= 实验环境
Linux / WSL，内核版本等（按实际填写）。

= 核心代码实现
```c
void schedule() {
    // 模拟调度逻辑
    struct task_struct *next = pick_next_task();
    context_switch(next);
}
```

= 实验步骤与终端输出
（此处粘贴终端命令与输出，可使用等宽字体或 raw 块排版。）

= 实验总结
（总结与体会。）
