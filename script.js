/**
 * 中英双语切换
 */
const translations = {
  zh: {
    'nav.about': '关于',
    'nav.experience': '经历',
    'nav.projects': '项目',
    'nav.contact': '联系',
    'hero.hi': '你好，',
    'hero.im': '我是琦涵',
    'hero.tagline1': 'stay hungry stay foolish',
    'hero.tagline2': '以AI为杠杆，以语言为媒介的故事讲述者',
    'hero.hashtags': '#北外翻译 #清华新传 #用户增长 #新媒体运营 #vibe coding',
    'hero.cta': '了解更多',
    'banner.1': '国家奖学金',
    'banner.2': '清华大学 2026',
    'banner.3': 'GPA 3.92/4.00',
    'banner.4': '托福 109',
    'banner.5': 'AI Native',
    'about.quote': '不是写稿子，而是讲故事——我希望搭建能让数据、叙事与用户需求交汇的桥梁，让复杂的需求变简单、变有趣。',
    'intro.p1': '对我来说，语言和数据同样迷人，无论是翻译还是传播还是 AI，本质上都是在「解密」，本质上都是出于「热爱」。',
    'intro.p2': '在 AI 时代，「解密」和「热爱」就是最好的生产力，我希望把复杂的事情说简单，把高级的技术变得人人可以触及，让好的内容产生真正的影响力。',
    'intro.p3': '在爱奇艺做海外增长时，我习惯用 AI 工具去探索效率提升：素材复盘、竞品调研、周报总结，每一个成形的 SOP 都是一个 AI 工作流产品的雏形；在北大做账号运营的时候，创意与社群的力量让人热泪盈眶，访员的手机里为什么都有某天的夕阳，是人类心照不宣的语言；在尼尔森做访谈时，琐碎的信息里能够看出人与产品之间的关系，看似冰冷的增长策略背后，其实是人类最朴实的需求。',
    'intro.p4': 'AI 时代，更需要在快节奏中慢下来，让人归于人，生活归于生活。',
    'exp.label': '经历',
    'exp.title': '工作与经历',
    'exp.iqiyi': 'Google 渠道广告投放、AI 工作流搭建、素材策略与复盘',
    'exp.pku': '小红书 0 到 1 搭建，单月 5000+ 阅读、200+ 粉丝',
    'exp.nielsen': '20+ 深度访谈、30+ 焦点小组，服务 OPPO、华为等品牌',
    'proj.label': '项目',
    'proj.title': '精选作品',
    'proj.t1': 'vibe coding',
    'proj.v1': 'AI 创意分析工具',
    'proj.v2title': '情人节礼物',
    'proj.v2': '情人节台球小游戏',
    'proj.v3title': '年轮',
    'proj.v3': '五年日记 ChronoLog',
    'contact.label': '联系',
    'contact.title': '保持联系'
  },
  en: {
    'nav.about': 'ABOUT',
    'nav.experience': 'EXPERIENCE',
    'nav.projects': 'PROJECTS',
    'nav.contact': 'CONTACT',
    'hero.hi': 'Hi, ',
    'hero.im': "I'm Qihan",
    'hero.tagline1': 'stay hungry stay foolish',
    'hero.tagline2': 'A storyteller using AI as leverage and language as medium.',
    'hero.hashtags': '#BFSU Translation #Tsinghua News #User Growth #New Media #Vibe Coding',
    'hero.cta': 'Explore More',
    'banner.1': 'National Scholarship',
    'banner.2': 'Tsinghua 2026',
    'banner.3': 'GPA 3.92/4.00',
    'banner.4': 'TOEFL 109',
    'banner.5': 'AI Native',
    'about.quote': "Not just writing, but storytelling— I aim to build bridges where data, narrative, and user needs converge, turning complex demands into simple and engaging experiences.",
    'intro.p1': "To me, language and data are equally fascinating. Whether it's translation, communication, or AI— at its core, it's all about 'decoding' and 'passion.'",
    'intro.p2': "In the AI era, 'decoding' and 'passion' are the best productivity. I want to make the complex simple, make advanced technology accessible to everyone, and help good content create real impact.",
    'intro.p3': "When doing overseas growth at iQiyi, I use AI tools to explore efficiency—content review, competitor research, weekly summaries. Every SOP becomes a prototype for an AI workflow product. When running accounts at Peking University, the power of creativity and community moved me—why does every interviewer's phone have that same sunset? It's a language we all understand without words. At Nielsen, the scattered bits of information reveal the relationship between people and products; behind cold growth strategies lies the most genuine human needs.",
    'intro.p4': "In the AI era, we need to slow down amid the rush—let people be people, let life be life.",
    'exp.label': 'EXPERIENCE',
    'exp.title': 'Work & Experience',
    'exp.iqiyi': 'Google ad campaigns, AI workflow setup, content strategy and analytics',
    'exp.pku': 'Xiaohongshu 0-to-1 launch, 5K+ reads and 200+ followers in one month',
    'exp.nielsen': '20+ IDIs, 30+ FGDs, serving brands like OPPO and Huawei',
    'proj.label': 'PROJECTS',
    'proj.title': 'Selected Works',
    'proj.t1': 'vibe coding',
    'proj.v1': 'AI creative analysis tool',
    'proj.v2title': 'Valentine Gift',
    'proj.v2': 'Valentine pool game',
    'proj.v3title': 'ChronoLog',
    'proj.v3': '5-year diary',
    'contact.label': 'CONTACT',
    'contact.title': 'Get in Touch'
  }
};

let currentLang = 'zh';

document.addEventListener('DOMContentLoaded', () => {
  const langBtn = document.getElementById('langBtn');

  langBtn.addEventListener('click', () => {
    currentLang = currentLang === 'zh' ? 'en' : 'zh';
    updateLang();
    langBtn.textContent = currentLang === 'zh' ? 'EN' : '中';
  });

  updateLang();
});

function updateLang() {
  document.documentElement.lang = currentLang === 'zh' ? 'zh-CN' : 'en';
  const t = translations[currentLang];

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) el.textContent = t[key];
  });
}
