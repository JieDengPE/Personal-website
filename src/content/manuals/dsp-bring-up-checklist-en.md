---
title: DSP Bring-Up Checklist for a New Converter Prototype
routeSlug: dsp-bring-up-checklist
tool_or_platform: DSP control board
difficulty: intermediate
updatedAt: 2026-03-10
summary: A compact bring-up checklist for verifying control-board readiness before running higher-risk converter experiments.
tags:
  - bring-up
  - DSP
  - checklist
lang: en
translationKey: manual-dsp-bring-up
---
## Scope

Use this checklist before first power-up or after a major firmware update.

## Checklist

1. Confirm the expected supply rails and isolation boundaries.
2. Verify ADC channel mapping against the latest schematic notes.
3. Check PWM polarity, dead time, and emergency stop behavior.
4. Run low-risk signal tests before connecting the full power stage.
5. Record firmware version, parameter set, and oscilloscope screenshots.

## Notes

The purpose of the checklist is not to remove engineering judgment. It is to make sure judgment starts from a verified baseline.
