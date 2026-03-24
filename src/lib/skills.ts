import {
	siAnsys,
	siKicad,
	siLtspice,
	siStmicroelectronics,
} from 'simple-icons';

import type { Locale } from './site';

type SkillBadge =
	| {
			kind: 'brand';
			label: string;
			svgPath: string;
			color: string;
	  }
	| {
			kind: 'monogram';
			label: string;
			monogram: string;
			color: string;
	  };

export interface HardwareSkill {
	title: string;
	summary: string;
	highlights: string[];
}

export interface SoftwareSkillGroup {
	title: string;
	description: string;
	items: SkillBadge[];
}

export interface SkillsContent {
	eyebrow: string;
	title: string;
	intro: string;
	hardwareTitle: string;
	hardwareIntro: string;
	softwareTitle: string;
	softwareIntro: string;
	hardware: HardwareSkill[];
	software: SoftwareSkillGroup[];
}

const brand = (label: string, svgPath: string, color: string): SkillBadge => ({
	kind: 'brand',
	label,
	svgPath,
	color,
});

const monogram = (label: string, monogramText: string, color: string): SkillBadge => ({
	kind: 'monogram',
	label,
	monogram: monogramText,
	color,
});

const skillsContent: Record<Locale, SkillsContent> = {
	en: {
		eyebrow: 'Skills',
		title: 'Hardware depth and software fluency for power-electronics research',
		intro:
			'The skill stack is organized around how work actually happens in the lab: hardware system design on one side, and the software tools that support modeling, coding, layout, and analysis on the other.',
		hardwareTitle: 'Hardware',
		hardwareIntro:
			'Hands-on experience building converter hardware from topology definition through implementation, insulation constraints, and experimental validation.',
		softwareTitle: 'Software',
		softwareIntro:
			'Software tools are grouped by the role they play in the engineering workflow, rather than appearing as a flat keyword list.',
		hardware: [
			{
				title: 'High-power power-electronics converter system design',
				summary:
					'System-level design experience spanning grid interfaces, auxiliary supplies, multilevel converters, SST-related platforms, and power-stage integration.',
				highlights: [
					'Converter architecture and power-stage definition',
					'Insulation-aware hardware tradeoff thinking',
					'Prototype bring-up and experimental iteration',
				],
			},
			{
				title: 'High-frequency converter system design',
				summary:
					'Experience designing and validating high-frequency converter hardware where switching behavior, layout, magnetics, thermal limits, and testability all interact.',
				highlights: [
					'Soft-switching and high-frequency operation',
					'Layout, parasitic awareness, and EMI-conscious implementation',
					'Hardware validation with lab instrumentation',
				],
			},
		],
		software: [
			{
				title: 'EDA / PCB Design',
				description: 'Tools used to capture schematics, build layouts, and move hardware into manufacturable boards.',
				items: [
					monogram('Altium Designer', 'AD', '#a591ff'),
					brand('KiCad', siKicad.path, `#${siKicad.hex}`),
				],
			},
			{
				title: 'Circuit & Power Simulation',
				description: 'Simulation environments for converter behavior, switching transitions, and circuit-level iteration.',
				items: [
					monogram('SIMetrix', 'SX', '#ff9070'),
					brand('LTspice', siLtspice.path, `#${siLtspice.hex}`),
					monogram('Multisim', 'MS', '#4ca6ff'),
					monogram('Proteus', 'PT', '#7dd17d'),
					monogram('PLECS', 'PL', '#f3b34c'),
					monogram('PSIM', 'PS', '#ff7b7b'),
				],
			},
			{
				title: 'Embedded & Digital Code',
				description: 'Code implementation for control, embedded platforms, and digital acceleration.',
				items: [
					monogram('DSP Coding', 'DSP', '#46b6c8'),
					brand('STM32 Coding', siStmicroelectronics.path, `#${siStmicroelectronics.hex}`),
					monogram('FPGA Coding', 'FPGA', '#ffbf5e'),
				],
			},
			{
				title: 'CAE & Mechanical',
				description: 'Tools supporting field, thermal, structural, and mechanical iteration around hardware systems.',
				items: [
					brand('Ansys', siAnsys.path, `#${siAnsys.hex}`),
					monogram('SolidWorks', 'SW', '#ef5b4a'),
				],
			},
			{
				title: 'AI & Automation',
				description: 'Code-centric workflows for data processing, automation, and AI-assisted engineering exploration.',
				items: [monogram('AI Coding', 'AI', '#30d0aa')],
			},
		],
	},
	zh: {
		eyebrow: 'Skills',
		title: '围绕硬件系统与软件工具组织的技能结构',
		intro:
			'这部分不再把技能写成松散的关键词，而是按真实工程工作流拆成两层：硬件系统能力，以及支撑建模、仿真、布局、编程和分析的软件工具能力。',
		hardwareTitle: '硬件',
		hardwareIntro:
			'更关注真正做系统时需要的能力，包括变换器架构、绝缘约束、高频实现和实验验证，而不只是单个器件或单个软件。',
		softwareTitle: '软件',
		softwareIntro:
			'软件工具按用途分组展示，方便访问者快速理解你在电力电子研究里真正会用什么、怎么用。',
		hardware: [
			{
				title: '大功率电力电子变换器系统设计',
				summary:
					'具备从系统架构到硬件实现的设计经验，覆盖并网接口、辅助供电、多电平变换器、SST 相关平台以及功率级集成。',
				highlights: [
					'功率级结构与系统方案定义',
					'绝缘约束与硬件权衡思维',
					'样机调试与实验闭环迭代',
				],
			},
			{
				title: '高频变换器系统设计经验',
				summary:
					'具备高频变换器设计与验证经验，能够同时考虑开关过程、寄生参数、磁性件、热限制和实验可测性。',
				highlights: [
					'软开关与高频运行经验',
					'布局、寄生参数与 EMI 意识',
					'基于实验平台的硬件验证',
				],
			},
		],
		software: [
			{
				title: 'EDA / PCB 设计',
				description: '用于原理图、PCB 布局以及硬件工程落地的设计工具。',
				items: [
					monogram('Altium Designer', 'AD', '#a591ff'),
					brand('KiCad', siKicad.path, `#${siKicad.hex}`),
				],
			},
			{
				title: '电路与功率级仿真',
				description: '用于变换器行为分析、开关过程研究和电路级方案迭代的仿真环境。',
				items: [
					monogram('SIMetrix', 'SX', '#ff9070'),
					brand('LTspice', siLtspice.path, `#${siLtspice.hex}`),
					monogram('Multisim', 'MS', '#4ca6ff'),
					monogram('Proteus', 'PT', '#7dd17d'),
					monogram('PLECS', 'PL', '#f3b34c'),
					monogram('PSIM', 'PS', '#ff7b7b'),
				],
			},
			{
				title: '嵌入式与数字代码',
				description: '用于控制实现、嵌入式平台开发和数字化加速的代码能力。',
				items: [
					monogram('DSP Code', 'DSP', '#46b6c8'),
					brand('STM32 Code', siStmicroelectronics.path, `#${siStmicroelectronics.hex}`),
					monogram('FPGA Code', 'FPGA', '#ffbf5e'),
				],
			},
			{
				title: 'CAE 与机械设计',
				description: '用于场、热、结构以及机械设计迭代的辅助工具。',
				items: [
					brand('Ansys', siAnsys.path, `#${siAnsys.hex}`),
					monogram('SolidWorks', 'SW', '#ef5b4a'),
				],
			},
			{
				title: 'AI 与自动化编程',
				description: '用于数据处理、自动化流程和 AI 辅助工程探索的编程能力。',
				items: [monogram('AI Code', 'AI', '#30d0aa')],
			},
		],
	},
};

export function getSkillsContent(locale: Locale) {
	return skillsContent[locale];
}
