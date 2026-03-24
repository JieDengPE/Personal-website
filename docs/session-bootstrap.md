# Session Bootstrap

这个文件用于在你重新打开 `Personal_website` 项目时，快速恢复我们之前的协作方式。

## Why This Exists

subagent 通常不会随着你重新打开项目而自动恢复。

它们更像是：
- 当前对话线程里的临时协作角色
- 不是绑定在仓库上的永久后台成员

所以每次新开会话时，最稳的做法是让 Codex 重新按固定分工开一套。

## Recommended Startup Prompt

每次重新进入这个项目时，你可以直接把下面这段发给我：

```text
请根据 docs/subagents.md 重新为这个 Personal_website 项目建立 4 个 subagent，并按既有职责分工开始协作：
1. Ptolemy: 内容结构与研究叙事
2. Averroes: Publications 与论文条目维护
3. Parfit: Blog 与 Manuals 的内容边界、模板和分类
4. Singer: UI、视觉一致性、响应式与 QA

然后告诉我这 4 个 agent 是否已经恢复，并继续按当前项目状态协作。
```

## Short Version

如果你只想快速恢复，不想发长提示，可以直接发：

```text
请按 docs/subagents.md 重新开 4 个 subagent
```

## What I Should Do After You Send That

收到这条启动提示后，我应该：

1. 读取 [subagents.md](D:/desktop/Personal_website/docs/subagents.md)
2. 重新建立 4 个 subagent
3. 按既定职责分工
4. 告诉你它们是否已经恢复
5. 再继续处理你当前最优先的任务

## Current Team Structure

- `Ptolemy`
  内容结构、Timeline、Current Focus、Projects、首页研究叙事

- `Averroes`
  Publications、论文分组、DOI、作者与 venue 信息

- `Parfit`
  Blog、Manuals、文章模板、分类、标签和知识沉淀结构

- `Singer`
  UI、字体、背景、排版、响应式、可读性和 QA

## Good Habit

建议你每次新开会话后的第一句都先恢复团队，再开始提需求。

推荐顺序：

1. 先发 bootstrap prompt
2. 等我把 subagent 恢复
3. 再告诉我这次优先改哪一块

## Optional Future Improvement

如果你后面希望更省事，还可以继续让我帮你补：

- `project-memory.md`
  记录这个站点目前的结构、设计方向和内容规则

- `content-intake-template.md`
  记录你以后给我项目资料、论文资料、博客资料时的标准格式
