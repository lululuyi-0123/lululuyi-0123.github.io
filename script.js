// 页面路由和导航
const pages = {
    home: document.getElementById('homePage'),
    about: document.getElementById('aboutPage'),
    project: document.getElementById('projectPage'),
    contact: document.getElementById('contactPage'),
    hipong: document.getElementById('hipongPage'),
    meowtrack: document.getElementById('meowtrackPage'),
    emotriend: document.getElementById('emotriendPage')
};

// 欢迎圆圈元素（独立容器）
const welcomeSection = document.getElementById('homePage');

const navItems = document.querySelectorAll('.nav-item');
const welcomeCircle = document.getElementById('welcomeCircle');

// 初始化导航
navItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const page = item.getAttribute('data-page');
        navigateToPage(page);
    });
});

// 欢迎圆圈点击事件 - 跳转到 About Me
welcomeCircle.addEventListener('click', () => {
    navigateToPage('about');
});

// 导航到指定页面
function navigateToPage(pageName) {
    // 隐藏所有页面内容
    const pageContents = document.querySelectorAll('.page-content');
    pageContents.forEach(page => {
        if (page) page.style.display = 'none';
    });

    // 获取轮播容器
    const carouselContainer = document.querySelector('.carousel-container');

    // 控制欢迎圆圈和轮播的显示/隐藏
    if (pageName === 'home') {
        if (welcomeSection) welcomeSection.style.display = 'block';
        if (carouselContainer) carouselContainer.style.display = 'block';
    } else {
        if (welcomeSection) welcomeSection.style.display = 'none';
        if (carouselContainer) carouselContainer.style.display = 'none';
    }

    // 显示目标页面
    if (pages[pageName] && pageName !== 'home') {
        pages[pageName].style.display = 'block';
    }

    // 更新导航栏活动状态（只在主页面时更新）
    const mainPages = ['home', 'about', 'project', 'contact'];
    if (mainPages.includes(pageName)) {
        navItems.forEach(item => {
            if (item.getAttribute('data-page') === pageName) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    } else if (pageName === 'hipong' || pageName === 'meowtrack' || pageName === 'emotriend') {
        // 如果是项目详情页，保持 Project 为激活状态
        navItems.forEach(item => {
            if (item.getAttribute('data-page') === 'project') {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }

    // 更新URL hash
    window.location.hash = pageName;
}

// 处理浏览器前进后退
window.addEventListener('hashchange', () => {
    const hash = window.location.hash.slice(1) || 'home';
    navigateToPage(hash);
});

// 初始化页面
const initialHash = window.location.hash.slice(1) || 'home';
navigateToPage(initialHash);

// 项目卡片点击事件
document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card-large');
    projectCards.forEach(card => {
        card.addEventListener('click', (e) => {
            const projectName = card.getAttribute('data-project');
            navigateToPage(projectName);
        });
    });

    // 分类筛选按钮
    const filterButtons = document.querySelectorAll('.filter-btn');
    const softwareSection = document.getElementById('softwareSection');
    const industrialSection = document.getElementById('industrialSection');
    const photoSection = document.getElementById('photoSection');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            if (softwareSection && industrialSection && photoSection) {
                if (filter === 'software') {
                    softwareSection.style.display = 'block';
                    industrialSection.style.display = 'none';
                    photoSection.style.display = 'none';
                } else if (filter === 'industrial') {
                    softwareSection.style.display = 'none';
                    industrialSection.style.display = 'block';
                    photoSection.style.display = 'none';
                } else if (filter === 'photo') {
                    softwareSection.style.display = 'none';
                    industrialSection.style.display = 'none';
                    photoSection.style.display = 'block';
                } else {
                    // Painting / Others：下方保持纯黑背景
                    softwareSection.style.display = 'none';
                    industrialSection.style.display = 'none';
                    photoSection.style.display = 'none';
                }
            }
        });
    });

    // H!PONG 文档弹窗交互
    const hipongDocTrigger = document.getElementById('hipongDocTrigger');
    const hipongDocModal = document.getElementById('hipongDocModal');
    const hipongDocOverlay = document.getElementById('hipongDocOverlay');
    const hipongDocClose = document.getElementById('hipongDocClose');

    function closeHipongDocModal() {
        if (hipongDocModal) {
            hipongDocModal.style.display = 'none';
        }
    }

    if (hipongDocTrigger && hipongDocModal) {
        hipongDocTrigger.addEventListener('click', () => {
            hipongDocModal.style.display = 'block';
        });
    }

    if (hipongDocOverlay) {
        hipongDocOverlay.addEventListener('click', closeHipongDocModal);
    }

    if (hipongDocClose) {
        hipongDocClose.addEventListener('click', closeHipongDocModal);
    }

    // MeowTrack 文档弹窗交互
    const meowDocTrigger = document.getElementById('meowDocTrigger');
    const meowDocModal = document.getElementById('meowDocModal');
    const meowDocOverlay = document.getElementById('meowDocOverlay');
    const meowDocClose = document.getElementById('meowDocClose');

    function closeMeowDocModal() {
        if (meowDocModal) {
            meowDocModal.style.display = 'none';
        }
    }

    if (meowDocTrigger && meowDocModal) {
        meowDocTrigger.addEventListener('click', () => {
            meowDocModal.style.display = 'block';
        });
    }

    if (meowDocOverlay) {
        meowDocOverlay.addEventListener('click', closeMeowDocModal);
    }

    if (meowDocClose) {
        meowDocClose.addEventListener('click', closeMeowDocModal);
    }

    // Emotriend 文档弹窗交互
    const emotDocTrigger = document.getElementById('emotDocTrigger');
    const emotDocModal = document.getElementById('emotDocModal');
    const emotDocOverlay = document.getElementById('emotDocOverlay');
    const emotDocClose = document.getElementById('emotDocClose');

    function closeEmotDocModal() {
        if (emotDocModal) {
            emotDocModal.style.display = 'none';
        }
    }

    if (emotDocTrigger && emotDocModal) {
        emotDocTrigger.addEventListener('click', () => {
            emotDocModal.style.display = 'block';
        });
    }

    if (emotDocOverlay) {
        emotDocOverlay.addEventListener('click', closeEmotDocModal);
    }

    if (emotDocClose) {
        emotDocClose.addEventListener('click', closeEmotDocModal);
    }

    // Emotriend 顶部多手机轮播
    initEmotriendCarousel();

    // Photography Works 图片大图预览
    initPhotoGallery();

    // Contact 页面交互
    initContactSection();
});

// Emotriend 轮播逻辑
function initEmotriendCarousel() {
    const container = document.getElementById('emotriendCarousel');
    const dotsContainer = document.getElementById('emotriendDots');

    if (!container || !dotsContainer) return;

    const slides = Array.from(container.querySelectorAll('.emotriend-phone-slide'));
    if (slides.length === 0) return;

    let currentIndex = 0;

    // 创建小点
    slides.forEach((_, index) => {
        const dot = document.createElement('button');
        dot.className = 'emotriend-dot';
        dot.setAttribute('aria-label', `Go to slide ${index + 1}`);
        dotsContainer.appendChild(dot);
    });

    const dots = Array.from(dotsContainer.querySelectorAll('.emotriend-dot'));

    function updateSlides() {
        slides.forEach((slide, index) => {
            slide.classList.toggle('active', index === currentIndex);
        });
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    // 绑定点击事件：点击图片或小点，切换当前高亮图片
    slides.forEach((slide, index) => {
        slide.addEventListener('click', () => {
            currentIndex = index;
            updateSlides();
        });
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateSlides();
        });
    });

    // 初始状态：第一张高亮
    updateSlides();
}

// Photography Works 图片预览
function initPhotoGallery() {
    const photoItems = document.querySelectorAll('.photo-item');
    const modal = document.getElementById('photoModal');
    const modalOverlay = document.getElementById('photoModalOverlay');
    const modalClose = document.getElementById('photoModalClose');
    const modalImg = document.getElementById('photoModalImg');

    if (!photoItems || !modal || !modalOverlay || !modalClose || !modalImg) return;

    function closeModal() {
        modal.style.display = 'none';
    }

    photoItems.forEach((img) => {
        // 单击选中效果
        img.addEventListener('click', () => {
            photoItems.forEach(i => i.classList.remove('selected'));
            img.classList.add('selected');
        });

        // 双击查看大图
        img.addEventListener('dblclick', () => {
            const src = img.getAttribute('src');
            modalImg.setAttribute('src', src);
            modal.style.display = 'block';
        });
    });

    modalOverlay.addEventListener('click', closeModal);
    modalClose.addEventListener('click', closeModal);
}

// Contact 页面交互
function initContactSection() {
    const douyinBtn = document.getElementById('socialDouyin');
    const weiboBtn = document.getElementById('socialWeibo');
    const xhsBtn = document.getElementById('socialXhs');

    const douyinModal = document.getElementById('douyinModal');
    const douyinOverlay = document.getElementById('douyinModalOverlay');
    const douyinClose = document.getElementById('douyinModalClose');

    if (douyinBtn && douyinModal && douyinOverlay && douyinClose) {
        const closeDouyin = () => {
            douyinModal.style.display = 'none';
        };

        douyinBtn.addEventListener('click', () => {
            douyinModal.style.display = 'block';
        });

        douyinOverlay.addEventListener('click', closeDouyin);
        douyinClose.addEventListener('click', closeDouyin);
    }

    if (weiboBtn) {
        weiboBtn.addEventListener('click', () => {
            window.open('https://weibo.com/u/6616710518', '_blank');
        });
    }

    if (xhsBtn) {
        xhsBtn.addEventListener('click', () => {
            window.open('https://xhslink.com/m/39pqfUvi7Ru', '_blank');
        });
    }
}

// 图片轮播功能
class ImageCarousel {
    constructor() {
        this.slides = [];
        this.currentIndex = 0;
        this.interval = null;
        this.carouselContainer = document.getElementById('carouselSlides');
        this.imageFolder = 'carousel-images';
        this.maxImages = 5;
        this.hasRendered = false;
        this.loadImages();
    }

    // 从本地文件夹加载图片
    loadImages() {
        // 直接指定图片文件名列表
        const imageFiles = [
            '小河直街-4.jpg',
            '微信图片_20250924133313_483_1.jpg',
            '西湖-13 1.png',
            '风景调色 (5 - 9).png',
            '风景调色 (8 - 9).png'
        ];
        
        const loadedImages = [];
        let loadedCount = 0;
        const totalImages = imageFiles.length;
        const self = this;

        // 加载所有图片
        imageFiles.forEach((filename, index) => {
            const imagePath = `${this.imageFolder}/${filename}`;
            const img = new Image();
            
            img.onload = () => {
                loadedImages[index] = imagePath;
                loadedCount++;
                
                // 当所有图片加载完成后，渲染轮播
                if (loadedCount >= totalImages) {
                    // 过滤掉加载失败的图片
                    self.slides = loadedImages.filter(img => img !== undefined);
                    self.renderSlides();
                    if (self.slides.length > 0) {
                        self.startCarousel();
                    }
                }
            };
            
            img.onerror = () => {
                console.warn(`图片加载失败: ${imagePath}`);
                loadedCount++;
                
                // 当所有图片检查完成后，渲染轮播
                if (loadedCount >= totalImages) {
                    self.slides = loadedImages.filter(img => img !== undefined);
                    self.renderSlides();
                    if (self.slides.length > 0) {
                        self.startCarousel();
                    }
                }
            };
            
            img.src = imagePath;
        });
    }

    // 渲染轮播图片
    renderSlides() {
        this.carouselContainer.innerHTML = '';
        
        if (this.slides.length === 0) {
            // 如果没有图片，显示默认背景
            const defaultSlide = document.createElement('div');
            defaultSlide.className = 'carousel-slide active';
            defaultSlide.style.backgroundImage = 'url("assets/default-bg.jpg")';
            defaultSlide.style.backgroundSize = 'cover';
            defaultSlide.style.backgroundPosition = 'center';
            this.carouselContainer.appendChild(defaultSlide);
            return;
        }

        this.slides.forEach((imagePath, index) => {
            const slide = document.createElement('img');
            slide.className = 'carousel-slide';
            slide.src = imagePath;
            slide.alt = `Slide ${index + 1}`;
            slide.onerror = () => {
                console.warn(`图片加载失败: ${imagePath}`);
            };
            if (index === this.currentIndex) {
                slide.classList.add('active');
            }
            this.carouselContainer.appendChild(slide);
        });
    }

    // 切换到下一张图片
    nextSlide() {
        if (this.slides.length === 0 || this.slides.length === 1) return;
        
        const slides = this.carouselContainer.querySelectorAll('.carousel-slide');
        if (slides.length === 0) return;
        
        slides[this.currentIndex].classList.remove('active');
        
        this.currentIndex = (this.currentIndex + 1) % this.slides.length;
        
        slides[this.currentIndex].classList.add('active');
    }

    // 开始自动轮播
    startCarousel() {
        if (this.interval) {
            clearInterval(this.interval);
        }
        
        // 如果只有一张图片，不需要轮播
        if (this.slides.length <= 1) {
            return;
        }
        
        // 每5秒切换一次
        this.interval = setInterval(() => {
            this.nextSlide();
        }, 5000);
    }

    // 停止轮播
    stopCarousel() {
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
        }
    }
}

// 初始化应用
const carousel = new ImageCarousel();
