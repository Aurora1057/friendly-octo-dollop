// ===== 项目数据 =====
const projects = [
  {
    title: '移动端金融应用',
    desc: '为一家创业金融公司设计的全面移动端体验，含流畅的动效与数据可视化。',
    img: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=futuristic%20mobile%20finance%20app%20ui%20dashboard%20dashboard%20dark%20theme%20charts%20glassmorphism%2Cultra%20modern%2Cprofessional&image_size=landscape_4_3',
    tags: ['UI 设计', '动效', 'iOS']
  },
  {
    title: '电商品牌网站',
    desc: '为高端生活方式品牌打造的品牌官网，强调沉浸式视觉与转化率优化。',
    img: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=elegant%20ecommerce%20fashion%20brand%20website%20hero%20banner%20minimalist%20shop%2Cbeige%20and%20gold%20aesthetic&image_size=landscape_4_3',
    tags: ['Web 设计', '品牌', 'SEO']
  },
  {
    title: '开源设计系统',
    desc: '一套可复用的开源设计系统，包含组件库、色彩体系与完整文档。',
    img: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=flat%20design%20system%20component%20library%20UI%20kits%20buttons%20cards%20colorful%20illustration&image_size=landscape_4_3',
    tags: ['设计系统', '开源', '前端']
  },
  {
    title: 'AI 内容创作工具',
    desc: '一款基于 AI 的写作与创意平台，专注于简洁交互与强大功能并存的体验。',
    img: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=AI%20writing%20tool%20web%20app%20dashboard%20neon%20purple%20blue%20gradient%20glass%20cards&image_size=landscape_4_3',
    tags: ['产品设计', 'AI', 'SaaS']
  },
  {
    title: '数据可视化平台',
    desc: '企业级数据分析平台，将复杂数据转化为直观、可交互的可视化图表。',
    img: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=big%20data%20visualization%20dashboard%20charts%20graphs%20analytics%20screen%20modern%20dark%20UI&image_size=landscape_4_3',
    tags: ['数据可视化', 'React', '图表']
  },
  {
    title: '旅行日记 App',
    desc: '一款精美的旅行记录 App，支持照片、地图标记与旅行故事分享。',
    img: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=travel%20journal%20mobile%20app%20mockup%20scenic%20landscape%20photography%20warm%20tone&image_size=landscape_4_3',
    tags: ['移动端', '摄影', 'UX']
  },
];

const skills = [
  { name: 'UI / UX 设计', level: 95 },
  { name: 'HTML / CSS', level: 92 },
  { name: 'JavaScript / TypeScript', level: 88 },
  { name: 'React / Vue', level: 85 },
  { name: '动效 / 交互设计', level: 80 },
];

// ===== 渲染作品 =====
const grid = document.getElementById('projectsGrid');
grid.innerHTML = projects.map((p, i) => `
  <article class="project-card reveal">
    <div class="project-cover">
      <a><img src="${p.img}" alt="${p.title}" loading="lazy" /></a>
      <div class="overlay"><i class="fas fa-arrow-up-right-from-square"></i></div>
    </div>
    <div class="project-body">
      <h3>${String(i+1).padStart(2,'0')}. ${p.title}</h3>
      <p>${p.desc}</p>
      <div class="project-tags">${p.tags.map(t => `<span>${t}</span>`).join('')}</div>
    </div>
  </article>
`).join('');

// ===== 渲染技能 =====
document.getElementById('skillsList').innerHTML = skills.map(s => `
  <div class="skill-item reveal">
    <div class="skill-head"><span>${s.name}</span><span>${s.level}%</span></div>
    <div class="skill-bar"><div class="skill-fill" data-width="${s.level}"></div></div>
  </div>
`).join('');

// ===== 头像 & 技能配图 =====
document.getElementById('avatarImg').src =
  'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=portrait%20photo%20of%20young%20asian%20creative%20professional%20designer%20workspace%20ambient%20lighting%20soft%20bokeh&image_size=square_hd';

document.getElementById('skillImg').src =
  'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20developer%20workspace%20with%20code%20on%20screens%20colorful%20gradient%20lighting%20aesthetic%20setup&image_size=landscape_16_9';

// ===== 导航滚动效果 =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// ===== 移动端菜单 =====
const menu = document.getElementById('menu');
const hamburger = document.getElementById('hamburger');
hamburger.addEventListener('click', () => menu.classList.toggle('open'));
menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.classList.remove('open')));

// ===== 表单提交 =====
document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = e.target.querySelector('button');
  btn.innerHTML = '已发送 <i class="fas fa-check"></i>';
  btn.style.opacity = '0.7';
  e.target.reset();
  setTimeout(() => { btn.innerHTML = '发送消息 <i class="fas fa-paper-plane"></i>'; btn.style.opacity = '1'; }, 2500);
});

// ===== 滚动显现动画 =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      // 触发技能条动画
      entry.target.querySelectorAll('.skill-fill').forEach(f => {
        f.style.width = f.dataset.width + '%';
      });
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// 立即处理上方可见元素
requestAnimationFrame(() => {
  document.querySelectorAll('.reveal').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      el.classList.add('visible');
      el.querySelectorAll('.skill-fill').forEach(f => { f.style.width = f.dataset.width + '%'; });
    }
  });
});

// ===== 当前激活导航高亮 =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.menu a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 120) current = s.getAttribute('id');
  });
  navLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + current));
});