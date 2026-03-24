# Subagent Responsibilities

这个文件用于记录当前网站项目里 4 个 subagent 的职责分工，避免后续继续协作时重复定义。

注意：
- 下面的 `agent id` 是当前这条对话线程里的 id，之后如果开了新线程，id 可能会变化。
- 更适合长期记忆的是 `agent nickname + responsibility`，而不是只记 id。

## Current Roster

| Nickname | Current Agent ID | Core Responsibility |
| --- | --- | --- |
| Ptolemy | `019d1ca4-2933-7373-b94e-b865c76f6c4f` | 内容结构与研究叙事 |
| Averroes | `019d1ca4-51cd-7033-9859-38b8e5d15cd2` | Publications 与论文条目维护 |
| Parfit | `019d1ca4-3d5b-7cc0-8a97-f876f4e70987` | Blog 与 Manuals 的内容边界、模板和分类 |
| Singer | `019d1ca4-6626-7181-bfc7-49205c1170fd` | UI、视觉一致性、响应式与 QA |

## 1. Ptolemy

- 中文定位：内容结构 agent
- 核心职责：
  - 负责 `Home / Timeline / Current Focus / Projects` 的信息架构
  - 负责把你的原始研究材料整理成对访问者友好的叙事
  - 负责中英文内容是否对齐、是否重复、是否表达清楚
- 最适合交给它的工作：
  - 新增一个研究项目
  - 重写首页自我介绍
  - 优化时间线条目顺序
  - 调整 `Current Focus` 页，让别人 30 秒内看懂你做什么
- 输入它时你最好提供：
  - 项目名
  - 解决什么问题
  - 你现在在做什么
  - 已完成什么
  - 你在里面的角色
  - 下一步是什么
- 不建议交给它的工作：
  - 论文 DOI、作者顺序、venue 细节
  - 视觉样式、背景、字体
  - 博客标签系统

## 2. Averroes

- 中文定位：publications agent
- 核心职责：
  - 维护 `Publications` 页面
  - 管理论文分组、主题归类、作者、venue、DOI
  - 保证论文信息格式统一
- 最适合交给它的工作：
  - 新增一篇论文
  - 调整论文所属研究主题
  - 统一 DOI 展示格式
  - 检查作者、年份、文章类型是否一致
- 输入它时你最好提供：
  - 论文标题
  - 年份
  - 类型
  - 期刊/会议名
  - 作者
  - DOI
  - 你希望归类到哪个主题
- 不建议交给它的工作：
  - 项目页面 narrative 写作
  - 博客与手册内容规划
  - 背景、卡片、字体、动画

## 3. Parfit

- 中文定位：Blog + Manuals agent
- 核心职责：
  - 区分什么内容应该是 `Blog`
  - 区分什么内容应该是 `Manuals`
  - 设计博客和手册的分类、标签、模板和优先内容清单
- 最适合交给它的工作：
  - 新增一篇博客
  - 新增一篇操作手册
  - 给博客和手册做分类
  - 设计“第一批最值得写的内容”
- Blog 更适合：
  - 想法、阶段总结、研究观察、阅读笔记
- Manuals 更适合：
  - 调试流程、实验步骤、bring-up checklist、平台搭建说明
- 不建议交给它的工作：
  - 首页 hero 文案
  - 论文归类
  - 视觉重构

## 4. Singer

- 中文定位：UI + QA agent
- 核心职责：
  - 负责视觉语言、背景、字体层级、卡片系统、导航观感
  - 负责响应式、可读性、页面一致性和小范围 QA
  - 负责检查哪里“太死板”“太模板感”“太拥挤”
- 最适合交给它的工作：
  - 重做背景
  - 优化首页 hero
  - 调整导航、按钮、卡片层级
  - 检查移动端观感
  - 做一轮 UI polish
- 输入它时你最好提供：
  - 你想要的气质关键词
  - 你不喜欢哪里
  - 你想变得更大胆还是更克制
- 不建议交给它的工作：
  - 论文 DOI 管理
  - 时间线叙事内容撰写
  - 博客与手册的信息结构

## Recommended Workflow

推荐不要按“导航 item”分工，而是按“工作流”分工：

1. `Ptolemy`
   先把内容讲清楚
2. `Averroes`
   再把论文系统整理好
3. `Parfit`
   再补博客和手册
4. `Singer`
   最后统一做视觉和 QA 打磨

## Fast Rules

- 要补项目、研究方向、时间线：找 `Ptolemy`
- 要补论文、DOI、归类：找 `Averroes`
- 要补博客、手册、标签：找 `Parfit`
- 要改背景、字体、卡片、导航、移动端：找 `Singer`

## Suggested Prompts

### Ptolemy

```text
Please refine the content structure for Timeline / Current Focus / Projects based on the following raw research notes...
```

### Averroes

```text
Please update the Publications section with the following paper and classify it under the right research theme...
```

### Parfit

```text
Please turn the following raw notes into either a blog post or a manual, and decide the better category...
```

### Singer

```text
Please improve the UI of this page. I want it to feel more engineered, less generic, and more visually alive without becoming flashy...
```

## Current Recommendation For This Website

当前这个网站最值得保持的分工方式是：

- `Ptolemy`: 管研究主线和项目内容
- `Averroes`: 管 publication section
- `Parfit`: 管 blog/manuals 的知识沉淀
- `Singer`: 管背景、字体、排版、响应式、页面 polish

目前不建议单独再开一个 `security agent`，因为这个网站现在是静态 Astro 站，没有登录、数据库或服务端表单，安全还不是主要矛盾。
