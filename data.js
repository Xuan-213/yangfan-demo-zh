// ===== 扬帆 AIHR 数据库 =====
// 20位实习生 + 6位带教导师 + 三周业绩数据

const AIHR_DB = {

// ===== 导师数据 (6位) =====
mentors: [
  { id:'M001', name:'马老师', dept:'产品部', title:'高级产品经理', interns:6, avatar:'马', rating:4.8, completedTasks:42, color:'#6366F1' },
  { id:'M002', name:'李老师', dept:'产品部', title:'产品总监',     interns:4, avatar:'李', rating:4.6, completedTasks:38, color:'#3B82F6' },
  { id:'M003', name:'王老师', dept:'研发部', title:'技术负责人',   interns:4, avatar:'王', rating:4.9, completedTasks:45, color:'#10B981' },
  { id:'M004', name:'张老师', dept:'研发部', title:'高级架构师',   interns:3, avatar:'张', rating:4.7, completedTasks:36, color:'#34D399' },
  { id:'M005', name:'赵老师', dept:'销售部', title:'销售VP',       interns:2, avatar:'赵', rating:4.5, completedTasks:30, color:'#F59E0B' },
  { id:'M006', name:'陈老师', dept:'销售部', title:'大客户总监',   interns:1, avatar:'陈', rating:4.4, completedTasks:28, color:'#FBBF24' }
],

// ===== 实习生数据 (20位，3周业绩) =====
interns: [
  // ---- 产品部 (7人) ----
  { id:'I001', name:'张瑶',   dept:'产品部', mentor:'马老师', avatar:'张', avColor:'a1',
    weeks:[
      { wk:1, rate:58, quality:62, tasks:3 },
      { wk:2, rate:55, quality:58, tasks:2 },
      { wk:3, rate:52, quality:51, tasks:2 }
    ],
    competency:61, risk:'high', trend:-3.2, fit:58, status:'连续三周业务理解偏弱', taskStatus:'进行中' },

  { id:'I002', name:'赵晴',   dept:'产品部', mentor:'马老师', avatar:'赵', avColor:'a3',
    weeks:[
      { wk:1, rate:82, quality:88, tasks:5 },
      { wk:2, rate:86, quality:90, tasks:6 },
      { wk:3, rate:91, quality:93, tasks:7 }
    ],
    competency:88, risk:'low', trend:8.3, fit:91, status:'周报复盘质量优秀', taskStatus:'已完成' },

  { id:'I003', name:'孙悦',   dept:'产品部', mentor:'马老师', avatar:'孙', avColor:'a2',
    weeks:[
      { wk:1, rate:72, quality:75, tasks:4 },
      { wk:2, rate:74, quality:78, tasks:4 },
      { wk:3, rate:79, quality:82, tasks:5 }
    ],
    competency:76, risk:'low', trend:4.1, fit:78, status:'稳步提升中', taskStatus:'进行中' },

  { id:'I004', name:'周明',   dept:'产品部', mentor:'李老师', avatar:'周', avColor:'a4',
    weeks:[
      { wk:1, rate:65, quality:68, tasks:3 },
      { wk:2, rate:68, quality:70, tasks:4 },
      { wk:3, rate:63, quality:65, tasks:3 }
    ],
    competency:67, risk:'med', trend:-0.5, fit:66, status:'需求文档质量波动', taskStatus:'进行中' },

  { id:'I005', name:'吴桐',   dept:'产品部', mentor:'李老师', avatar:'吴', avColor:'a1',
    weeks:[
      { wk:1, rate:88, quality:91, tasks:6 },
      { wk:2, rate:92, quality:94, tasks:7 },
      { wk:3, rate:95, quality:96, tasks:8 }
    ],
    competency:92, risk:'low', trend:6.8, fit:94, status:'表现优异，可考虑转正', taskStatus:'已完成' },

  { id:'I006', name:'郑蕾',   dept:'产品部', mentor:'李老师', avatar:'郑', avColor:'a3',
    weeks:[
      { wk:1, rate:45, quality:50, tasks:2 },
      { wk:2, rate:48, quality:52, tasks:2 },
      { wk:3, rate:55, quality:58, tasks:3 }
    ],
    competency:51, risk:'high', trend:6.2, fit:53, status:'进步明显但基础薄弱', taskStatus:'进行中' },

  { id:'I007', name:'冯远',   dept:'产品部', mentor:'马老师', avatar:'冯', avColor:'a2',
    weeks:[
      { wk:1, rate:70, quality:72, tasks:4 },
      { wk:2, rate:73, quality:75, tasks:4 },
      { wk:3, rate:76, quality:79, tasks:5 }
    ],
    competency:74, risk:'low', trend:3.5, fit:76, status:'稳定成长', taskStatus:'进行中' },

  // ---- 研发部 (8人) ----
  { id:'I008', name:'李明',   dept:'研发部', mentor:'王老师', avatar:'李', avColor:'a2',
    weeks:[
      { wk:1, rate:80, quality:85, tasks:5 },
      { wk:2, rate:78, quality:82, tasks:4 },
      { wk:3, rate:82, quality:86, tasks:5 }
    ],
    competency:82, risk:'low', trend:5.1, fit:86, status:'架构文档逾期1天，整体良好', taskStatus:'进行中' },

  { id:'I009', name:'刘洋',   dept:'研发部', mentor:'王老师', avatar:'刘', avColor:'a1',
    weeks:[
      { wk:1, rate:55, quality:58, tasks:3 },
      { wk:2, rate:52, quality:54, tasks:2 },
      { wk:3, rate:48, quality:46, tasks:2 }
    ],
    competency:51, risk:'high', trend:-4.8, fit:49, status:'代码质量持续下滑', taskStatus:'未指派' },

  { id:'I010', name:'陈墨',   dept:'研发部', mentor:'王老师', avatar:'陈', avColor:'a3',
    weeks:[
      { wk:1, rate:90, quality:93, tasks:7 },
      { wk:2, rate:93, quality:95, tasks:8 },
      { wk:3, rate:96, quality:97, tasks:9 }
    ],
    competency:94, risk:'low', trend:7.5, fit:96, status:'技术能力出色，主动承担', taskStatus:'已完成' },

  { id:'I011', name:'杨光',   dept:'研发部', mentor:'张老师', avatar:'杨', avColor:'a4',
    weeks:[
      { wk:1, rate:68, quality:70, tasks:4 },
      { wk:2, rate:71, quality:73, tasks:4 },
      { wk:3, rate:75, quality:78, tasks:5 }
    ],
    competency:73, risk:'low', trend:4.2, fit:75, status:'持续进步中', taskStatus:'进行中' },

  { id:'I012', name:'黄思',   dept:'研发部', mentor:'张老师', avatar:'黄', avColor:'a2',
    weeks:[
      { wk:1, rate:60, quality:63, tasks:3 },
      { wk:2, rate:58, quality:60, tasks:3 },
      { wk:3, rate:62, quality:65, tasks:3 }
    ],
    competency:64, risk:'med', trend:1.8, fit:63, status:'需加强代码规范', taskStatus:'进行中' },

  { id:'I013', name:'许达',   dept:'研发部', mentor:'王老师', avatar:'许', avColor:'a1',
    weeks:[
      { wk:1, rate:75, quality:78, tasks:5 },
      { wk:2, rate:80, quality:83, tasks:5 },
      { wk:3, rate:85, quality:88, tasks:6 }
    ],
    competency:83, risk:'low', trend:7.0, fit:85, status:'成长迅速', taskStatus:'已完成' },

  { id:'I014', name:'何畅',   dept:'研发部', mentor:'张老师', avatar:'何', avColor:'a3',
    weeks:[
      { wk:1, rate:40, quality:45, tasks:2 },
      { wk:2, rate:42, quality:44, tasks:2 },
      { wk:3, rate:38, quality:40, tasks:1 }
    ],
    competency:42, risk:'high', trend:-1.2, fit:38, status:'需要重点辅导', taskStatus:'未指派' },

  { id:'I015', name:'林杰',   dept:'研发部', mentor:'王老师', avatar:'林', avColor:'a4',
    weeks:[
      { wk:1, rate:78, quality:80, tasks:5 },
      { wk:2, rate:82, quality:84, tasks:6 },
      { wk:3, rate:84, quality:87, tasks:6 }
    ],
    competency:85, risk:'low', trend:5.6, fit:83, status:'表现稳定', taskStatus:'进行中' },

  // ---- 销售部 (5人) ----
  { id:'I016', name:'王洋',   dept:'销售部', mentor:'赵老师', avatar:'王', avColor:'a3',
    weeks:[
      { wk:1, rate:72, quality:74, tasks:4 },
      { wk:2, rate:70, quality:72, tasks:4 },
      { wk:3, rate:74, quality:76, tasks:4 }
    ],
    competency:74, risk:'med', trend:0.5, fit:72, status:'申请中期面试待确认', taskStatus:'进行中' },

  { id:'I017', name:'吕峰',   dept:'销售部', mentor:'赵老师', avatar:'吕', avColor:'a1',
    weeks:[
      { wk:1, rate:85, quality:88, tasks:6 },
      { wk:2, rate:90, quality:92, tasks:7 },
      { wk:3, rate:93, quality:95, tasks:8 }
    ],
    competency:91, risk:'low', trend:9.2, fit:93, status:'销售冠军候选人', taskStatus:'已完成' },

  { id:'I018', name:'施岚',   dept:'销售部', mentor:'陈老师', avatar:'施', avColor:'a2',
    weeks:[
      { wk:1, rate:50, quality:55, tasks:3 },
      { wk:2, rate:55, quality:58, tasks:3 },
      { wk:3, rate:60, quality:63, tasks:4 }
    ],
    competency:58, risk:'med', trend:6.5, fit:60, status:'进步中，需加强话术', taskStatus:'进行中' },

  { id:'I019', name:'韩冰',   dept:'销售部', mentor:'赵老师', avatar:'韩', avColor:'a4',
    weeks:[
      { wk:1, rate:78, quality:80, tasks:5 },
      { wk:2, rate:76, quality:78, tasks:5 },
      { wk:3, rate:80, quality:82, tasks:5 }
    ],
    competency:79, risk:'low', trend:2.0, fit:80, status:'客户满意度高', taskStatus:'进行中' },

  { id:'I020', name:'曹宇',   dept:'销售部', mentor:'陈老师', avatar:'曹', avColor:'a1',
    weeks:[
      { wk:1, rate:35, quality:40, tasks:2 },
      { wk:2, rate:32, quality:35, tasks:1 },
      { wk:3, rate:30, quality:32, tasks:1 }
    ],
    competency:33, risk:'high', trend:-3.8, fit:34, status:'严重落后，需干预', taskStatus:'未指派' }
],

// ===== 任务数据 =====
tasks: {
  core: [
    { id:'T001', name:'用户需求分析',    assignee:'I001', start:'03/12/2021', end:'5/12/2021', status:'未指派', type:'核心任务' },
    { id:'T002', name:'低保真原型设计',  assignee:'I009', start:'03/12/2021', end:'5/12/2021', status:'未指派', type:'核心任务' },
    { id:'T003', name:'竞品功能矩阵',    assignee:'I008', start:'05/20/2021', end:'06/02/2021', status:'已完成', type:'核心任务' }
  ],
  daily: [
    { id:'T004', name:'用户需求整理',    assignee:'I004', start:'03/12/2021', end:'5/12/2021', status:'进行中', type:'日常任务' },
    { id:'T005', name:'用户调研整理',    assignee:'I012', start:'03/12/2021', end:'5/12/2021', status:'进行中', type:'日常任务' }
  ],
  study: [
    { id:'T006', name:'市场调研',        assignee:'I003', start:'01/12/2021', end:'3/12/2021', status:'已完成', type:'学习任务' }
  ]
},

// ===== 部门汇总 =====
deptSummary: {
  '产品部': { interns:7, avgRate:74, avgQuality:76, highRisk:2, lowRisk:4, medRisk:1 },
  '研发部': { interns:8, avgRate:73, avgQuality:76, highRisk:2, lowRisk:5, medRisk:1 },
  '销售部': { interns:5, avgRate:69, avgQuality:72, highRisk:1, lowRisk:2, medRisk:2 }
},

// ===== 全局统计 =====
stats: {
  totalInterns: 20,
  totalMentors: 6,
  avgCompetency: 72,
  avgCompletionRate: 71,
  avgQuality: 74,
  highRiskCount: 5,
  lowRiskCount: 11,
  medRiskCount: 4,
  overallHealth: 70,
  teachingQuality: 70,
  teamCompetency: 70,
  taskProgress: 70,
  pendingTasks: 12
},

// ===== 工具函数 =====
getIntern: function(id){ return this.interns.find(i=>i.id===id); },
getMentor: function(id){ return this.mentors.find(m=>m.id===id); },
getDeptInterns: function(dept){ return this.interns.filter(i=>i.dept===dept); },
getMentorInterns: function(mentorName){ return this.interns.filter(i=>i.mentor===mentorName); },
getHighRisk: function(){ return this.interns.filter(i=>i.risk==='high'); },
getLatestWeek: function(intern){ return intern.weeks[intern.weeks.length-1]; },

	// ===== 实习生详情扩展数据 =====
	// ===== 实习生详情扩展数据 =====
	// ===== 实习生详情扩展数据 =====
	internDetails: {
		"I001": {
			entryDate: "2026-05-20", stage: "成长期", stageWeek: 6, tags: ["高潜", "入职38天", "距转正评估52天"],
			weeklyReports: [
				{ wk:1, date:"2026-05-26", title:"业务理解与工具学习", score:75,
					internContent: "本周主要工作：\n1. 熟悉产品后台管理系统\n2. 参与2次产品需求评审会\n3. 学习Axure原型工具基础操作\n4. 阅读《用户体验要素》第1-3章\n\n遇到的问题：\n- 对技术实现可行性判断不足\n- 用户场景拆解不够细致\n\n下周计划：\n- 跟进需求分析专项练习\n- 完成竞品功能矩阵初稿",
					mentorComment: "整体评价：学习积极性高，工具上手快，快速适应了团队节奏。\n方法过程维度：原型工具使用比预期快，但在需求理解和用户场景拆解方面方法还不够系统——建议在动手前先花15分钟做场景梳理。\n下阶段重点：安排需求分析专项练习，训练从用户视角定义需求的能力。" },
				{ wk:2, date:"2026-06-02", title:"需求分析入门实践", score:72,
					internContent: "本周主要工作：\n1. 完成需求分析专项练习第1-2题\n2. 整理3个核心用户场景的用户故事\n3. 参与用户访谈1次\n4. 学习SQL数据分析基础\n\n收获：\n- 对用户需求挖掘有了更系统的理解\n- 用户访谈中发现了2个被忽略的痛点\n\n不足：\n- 数据分析维度仍需加强\n\n下周计划：\n- 完成竞品拆解作业\n- 继续SQL学习",
					mentorComment: "整体评价：用户场景拆解开始有系统化的雏形，用户访谈表现出色。\n知识技能维度：用户调研方法掌握良好，但数据分析维度偏弱（61分），SQL基础需要加强。\n下阶段重点：安排数据驱动决策训练，结合竞品分析任务练习数据解读。" },
				{ wk:3, date:"2026-06-09", title:"竞品分析与数据驱动", score:68,
					internContent: "本周主要工作：\n1. 完成竞品拆解作业，输出3个改进机会点\n2. 学习数据分析课程（完成50%）\n3. 参与产品增长组周会并做分享\n4. 协助导师整理Q2产品路线图\n\n反思：\n- 竞品分析中遗漏了商业模式维度\n- 数据驱动决策的训练还需加强\n\n知识应用：\n- 将SQL课程中的GROUP BY和JOIN用于用户行为分析，定位了一个用户流失原因\n\n下周计划：\n- 完成数据分析课程\n- 开始低保真原型设计",
					mentorComment: "整体评价：竞品分析质量显著提升，从功能对比进化到了结构化拆解。\n态度习惯维度：主动参与团队周会并做分享，展现了良好的团队融入意识。\n改进建议：数据分析仍是短板但进步在加快，建议每天花30分钟做数据小练习。\n下阶段重点：完成数据分析课程后开始低保真原型设计。" },
				{ wk:4, date:"2026-06-16", title:"原型设计与用户测试", score:70,
					internContent: "本周主要工作：\n1. 完成低保真原型设计初稿（3个核心页面）\n2. 组织2名用户进行可用性测试\n3. 根据测试反馈迭代原型方案\n4. 完成周报复盘总结\n\n测试发现：\n- 导航结构需要简化\n- 搜索入口不够明显\n\n收获：\n- 掌握了低保真原型到用户测试的完整闭环\n- 学会了从用户反馈中提取可操作的设计改进点\n\n知识应用：\n- 将用户访谈技巧和竞品分析框架应用到测试中，测试脚本受到导师好评\n\n下周计划：\n- 完成原型终稿\n- 准备中期面试材料",
					mentorComment: "整体评价：原型设计完成得非常出色，质量远超同阶段平均水平。从低保真开始的做法非常专业。\n知识技能维度：原型设计工具使用熟练，信息架构和交互流程设计合理，用户测试执行规范。\n方法过程维度：从设计到测试到迭代的闭环做得非常完整，展现了优秀的产品思维。\n下阶段重点：完成原型终稿并准备中期面试材料，可以开始尝试高保真视觉设计。" }
			],
			interviews: [
				{ date:"2026-05-27", type:"入职面谈", summary:"确认实习目标：产品思维培养 + 需求分析能力提升。了解过往项目经验（校园产品大赛二等奖），明确90天培养路径。",
					keyPoints: ["对产品经理岗位有清晰认知", "希望加强数据分析能力", "对B端产品感兴趣"], nextSteps:"安排需求分析专项练习，2周后周度面谈" },
				{ date:"2026-06-10", type:"周度面谈", summary:"回顾前三周进展：工具学习达标，需求分析进步明显，数据分析仍是短板。讨论了中期面试的准备方向。",
					keyPoints: ["数据分析维度偏低需重点关注", "原型设计可提前安排", "建议参加跨部门沟通实践"], nextSteps:"安排数据驱动决策训练，2周后中期面试" }
			],
			assessments: [
				{ week:1, self:{需求分析:60, 用户调研:55, 原型设计:50, 数据分析:45, 沟通协作:65}, mentor:{需求分析:65, 用户调研:58, 原型设计:52, 数据分析:48, 沟通协作:70} },
				{ week:2, self:{需求分析:65, 用户调研:60, 原型设计:55, 数据分析:48, 沟通协作:68}, mentor:{需求分析:70, 用户调研:63, 原型设计:58, 数据分析:50, 沟通协作:72} },
				{ week:3, self:{需求分析:72, 用户调研:68, 原型设计:62, 数据分析:52, 沟通协作:72}, mentor:{需求分析:75, 用户调研:70, 原型设计:65, 数据分析:55, 沟通协作:74} },
				{ week:4, self:{需求分析:78, 用户调研:74, 原型设计:70, 数据分析:58, 沟通协作:76}, mentor:{需求分析:80, 用户调研:76, 原型设计:72, 数据分析:61, 沟通协作:78} }
			],
			keyBehaviors: [
				{ date:"2026-06-02", action:"发起跨部门沟通", detail:"主动联系研发团队讨论需求可行性，提前发现2个技术风险点", impact:"缩短需求确认周期2天" },
				{ date:"2026-06-08", action:"用户访谈主导", detail:"独立完成1次用户访谈，从大纲准备到记录整理全程自主", impact:"获得用户关键反馈" },
				{ date:"2026-06-15", action:"知识分享", detail:"在团队周会上分享竞品分析心得，整理方法论文档", impact:"被团队采纳为参考材料" }
			],
			behaviorArchive: {
				questions: [
					{ date:"2026-06-05", to:"马老师", question:"如何平衡用户需求与技术可行性？", response:"建议先做竞品调研了解行业方案，再与研发同步评估。" },
					{ date:"2026-06-12", to:"HR", question:"中期面试需要准备哪些材料？", response:"需要准备：1)实习总结报告 2)代表性工作成果展示 3)自我评估表。" }
				],
				learning: [
					{ course:"产品原型设计入门", duration:"3.5h", applied:true, applyDetail:"已用于低保真原型作业" },
					{ course:"SQL数据分析基础", duration:"4h", applied:false, applyDetail:"" },
					{ course:"用户访谈技巧", duration:"2h", applied:true, applyDetail:"在用户访谈中运用了开放式提问技巧" }
				],
				collaboration: [
					{ from:"李老师", role:"研发导师", feedback:"张瑶在跨部门协作中思路清晰，沟通高效", type:"点赞" },
					{ from:"王洋", role:"同期实习生", feedback:"在原型设计练习中主动分享学习资源", type:"感谢" }
				]
			}
		}
	},

	// ===== V3 HR MOCK DATA =====
mentorHealth:{M001:{healthScore:88,reviewRate:92,behaviorScore:85,alertInterns:1,weeklyHealth:[85,87,89,88],avgInternCompetency:71},M002:{healthScore:76,reviewRate:82,behaviorScore:72,alertInterns:2,weeklyHealth:[78,76,74,76],avgInternCompetency:70},M003:{healthScore:92,reviewRate:96,behaviorScore:90,alertInterns:0,weeklyHealth:[90,91,93,92],avgInternCompetency:79},M004:{healthScore:80,reviewRate:88,behaviorScore:78,alertInterns:1,weeklyHealth:[82,81,79,80],avgInternCompetency:61},M005:{healthScore:72,reviewRate:75,behaviorScore:68,alertInterns:1,weeklyHealth:[75,73,74,72],avgInternCompetency:81},M006:{healthScore:56,reviewRate:62,behaviorScore:58,alertInterns:2,weeklyHealth:[68,64,60,56],avgInternCompetency:46}},
plans:[{id:'P001',name:'攻破技术方案设计难关',category:'能力补强',usageCount:89,successCases:12,status:'active',submitter:'马老师',reviewStatus:'approved',rating:4.6},{id:'P002',name:'提升需求分析能力方案',category:'能力补强',usageCount:67,successCases:9,status:'active',submitter:'李老师',reviewStatus:'approved',rating:4.3},{id:'P003',name:'新人入职90天带教方案',category:'阶段必备',usageCount:156,successCases:28,status:'active',submitter:'王老师',reviewStatus:'approved',rating:4.8},{id:'P004',name:'成长期综合能力提升方案',category:'阶段必备',usageCount:94,successCases:15,status:'active',submitter:'张老师',reviewStatus:'approved',rating:4.4},{id:'P005',name:'设计方案评审会模拟方案',category:'实战演练',usageCount:73,successCases:11,status:'active',submitter:'赵老师',reviewStatus:'approved',rating:4.2},{id:'P006',name:'销售话术场景演练方案',category:'实战演练',usageCount:45,successCases:6,status:'pending',submitter:'陈老师',reviewStatus:'pending',rating:null},{id:'P007',name:'数据分析入门带教方案',category:'能力补强',usageCount:0,successCases:0,status:'draft',submitter:'陈老师',reviewStatus:'draft',rating:null},{id:'P008',name:'项目管理基础带教方案',category:'阶段必备',usageCount:0,successCases:0,status:'draft',submitter:'李老师',reviewStatus:'draft',rating:null},{id:'P009',name:'接口联调实战方案',category:'实战演练',usageCount:18,successCases:12,status:'pending',submitter:'张老师',reviewStatus:'pending',rating:null},{id:'P010',name:'客户异议处理方案',category:'实战演练',usageCount:8,successCases:3,status:'active',submitter:'王老师',reviewStatus:'approved',rating:3.9}],
courses:[{id:'C001',name:'产品原型设计入门',category:'产品思维',instructor:'马老师',rating:4.9,planRefs:15,status:'published'},{id:'C002',name:'产品思维核心方法',category:'产品思维',instructor:'马老师',rating:4.8,planRefs:8,status:'published'},{id:'C003',name:'前端开发实战训练营',category:'技术开发',instructor:'王老师',rating:4.9,planRefs:12,status:'published'},{id:'C004',name:'跨平台应用开发实战',category:'技术开发',instructor:'张老师',rating:4.7,planRefs:6,status:'published'},{id:'C005',name:'SQL数据分析基础',category:'数据分析',instructor:'李老师',rating:4.5,planRefs:10,status:'published'},{id:'C006',name:'高效职场沟通技巧',category:'职场沟通',instructor:'赵老师',rating:4.6,planRefs:5,status:'published'},{id:'C007',name:'设计思维创新实践',category:'创新实践',instructor:'陈老师',rating:4.4,planRefs:4,status:'published'}],
contentReviewQueue:[{id:'CR001',title:'高效需求沟通技巧',author:'李工',submittedDate:'6/12',type:'微课',status:'pending'},{id:'CR002',title:'代码Review最佳实践',author:'张伟',submittedDate:'6/10',type:'文档',status:'approved'},{id:'CR003',title:'React Hooks最佳实践',author:'外部分享',submittedDate:'6/8',type:'微课',status:'pending'},{id:'CR004',title:'Python数据分析入门',author:'实习生贡献',submittedDate:'6/7',type:'文档',status:'pending'},{id:'CR005',title:'团队协作与沟通技巧',author:'社招分享',submittedDate:'6/5',type:'微课',status:'approved'},{id:'CR006',title:'敏捷开发流程指南',author:'王敏',submittedDate:'6/3',type:'文档',status:'rejected'},{id:'CR007',title:'UI设计规范入门',author:'陈思',submittedDate:'6/1',type:'微课',status:'approved'}],
	// 内容生态数据
	contentEcosystem:{totalContent:156,monthlyNew:12,avgRating:4.3,pendingReview:3,lowRatedCount:3,lowRatedItems:['SQL数据分析基础','客户异议处理方案','设计思维创新实践'],deptCoverage:{'产品部':72,'研发部':68,'销售部':45,'全岗位':81},weeklyTrend:[35,42,58,47,63,71,68,82],topContent:[{name:'产品原型设计入门',learners:2340,appliedRate:68},{name:'前端开发实战训练营',learners:1890,appliedRate:62},{name:'数据分析思维与工具手册',learners:2100,appliedRate:55},{name:'技术方案设计模板',learners:1890,appliedRate:71},{name:'如何给出有效反馈',learners:1560,appliedRate:74},{name:'高效需求沟通技巧',learners:1420,appliedRate:58},{name:'产品需求文档编写规范',learners:2340,appliedRate:65},{name:'用户研究报告撰写指南',learners:1560,appliedRate:52},{name:'产品思维核心方法',learners:1280,appliedRate:67},{name:'跨平台应用开发实战',learners:1150,appliedRate:49}],conversionNote:'基于周报中标记"已应用"的学习内容统计，整体学以致用转化率为 62%'},
teamCapabilities:{dimensions:['专业能力','技术认知','用户洞察','沟通协作','方案设计','项目管理'],companyAvg:[3.5,3.6,3.4,3.5,3.3,3.5],departments:{'研发部':{scores:[4.1,4.3,2.9,2.8,3.6,3.2],internCount:8,color:'var(--info)'},'产品部':{scores:[3.4,2.7,4.1,3.3,3.2,3.0],internCount:7,color:'var(--warning)'},'销售部':{scores:[3.0,2.5,3.2,4.0,2.5,2.8],internCount:5,color:'var(--purple)'}},gapThresholds:{warn:0.5,danger:0.8}},
mentorExpertise:[{id:'M003',name:'王老师',dept:'研发部',title:'技术负责人',expertise:['后端架构','技术方案评审','代码质量'],courses:3,plans:2,bio:'10年后端开发经验'},{id:'M004',name:'张老师',dept:'研发部',title:'高级架构师',expertise:['前端技术','跨端方案设计'],courses:1,docs:5,plans:1,bio:'全栈工程师，热衷于技术文档撰写'},{id:'M001',name:'马老师',dept:'产品部',title:'高级产品经理',expertise:['用户研究','需求分析','原型设计'],courses:2,docs:3,plans:2,bio:'12年产品经验，擅长用户洞察和数据分析'},{id:'M005',name:'赵老师',dept:'销售部',title:'销售VP',expertise:['客户沟通','商务谈判'],courses:1,docs:1,plans:1,bio:'15年销售管理经验'}],
coachingProjects:[{id:'CP001',name:'提升产品团队技术认知度',initiator:'HR艺璇',initiatedDate:'6/15',mentorName:'王老师',mentorDept:'研发部',targetDept:'产品部',targetCount:7,capability:'技术认知',period:'4周',status:'active',participation:100,satisfaction:4.5,contents:[{type:'分享会',title:'后端架构基础与产品决策',speaker:'王老师',duration:'45分钟'},{type:'学习任务',title:'完成微课《技术方案如何让产品听懂》',source:'培养社区',duration:'25分钟'},{type:'复盘面谈',title:'产品实习生与导师讨论学习收获',trigger:'项目启动后第3周'}],effect:{before:2.7,after:3.2,gapReduction:0.5,attendance:'7/7',completion:'7/7',feedback:['终于知道后端说的分布式事务是什么意思了','王老师讲得通俗易懂，建议定期举办']}},{id:'CP002',name:'提升研发部沟通协作能力',initiator:'HR艺璇',initiatedDate:'6/22',mentorName:'赵老师',mentorDept:'销售部',targetDept:'研发部',targetCount:8,capability:'沟通协作',period:'3周',status:'active',participation:87,satisfaction:4.2,contents:[{type:'分享会',title:'技术人如何做好跨部门沟通',speaker:'赵老师',duration:'40分钟'},{type:'学习任务',title:'阅读文档《需求评审中的沟通技巧》',source:'扬帆知识库',duration:'20分钟'}],effect:{before:2.8,after:3.1,gapReduction:0.3,attendance:'7/8',completion:'7/8',feedback:['学会了如何向非技术人员解释技术方案','希望能定期有这样的跨部门分享']}}],
dashboardAlerts:[{id:'A001',type:'urgent',text:'张瑶连续三周业务理解偏弱，建议干预',time:'2h前',relatedId:'I001'},{id:'A002',type:'urgent',text:'陈老师健康评分降至56分，低于警戒线',time:'4h前',relatedId:'M006'},{id:'A003',type:'warn',text:'曹宇胜任力仅33%，需安排重点辅导',time:'1天前',relatedId:'I020'},{id:'A004',type:'warn',text:'何畅连续两周无新任务分配',time:'1天前',relatedId:'I014'},{id:'A005',type:'warn',text:'赵老师连续2周未评阅学员周报',time:'2天前',relatedId:'M005'},{id:'A006',type:'info',text:'王洋中期面试申请待HR审批',time:'2天前',relatedId:'I016'},{id:'A007',type:'info',text:'赵琳连续3周负面情绪，需关注',time:'3天前',relatedId:'I013'}],
dashboardReviewQueue:[{id:'R001',type:'plan',text:'销售话术场景演练方案待审核',count:2,urgent:false},{id:'R002',type:'plan',text:'接口联调实战方案待审核',count:2,urgent:false},{id:'R003',type:'content',text:'新提交微课/文档待审核',count:3,urgent:false},{id:'R004',type:'mentor',text:'2名导师周报复盘超48h未完成',count:2,urgent:true}],
getInternDetail: function(id){ return this.internDetails[id] || null; }
};
