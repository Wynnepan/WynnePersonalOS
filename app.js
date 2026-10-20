const defaultTasks = [
  { id: 1, text: '完成「停止内耗」视频脚本终稿', meta: '内容创作 · 预计 30 分钟', type: 'content', done: true },
  { id: 2, text: '发布并检查今日抖音内容', meta: '内容创作 · 10:30', type: 'content', done: true },
  { id: 3, text: '从爆款灵感中选题并完成二创', meta: '内容创作 · 预计 45 分钟', type: 'content', done: false },
  { id: 4, text: '阅读 20 页《认知觉醒》', meta: '个人成长 · 预计 20 分钟', type: 'growth', done: false },
  { id: 5, text: '记录今日复盘与一个新认知', meta: '个人成长 · 睡前', type: 'growth', done: false }
];

const ideas = [
  { title: '低能量的时候，不要逼自己自律', author: '@醒醒成长日记', stats: '86.4w 播放 · 7.2w 赞', heat: '97', angle: '用你的真实低谷经历，讲“微小行动”如何救回状态' },
  { title: '真正厉害的人，都允许自己慢一点', author: '@林野说成长', stats: '52.1w 播放 · 4.8w 赞', heat: '94', angle: '反常识开场 + 三个允许自己慢下来的具体瞬间' },
  { title: '戒掉这 3 个习惯，你会越来越清醒', author: '@简一', stats: '38.7w 播放 · 3.1w 赞', heat: '91', angle: '把泛泛的建议换成你亲测一周后的真实变化' },
  { title: '别急着证明自己，先悄悄完成这件事', author: '@小满同学', stats: '31.8w 播放 · 2.6w 赞', heat: '89', angle: '以“30 天不解释挑战”为主线，强化过程感' },
  { title: '成年人最顶级的自律，是降低期待', author: '@野生清醒', stats: '28.2w 播放 · 2.1w 赞', heat: '87', angle: '从你的日程表切入，展示做减法前后的对比' }
];

const benchmarkAccounts = [
  { avatar: '周', name: '周一不上头', tag: '职场成长', followers: '8.6w', reason: '擅长从一个工作细节讲清成长感悟', learn: '具体场景开头', color: '#d6c2ad' },
  { avatar: '柚', name: '柚子的下班生活', tag: '下班自媒体', followers: '12.4w', reason: '封面统一、清单内容收藏率很高', learn: '封面与清单结构', color: '#b8c7ae' },
  { avatar: '林', name: '林同学慢慢来', tag: '普通人进步', followers: '5.2w', reason: '表达真诚克制，没有说教感', learn: '个人故事的分寸', color: '#d7b8aa' },
  { avatar: '醒', name: '清醒上班日记', tag: '职场观察', followers: '16.8w', reason: '选题冲突明确，评论区讨论度高', learn: '矛盾型标题', color: '#aebdc5' },
  { avatar: '慢', name: '慢一点小姐', tag: '自我成长', followers: '7.9w', reason: '视觉留白舒服，内容情绪价值稳定', learn: '排版与情绪收束', color: '#c8bda5' }
];

const robotStages = [
  { title: '阶段 01 · 基础准备', subtitle: '目标：看懂机器人课程中的数学表达，并能独立编程', time: '8–10 周', resources: [
    ['MIT 线性代数 18.06', '矩阵、向量空间与特征值', 'https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/'],
    ['Python 官方教程', '掌握语法、数据结构与面向对象', 'https://docs.python.org/3/tutorial/'],
    ['MIT 单变量微积分', '理解导数、积分与连续变化', 'https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/'] ] },
  { title: '阶段 02 · 机器人核心', subtitle: '目标：理解机器人如何运动，并在 ROS 2 中完成控制', time: '10–12 周', resources: [
    ['Modern Robotics', '运动学、动力学、轨迹与控制的公开教材', 'https://modernrobotics.northwestern.edu/nu-gm-book-resource/'],
    ['ROS 2 官方教程', '节点、话题、服务与机器人软件工程', 'https://docs.ros.org/en/rolling/Tutorials.html'],
    ['MIT Underactuated Robotics', '动力学与非线性控制', 'https://underactuated.csail.mit.edu/'] ] },
  { title: '阶段 03 · 感知与自主', subtitle: '目标：让机器人感知环境、定位自己并规划行动', time: '12–16 周', resources: [
    ['OpenCV 官方教程', '图像处理与视觉基础', 'https://docs.opencv.org/4.x/d9/df8/tutorial_root.html'],
    ['Cyrill Stachniss SLAM', '定位、建图与自主机器人公开课', 'https://www.youtube.com/@CyrillStachniss'],
    ['OMPL 文档', '采样式运动规划算法与实践', 'https://ompl.kavrakilab.org/'] ] },
  { title: '阶段 04 · 研究方向', subtitle: '目标：阅读论文、复现实验并形成自己的研究问题', time: '长期', resources: [
    ['arXiv Robotics', '跟踪机器人领域最新公开论文', 'https://arxiv.org/list/cs.RO/recent'],
    ['Papers with Code', '寻找论文、代码与公开基准', 'https://paperswithcode.com/area/robots'],
    ['IEEE Robotics and Automation', '会议、期刊与研究社区入口', 'https://www.ieee-ras.org/'] ] }
];

const learningResources = {
  english: [
    { category:'听力', source:'BBC', title:'BBC 6 Minute English', desc:'短篇听力、文本与词汇讲解', url:'https://www.bbc.co.uk/learningenglish/english/features/6-minute-english' },
    { category:'听说', source:'TED', title:'TED Talks', desc:'演讲视频、字幕与全文稿', url:'https://www.ted.com/talks' },
    { category:'写作', source:'IELTS', title:'IELTS 官方备考资料', desc:'官方题型、样题与备考说明', url:'https://ielts.org/take-a-test/preparation-resources' },
    { category:'听力', source:'VOA', title:'VOA Learning English', desc:'慢速新闻与配套文本', url:'https://learningenglish.voanews.com/' },
    { category:'阅读', source:'BOOK', title:'Project Gutenberg', desc:'免费英文原著与公共领域电子书', url:'https://www.gutenberg.org/' },
    { category:'写作', source:'GUIDE', title:'Purdue OWL', desc:'英文写作、语法与引用规范', url:'https://owl.purdue.edu/' },
    { category:'写作', source:'TOOL', title:'Write & Improve', desc:'Cambridge 英文写作练习工具', url:'https://writeandimprove.com/' },
    { category:'听说', source:'B站', title:'BBC 英语精听教程', desc:'中文讲解的精听、跟读与复述方法', url:'https://search.bilibili.com/all?keyword=BBC%E8%8B%B1%E8%AF%AD%E7%B2%BE%E5%90%AC%E6%95%99%E7%A8%8B' },
    { category:'口语', source:'B站', title:'英语影子跟读训练', desc:'适合每日练习的口语跟读素材', url:'https://search.bilibili.com/all?keyword=%E8%8B%B1%E8%AF%AD%E5%BD%B1%E5%AD%90%E8%B7%9F%E8%AF%BB%E8%AE%AD%E7%BB%83' }
  ],
  drums: [
    { category:'视频', source:'DRUMEO', title:'Drumeo 免费鼓课', desc:'律动、歌曲、技巧与练习方法', url:'https://www.drumeo.com/beat/' },
    { category:'基本功', source:'PDF', title:'Vic Firth 40 Rudiments', desc:'标准基本功示范与谱例', url:'https://vicfirth.com/blogs/40-essential-rudiments' },
    { category:'工具', source:'TOOL', title:'在线鼓机', desc:'创建节奏并配合练习', url:'https://www.musicca.com/drum-machine' },
    { category:'乐谱', source:'SHEET', title:'Online Drummer 乐谱', desc:'歌曲鼓谱与基础练习', url:'https://www.onlinedrummer.com/sheet-music/' },
    { category:'视频', source:'B站', title:'架子鼓零基础入门', desc:'坐姿、握槌、基本节奏与整套鼓认识', url:'https://search.bilibili.com/all?keyword=%E6%9E%B6%E5%AD%90%E9%BC%93%E5%85%A5%E9%97%A8%E6%95%99%E7%A8%8B' },
    { category:'基本功', source:'B站', title:'40 条基本功与手法', desc:'单跳、双跳、复合跳与节拍器练习', url:'https://search.bilibili.com/all?keyword=%E6%9E%B6%E5%AD%90%E9%BC%93%E5%9F%BA%E6%9C%AC%E5%8A%9F40%E6%9D%A1' },
    { category:'乐谱', source:'B站', title:'鼓谱识读教程', desc:'五线谱位置、时值与反复记号', url:'https://search.bilibili.com/all?keyword=%E6%9E%B6%E5%AD%90%E9%BC%93%E8%AF%86%E8%B0%B1%E6%95%99%E7%A8%8B' },
    { category:'跟练', source:'B站', title:'中文歌曲跟鼓练习', desc:'从慢速歌曲练稳定与段落衔接', url:'https://search.bilibili.com/all?keyword=%E6%9E%B6%E5%AD%90%E9%BC%93%E6%AD%8C%E6%9B%B2%E8%B7%9F%E7%BB%83' }
  ],
  fitness: [
    { category:'游泳', source:'USA', title:'USA Swimming 公开资料', desc:'游泳训练与安全知识入口', url:'https://www.usaswimming.org/' },
    { category:'普拉提', source:'NHS', title:'NHS 运动指导', desc:'活动建议与基础运动说明', url:'https://www.nhs.uk/live-well/exercise/' },
    { category:'举铁', source:'ACSM', title:'ACSM 运动指南', desc:'体力活动与力量训练指南', url:'https://www.acsm.org/education-resources/trending-topics-resources/physical-activity-guidelines' },
    { category:'游泳', source:'B站', title:'自由泳零基础入门', desc:'漂浮、打腿、换气与手臂配合', url:'https://search.bilibili.com/all?keyword=%E8%87%AA%E7%94%B1%E6%B3%B3%E5%85%A5%E9%97%A8%E6%95%99%E7%A8%8B' },
    { category:'游泳', source:'B站', title:'自由泳换气专项', desc:'解决抬头、呛水与节奏不稳', url:'https://search.bilibili.com/all?keyword=%E8%87%AA%E7%94%B1%E6%B3%B3%E6%8D%A2%E6%B0%94%E6%95%99%E7%A8%8B' },
    { category:'普拉提', source:'B站', title:'垫上普拉提入门', desc:'呼吸、核心激活与骨盆稳定', url:'https://search.bilibili.com/all?keyword=%E6%99%AE%E6%8B%89%E6%8F%90%E5%85%A5%E9%97%A8%E6%95%99%E7%A8%8B' },
    { category:'普拉提', source:'B站', title:'零基础完整跟练', desc:'20–40 分钟低冲击课程', url:'https://search.bilibili.com/all?keyword=%E6%99%AE%E6%8B%89%E6%8F%90%E9%9B%B6%E5%9F%BA%E7%A1%80%E8%B7%9F%E7%BB%83' },
    { category:'举铁', source:'B站', title:'新手力量训练入门', desc:'计划、器械认识与动作选择', url:'https://search.bilibili.com/all?keyword=%E5%81%A5%E8%BA%AB%E4%B8%BE%E9%93%81%E5%85%A5%E9%97%A8' },
    { category:'举铁', source:'B站', title:'深蹲与硬拉动作教程', desc:'站位、核心支撑与髋膝配合', url:'https://search.bilibili.com/all?keyword=%E6%B7%B1%E8%B9%B2%E7%A1%AC%E6%8B%89%E5%8A%A8%E4%BD%9C%E6%95%99%E7%A8%8B' }
  ]
};

let tasks = JSON.parse(localStorage.getItem('growth-desk-tasks') || 'null') || defaultTasks;
let activeFilter = 'all';
let ideaOffset = 0;
let accountOffset = 0;
const taskList = document.querySelector('#taskList');
const dialog = document.querySelector('#taskDialog');
const remixDialog = document.querySelector('#remixDialog');

function setDate() {
  const now = new Date();
  const weekdays = ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'];
  const datePill = document.querySelector('#datePill');
  if (datePill) datePill.innerHTML = `<strong>${now.getMonth()+1} 月 ${now.getDate()} 日</strong>${weekdays[now.getDay()]}`;
}

function renderTasks() {
  const filtered = activeFilter === 'all' ? tasks : tasks.filter(t => t.type === activeFilter);
  taskList.innerHTML = filtered.map(t => `<div class="task-row ${t.done ? 'done' : ''}" data-id="${t.id}">
    <button class="check" aria-label="${t.done ? '标记未完成' : '完成任务'}">${t.done ? '✓' : ''}</button>
    <div class="task-copy"><strong>${escapeHtml(t.text)}</strong><span>${escapeHtml(t.meta)}</span></div>
    <span class="task-tag ${t.type}">${t.type === 'content' ? '内容' : '成长'}</span><button class="more-btn">•••</button>
  </div>`).join('');
  const done = tasks.filter(t => t.done).length;
  document.querySelector('#doneCount').textContent = done;
  document.querySelector('#totalCount').textContent = tasks.length;
  const percent = Math.round(done / tasks.length * 100) || 0;
  document.querySelector('#progressValue').textContent = `${percent}%`;
  document.querySelector('.focus-ring').style.background = `conic-gradient(var(--green) ${percent}%, #e5e7df 0)`;
  localStorage.setItem('growth-desk-tasks', JSON.stringify(tasks));
}

function renderIdeas() {
  const selected = [0,1,2].map(i => ideas[(i + ideaOffset) % ideas.length]);
  document.querySelector('#ideaList').innerHTML = selected.map((idea, i) => `<div class="idea-card">
    <div class="idea-top"><span class="idea-rank">0${i+1}</span><div class="idea-copy"><h3>${idea.title}</h3><p>${idea.author} · ${idea.stats}</p></div><span class="heat">🔥 ${idea.heat}</span></div>
    <div class="idea-actions"><button data-remix="${(i + ideaOffset) % ideas.length}">✦ AI 二创</button><button data-angle="${(i + ideaOffset) % ideas.length}">查看切入角度</button></div>
  </div>`).join('');
}

function renderAccounts() {
  const selected = [0,1,2].map(i => benchmarkAccounts[(i + accountOffset) % benchmarkAccounts.length]);
  document.querySelector('#accountList').innerHTML = selected.map(account => `<div class="account-card">
    <div class="account-avatar" style="background:${account.color}">${account.avatar}</div>
    <div class="account-info"><div><h3>${account.name}</h3><span>${account.tag}</span></div><p>${account.reason}</p><small>${account.followers} 粉丝 · 今日学习：${account.learn}</small></div>
    <button class="follow-benchmark">＋ 对标</button>
  </div>`).join('');
}

function escapeHtml(value) { const div = document.createElement('div'); div.textContent = value; return div.innerHTML; }
function toast(message) { const el = document.querySelector('#toast'); el.textContent = message; el.classList.add('show'); setTimeout(() => el.classList.remove('show'), 2200); }
function openTaskDialog() { dialog.showModal(); setTimeout(() => document.querySelector('#taskInput').focus(), 50); }

document.querySelectorAll('#addTaskBtn,#addInlineBtn').forEach(btn => btn.addEventListener('click', openTaskDialog));
taskList.addEventListener('click', e => {
  const row = e.target.closest('.task-row'); if (!row) return;
  if (e.target.closest('.check')) { const task = tasks.find(t => t.id === Number(row.dataset.id)); task.done = !task.done; renderTasks(); }
  if (e.target.closest('.more-btn')) { tasks = tasks.filter(t => t.id !== Number(row.dataset.id)); renderTasks(); toast('任务已移除'); }
});
document.querySelector('#taskForm').addEventListener('submit', e => {
  const input = document.querySelector('#taskInput'); if (!input.value.trim()) { e.preventDefault(); return; }
  const type = document.querySelector('#taskType').value; const time = document.querySelector('#taskTime').value;
  tasks.push({ id: Date.now(), text: input.value.trim(), meta: `${type === 'content' ? '内容创作' : '个人成长'} · 预计 ${time}`, type, done: false });
  input.value = ''; renderTasks(); toast('已加入今天的计划');
});
document.querySelectorAll('.task-tabs button').forEach(btn => btn.addEventListener('click', () => { document.querySelector('.task-tabs .active').classList.remove('active'); btn.classList.add('active'); activeFilter = btn.dataset.filter; renderTasks(); }));

document.querySelector('#refreshIdeas').addEventListener('click', e => { ideaOffset = (ideaOffset + 3) % ideas.length; renderIdeas(); e.currentTarget.animate([{transform:'rotate(0)'},{transform:'rotate(360deg)'}],{duration:450}); });
document.querySelector('#ideaList').addEventListener('click', e => {
  const remix = e.target.closest('[data-remix]'); const angle = e.target.closest('[data-angle]');
  if (angle) { toast(`切入角度：${ideas[angle.dataset.angle].angle}`); }
  if (remix) openRemix(Number(remix.dataset.remix));
});
function openRemix(index) {
  const idea = ideas[index]; document.querySelector('#remixSource').innerHTML = `<b>原灵感：</b>${idea.title}<br><span style="color:#858a82">你的切入角度：${idea.angle}</span>`;
  document.querySelector('#scriptContent').innerHTML = `<p><b>01 / 钩子（0–3 秒）</b><br>“我以前总以为状态差，是因为自己不够自律。后来才发现，恰恰相反。”</p><p><b>02 / 个人故事（4–25 秒）</b><br>讲一个你强迫自己硬撑、结果越来越疲惫的真实片段；再给出那个让你改变的小瞬间。</p><p><b>03 / 方法（26–42 秒）</b><br>分享一个今天就能做的最小行动。保持具体、有画面，不做说教。</p><p><b>04 / 结尾（43–50 秒）</b><br>“成长不是永远向上，也包括学会接住偶尔掉下来的自己。”</p>`;
  remixDialog.showModal();
}
document.querySelector('#regenerate').addEventListener('click', () => { const box = document.querySelector('#scriptContent'); box.style.opacity='.35'; setTimeout(() => { box.style.opacity='1'; toast('已换一种更有故事感的表达'); }, 450); });
document.querySelector('#saveRemix').addEventListener('click', () => toast('脚本已保存到二创工作室'));
document.querySelector('.ai-tip button').addEventListener('click', e => { e.currentTarget.textContent = '已采纳 ✓'; toast('优化建议已加入下一条脚本'); });
document.querySelector('#openReview').addEventListener('click', () => toast('完整复盘：完播率是下一步最值得优化的指标'));
document.querySelector('#allIdeasBtn').addEventListener('click', () => toast('灵感库已为你同步今日 12 条成长类热点'));
document.querySelectorAll('.nav-item[data-platform]').forEach(button => button.addEventListener('click', () => {
  document.querySelector('.nav-item.active').classList.remove('active'); button.classList.add('active');
  document.querySelectorAll('.nav-group').forEach(group => group.classList.toggle('open', group.contains(button)));
  document.querySelectorAll('.platform-dashboard').forEach(dashboard => dashboard.classList.remove('active'));
  document.querySelector(`#${button.dataset.platform}Dashboard`).classList.add('active');
  document.body.classList.toggle('xhs-mode', button.dataset.platform === 'xiaohongshu');
  document.body.classList.toggle('robot-mode', button.dataset.platform === 'robotics');
  document.body.classList.toggle('drums-mode', button.dataset.platform === 'drums');
  document.body.classList.toggle('workspace-view', button.dataset.platform !== 'home');
  document.querySelector('#addTaskBtn').classList.toggle('nav-hidden', ['home', 'douyin', 'english', 'robotics', 'drums', 'fitness'].includes(button.dataset.platform));
  document.querySelector('#homeReturnBtn').classList.toggle('nav-hidden', button.dataset.platform === 'home');
  document.querySelector('.sidebar').classList.remove('open');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}));
document.querySelector('#homeReturnBtn').addEventListener('click', () => document.querySelector('.nav-item[data-platform="home"]').click());
document.querySelectorAll('[data-open-platform]').forEach(card => card.addEventListener('click', () => {
  document.querySelector(`.nav-item[data-platform="${card.dataset.openPlatform}"]`)?.click();
}));
document.querySelector('#copyEmailBtn').addEventListener('click', async event => {
  const email = event.currentTarget.dataset.email.trim();
  if (!email) { toast('邮箱待配置，提供地址后即可一键复制'); return; }
  try { await navigator.clipboard.writeText(email); toast(`邮箱已复制：${email}`); }
  catch { toast(`邮箱：${email}`); }
});
document.querySelectorAll('.subnav button').forEach(button => button.addEventListener('click', () => {
  const group = button.closest('.nav-group');
  const parent = group.querySelector('.nav-item[data-platform]');
  if (!parent.classList.contains('active')) parent.click();
  group.querySelectorAll('.subnav button').forEach(item => item.classList.remove('active'));
  button.classList.add('active');
  setTimeout(() => {
    document.querySelector(`#${button.dataset.target}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    if (window.innerWidth <= 760) document.querySelector('.sidebar').classList.remove('open');
  }, 80);
}));
document.querySelector('#refreshAccounts').addEventListener('click', () => { accountOffset = (accountOffset + 3) % benchmarkAccounts.length; renderAccounts(); });
document.querySelector('#accountList').addEventListener('click', e => { if (e.target.closest('.follow-benchmark')) { e.target.textContent = '已加入 ✓'; e.target.classList.add('added'); toast('已加入你的每日对标池'); } });
document.querySelector('#generateCopy').addEventListener('click', () => {
  document.querySelector('#xhsCopyContent').innerHTML = `<p><b>标题：</b>上班很累，但我没有停止成长</p><p>昨晚 9 点多，我终于关掉电脑。那一刻别说读书了，我连洗澡都需要做心理建设。</p><p>以前我会因此责怪自己：为什么别人下班能健身、学英语、做副业，我只想躺着？后来我才明白，上班族的成长不应该靠透支。</p><p><b>现在我只做三件小事：</b><br>① 通勤时听 20 分钟真正感兴趣的内容<br>② 到家只完成一个“小到不会失败”的动作<br>③ 睡前记下今天新懂的一件事</p><p>它们没有让我一夜逆袭，却让我在很累的生活里，依然感到自己在缓慢向前。</p><p>不必每天都很厉害。普通人的成长，也可以只是今天没有彻底放弃自己。</p><p><b>你下班后，还会为自己做哪件小事？</b></p><p style="color:#9a6b64">#上班族日常 #自我成长 #下班后的生活 #普通人如何改变自己</p>`;
  document.querySelector('#copyDialog').showModal();
});
document.querySelector('#copyText').addEventListener('click', () => { navigator.clipboard?.writeText(document.querySelector('#xhsCopyContent').innerText); toast('文案已复制'); });
document.querySelector('#saveXhsCopy').addEventListener('click', () => toast('已保存到小红书草稿箱'));
document.querySelectorAll('.copy-tabs button').forEach(button => button.addEventListener('click', () => { document.querySelector('.copy-tabs .active').classList.remove('active'); button.classList.add('active'); toast(`已切换为${button.textContent}风格`); }));
document.querySelector('.optimize-list').addEventListener('click', e => { const button = e.target.closest('[data-optimize]'); if (!button) return; button.textContent = '已处理 ✓'; button.classList.add('done'); toast(button.dataset.optimize); });

function renderRobotStage(index) {
  const stage = robotStages[index];
  document.querySelector('#stageTitle').textContent = stage.title;
  document.querySelector('#stageSubtitle').textContent = stage.subtitle;
  document.querySelector('.stage-detail .resource-badge').textContent = stage.time;
  document.querySelector('#robotResources').innerHTML = stage.resources.map((resource, i) => `<a href="${resource[2]}" target="_blank" rel="noreferrer"><b>0${i + 1}</b><span><strong>${resource[0]}</strong><small>${resource[1]}</small></span><i>开始学习 ↗</i></a>`).join('');
}
document.querySelectorAll('.road-step').forEach((step, index) => step.addEventListener('click', () => { document.querySelector('.road-step.active').classList.remove('active'); step.classList.add('active'); renderRobotStage(index); }));
document.querySelectorAll('[data-study]').forEach(input => { input.checked = localStorage.getItem(`study-${input.dataset.study}`) === 'true'; input.addEventListener('change', () => { localStorage.setItem(`study-${input.dataset.study}`, input.checked); toast(input.checked ? `${input.dataset.study}任务完成` : `${input.dataset.study}已改为未完成`); }); });
document.querySelectorAll('.study-done').forEach(button => button.addEventListener('click', () => { button.textContent = '已完成 ✓'; button.classList.add('done'); toast('学习记录已保存'); }));
document.querySelectorAll('.daily-refresh').forEach(button => button.addEventListener('click', () => toast(button.dataset.message)));
let bpm = 70;
document.querySelectorAll('[data-bpm]').forEach(button => button.addEventListener('click', () => { bpm = Math.max(40, Math.min(180, bpm + Number(button.dataset.bpm))); document.querySelector('#bpmValue').textContent = `${bpm} BPM`; }));
document.querySelector('#startPractice').addEventListener('click', e => { e.currentTarget.textContent = '● 练习进行中'; toast(`节拍器目标：${bpm} BPM`); });
document.querySelectorAll('[data-fitness]').forEach(input => input.addEventListener('change', () => toast(input.checked ? `${input.dataset.fitness}训练已完成` : `${input.dataset.fitness}改为未完成`)));

function mountResourceLibrary(host, key) {
  if (!host) return;
  host.className = 'filterable-library';
  let category = '全部'; let page = 0; const pageSize = 5;
  const selected = new Set(JSON.parse(localStorage.getItem(`selected-resources-${key}`) || '[]'));
  const render = () => {
    const categories = ['全部', ...new Set(learningResources[key].map(item => item.category))];
    const filtered = category === '全部' ? learningResources[key] : learningResources[key].filter(item => item.category === category);
    const pages = Math.max(1, Math.ceil(filtered.length / pageSize)); page = Math.min(page, pages - 1);
    const visible = filtered.slice(page * pageSize, page * pageSize + pageSize);
    host.innerHTML = `<div class="resource-filters">${categories.map(item => `<button class="${item === category ? 'active' : ''}" data-category="${item}">${item}</button>`).join('')}</div>
      <div class="resource-results">${visible.map(item => `<article class="resource-result ${selected.has(item.url) ? 'selected' : ''}"><span class="resource-source ${item.source === 'B站' ? 'bilibili' : ''}">${item.source}</span><a href="${item.url}" target="_blank" rel="noreferrer"><strong>${item.title}</strong><small>${item.desc}</small></a><button class="resource-select" data-url="${item.url}" title="${selected.has(item.url) ? '取消选中' : '选中资料'}">${selected.has(item.url) ? '★' : '☆'}</button></article>`).join('')}</div>
      <div class="resource-pagination"><button data-page="prev" ${page === 0 ? 'disabled' : ''}>← 上一页</button><span>第 ${page + 1} / ${pages} 页 · 共 ${filtered.length} 条</span><button data-page="next" ${page >= pages - 1 ? 'disabled' : ''}>下一页 →</button></div>`;
  };
  host.addEventListener('click', event => {
    const filter = event.target.closest('[data-category]');
    if (filter) { category = filter.dataset.category; page = 0; render(); return; }
    const pager = event.target.closest('[data-page]');
    if (pager && !pager.disabled) { page += pager.dataset.page === 'next' ? 1 : -1; render(); return; }
    const selector = event.target.closest('[data-url]');
    if (selector) { const url = selector.dataset.url; selected.has(url) ? selected.delete(url) : selected.add(url); localStorage.setItem(`selected-resources-${key}`, JSON.stringify([...selected])); render(); toast(selected.has(url) ? '已选中这条学习资料' : '已取消选中'); }
  });
  render();
}

const englishLibrary = document.querySelector('.resource-library .compact-links');
const drumLibrary = document.querySelector('.drum-side .resource-stack');
const fitnessLibrary = document.querySelector('.cn-fitness-resources .cn-fitness-grid');
const fitnessLibraryTitle = document.querySelector('.cn-fitness-resources .panel-head h2');
const fitnessLibraryDescription = document.querySelector('.cn-fitness-resources .panel-head p');
if (fitnessLibraryTitle) fitnessLibraryTitle.textContent = '公开学习资料';
if (fitnessLibraryDescription) fitnessLibraryDescription.textContent = '国内外教程混排 · 支持筛选、翻页和选中';
const fitnessLibraryBadge = document.querySelector('.cn-fitness-resources .bili-badge');
if (fitnessLibraryBadge) fitnessLibraryBadge.textContent = 'LIBRARY';
document.querySelector('.cn-fitness-resources .resource-caution')?.remove();
mountResourceLibrary(englishLibrary, 'english'); mountResourceLibrary(drumLibrary, 'drums'); mountResourceLibrary(fitnessLibrary, 'fitness');
const searchDialog = document.querySelector('#searchDialog');
const searchInput = document.querySelector('#globalSearchInput');
const searchResults = document.querySelector('#globalSearchResults');
const workspaceSearchItems = [
  { title:'抖音工作台', desc:'任务、爆款灵感、AI 二创、内容复盘、飞书待办', platform:'douyin' },
  { title:'小红书图文', desc:'对标账号、图文选题、文案生成、笔记诊断', platform:'xiaohongshu' },
  { title:'英语学习', desc:'听说读写、词汇与公开资料', platform:'english' },
  { title:'机器人学习', desc:'基础、核心、感知自主与研究方向', platform:'robotics' },
  { title:'架子鼓学习', desc:'练习计划、鼓谱与公开教程', platform:'drums' },
  { title:'健身训练', desc:'游泳、普拉提、举铁', platform:'fitness' },
  { title:'抖音爆款灵感', desc:'按成长型风格筛选内容灵感', platform:'douyin', target:'douyinIdeas' },
  { title:'抖音内容复盘', desc:'播放、互动指标与 AI 优化', platform:'douyin', target:'douyinReview' },
  { title:'小红书每日对标账号', desc:'账号定位与学习点', platform:'xiaohongshu', target:'xhsBenchmarks' },
  { title:'小红书笔记诊断', desc:'曝光、点击率、收藏率与评论', platform:'xiaohongshu', target:'xhsReview' },
  { title:'飞书待办事项', desc:'打开飞书表格中的工作与内容待办', platform:'home', target:'feishuTodoLink' }
];
const resourceSearchItems = Object.entries(learningResources).flatMap(([platform, resources]) => resources.map(item => ({ title:item.title, desc:`${item.category} · ${item.desc}`, platform, url:item.url })));
const allSearchItems = [...workspaceSearchItems, ...resourceSearchItems];
function renderGlobalSearch(query = '') {
  const value = query.trim().toLowerCase();
  const items = (value ? allSearchItems.filter(item => `${item.title} ${item.desc}`.toLowerCase().includes(value)) : workspaceSearchItems.slice(0, 6)).slice(0, 10);
  searchResults.innerHTML = items.length ? items.map(item => `<button class="global-search-item" data-platform="${item.platform}" ${item.target ? `data-target="${item.target}"` : ''} ${item.url ? `data-url="${item.url}"` : ''}><span>${item.url ? '↗' : '⌘'}</span><div><strong>${item.title}</strong><small>${item.desc}</small></div><i>›</i></button>`).join('') : '<div class="search-empty">没有找到相关内容，试试更短的关键词。</div>';
}
document.querySelector('#globalSearchBtn').addEventListener('click', () => { renderGlobalSearch(); searchDialog.showModal(); setTimeout(() => searchInput.focus(), 50); });
document.querySelector('#closeSearchBtn').addEventListener('click', () => searchDialog.close());
searchInput.addEventListener('input', () => renderGlobalSearch(searchInput.value));
searchResults.addEventListener('click', event => {
  const item = event.target.closest('.global-search-item'); if (!item) return;
  if (item.dataset.url) { window.open(item.dataset.url, '_blank', 'noopener'); return; }
  document.querySelector(`.nav-item[data-platform="${item.dataset.platform}"]`)?.click(); searchDialog.close();
  if (item.dataset.target) setTimeout(() => document.querySelector(`#${item.dataset.target}`)?.scrollIntoView({ behavior:'smooth', block:'center' }), 100);
});
document.querySelector('#notificationBtn').addEventListener('click', event => { event.currentTarget.querySelector('i')?.remove(); toast('目前没有新的通知'); });

function updateHomeClock() {
  const now = new Date();
  document.querySelector('#homeClock').textContent = now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
}
updateHomeClock(); setInterval(updateHomeClock, 30000);

let calendarCursor = new Date();
calendarCursor.setDate(1);
function renderCalendar() {
  const year = calendarCursor.getFullYear(); const month = calendarCursor.getMonth();
  const today = new Date(); const firstDay = (new Date(year, month, 1).getDay() + 6) % 7;
  const days = new Date(year, month + 1, 0).getDate(); const previousDays = new Date(year, month, 0).getDate();
  document.querySelector('#calendarTitle').textContent = `${year}年${month + 1}月`;
  const cells = [];
  for (let i = firstDay - 1; i >= 0; i--) cells.push(`<span class="muted">${previousDays - i}</span>`);
  for (let day = 1; day <= days; day++) {
    const isToday = year === today.getFullYear() && month === today.getMonth() && day === today.getDate();
    cells.push(`<button class="${isToday ? 'today' : ''}">${day}</button>`);
  }
  let next = 1; while (cells.length < 42) cells.push(`<span class="muted">${next++}</span>`);
  document.querySelector('#calendarDays').innerHTML = cells.join('');
}
document.querySelector('#calendarPrev').addEventListener('click', () => { calendarCursor.setMonth(calendarCursor.getMonth() - 1); renderCalendar(); });
document.querySelector('#calendarNext').addEventListener('click', () => { calendarCursor.setMonth(calendarCursor.getMonth() + 1); renderCalendar(); });
renderCalendar();

function applyNumericFont(root = document.body) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const nodes = [];
  while (walker.nextNode()) {
    const node = walker.currentNode; const parent = node.parentElement;
    if (!parent || parent.closest('.numeric') || ['SCRIPT','STYLE','TEXTAREA','OPTION'].includes(parent.tagName)) continue;
    if (/\d/.test(node.nodeValue)) nodes.push(node);
  }
  nodes.forEach(node => {
    const parts = node.nodeValue.split(/(\d+(?:[.:,/-]\d+)*(?:%|[wW])?)/g);
    if (parts.length < 2) return;
    const fragment = document.createDocumentFragment();
    parts.forEach(part => {
      if (!part) return;
      if (/^\d/.test(part)) { const span = document.createElement('span'); span.className = 'numeric'; span.textContent = part; fragment.appendChild(span); }
      else fragment.appendChild(document.createTextNode(part));
    });
    node.replaceWith(fragment);
  });
}

applyNumericFont();
const numericObserver = new MutationObserver(mutations => {
  numericObserver.disconnect();
  mutations.forEach(mutation => {
    if (mutation.type === 'characterData') applyNumericFont(mutation.target.parentElement);
    mutation.addedNodes.forEach(node => { if (node.nodeType === Node.ELEMENT_NODE) applyNumericFont(node); else if (node.parentElement) applyNumericFont(node.parentElement); });
  });
  numericObserver.observe(document.body, { childList: true, characterData: true, subtree: true });
});
numericObserver.observe(document.body, { childList: true, characterData: true, subtree: true });

setDate(); renderTasks(); renderIdeas(); renderAccounts(); renderRobotStage(0);
