# Manual Template

适用场景：
- 上电流程
- 平台搭建
- 调试步骤
- 测试流程
- checklist
- 可重复执行的软硬件工作流

一句话判断：
- 如果这篇内容的核心价值是 `让你或别人下次能照着做`，就写成 `Manual`

## Copy-Paste Template

```md
---
title: "Partial-Discharge Test Platform Bring-Up"
routeSlug: partial-discharge-test-platform-bring-up
lang: en
translationKey: manual-pd-platform-bring-up
tool_or_platform: "Partial-discharge test platform"
difficulty: advanced
updatedAt: 2026-03-23
summary: "Step-by-step bring-up notes for a partial-discharge measurement setup."
tags:
  - partial discharge
  - bring-up
  - high-voltage
  - lab-procedure
---

## Goal

What this manual helps you accomplish.

## Prerequisites

What hardware, software, files, or safety checks are needed first.

## Setup

What to connect, configure, or prepare before testing.

## Procedure

1. Step one
2. Step two
3. Step three

## Expected Result

What “good” looks like.

## Troubleshooting

What to check if something fails.

## Notes

Safety reminders, caveats, or lab-specific tips.
```

## Chinese Version Template

```md
---
title: "局部放电测试平台上电流程"
routeSlug: partial-discharge-test-platform-bring-up
lang: zh
translationKey: manual-pd-platform-bring-up
tool_or_platform: "局部放电测试平台"
difficulty: advanced
updatedAt: 2026-03-23
summary: "一份面向局部放电测试平台的逐步上电与准备说明。"
tags:
  - partial discharge
  - bring-up
  - high-voltage
  - lab-procedure
---

## 目标

这篇手册要帮助你完成什么。

## 前置条件

开始前需要准备哪些硬件、软件、文件或安全检查。

## 搭建与准备

在正式测试前需要连接、配置或确认哪些内容。

## 操作步骤

1. 第一步
2. 第二步
3. 第三步

## 预期结果

正常情况下应该看到什么现象。

## 故障排查

如果不正常，优先检查什么。

## 补充说明

安全提醒、实验细节、注意事项或实验室经验。
```

## Good Manual Tags

- `bring-up`
- `lab-procedure`
- `high-voltage`
- `partial discharge`
- `oscilloscope`
- `thermal-test`
- `DSP`
- `STM32`
- `power-supply`

## Writing Rule

Manual 不强调观点，强调可执行性。  
它更适合回答：

- 下一次我该怎么重复这件事？
- 哪一步最容易出错？
- 如果失败，应该先查哪里？

## File Location

英文手册建议放在：
- `src/content/manuals/<slug>-en.md`

中文手册建议放在：
- `src/content/manuals/<slug>-zh.md`
