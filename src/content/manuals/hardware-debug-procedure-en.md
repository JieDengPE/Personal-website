---
title: Hardware Debug Procedure After an Unexpected Switching Waveform
routeSlug: hardware-debug-procedure
tool_or_platform: Oscilloscope + power stage
difficulty: advanced
updatedAt: 2026-02-28
summary: A structured troubleshooting sequence for cases where the measured switching waveform no longer matches the expected behavior.
tags:
  - debugging
  - waveform
  - hardware validation
lang: en
translationKey: manual-hardware-debug
---
## Trigger

Use this procedure when a previously acceptable switching waveform changes unexpectedly or when a new setup behaves worse than the model suggests.

## Sequence

1. Reconfirm probe setup, grounding, and bandwidth limits.
2. Compare gate signal timing against the previous known-good capture.
3. Inspect supply conditions and device temperature before further tuning.
4. Separate control-side causes from power-stage causes.
5. Document each change instead of stacking multiple modifications at once.

## Principle

Waveform debugging becomes much faster when measurement quality is treated as part of the problem, not just a tool around the problem.
