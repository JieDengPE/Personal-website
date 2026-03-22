---
title: 新变换器原型的 DSP 上电检查清单
routeSlug: dsp-bring-up-checklist
tool_or_platform: DSP 控制板
difficulty: intermediate
updatedAt: 2026-03-10
summary: 用于较高风险实验前的简明上电检查清单，帮助先验证控制板状态是否符合预期。
tags:
  - 上电检查
  - DSP
  - 清单
lang: zh
translationKey: manual-dsp-bring-up
---
## 适用范围

适用于首次上电，或进行较大固件修改之后的再次验证。

## 检查清单

1. 确认供电轨与隔离边界是否符合预期。
2. 根据最新原理图检查 ADC 通道映射。
3. 检查 PWM 极性、死区以及紧急停机行为。
4. 在接入完整功率级之前，先做低风险信号测试。
5. 记录固件版本、参数配置和关键波形截图。

## 说明

这个清单不是为了替代工程判断，而是为了让工程判断建立在一个已经验证过的基础状态之上。
