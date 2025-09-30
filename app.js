// 章节数据
const chapters = [
  {
    id: '00-preface-beautiful-mind',
    number: '前言',
    title: '美丽心灵：医美咨询的本质',
    excerpt: '探讨医美咨询的核心价值和顾问的角色定位，以及如何通过专业咨询提升客户体验。'
  },
  {
    id: '01-china-medical-aesthetics-market',
    number: '第一章',
    title: '中国医疗美容市场概览',
    excerpt: '分析当前中国医美市场的发展现状、趋势和特点，帮助顾问了解行业背景。'
  },
  {
    id: '02-scientific-psychology-foundation',
    number: '第二章',
    title: '科学心理学基础',
    excerpt: '介绍基础心理学知识，包括认知心理学、社会心理学等，为咨询提供理论支持。'
  },
  {
    id: '03-positive-psychology-confidence',
    number: '第三章',
    title: '积极心理学与自信心建设',
    excerpt: '探讨如何运用积极心理学原理，帮助客户建立正确的美丽认知和自信心。'
  },
  {
    id: '04-medical-narrative-compassion',
    number: '第四章',
    title: '医学叙事与共情沟通',
    excerpt: '介绍叙事医学的概念和方法，以及如何通过共情沟通建立良好的客户关系。'
  },
  {
    id: '05-consumer-psychology-decision',
    number: '第五章',
    title: '消费者心理学与决策机制',
    excerpt: '分析消费者在医美决策过程中的心理活动和影响因素，提升咨询效果。'
  },
  {
    id: '07-psychology-practical-tools',
    number: '第七章',
    title: '心理学实用工具',
    excerpt: '提供多种实用的心理评估工具和咨询技巧，帮助顾问更有效地开展工作。'
  },
  {
    id: '08-comprehensive-case-analysis',
    number: '第八章',
    title: '综合案例分析',
    excerpt: '通过真实案例分析，展示如何将心理学知识应用于实际咨询工作中。'
  },
  {
    id: '09-digital-age-remote-consultation',
    number: '第九章',
    title: '数字时代的远程咨询',
    excerpt: '探讨如何在数字时代有效开展远程咨询服务，提升服务范围和质量。'
  },
  {
    id: '10-consultant-self-growth-career-development',
    number: '第十章',
    title: '顾问的自我成长与职业发展',
    excerpt: '提供顾问职业发展规划和自我提升的建议，助力长期职业发展。'
  },
  {
    id: 'appendix-a-professional-glossary',
    number: '附录A',
    title: '专业术语 glossary',
    excerpt: '汇总医美行业和心理学相关的专业术语，方便顾问查阅和学习。'
  },
  {
    id: 'appendix-b-practical-tools-assessments',
    number: '附录B',
    title: '实用工具与评估量表',
    excerpt: '提供多种实用的评估工具和量表，帮助顾问更科学地开展咨询工作。'
  },
  {
    id: 'appendix-c-recommended-reading-resources',
    number: '附录C',
    title: '推荐阅读资源',
    excerpt: '推荐相关领域的优秀书籍和资源，帮助顾问持续学习和提升。'
  }
];

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
  // 加载章节列表
  loadChapters();

  // 初始化移动导航
  initMobileNav();
});

// 加载章节列表
function loadChapters() {
  const chaptersGrid = document.querySelector('.chapters-grid');
  if (!chaptersGrid) return;

  chapters.forEach(chapter => {
    const chapterCard = document.createElement('div');
    chapterCard.className = 'chapter-card';

    const chapterLink = document.createElement('a');
    chapterLink.href = `#${chapter.id}`;
    chapterLink.className = 'chapter-link';
    // 修改章节链接点击事件处理函数
    chapterLink.addEventListener('click', function(e) {
      e.preventDefault();
      // 实际加载章节内容
      loadChapterContent(chapter.id);
    });

    const chapterNumber = document.createElement('div');
    chapterNumber.className = 'chapter-number';
    chapterNumber.textContent = chapter.number;

    const chapterTitle = document.createElement('h3');
    chapterTitle.className = 'chapter-title';
    chapterTitle.textContent = chapter.title;

    const chapterExcerpt = document.createElement('p');
    chapterExcerpt.className = 'chapter-excerpt';
    chapterExcerpt.textContent = chapter.excerpt;

    chapterLink.appendChild(chapterNumber);
    chapterLink.appendChild(chapterTitle);
    chapterLink.appendChild(chapterExcerpt);
    chapterCard.appendChild(chapterLink);
    chaptersGrid.appendChild(chapterCard);
  });
}

// 初始化移动导航
function initMobileNav() {
  const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (!mobileNavToggle || !navLinks) return;

  mobileNavToggle.addEventListener('click', function() {
    navLinks.classList.toggle('active');
    const icon = mobileNavToggle.querySelector('i');
    if (navLinks.classList.contains('active')) {
      icon.classList.remove('ri-menu-line');
      icon.classList.add('ri-close-line');
    } else {
      icon.classList.remove('ri-close-line');
      icon.classList.add('ri-menu-line');
    }
  });

  // 点击导航链接后关闭菜单
  const navItems = navLinks.querySelectorAll('a');
  navItems.forEach(item => {
    item.addEventListener('click', function() {
      if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        const icon = mobileNavToggle.querySelector('i');
        icon.classList.remove('ri-close-line');
        icon.classList.add('ri-menu-line');
      }
    });
  });
}

// 平滑滚动
function smoothScroll(targetId) {
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    window.scrollTo({
      top: targetElement.offsetTop - 80,
      behavior: 'smooth'
    });
  }
}

// 添加加载章节内容的新函数
function loadChapterContent(chapterId) {
  // 查找章节内容容器
  const contentContainer = document.querySelector('.chapter-content-container');
  if (!contentContainer) {
    console.error('章节内容容器不存在');
    return;
  }

  // 显示加载状态
  contentContainer.innerHTML = '<div class="loading">加载中...</div>';

  // 发送请求加载章节内容
  fetch(`${chapterId}.html`)
    .then(response => {
      if (!response.ok) {
        throw new Error('章节加载失败');
      }
      return response.text();
    })
    .then(html => {
      // 提取HTML中的章节内容部分
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      const chapterContent = doc.querySelector('.chapter-content');

      if (chapterContent) {
        contentContainer.innerHTML = chapterContent.innerHTML;
        // 滚动到章节内容
        smoothScroll('chapter-content');
      } else {
        contentContainer.innerHTML = '<div class="error">无法找到章节内容</div>';
      }
    })
    .catch(error => {
      contentContainer.innerHTML = `<div class="error">${error.message}</div>`;
    });
}